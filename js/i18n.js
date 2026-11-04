/**
 * Custom JavaScript i18n Translation Dictionary Supporting English and Hindi.
 * Dynamically updates all text content in the DOM without reloading the page.
 */

const translations = {
  en: {
    // Brand & Common
    brand_title: "AuraLearn 3D",
    lang_en: "EN",
    lang_hi: "हिंदी",
    footer_text: "© 2025 AuraLearn 3D EdTech. Interactive immersive learning platform.",

    // Landing / Setup
    hero_badge: "✨ Next-Gen AI EdTech Platform",
    hero_heading_1: "Master Any Topic with",
    hero_heading_2: "Interactive 3D Quizzes",
    hero_subtitle: "Experience adaptive multi-sensory learning powered by 3D spatial transformations, real-time mastery analytics, and instant bilingual explanations.",
    feature_1: "Spatial 3D Cards",
    feature_2: "Instant Detailed Analysis",
    feature_3: "Mastery Tracking",

    setup_title: "Generate Your Quiz",
    setup_subtitle: "Choose your subject & challenge depth to begin",
    topic_label: "Topic / Subject",
    topic_placeholder: "e.g., Quantum Physics, World History, Python...",
    preset_quantum: "Quantum Physics",
    preset_ai: "Artificial Intelligence",
    preset_history: "Ancient Civilizations",
    preset_space: "Space Exploration",
    count_label: "Number of Questions",
    count_3: "3 Questions (Quick Sprint)",
    count_5: "5 Questions (Standard Mastery)",
    count_10: "10 Questions (Deep Dive)",
    btn_generate: "Generate 3D Quiz",

    // Loader
    loader_title: "Synthesizing Interactive Quiz...",
    loader_subtitle: "Generating adaptive questions, 3D assets & bilingual feedback",

    // Quiz Player
    quiz_badge: "Question",
    quiz_of: "of",
    btn_flip_hint: "Select an option to reveal the 3D explanation",
    status_correct: "Correct Answer!",
    status_incorrect: "Incorrect Answer",
    explanation_title: "Detailed Concept Breakdown",
    btn_next_question: "Next Question →",
    btn_view_results: "View Final Results →",
    no_quiz_error: "No active quiz found. Returning to setup...",

    // Results Page
    results_hero_title: "Quiz Completed!",
    results_hero_subtitle: "Here is your mastery evaluation and performance breakdown.",
    score_percentage_label: "Score",
    mastery_expert: "Mastery: Expert",
    mastery_proficient: "Mastery: Proficient",
    mastery_developing: "Mastery: Developing",
    stat_total_questions: "Total Questions",
    stat_correct_answers: "Correct Answers",
    stat_accuracy: "Accuracy Rate",

    table_heading: "Question Review & Detailed Explanations",
    table_col_num: "#",
    table_col_question: "Question",
    table_col_your_answer: "Your Answer",
    table_col_correct_answer: "Correct Answer",
    table_col_status: "Status",
    table_col_explanation: "Key Insight",
    status_label_correct: "Correct",
    status_label_wrong: "Wrong",

    btn_restart_quiz: "Restart & Try Another Topic",
  },
  hi: {
    // Brand & Common
    brand_title: "ऑरा-लर्न 3D",
    lang_en: "EN",
    lang_hi: "हिंदी",
    footer_text: "© 2025 ऑरा-लर्न 3D एड-टेक। इंटरैक्टिव इमर्सिव लर्निंग प्लेटफ़ॉर्म।",

    // Landing / Setup
    hero_badge: "✨ अगली पीढ़ी का AI एड-टेक मंच",
    hero_heading_1: "किसी भी विषय में महारत हासिल करें",
    hero_heading_2: "इंटरैक्टिव 3D क्विज़ के साथ",
    hero_subtitle: "3D स्थानिक रूपांतरण, वास्तविक समय मास्टरी विश्लेषण और तुरंत द्विभाषी व्याख्याओं के साथ अनुकूलित बहु-संवेदी शिक्षण का अनुभव करें।",
    feature_1: "स्थानिक 3D कार्ड्स",
    feature_2: "तुरंत विस्तृत विश्लेषण",
    feature_3: "मास्टरी ट्रैकिंग",

    setup_title: "अपनी क्विज़ तैयार करें",
    setup_subtitle: "शुरू करने के लिए अपना विषय और प्रश्नों की संख्या चुनें",
    topic_label: "विषय / टॉपिक",
    topic_placeholder: "उदा. क्वांटम भौतिकी, विश्व इतिहास, पायथन...",
    preset_quantum: "क्वांटम भौतिकी",
    preset_ai: "आर्टिफिशियल इंटेलिजेंस",
    preset_history: "प्राचीन सभ्यताएं",
    preset_space: "अंतरिक्ष अन्वेषण",
    count_label: "प्रश्नों की संख्या",
    count_3: "3 प्रश्न (त्वरित अभ्यास)",
    count_5: "5 प्रश्न (मानक मास्टरी)",
    count_10: "10 प्रश्न (गहन अध्ययन)",
    btn_generate: "3D क्विज़ शुरू करें",

    // Loader
    loader_title: "इंटरैक्टिव क्विज़ तैयार की जा रही है...",
    loader_subtitle: "अनुकूलित प्रश्न, 3D सामग्री और विस्तृत व्याख्याएं संकलित हो रही हैं",

    // Quiz Player
    quiz_badge: "प्रश्न",
    quiz_of: "का",
    btn_flip_hint: "3D व्याख्या देखने के लिए एक विकल्प चुनें",
    status_correct: "बिल्कुल सही उत्तर!",
    status_incorrect: "गलत उत्तर",
    explanation_title: "विस्तृत अवधारणा व्याख्या",
    btn_next_question: "अगला प्रश्न →",
    btn_view_results: "अंतिम परिणाम देखें →",
    no_quiz_error: "कोई सक्रिय क्विज़ नहीं मिली। सेटअप पर वापस भेजा जा रहा है...",

    // Results Page
    results_hero_title: "क्विज़ समाप्त हुआ!",
    results_hero_subtitle: "यह रहा आपका संपूर्ण मूल्यांकन और प्रदर्शन विश्लेषण।",
    score_percentage_label: "अंक",
    mastery_expert: "मास्टरी: विशेषज्ञ",
    mastery_proficient: "मास्टरी: कुशल",
    mastery_developing: "मास्टरी: विकासशील",
    stat_total_questions: "कुल प्रश्न",
    stat_correct_answers: "सही उत्तर",
    stat_accuracy: "सटीकता दर",

    table_heading: "प्रश्न समीक्षा और विस्तृत स्पष्टीकरण",
    table_col_num: "#",
    table_col_question: "प्रश्न",
    table_col_your_answer: "आपका उत्तर",
    table_col_correct_answer: "सही उत्तर",
    table_col_status: "स्थिति",
    table_col_explanation: "मुख्य अंतर्दृष्टि",
    status_label_correct: "सही",
    status_label_wrong: "गलत",

    btn_restart_quiz: "पुनः प्रारंभ करें और नया विषय चुनें",
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('aura_lang') || 'en';
    if (!translations[this.currentLang]) {
      this.currentLang = 'en';
    }
    this.listeners = [];
  }

  getLang() {
    return this.currentLang;
  }

  t(key) {
    const dict = translations[this.currentLang] || translations.en;
    return dict[key] !== undefined ? dict[key] : (translations.en[key] || key);
  }

  setLang(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('aura_lang', lang);
    this.applyToDOM();
    this.notify();
  }

  subscribe(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback);
    }
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(this.currentLang); } catch (e) { console.error(e); }
    });
  }

  applyToDOM() {
    document.documentElement.lang = this.currentLang;

    // Update text content for elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // Update placeholders for elements with data-i18n-placeholder
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.t(key);
      if (translation) {
        el.setAttribute('placeholder', translation);
      }
    });

    // Update Language Toggle active state buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  initNavbarToggle() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== this.currentLang) {
          this.setLang(targetLang);
        }
      });
    });

    this.applyToDOM();
  }
}

// Global i18n instance & environment compatibility
if (typeof window !== 'undefined') {
  window.i18n = new I18nManager();
  document.addEventListener('DOMContentLoaded', () => {
    window.i18n.initNavbarToggle();
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, I18nManager };
}
