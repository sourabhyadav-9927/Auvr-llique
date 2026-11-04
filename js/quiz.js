/**
 * Active MCQ Player Engine
 * Manages question rendering, interactive 3D flip card animations,
 * dynamic English/Hindi re-rendering on toggle, and user score recording.
 */

class QuizPlayer {
  constructor() {
    this.quizData = null;
    this.currentIndex = 0;
    this.userAnswers = [];
    this.cardFlipped = false;

    this.init();
  }

  init() {
    const rawData = localStorage.getItem('aura_active_quiz');
    if (!rawData) {
      alert(window.i18n ? window.i18n.t('no_quiz_error') : "No active quiz found.");
      window.location.href = 'index.html';
      return;
    }

    try {
      this.quizData = JSON.parse(rawData);
    } catch (e) {
      console.error("Invalid quiz data in storage:", e);
      window.location.href = 'index.html';
      return;
    }

    if (!this.quizData.questions || this.quizData.questions.length === 0) {
      window.location.href = 'index.html';
      return;
    }

    // Subscribe to language changes so quiz content dynamically translates
    if (window.i18n) {
      window.i18n.subscribe(() => {
        this.renderQuestion(false); // Re-render current question in new language without resetting flipped state
      });
    }

    // Bind next button
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.handleNext());
    }

    // Initial render
    this.renderQuestion(true);
  }

  getCurrentLanguage() {
    return window.i18n ? window.i18n.getLang() : 'en';
  }

  renderQuestion(resetFlip = true) {
    const question = this.quizData.questions[this.currentIndex];
    const total = this.quizData.questions.length;
    const lang = this.getCurrentLanguage();

    if (resetFlip) {
      this.cardFlipped = false;
      const flipCard = document.getElementById('flipCard');
      if (flipCard) flipCard.classList.remove('flipped');
    }

    // Header updates
    const topicBadge = document.getElementById('quizTopicBadge');
    if (topicBadge) topicBadge.textContent = this.quizData.topic;

    const progressText = document.getElementById('quizProgressText');
    const badgeKey = window.i18n ? window.i18n.t('quiz_badge') : 'Question';
    const ofKey = window.i18n ? window.i18n.t('quiz_of') : 'of';
    if (progressText) {
      progressText.textContent = `${badgeKey} ${this.currentIndex + 1} ${ofKey} ${total}`;
    }

    const progressFill = document.getElementById('progressBarFill');
    if (progressFill) {
      const pct = ((this.currentIndex + (this.cardFlipped ? 1 : 0.4)) / total) * 100;
      progressFill.style.width = `${Math.min(pct, 100)}%`;
    }

    // Front Face Content
    const qBadge = document.getElementById('qBadge');
    if (qBadge) qBadge.textContent = `${badgeKey} ${this.currentIndex + 1}`;

    const qText = document.getElementById('questionText');
    if (qText) {
      qText.textContent = lang === 'hi' ? question.question_hi : question.question_en;
    }

    // Options Rendering
    const optionsGrid = document.getElementById('optionsGrid');
    if (optionsGrid) {
      optionsGrid.innerHTML = '';
      const options = lang === 'hi' ? question.options_hi : question.options_en;
      const letters = ['A', 'B', 'C', 'D'];

      options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.type = 'button';
        btn.setAttribute('data-index', idx);
        btn.disabled = this.cardFlipped;

        // If card was already flipped (e.g. user toggled lang while inspecting explanation)
        if (this.cardFlipped) {
          const userChoice = this.userAnswers[this.currentIndex];
          if (idx === question.correct_index) {
            btn.style.borderColor = 'var(--success)';
            btn.style.background = 'rgba(16, 185, 129, 0.2)';
          } else if (idx === userChoice && userChoice !== question.correct_index) {
            btn.style.borderColor = 'var(--error)';
            btn.style.background = 'rgba(239, 68, 68, 0.2)';
          }
        }

        btn.innerHTML = `
          <span class="option-key">${letters[idx]}</span>
          <span class="option-text">${optText}</span>
        `;

        btn.addEventListener('click', () => this.handleOptionSelect(idx));
        optionsGrid.appendChild(btn);
      });
    }

    // Back Face Content (if flipped or re-rendering while flipped)
    if (this.cardFlipped) {
      this.renderBackFace(question, lang);
    }
  }

  handleOptionSelect(selectedIndex) {
    if (this.cardFlipped) return;
    this.cardFlipped = true;

    const question = this.quizData.questions[this.currentIndex];
    const isCorrect = selectedIndex === question.correct_index;

    // Record answer
    this.userAnswers[this.currentIndex] = selectedIndex;

    const lang = this.getCurrentLanguage();
    this.renderBackFace(question, lang, isCorrect);

    // Disable all options on front face
    const optionsGrid = document.getElementById('optionsGrid');
    if (optionsGrid) {
      const buttons = optionsGrid.querySelectorAll('.option-btn');
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === question.correct_index) {
          btn.style.borderColor = 'var(--success)';
          btn.style.background = 'rgba(16, 185, 129, 0.2)';
        } else if (idx === selectedIndex) {
          btn.style.borderColor = 'var(--error)';
          btn.style.background = 'rgba(239, 68, 68, 0.2)';
        }
      });
    }

    // Trigger 3D flip animation
    const flipCard = document.getElementById('flipCard');
    if (flipCard) {
      // Clear inline tilt styles so CSS rotateY(180deg) transition is clean
      flipCard.style.transform = '';
      flipCard.classList.add('flipped');
    }

    // Update progress bar
    const progressFill = document.getElementById('progressBarFill');
    if (progressFill) {
      const total = this.quizData.questions.length;
      const pct = ((this.currentIndex + 1) / total) * 100;
      progressFill.style.width = `${pct}%`;
    }
  }

  renderBackFace(question, lang, isCorrect) {
    if (isCorrect === undefined) {
      isCorrect = this.userAnswers[this.currentIndex] === question.correct_index;
    }

    const statusBadge = document.getElementById('statusBadge');
    if (statusBadge) {
      statusBadge.className = `status-badge ${isCorrect ? 'correct' : 'incorrect'}`;
      const statusIcon = isCorrect ? '✓' : '✗';
      const statusText = isCorrect
        ? (window.i18n ? window.i18n.t('status_correct') : 'Correct Answer!')
        : (window.i18n ? window.i18n.t('status_incorrect') : 'Incorrect Answer');
      statusBadge.innerHTML = `<span>${statusIcon}</span> <span>${statusText}</span>`;
    }

    const expText = document.getElementById('explanationText');
    if (expText) {
      expText.textContent = lang === 'hi' ? question.explanation_hi : question.explanation_en;
    }

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
      const isLast = this.currentIndex === this.quizData.questions.length - 1;
      const btnText = isLast
        ? (window.i18n ? window.i18n.t('btn_view_results') : 'View Final Results →')
        : (window.i18n ? window.i18n.t('btn_next_question') : 'Next Question →');
      nextBtn.innerHTML = `<span>${btnText}</span>`;
    }
  }

  handleNext() {
    if (!this.cardFlipped) return;

    if (this.currentIndex < this.quizData.questions.length - 1) {
      this.currentIndex++;
      this.renderQuestion(true);
    } else {
      // Quiz complete: calculate final results and navigate
      this.finishQuiz();
    }
  }

  finishQuiz() {
    const total = this.quizData.questions.length;
    let correctCount = 0;

    const breakdown = this.quizData.questions.map((q, idx) => {
      const userAnsIdx = this.userAnswers[idx];
      const isRight = userAnsIdx === q.correct_index;
      if (isRight) correctCount++;

      return {
        question_id: q.id,
        question_en: q.question_en,
        question_hi: q.question_hi,
        options_en: q.options_en,
        options_hi: q.options_hi,
        user_index: userAnsIdx,
        correct_index: q.correct_index,
        is_correct: isRight,
        explanation_en: q.explanation_en,
        explanation_hi: q.explanation_hi
      };
    });

    const scorePct = Math.round((correctCount / total) * 100);

    const quizSummary = {
      topic: this.quizData.topic,
      total_questions: total,
      correct_count: correctCount,
      score_percentage: scorePct,
      breakdown: breakdown,
      completed_at: new Date().toISOString()
    };

    localStorage.setItem('aura_quiz_results', JSON.stringify(quizSummary));
    window.location.href = 'results.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.quizPlayer = new QuizPlayer();
});
