/**
 * Results & Mastery Breakdown Engine
 * Renders animated SVG circular score chart, performance statistics,
 * detailed answers comparison table, and glowing restart CTA.
 */

class ResultsViewer {
  constructor() {
    this.resultsData = null;
    this.init();
  }

  init() {
    const rawData = localStorage.getItem('aura_quiz_results');
    if (!rawData) {
      window.location.href = 'index.html';
      return;
    }

    try {
      this.resultsData = JSON.parse(rawData);
    } catch (e) {
      console.error("Invalid quiz results in storage:", e);
      window.location.href = 'index.html';
      return;
    }

    // Subscribe to language changes so comparison table and stats dynamically update
    if (window.i18n) {
      window.i18n.subscribe(() => {
        this.renderAll();
      });
    }

    this.renderAll();
    this.animateSvgProgress();
  }

  getCurrentLanguage() {
    return window.i18n ? window.i18n.getLang() : 'en';
  }

  renderAll() {
    const data = this.resultsData;
    const lang = this.getCurrentLanguage();

    // 1. Percentage & Mastery Badge
    const percentageVal = document.getElementById('percentageVal');
    if (percentageVal) {
      percentageVal.textContent = `${data.score_percentage}%`;
    }

    const masteryBadge = document.getElementById('masteryBadge');
    if (masteryBadge) {
      let badgeKey = 'mastery_developing';
      let badgeColor = 'var(--warning)';
      let badgeBg = 'rgba(245, 158, 11, 0.18)';

      if (data.score_percentage >= 80) {
        badgeKey = 'mastery_expert';
        badgeColor = 'var(--success)';
        badgeBg = 'rgba(16, 185, 129, 0.2)';
      } else if (data.score_percentage >= 50) {
        badgeKey = 'mastery_proficient';
        badgeColor = 'var(--accent)';
        badgeBg = 'rgba(6, 182, 212, 0.2)';
      }

      masteryBadge.textContent = window.i18n ? window.i18n.t(badgeKey) : badgeKey;
      masteryBadge.style.color = badgeColor;
      masteryBadge.style.background = badgeBg;
      masteryBadge.style.border = `1px solid ${badgeColor}`;
    }

    // 2. Statistics Grid
    const statTotal = document.getElementById('statTotal');
    if (statTotal) statTotal.textContent = data.total_questions;

    const statCorrect = document.getElementById('statCorrect');
    if (statCorrect) statCorrect.textContent = data.correct_count;

    const statAccuracy = document.getElementById('statAccuracy');
    if (statAccuracy) statAccuracy.textContent = `${data.score_percentage}%`;

    // 3. Comparison Table Body
    const tableBody = document.getElementById('comparisonTableBody');
    if (tableBody) {
      tableBody.innerHTML = '';

      data.breakdown.forEach((item, index) => {
        const tr = document.createElement('tr');

        const qText = lang === 'hi' ? item.question_hi : item.question_en;
        const opts = lang === 'hi' ? item.options_hi : item.options_en;
        const userChoiceText = item.user_index !== undefined ? opts[item.user_index] : "—";
        const correctChoiceText = opts[item.correct_index];
        const expText = lang === 'hi' ? item.explanation_hi : item.explanation_en;

        const statusClass = item.is_correct ? 'correct' : 'incorrect';
        const statusLabel = item.is_correct
          ? (window.i18n ? window.i18n.t('status_label_correct') : 'Correct')
          : (window.i18n ? window.i18n.t('status_label_wrong') : 'Wrong');
        const statusIcon = item.is_correct ? '✓' : '✗';

        tr.innerHTML = `
          <td style="font-weight: 700; color: var(--text-muted);">${index + 1}</td>
          <td style="font-weight: 600; min-width: 220px;">${qText}</td>
          <td>
            <span style="color: ${item.is_correct ? '#34d399' : '#f87171'}; font-weight: 600;">
              ${userChoiceText}
            </span>
          </td>
          <td>
            <span style="color: #34d399; font-weight: 600;">
              ${correctChoiceText}
            </span>
          </td>
          <td>
            <span class="badge-pill ${statusClass}">
              <span>${statusIcon}</span>
              <span>${statusLabel}</span>
            </span>
          </td>
          <td style="font-size: 0.88rem; color: var(--text-muted); min-width: 260px; line-height: 1.5;">
            ${expText}
          </td>
        `;
        tableBody.appendChild(tr);
      });
    }
  }

  animateSvgProgress() {
    const circle = document.getElementById('svgCircleProgress');
    if (!circle) return;

    const percentage = this.resultsData.score_percentage;
    // Allow sub-second delay for smooth mounting animation
    setTimeout(() => {
      circle.setAttribute('stroke-dasharray', `${percentage}, 100`);
    }, 150);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.resultsViewer = new ResultsViewer();

  const restartBtn = document.getElementById('restartBtn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      // Clean up session and restart
      localStorage.removeItem('aura_active_quiz');
      localStorage.removeItem('aura_quiz_results');
      window.location.href = 'index.html';
    });
  }
});
