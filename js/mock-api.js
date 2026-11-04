/**
 * Mocked FastAPI Backend: Intercepts POST requests to `/generate-quiz`.
 * Uses window.fetch proxy to deliver high-quality, topic-tailored quiz questions
 * in bilingual format with realistic network latency for the 3D spinning loader.
 */

const quizKnowledgeBase = {
  // Quantum Physics
  quantum: [
    {
      id: "q_quantum_1",
      topic: "Quantum Physics",
      question_en: "Which principle states that you cannot simultaneously measure the exact position and momentum of a subatomic particle?",
      question_hi: "कौन सा सिद्धांत कहता है कि आप किसी उप-परमाण्विक कण की सटीक स्थिति और संवेग को एक साथ नहीं माप सकते?",
      options_en: [
        "Heisenberg Uncertainty Principle",
        "Pauli Exclusion Principle",
        "Schrödinger Wave Equation",
        "Photoelectric Threshold"
      ],
      options_hi: [
        "हाइजेनबर्ग अनिश्चितता सिद्धांत",
        "पाउली अपवर्जन सिद्धांत",
        "श्रोडिंगर तरंग समीकरण",
        "प्रकाश-विद्युत सीमा"
      ],
      correct_index: 0,
      explanation_en: "Formulated by Werner Heisenberg in 1927, the Uncertainty Principle states that the product of the uncertainties in position (Δx) and momentum (Δp) is fundamentally limited by Planck's constant (h/4π).",
      explanation_hi: "1927 में वर्नर हाइजेनबर्ग द्वारा प्रतिपादित अनिश्चितता सिद्धांत बताता है कि स्थिति (Δx) और संवेग (Δp) की अनिश्चितताओं का गुणनफल प्लांक के स्थिरांक (h/4π) से सीमित होता है।"
    },
    {
      id: "q_quantum_2",
      topic: "Quantum Physics",
      question_en: "What phenomenon refers to quantum particles remaining interconnected such that actions on one instantly affect the other, regardless of distance?",
      question_hi: "उस घटना को क्या कहा जाता है जिसमें क्वांटम कण आपस में जुड़े रहते हैं ताकि एक पर की गई क्रिया दूरी की परवाह किए बिना दूसरे को तुरंत प्रभावित करती है?",
      options_en: [
        "Quantum Superposition",
        "Quantum Entanglement",
        "Quantum Tunneling",
        "Wavefunction Collapse"
      ],
      options_hi: [
        "क्वांटम सुपरपोजिशन",
        "क्वांटम उलझाव (एंटैंगलमेंट)",
        "क्वांटम टनलिंग",
        "वेवफंक्शन पतन"
      ],
      correct_index: 1,
      explanation_en: "Quantum Entanglement was famously described by Einstein as 'spooky action at a distance'. Measurements on entangled pairs exhibit correlated states instantaneously.",
      explanation_hi: "क्वांटम उलझाव को आइंस्टीन ने 'दूरी पर भूतिया क्रिया' कहा था। आपस में उलझे हुए कणों के जोड़े तुरंत परस्पर सहसंबद्ध स्थिति प्रदर्शित करते हैं।"
    },
    {
      id: "q_quantum_3",
      topic: "Quantum Physics",
      question_en: "What hypothetical thought experiment illustrates the paradox of quantum superposition at macroscopic scales?",
      question_hi: "कौन सा काल्पनिक विचार प्रयोग मैक्रोस्कोपिक पैमाने पर क्वांटम सुपरपोजिशन के विरोधाभास को दर्शाता है?",
      options_en: [
        "Maxwell's Demon",
        "Twin Paradox",
        "Schrödinger's Cat",
        "Feynman Double Slit"
      ],
      options_hi: [
        "मैक्सवेल का दानव",
        "ट्विन विरोधाभास",
        "श्रोडिंगर की बिल्ली",
        "फेनमैन डबल स्लिट"
      ],
      correct_index: 2,
      explanation_en: "Erwin Schrödinger proposed the thought experiment in 1935 involving a cat that is simultaneously alive and dead until observed, highlighting the Copenhagen interpretation's paradox.",
      explanation_hi: "इरविन श्रोडिंगर ने 1935 में यह विचार प्रयोग प्रस्तावित किया था जिसमें एक बिल्ली देखे जाने तक एक साथ जीवित और मृत अवस्था में होती है।"
    },
    {
      id: "q_quantum_4",
      topic: "Quantum Physics",
      question_en: "What fundamental property allows electrons to pass through energy barriers that classical mechanics deems impenetrable?",
      question_hi: "कौन सा मूलभूत गुण इलेक्ट्रॉनों को उन ऊर्जा बाधाओं से गुजरने की अनुमति देता है जिन्हें शास्त्रीय भौतिकी अभेद्य मानती है?",
      options_en: [
        "Quantum Tunneling",
        "Rayleigh Scattering",
        "Compton Effect",
        "Zeeman Splitting"
      ],
      options_hi: [
        "क्वांटम टनलिंग",
        "रेले प्रकीर्णन",
        "कॉम्पटन प्रभाव",
        "ज़ीमन विभाजन"
      ],
      correct_index: 0,
      explanation_en: "Quantum Tunneling occurs due to the wave nature of matter, where a particle's wave function has a non-zero amplitude beyond the potential barrier, allowing it to penetrate.",
      explanation_hi: "क्वांटम टनलिंग पदार्थ की तरंग प्रकृति के कारण होती है, जहां कण के तरंग कार्य का आयाम संभावित अवरोध के पार भी शून्य नहीं होता।"
    },
    {
      id: "q_quantum_5",
      topic: "Quantum Physics",
      question_en: "What is the primary unit of quantum information analogous to the classical bit?",
      question_hi: "शास्त्रीय बिट के समान क्वांटम सूचना की प्राथमिक इकाई क्या है?",
      options_en: [
        "Qudit",
        "Qubit",
        "Quantum Gate",
        "Photon Packet"
      ],
      options_hi: [
        "क्विडिट",
        "क्यूबिट (Qubit)",
        "क्वांटम गेट",
        "फोटॉन पैकेट"
      ],
      correct_index: 1,
      explanation_en: "A Qubit (quantum bit) is the basic unit of quantum computing, capable of representing |0>, |1>, or a linear superposition of both states simultaneously.",
      explanation_hi: "क्यूबिट क्वांटम कंप्यूटिंग की बुनियादी इकाई है, जो एक साथ |0>, |1>, या दोनों अवस्थाओं के रैखिक सुपरपोजिशन का प्रतिनिधित्व कर सकती है।"
    }
  ],

  // Artificial Intelligence
  ai: [
    {
      id: "q_ai_1",
      topic: "Artificial Intelligence",
      question_en: "Which deep learning architecture introduced the multi-head self-attention mechanism in the 'Attention Is All You Need' paper (2017)?",
      question_hi: "2017 के प्रसिद्ध शोधपत्र 'Attention Is All You Need' में किस डीप लर्निंग आर्किटेक्चर ने मल्टी-हेड सेल्फ-अटेंशन पेश किया?",
      options_en: [
        "Convolutional Neural Network (CNN)",
        "Transformer",
        "Recurrent Neural Network (RNN)",
        "Generative Adversarial Network (GAN)"
      ],
      options_hi: [
        "कन्वोल्यूशनल न्यूरल नेटवर्क (CNN)",
        "ट्रांसफॉर्मर (Transformer)",
        "रिकरेंट न्यूरल नेटवर्क (RNN)",
        "जेनरेटिव एडवरसैरियल नेटवर्क (GAN)"
      ],
      correct_index: 1,
      explanation_en: "The Transformer architecture replaced recurrence and convolutions entirely with self-attention mechanisms, powering modern Large Language Models (LLMs) like GPT and Claude.",
      explanation_hi: "ट्रांसफॉर्मर आर्किटेक्चर ने पुनरावृत्ति (रैकरेंस) को पूरी तरह से सेल्फ-अटेंशन से बदल दिया, जो आज के सभी आधुनिक एलएलएम (LLMs) की नींव है।"
    },
    {
      id: "q_ai_2",
      topic: "Artificial Intelligence",
      question_en: "In reinforcement learning, what parameter balances exploration of new actions versus exploitation of known high-reward actions?",
      question_hi: "रीइन्फोर्समेंट लर्निंग में, कौन सा पैरामीटर नई कार्रवाइयों की खोज (Exploration) और ज्ञात उच्च-इनाम वाली कार्रवाइयों के उपयोग (Exploitation) के बीच संतुलन बनाता है?",
      options_en: [
        "Learning Rate (Alpha)",
        "Epsilon (ε) in Epsilon-Greedy",
        "Momentum Beta",
        "L2 Regularization"
      ],
      options_hi: [
        "लर्निंग रेट (अल्फा)",
        "एप्सिलॉन-ग्रीडी में एप्सिलॉन (ε)",
        "मोमेंटम बीटा",
        "L2 नियमितीकरण"
      ],
      correct_index: 1,
      explanation_en: "The ε-greedy algorithm uses epsilon (ε) to choose a completely random action with probability ε (exploration) and the best known action with probability 1 - ε (exploitation).",
      explanation_hi: "ε-ग्रीडी एल्गोरिदम में एप्सिलॉन नई संभावनाओं की खोज (एक्सप्लोरेशन) और ज्ञात सर्वोत्तम क्रिया के उपयोग (एक्सप्लॉयटेशन) में संतुलन स्थापित करता है।"
    },
    {
      id: "q_ai_3",
      topic: "Artificial Intelligence",
      question_en: "Which activation function is most widely used in hidden layers of modern neural networks to prevent vanishing gradients while retaining computational efficiency?",
      question_hi: "आधुनिक न्यूरल नेटवर्क के हिडन लेयर्स में वैनिशिंग ग्रेडिएंट्स को रोकने और गति बढ़ाने के लिए सबसे लोकप्रिय एक्टिवेशन फ़ंक्शन कौन सा है?",
      options_en: [
        "Sigmoid",
        "Tanh",
        "Rectified Linear Unit (ReLU)",
        "Softmax"
      ],
      options_hi: [
        "सिग्मॉइड",
        "टैन्ह (Tanh)",
        "रेक्टिफाइड लीनियर यूनिट (ReLU)",
        "सॉफ्टमैक्स"
      ],
      correct_index: 2,
      explanation_en: "ReLU (f(x) = max(0, x)) does not saturate for positive values, mitigating vanishing gradients and computing extremely fast via simple thresholding.",
      explanation_hi: "ReLU (f(x) = max(0, x)) धनात्मक मानों के लिए संतृप्त नहीं होता, जिससे वैनिशिंग ग्रेडिएंट की समस्या दूर होती है और गणना बहुत तीव्र होती है।"
    },
    {
      id: "q_ai_4",
      topic: "Artificial Intelligence",
      question_en: "What technique is used during training to randomly deactivate neurons to reduce overfitting?",
      question_hi: "ओवरफिटिंग को कम करने के लिए प्रशिक्षण के दौरान न्यूरॉन्स को यादृच्छिक रूप से निष्क्रिय करने वाली तकनीक क्या कहलाती है?",
      options_en: [
        "Dropout",
        "Batch Normalization",
        "Data Augmentation",
        "Gradient Clipping"
      ],
      options_hi: [
        "ड्रॉपआउट (Dropout)",
        "बैच सामान्यीकरण",
        "डेटा ऑग्मेंटेशन",
        "ग्रेडिएंट क्लिपिंग"
      ],
      correct_index: 0,
      explanation_en: "Dropout temporarily drops randomly selected units and their incoming/outgoing connections during each forward/backward pass to prevent co-adaptation of features.",
      explanation_hi: "ड्रॉपआउट प्रशिक्षण के दौरान यादृच्छिक रूप से कुछ न्यूरॉन्स को बंद कर देता है जिससे मॉडल केवल कुछ विशिष्ट विशेषताओं पर अत्यधिक निर्भर न हो।"
    },
    {
      id: "q_ai_5",
      topic: "Artificial Intelligence",
      question_en: "What is the primary loss function used when training multiclass classification neural networks?",
      question_hi: "मल्टीक्लास वर्गीकरण न्यूरल नेटवर्क को प्रशिक्षित करने में प्राथमिक लॉस फ़ंक्शन कौन सा उपयोग किया जाता है?",
      options_en: [
        "Mean Squared Error (MSE)",
        "Categorical Cross-Entropy",
        "Hinge Loss",
        "Cosine Similarity Loss"
      ],
      options_hi: [
        "मीन स्क्वेर्ड एरर (MSE)",
        "कैटेगरीकल क्रॉस-एंट्रॉपी",
        "हिंज लॉस",
        "कोसाइन सिमिलैरिटी लॉस"
      ],
      correct_index: 1,
      explanation_en: "Categorical Cross-Entropy measures the divergence between the predicted probability distribution (via Softmax) and the true one-hot encoded ground truth.",
      explanation_hi: "कैटेगरीकल क्रॉस-एंट्रॉपी सॉफ्टमैक्स द्वारा अनुमानित संभावना और वास्तविक उत्तर के बीच के अंतर को सटीक रूप से मापती है।"
    }
  ],

  // History & Civilizations
  history: [
    {
      id: "q_hist_1",
      topic: "Ancient Civilizations",
      question_en: "Which Mesopotamian civilization created the world's earliest known written law code, engraved on an eight-foot basalt stele?",
      question_hi: "किस मेसोपोटामियाई सभ्यता ने दुनिया की सबसे पहली ज्ञात लिखित कानून संहिता बनाई, जो आठ फुट ऊंचे बेसाल्ट पत्थर पर उकेरी गई थी?",
      options_en: [
        "Babylonian (Code of Hammurabi)",
        "Sumerian (Epic of Gilgamesh)",
        "Assyrian (Library of Ashurbanipal)",
        "Akkadian (Sargon Rule)"
      ],
      options_hi: [
        "बेबीलोनियन (हम्मुराबी की संहिता)",
        "सुमेरियन (गिल्गामेश महाकाव्य)",
        "असीरियन (अशूरबनिपाल पुस्तकालय)",
        "अक्कादियन (सरगोन शासन)"
      ],
      correct_index: 0,
      explanation_en: "The Code of Hammurabi (c. 1754 BCE) was enacted by the sixth Babylonian king, Hammurabi, consisting of 282 laws establishing the concept of lex talionis (an eye for an eye).",
      explanation_hi: "हम्मुराबी की संहिता (लगभग 1754 ईसा पूर्व) बेबीलोन के राजा हम्मुराबी द्वारा बनाई गई थी, जिसमें 282 कानून शामिल थे।"
    },
    {
      id: "q_hist_2",
      topic: "Ancient Civilizations",
      question_en: "The ancient city of Mohenjo-daro and Harappa are renowned for which advanced urban engineering achievement?",
      question_hi: "मोहनजोदड़ो और हड़प्पा के प्राचीन शहर किस उन्नत शहरी इंजीनियरिंग उपलब्धि के लिए प्रसिद्ध हैं?",
      options_en: [
        "Underground drainage & grid town planning",
        "Massive step pyramids & sky observatories",
        "Colossal defensive aqueducts",
        "Subterranean volcanic furnaces"
      ],
      options_hi: [
        "भूमिगत जल निकासी और ग्रिड नगर नियोजन",
        "विशाल पिरामिड और वेधशालाएं",
        "विशाल जलसेतु (एक्वाडक्ट्स)",
        "भूमिगत ज्वालामुखीय भट्टियां"
      ],
      correct_index: 0,
      explanation_en: "The Indus Valley Civilization featured standardized baked brick construction, meticulous grid streets, covered wastewater drains, and the Great Bath.",
      explanation_hi: "सिंधु घाटी सभ्यता अपनी पकी हुई ईंटों, ग्रिड प्रणाली वाले चौड़े रास्तों और बेहतरीन ढकी हुई जल निकासी प्रणाली के लिए विश्वविख्यात है।"
    },
    {
      id: "q_hist_3",
      topic: "Ancient Civilizations",
      question_en: "What famous battle in 331 BCE saw Alexander the Great decisively defeat King Darius III of the Achaemenid Persian Empire?",
      question_hi: "331 ईसा पूर्व में किस प्रसिद्ध युद्ध में सिकंदर महान ने हखामनी फ़ारसी साम्राज्य के राजा डेरियस III को निर्णायक रूप से हराया था?",
      options_en: [
        "Battle of Gaugamela",
        "Battle of Thermopylae",
        "Battle of Marathon",
        "Battle of Cannae"
      ],
      options_hi: [
        "गौगामेला का युद्ध",
        "थर्मोपाइली का युद्ध",
        "मैराथन का युद्ध",
        "कैनै का युद्ध"
      ],
      correct_index: 0,
      explanation_en: "At Gaugamela, Alexander utilized an oblique phalanx formation and decisive cavalry wedge charge to collapse the Persian center, leading to the fall of the Persian Empire.",
      explanation_hi: "गौगामेला के युद्ध में सिकंदर ने अद्वितीय रणनीति और घुड़सवार सेना के आक्रमण से फ़ारसी सेना को परास्त कर इतिहास बदल दिया।"
    },
    {
      id: "q_hist_4",
      topic: "Ancient Civilizations",
      question_en: "The Rosetta Stone proved crucial for modern historians because it contained the same decree written in Ancient Greek, Demotic, and what other script?",
      question_hi: "रोसेटा स्टोन आधुनिक इतिहासकारों के लिए बेहद महत्वपूर्ण साबित हुआ क्योंकि इसमें एक ही फरमान प्राचीन यूनानी, डेमोटिक और किस अन्य लिपि में लिखा था?",
      options_en: [
        "Egyptian Hieroglyphics",
        "Cuneiform",
        "Phoenician Alphabet",
        "Aramaic Script"
      ],
      options_hi: [
        "मिस्र की हायरोग्लिफिक्स (चित्रलिपि)",
        "कीलनुमा लिपि (क्यूनीफॉर्म)",
        "फ़ोनेशियन वर्णमाला",
        "अरामी लिपि"
      ],
      correct_index: 0,
      explanation_en: "Discovered in 1799, the Rosetta Stone enabled Jean-François Champollion in 1822 to decipher Egyptian Hieroglyphs using the known Greek translation.",
      explanation_hi: "रोसेटा स्टोन पर ग्रीक और डेमोटिक के साथ मिस्र की चित्रलिपि अंकित थी, जिसकी मदद से 1822 में शैम्पोलियन ने प्राचीन मिस्र की भाषा को डिकोड किया।"
    },
    {
      id: "q_hist_5",
      topic: "Ancient Civilizations",
      question_en: "Which dynasty first unified China, standardized weights and currency, and connected fortifications into the Great Wall?",
      question_hi: "किस राजवंश ने पहली बार चीन का एकीकरण किया, माप-तौल और मुद्रा का मानकीकरण किया और महान दीवार का निर्माण कराया?",
      options_en: [
        "Qin Dynasty (under Qin Shi Huang)",
        "Han Dynasty",
        "Tang Dynasty",
        "Ming Dynasty"
      ],
      options_hi: [
        "चिन (किन) राजवंश (किन शी हुआंग)",
        "हान राजवंश",
        "तांग राजवंश",
        "मिंग राजवंश"
      ],
      correct_index: 0,
      explanation_en: "Qin Shi Huang founded the Qin dynasty in 221 BCE, standardizing Chinese script, currency, axle lengths, and initiating the Terracotta Army and early Great Wall.",
      explanation_hi: "221 ईसा पूर्व में किन शी हुआंग ने चीन को एकीकृत कर पहला साम्राज्य स्थापित किया और महान दीवार की नींव रखी।"
    }
  ],

  // Space Exploration
  space: [
    {
      id: "q_space_1",
      topic: "Space Exploration",
      question_en: "Which NASA space telescope uses a 6.5-meter gold-coated beryllium mirror to observe the universe in high-resolution infrared?",
      question_hi: "कौन सा नासा अंतरिक्ष टेलीस्कोप उच्च-रिज़ॉल्यूशन इन्फ्रारेड में ब्रह्मांड का निरीक्षण करने के लिए 6.5 मीटर के सोने की परत वाले बेरिलियम दर्पण का उपयोग करता है?",
      options_en: [
        "Hubble Space Telescope",
        "James Webb Space Telescope (JWST)",
        "Spitzer Space Telescope",
        "Kepler Space Observatory"
      ],
      options_hi: [
        "हबल स्पेस टेलीस्कोप",
        "जेम्स वेब स्पेस टेलीस्कोप (JWST)",
        "स्पिट्जर स्पेस टेलीस्कोप",
        "केप्लर स्पेस ऑब्जर्वेटरी"
      ],
      correct_index: 1,
      explanation_en: "Launched on December 25, 2021, the James Webb Space Telescope orbits the Sun at Lagrange Point 2 (L2), observing deep space through infrared light.",
      explanation_hi: "25 दिसंबर 2021 को प्रक्षेपित जेम्स वेब स्पेस टेलीस्कोप लैग्रेंज पॉइंट 2 (L2) पर स्थित है और इन्फ्रारेड तरंगों द्वारा ब्रह्मांड के आरंभिक तारों को देखता है।"
    },
    {
      id: "q_space_2",
      topic: "Space Exploration",
      question_en: "What was the name of the first human-made satellite placed into Earth orbit in October 1957?",
      question_hi: "अक्टूबर 1957 में पृथ्वी की कक्षा में स्थापित पहले मानव निर्मित उपग्रह का नाम क्या था?",
      options_en: [
        "Explorer 1",
        "Sputnik 1",
        "Vostok 1",
        "Apollo 11"
      ],
      options_hi: [
        "एक्सप्लोरर 1",
        "स्पुतनिक 1 (Sputnik 1)",
        "वोस्तोक 1",
        "अपोलो 11"
      ],
      correct_index: 1,
      explanation_en: "Launched by the Soviet Union on October 4, 1957, Sputnik 1 triggered the Space Age and the Space Race between the USA and USSR.",
      explanation_hi: "सोवियत संघ द्वारा 4 अक्टूबर 1957 को लॉन्च किया गया स्पुतनिक 1 मानव इतिहास का पहला कृत्रिम उपग्रह था जिसने अंतरिक्ष युग की शुरुआत की।"
    },
    {
      id: "q_space_3",
      topic: "Space Exploration",
      question_en: "Which mission landed India's Vikram lander near the Moon's south pole in August 2023, making India the 4th country to achieve a soft lunar landing?",
      question_hi: "अगस्त 2023 में किस मिशन ने चंद्रमा के दक्षिणी ध्रुव के पास भारत के विक्रम लैंडर को उतारा, जिससे भारत सॉफ्ट लैंडिंग करने वाला चौथा देश बना?",
      options_en: [
        "Chandrayaan-1",
        "Chandrayaan-2",
        "Chandrayaan-3",
        "Mangalyaan (MOM)"
      ],
      options_hi: [
        "चंद्रयान-1",
        "चंद्रयान-2",
        "चंद्रयान-3",
        "मंगलयान"
      ],
      correct_index: 2,
      explanation_en: "ISRO's Chandrayaan-3 successfully touched down on August 23, 2023, making India the first nation to soft-land near the lunar southern polar region.",
      explanation_hi: "इसरो के चंद्रयान-3 ने 23 अगस्त 2023 को चंद्रमा के दक्षिणी ध्रुव के समीप सफलतापूर्वक सॉफ्ट लैंडिंग करके ऐतिहासिक कीर्तिमान स्थापित किया।"
    },
    {
      id: "q_space_4",
      topic: "Space Exploration",
      question_en: "What spacecraft holds the record for being the farthest human-made object from Earth, currently in interstellar space?",
      question_hi: "कौन सा अंतरिक्ष यान पृथ्वी से सबसे दूर मानव निर्मित वस्तु होने का रिकॉर्ड रखता है, जो वर्तमान में अंतरतारकीय अंतरिक्ष (इंटरस्टेलर स्पेस) में है?",
      options_en: [
        "Voyager 1",
        "Pioneer 10",
        "New Horizons",
        "Voyager 2"
      ],
      options_hi: [
        "वॉयजर 1 (Voyager 1)",
        "पायनियर 10",
        "न्यू होराइजन्स",
        "वॉयजर 2"
      ],
      correct_index: 0,
      explanation_en: "Launched in September 1977, Voyager 1 crossed the heliopause in 2012 into interstellar space and is currently over 24 billion kilometers away from Earth.",
      explanation_hi: "1977 में प्रक्षेपित वॉयजर 1 ने 2012 में सौरमंडल की सीमा पार की और पृथ्वी से 24 अरब किलोमीटर से अधिक दूर स्थित सबसे दूरस्थ मानव निर्मित यान है।"
    },
    {
      id: "q_space_5",
      topic: "Space Exploration",
      question_en: "What is the escape velocity required for a spacecraft to break free from Earth's gravitational pull without further propulsion?",
      question_hi: "किसी अंतरिक्ष यान को बिना किसी अतिरिक्त प्रणोदन के पृथ्वी के गुरुत्वाकर्षण से मुक्त होने के लिए आवश्यक पलायन वेग (Escape Velocity) कितना है?",
      options_en: [
        "7.9 km/s",
        "11.2 km/s",
        "16.7 km/s",
        "29.8 km/s"
      ],
      options_hi: [
        "7.9 किमी/सेकंड",
        "11.2 किमी/सेकंड",
        "16.7 किमी/सेकंड",
        "29.8 किमी/सेकंड"
      ],
      correct_index: 1,
      explanation_en: "The escape velocity from Earth's surface is approximately 11.2 km/s (around 40,270 km/h or 25,020 mph), calculated from v = sqrt(2GM/R).",
      explanation_hi: "पृथ्वी की सतह से पलायन वेग लगभग 11.2 किमी/सेकंड है, जो गुरुत्वाकर्षण बल से पूरी तरह बाहर निकलने के लिए आवश्यक न्यूनतम गति है।"
    }
  ]
};

// Generic generator for custom user-entered topics
function generateCustomTopicQuestions(topic, count) {
  const generated = [];
  const templates = [
    {
      q_en: `What is the foundational core principle underlying ${topic}?`,
      q_hi: `${topic} का मूलभूत आधार सिद्धांत क्या है?`,
      opts_en: [
        `First-principles systematic optimization in ${topic}`,
        `Random heuristic trial without deterministic constraints`,
        `Legacy procedural isolation from modern workflows`,
        `Passive observational equilibrium`
      ],
      opts_hi: [
        `${topic} में प्रथम-सिद्धांत आधारित व्यवस्थित अनुकूलन`,
        `बिना किसी निश्चित नियमों के यादृच्छिक प्रयास`,
        `आधुनिक कार्यप्रणालियों से पुरानी अलग-थलग प्रक्रियाएं`,
        `निष्क्रिय अवलोकन संबंधी संतुलन`
      ],
      correct: 0,
      exp_en: `In ${topic}, foundational concepts prioritize verified first-principles analysis and systematic empirical frameworks over unconstrained heuristics.`,
      exp_hi: `${topic} में, मूलभूत अवधारणाएं यादृच्छिक अनुमानों के बजाय सत्यापित सिद्धांतों और व्यवस्थित वैज्ञानिक रूपरेखाओं को प्राथमिकता देती हैं.`
    },
    {
      q_en: `Which key milestone significantly transformed modern research in ${topic}?`,
      q_hi: `${topic} के आधुनिक अनुसंधान में किस महत्वपूर्ण मील के पत्थर ने क्रांतिकारी बदलाव किया?`,
      opts_en: [
        `Algorithmic convergence and quantitative modeling`,
        `Complete abandonment of theoretical frameworks`,
        `Static analog paper documentation methods`,
        `Sole reliance on anecdotal observations`
      ],
      opts_hi: [
        `एल्गोरिदम का समन्वय और मात्रात्मक मॉडलिंग`,
        `सैद्धांतिक रूपरेखाओं का पूर्ण परित्याग`,
        `स्थिर एनालॉग कागजी दस्तावेज़ीकरण विधियां`,
        `केवल व्यक्तिगत अवलोकनों पर निर्भरता`
      ],
      correct: 0,
      exp_en: `The modern progression of ${topic} relies heavily on reproducible quantitative modeling and computational frameworks.`,
      exp_hi: `${topic} की आधुनिक प्रगति काफी हद तक पुनरुत्पादक मात्रात्मक मॉडलिंग और कम्प्यूटेशनल तकनीकों पर निर्भर करती है.`
    },
    {
      q_en: `What common misconception is often encountered when studying ${topic}?`,
      q_hi: `${topic} का अध्ययन करते समय कौन सी आम भ्रांति अक्सर सामने आती है?`,
      opts_en: [
        `That simple correlations always equate to direct causal mechanisms`,
        `That rigorous peer review strengthens scientific consensus`,
        `That iterative experimentation reduces systemic errors`,
        `That cross-disciplinary validation improves accuracy`
      ],
      opts_hi: [
        `कि साधारण सहसंबंध हमेशा प्रत्यक्ष कारण संबंध के बराबर होता है`,
        `कि सहकर्मी समीक्षा वैज्ञानिक सहमति को मजबूत करती है`,
        `कि पुनरावृत्त प्रयोग प्रणालीगत त्रुटियों को कम करते हैं`,
        `कि अंतःविषय सत्यापन सटीकता में सुधार करता है`
      ],
      correct: 0,
      exp_en: `A universal pitfall in ${topic} is conflating correlation with causation without controlled longitudinal validation.`,
      exp_hi: `${topic} में एक सार्वभौमिक त्रुटि नियंत्रित सत्यापन के बिना सहसंबंध को प्रत्यक्ष कारण मान लेना है.`
    },
    {
      q_en: `Which methodology provides the most robust empirical verification in ${topic}?`,
      q_hi: `${topic} में कौन सी कार्यप्रणाली सबसे मजबूत अनुभवजन्य सत्यापन प्रदान करती है?`,
      opts_en: [
        `Double-blind controlled testing and reproducible benchmarks`,
        `Subjective intuition without baseline metrics`,
        `Single-sample non-replicated trials`,
        `Unmonitored qualitative estimates`
      ],
      opts_hi: [
        `डबल-ब्लाइंड नियंत्रित परीक्षण और पुनरुत्पादक बेंचमार्क`,
        `बिना आधारभूत मैट्रिक्स के व्यक्तिपरक अंतर्ज्ञान`,
        `एकल-नमूना गैर-पुनरावृत्त परीक्षण`,
        `अनियंत्रित गुणात्मक अनुमान`
      ],
      correct: 0,
      exp_en: `Reproducible benchmark testing and double-blind controls represent gold standards in validating hypotheses in ${topic}.`,
      exp_hi: `पुनरुत्पादक बेंचमार्क परीक्षण और नियंत्रित सत्यापन ${topic} में परिकल्पनाओं को मान्य करने का सबसे विश्वसनीय पैमाना है.`
    },
    {
      q_en: `What is considered the most promising frontier for future advancement in ${topic}?`,
      q_hi: `${topic} में भविष्य की प्रगति के लिए सबसे आशाजनक सीमा क्या मानी जाती है?`,
      opts_en: [
        `Autonomous machine intelligence & real-time computational synthesis`,
        `Reverting entirely to pre-digital manual calculation`,
        `Elimination of international collaborative research`,
        `Restricting open-source knowledge sharing`
      ],
      opts_hi: [
        `स्वायत्त मशीन इंटेलिजेंस और वास्तविक समय का कम्प्यूटेशनल संश्लेषण`,
        `पूरी तरह से पूर्व-डिजिटल मैनुअल गणना पर लौटना`,
        `अंतरराष्ट्रीय सहयोगात्मक अनुसंधान को समाप्त करना`,
        `ओपन-सोर्स ज्ञान साझाकरण को प्रतिबंधित करना`
      ],
      correct: 0,
      exp_en: `Future frontiers in ${topic} integrate intelligent computational synthesis with real-time feedback systems for rapid discovery.`,
      exp_hi: `${topic} की भावी दिशा त्वरित खोज और नवाचार के लिए वास्तविक समय के डेटा और स्वचालित प्रणालियों को जोड़ती है.`
    }
  ];

  for (let i = 0; i < count; i++) {
    const tpl = templates[i % templates.length];
    generated.push({
      id: `q_custom_${i + 1}`,
      topic: topic,
      question_en: tpl.q_en,
      question_hi: tpl.q_hi,
      options_en: [...tpl.opts_en],
      options_hi: [...tpl.opts_hi],
      correct_index: tpl.correct,
      explanation_en: tpl.exp_en,
      explanation_hi: tpl.exp_hi
    });
  }
  return generated;
}

/**
 * Resolves questions based on user topic keyword or curated bank
 */
function fetchQuizData(topic, count) {
  const norm = topic.toLowerCase().trim();
  let pool = [];

  if (norm.includes('quantum') || norm.includes('physic') || norm.includes('भौतिकी')) {
    pool = [...quizKnowledgeBase.quantum];
  } else if (norm.includes('ai') || norm.includes('intelligence') || norm.includes('machine') || norm.includes('आर्टिफिशियल') || norm.includes('इंटेलिजेंस')) {
    pool = [...quizKnowledgeBase.ai];
  } else if (norm.includes('history') || norm.includes('civil') || norm.includes('इतिहास') || norm.includes('सभ्यता')) {
    pool = [...quizKnowledgeBase.history];
  } else if (norm.includes('space') || norm.includes('astronomy') || norm.includes('अंतरिक्ष')) {
    pool = [...quizKnowledgeBase.space];
  } else {
    // If not matching default categories, generate smart customized questions
    return generateCustomTopicQuestions(topic || "General Knowledge", count);
  }

  // If requested count is greater than curated pool, supplement with custom questions
  if (pool.length < count) {
    const needed = count - pool.length;
    const extra = generateCustomTopicQuestions(topic, needed);
    pool = pool.concat(extra);
  }

  // Slice down to requested count
  return pool.slice(0, count);
}

/**
 * Fetch API Interceptor:
 * Seamlessly handles POST `/generate-quiz` as a mocked FastAPI endpoint.
 */
if (typeof window !== 'undefined') {
  const nativeFetch = window.fetch;

  window.fetch = async function (resource, options = {}) {
    let url = typeof resource === 'string' ? resource : resource.url;

    // Check if hitting the mocked FastAPI /generate-quiz endpoint
    if (url && (url.endsWith('/generate-quiz') || url.includes('/generate-quiz'))) {
      const method = (options.method || 'GET').toUpperCase();

      if (method === 'POST') {
        let body = {};
        try {
          if (options.body) {
            body = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
          }
        } catch (e) {
          console.warn("Failed to parse request JSON body:", e);
        }

        const topic = (body.topic && body.topic.trim()) || "Quantum Physics";
        const count = parseInt(body.count, 10) || 5;

        // Simulated network latency (600ms - 1100ms) for the 3D spinning loader
        await new Promise(resolve => setTimeout(resolve, 850));

        const questions = fetchQuizData(topic, count);

        // FastAPI standard JSON response structure
        const responseData = {
          status: "success",
          topic: topic,
          total_questions: questions.length,
          questions: questions,
          timestamp: new Date().toISOString()
        };

        return new Response(JSON.stringify(responseData), {
          status: 200,
          statusText: "OK",
          headers: {
            "Content-Type": "application/json",
            "X-Powered-By": "FastAPI/0.110.0-Mock"
          }
        });
      }
    }

    // Pass through all other network requests
    return nativeFetch.apply(this, arguments);
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { quizKnowledgeBase, generateCustomTopicQuestions, fetchQuizData };
}
