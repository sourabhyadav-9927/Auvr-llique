// Jurix - Client Side Logic

// 1. Global State Management
const globalState = {
    currentLanguage: 'en',
    contractAudit: null, // Will store current document audit results
    bailCalculation: null // Will store current bail calculations
};

// 2. Client-Side Router
const routes = {
    'home': renderHomePage,
    'auditor': renderAuditorPage,
    'bail-tracker': renderBailTrackerPage,
    'legal-brief': renderLegalBriefPage,
    'impact-team': renderImpactTeamPage
};

function navigateTo(pageId) {
    // Default route
    if (!routes[pageId]) {
        pageId = 'home';
    }

    // Update URL hash without jumping
    history.pushState(null, null, `#/${pageId}`);

    // Update UI (active state in nav)
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        if (link.dataset.page === pageId) {
            link.classList.add('text-orange-500');
            link.classList.remove('text-white');
        } else {
            link.classList.remove('text-orange-500');
            if(link.classList.contains('mobile-nav-link')) {
                link.classList.remove('text-white');
            }
        }
    });

    // Render Page Content
    const container = document.getElementById('app-container');

    // Add exit transition class if needed, here we just simple replace
    container.innerHTML = routes[pageId]();

    // Scroll to top
    window.scrollTo(0, 0);

    // Initialize page specific scripts
    initPageScripts(pageId);

    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.add('hidden');
}

function initPageScripts(pageId) {
    if (pageId === 'home') {
        // Init home scripts
    } else if (pageId === 'auditor') {
        // Init auditor scripts
    } else if (pageId === 'bail-tracker') {
        // Init bail tracker scripts
    } else if (pageId === 'legal-brief') {
        // Init legal brief scripts
    } else if (pageId === 'impact-team') {
        // Init impact scripts
    }
}

// 3. Page Render Functions (Placeholders for now)
function renderHomePage() {
    return `
    <div class="page page-enter-active">
        <!-- Hero Section -->
        <section class="bg-navy-900 text-white py-20 border-b-4 border-orange-500">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="md:w-2/3">
                    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Jurix — AI Citizen Legal Assistant & Predictive Case-Risk Analyzer
                    </h1>
                    <div class="space-y-4 mb-8 text-lg text-gray-200">
                        <p class="flex items-start">
                            <i class="fa-solid fa-file-contract text-orange-500 mt-1 mr-3"></i>
                            <span><strong>Plain-Language Contracts:</strong> Translates complex civil contracts into 5th-grade plain language.</span>
                        </p>
                        <p class="flex items-start">
                            <i class="fa-solid fa-scale-unbalanced text-orange-500 mt-1 mr-3"></i>
                            <span><strong>Court Procedural Timelines:</strong> Demystifies court timelines & statutory bail milestones for undertrials.</span>
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button onclick="navigateTo('auditor')" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg flex items-center justify-center">
                            Scan a Contract or Notice <i class="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                        <button onclick="navigateTo('bail-tracker')" class="bg-navy-800 hover:bg-navy-700 border border-navy-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center">
                            Check Undertrial Bail Eligibility <i class="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- The Problem & National PSI Evidence Grid -->
        <section class="py-16 bg-canvas">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Cards -->
                    <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 accent-border-left">
                            <h3 class="text-lg font-bold text-navy-900 mb-2">What is the problem?</h3>
                            <p class="text-gray-600 text-sm">Civil agreements (leases, employment bonds, loan terms) trap citizens in dense legalese; undertrials struggle to track BNS/BNSS bail rights.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 accent-border-left">
                            <h3 class="text-lg font-bold text-navy-900 mb-2">Who is affected?</h3>
                            <p class="text-gray-600 text-sm">Everyday tenants, gig workers, small shop owners, women SHGs & undertrial families across Tier-1 to Tier-3 towns and rural talukas.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 accent-border-left">
                            <h3 class="text-lg font-bold text-navy-900 mb-2">National PSI Evidence</h3>
                            <p class="text-gray-600 text-sm">Over <strong class="text-navy-900">75%</strong> of India's prison population comprises undertrials, many detained beyond statutory periods due to procedural ignorance.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 accent-border-left">
                            <h3 class="text-lg font-bold text-navy-900 mb-2">Current Gaps</h3>
                            <p class="text-gray-600 text-sm">Private counsel costs <strong>₹1,500–₹5,000</strong> per consultation; free legal aid clinics (DLSA) spend <strong>>60%</strong> of counsel time on manual document decoding.</p>
                        </div>
                    </div>
                    <!-- Hero Stat Card -->
                    <div class="bg-navy-900 rounded-xl p-8 text-white flex flex-col justify-center shadow-lg relative overflow-hidden">
                        <div class="absolute top-0 right-0 -mt-4 -mr-4 text-white opacity-10">
                            <i class="fa-solid fa-gavel text-9xl"></i>
                        </div>
                        <div class="relative z-10">
                            <div class="mb-6">
                                <span class="block text-4xl font-extrabold text-orange-500">4.4 Cr+</span>
                                <span class="block text-sm uppercase tracking-wider text-gray-300 mt-1">Pending cases</span>
                            </div>
                            <div>
                                <span class="block text-4xl font-extrabold text-gold-500">4.3 Lakh+</span>
                                <span class="block text-sm uppercase tracking-wider text-gray-300 mt-1">Undertrials affected nationwide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works (3-Step Pipeline) -->
        <section class="py-16 bg-white border-y border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-navy-900 mb-12">How It Works</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <!-- Connecting line for desktop -->
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                    <!-- Step 1 -->
                    <div class="bg-canvas p-6 rounded-xl border border-gray-200 text-center relative z-10">
                        <div class="w-16 h-16 bg-navy-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-md border-4 border-white">1</div>
                        <h3 class="text-xl font-bold text-navy-900 mb-2">Input</h3>
                        <p class="text-gray-600 text-sm">Photo of notice/FIR, scanned PDF lease, or voice query in 10+ regional languages.</p>
                    </div>

                    <!-- Step 2 -->
                    <div class="bg-canvas p-6 rounded-xl border border-gray-200 text-center relative z-10">
                        <div class="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-md border-4 border-white">2</div>
                        <h3 class="text-xl font-bold text-navy-900 mb-2">Process</h3>
                        <p class="text-gray-600 text-sm">OCR extraction, clause chunking, Hybrid RAG indexing over BNS/BNSS statutory codes + automated client-side PII redacting.</p>
                    </div>

                    <!-- Step 3 -->
                    <div class="bg-canvas p-6 rounded-xl border border-gray-200 text-center relative z-10">
                        <div class="w-16 h-16 bg-navy-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-md border-4 border-white">3</div>
                        <h3 class="text-xl font-bold text-navy-900 mb-2">Output</h3>
                        <p class="text-gray-600 text-sm">Red-flag clause alerts, plain translation, bail eligibility milestone, and 1-page legal aid brief.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Comparison Table -->
        <section class="py-16 bg-canvas">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center text-navy-900 mb-8">What Makes Jurix New?</h2>
                <div class="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-navy-900 text-white">
                                <th class="py-4 px-6 font-semibold">Feature</th>
                                <th class="py-4 px-6 font-semibold text-gray-300">Existing Solutions</th>
                                <th class="py-4 px-6 font-semibold text-orange-500">Jurix</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm">
                            <tr class="border-b border-gray-200 hover:bg-gray-50">
                                <td class="py-4 px-6 font-medium text-navy-900">Cost</td>
                                <td class="py-4 px-6 text-gray-600">₹1,500 – ₹5,000 / review</td>
                                <td class="py-4 px-6 font-bold text-green-600">₹0 — Free / Freely subsidized</td>
                            </tr>
                            <tr class="border-b border-gray-200 hover:bg-gray-50">
                                <td class="py-4 px-6 font-medium text-navy-900">Speed / Time</td>
                                <td class="py-4 px-6 text-gray-600">2 to 5 days turnaround</td>
                                <td class="py-4 px-6 font-bold text-green-600">Under 30 seconds</td>
                            </tr>
                            <tr class="border-b border-gray-200 hover:bg-gray-50">
                                <td class="py-4 px-6 font-medium text-navy-900">Reach / Access</td>
                                <td class="py-4 px-6 text-gray-600">Physical urban chambers</td>
                                <td class="py-4 px-6 font-bold text-navy-800">Pan-India via WhatsApp / Web</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="py-4 px-6 font-medium text-navy-900">Ease of Use</td>
                                <td class="py-4 px-6 text-gray-600">Dense jargon; English only</td>
                                <td class="py-4 px-6 font-bold text-navy-800">Vernacular audio + simple cards</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Bottom CTA -->
        <div class="py-12 bg-white text-center border-t border-gray-200">
            <button onclick="navigateTo('auditor')" class="bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md">
                Continue to Contract Auditor <i class="fa-solid fa-arrow-right ml-2"></i>
            </button>
        </div>
    </div>`;
}

function renderAuditorPage() {
    return `
    <div class="page page-enter-active bg-canvas py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-navy-900">AI Contract & Legal Notice Auditor</h1>
                <p class="text-gray-600 mt-2">Instantly analyze legal documents for risks and translate complex jargon into plain language.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Left Column: Input -->
                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h2 class="text-xl font-bold text-navy-900 mb-4">1. Select or Upload Document</h2>

                        <!-- Pre-loaded samples -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            <button onclick="loadSampleDoc(1)" class="text-left px-4 py-3 text-sm rounded border border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-colors">
                                <i class="fa-solid fa-house-chimney text-gray-400 mr-2"></i>Predatory Residential Lease
                            </button>
                            <button onclick="loadSampleDoc(2)" class="text-left px-4 py-3 text-sm rounded border border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-colors">
                                <i class="fa-solid fa-motorcycle text-gray-400 mr-2"></i>Gig-Worker Bond
                            </button>
                            <button onclick="loadSampleDoc(3)" class="text-left px-4 py-3 text-sm rounded border border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-colors">
                                <i class="fa-solid fa-sack-dollar text-gray-400 mr-2"></i>Micro-Finance SHG Loan
                            </button>
                            <button onclick="loadSampleDoc(4)" class="text-left px-4 py-3 text-sm rounded border border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-colors">
                                <i class="fa-solid fa-building-columns text-gray-400 mr-2"></i>Police FIR / Court Notice
                            </button>
                        </div>

                        <div class="mb-4">
                            <div class="flex justify-between items-center mb-2">
                                <label class="block text-sm font-medium text-gray-700">Or Paste Document Text</label>
                                <label class="cursor-pointer text-sm text-navy-700 hover:text-orange-500 font-medium">
                                    <i class="fa-solid fa-file-upload mr-1"></i> Upload File
                                    <input type="file" id="file-upload" class="hidden" accept=".txt,.pdf,image/*" onchange="handleFileUpload(event)">
                                </label>
                            </div>
                            <textarea id="doc-input" rows="8" class="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 border p-3 text-sm" placeholder="Paste your legal document text here..."></textarea>
                        </div>

                        <!-- PII Redaction Shield -->
                        <div class="bg-callout-bg border border-callout-border rounded-lg p-4 mb-4">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="pii-toggle" type="checkbox" checked class="focus:ring-orange-500 h-4 w-4 text-orange-500 border-gray-300 rounded cursor-pointer" onchange="togglePiiRedaction()">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="pii-toggle" class="font-medium text-gray-900 cursor-pointer">Client-Side DPDP Privacy Shield</label>
                                    <p class="text-gray-500">Auto-redacts PII (Phone, Aadhaar, PAN, Emails) before processing.</p>
                                    <div id="pii-stats" class="mt-2 text-xs font-bold text-green-600 hidden">
                                        <i class="fa-solid fa-shield-halved mr-1"></i> 0 items redacted
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onclick="runAudit()" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow flex justify-center items-center">
                            <i class="fa-solid fa-magnifying-glass mr-2"></i> Audit Document
                        </button>
                    </div>
                </div>

                <!-- Right Column: Results -->
                <div class="space-y-6">
                    <div id="audit-results-container" class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hidden">
                        <div class="flex justify-between items-center mb-6 border-b pb-4">
                            <h2 class="text-xl font-bold text-navy-900">Audit Results</h2>
                            <div id="risk-score-badge" class="px-3 py-1 rounded-full text-sm font-bold bg-red-100 text-red-800">
                                High Risk (82/100)
                            </div>
                        </div>

                        <div class="flex space-x-4 mb-6 text-sm">
                            <div class="flex flex-col items-center p-3 bg-red-50 rounded-lg flex-1 border border-red-100">
                                <span id="red-flag-count" class="text-2xl font-bold text-red-600">3</span>
                                <span class="text-red-800 text-center">Red Flags</span>
                            </div>
                            <div class="flex flex-col items-center p-3 bg-yellow-50 rounded-lg flex-1 border border-yellow-100">
                                <span id="caution-count" class="text-2xl font-bold text-yellow-600">1</span>
                                <span class="text-yellow-800 text-center">Cautions</span>
                            </div>
                            <div class="flex flex-col items-center p-3 bg-green-50 rounded-lg flex-1 border border-green-100">
                                <span id="fair-count" class="text-2xl font-bold text-green-600">2</span>
                                <span class="text-green-800 text-center">Fair Clauses</span>
                            </div>
                        </div>

                        <!-- Clause Cards -->
                        <div id="clauses-container" class="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                            <!-- Injected by JS -->
                        </div>

                        <div class="mt-6 pt-4 border-t border-gray-200">
                            <button onclick="sendToLegalBrief()" class="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow flex justify-center items-center">
                                Send Audit to 1-Page DLSA Brief <i class="fa-solid fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Placeholder before audit -->
                    <div id="audit-placeholder" class="bg-gray-50 p-12 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                        <i class="fa-solid fa-file-shield text-6xl text-gray-300 mb-4"></i>
                        <h3 class="text-lg font-medium text-gray-900">No Document Analyzed</h3>
                        <p class="mt-2 text-sm text-gray-500 max-w-sm">Select a sample document or paste your own text on the left to see the AI audit results here.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom CTA -->
        <div class="py-12 bg-white mt-12 text-center border-t border-gray-200">
            <button onclick="navigateTo('bail-tracker')" class="bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md">
                Next: Undertrial Bail Tracker <i class="fa-solid fa-arrow-right ml-2"></i>
            </button>
        </div>
    </div>`;
}

function renderBailTrackerPage() {
    return `
    <div class="page page-enter-active bg-canvas py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-8 text-center">
                <h1 class="text-3xl font-bold text-navy-900">Undertrial Bail & BNSS Timeline Tracker</h1>
                <p class="text-gray-600 mt-2 max-w-2xl mx-auto">Calculate mandatory bail eligibility under Bharatiya Nagarik Suraksha Sanhita (BNSS) Section 479 and track court procedural stages.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <!-- Calculator -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 accent-border-left">
                    <h2 class="text-xl font-bold text-navy-900 mb-6"><i class="fa-solid fa-calculator text-orange-500 mr-2"></i>BNSS Sec. 479 Bail Calculator</h2>

                    <div class="space-y-5">
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-1">Offense Category</label>
                            <select id="offense-preset" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 p-2 border" onchange="updateBailCalcPresets()">
                                <option value="non-heinous">Non-Heinous (Max punishment <= 7 years)</option>
                                <option value="bailable">Bailable / Petty Offense</option>
                                <option value="financial">Financial / Civil Dispute</option>
                                <option value="custom">Custom Statutory Offense</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-1">Max Statutory Punishment (Years)</label>
                            <input type="range" id="max-sentence" min="1" max="14" value="7" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500" oninput="updateBailCalcDisplay()">
                            <div class="text-right text-sm font-bold text-navy-900 mt-1"><span id="max-sentence-val">7</span> Years</div>
                        </div>

                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-1">Time Spent in Detention (Months)</label>
                            <input type="range" id="time-served" min="1" max="84" value="30" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500" oninput="updateBailCalcDisplay()">
                            <div class="text-right text-sm font-bold text-navy-900 mt-1"><span id="time-served-val">30</span> Months</div>
                        </div>

                        <div class="bg-callout-bg p-3 rounded-lg border border-callout-border">
                            <label class="flex items-center cursor-pointer">
                                <input type="checkbox" id="first-time-offender" checked class="form-checkbox h-5 w-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500" onchange="updateBailCalcDisplay()">
                                <span class="ml-3 text-sm font-bold text-gray-900">First-Time Offender</span>
                            </label>
                            <p class="ml-8 mt-1 text-xs text-gray-600">Triggers 1/3rd maximum detention threshold instead of 1/2 under new BNSS rules.</p>
                        </div>
                    </div>
                </div>

                <!-- Verdict & Visualizer -->
                <div class="bg-navy-900 p-6 rounded-xl shadow-lg text-white flex flex-col justify-center relative overflow-hidden">
                    <div class="absolute top-0 right-0 -mt-4 -mr-4 text-white opacity-5">
                        <i class="fa-solid fa-scale-balanced text-9xl"></i>
                    </div>

                    <h2 class="text-xl font-bold mb-6 relative z-10 text-gray-200">Statutory Bail Verdict</h2>

                    <div id="verdict-banner" class="bg-green-500 text-white p-4 rounded-lg text-center font-bold mb-6 shadow-inner relative z-10 border border-green-400">
                        ELIGIBLE FOR MANDATORY BAIL UNDER BNSS SEC. 479
                    </div>

                    <div class="relative z-10 mb-2 flex justify-between text-sm font-medium text-gray-300">
                        <span>Time Served</span>
                        <span>Threshold (<span id="threshold-text">1/3rd</span>)</span>
                    </div>

                    <!-- Gauge -->
                    <div class="w-full bg-navy-800 rounded-full h-6 mb-2 relative z-10 border border-navy-700 overflow-hidden">
                        <div id="progress-bar" class="bg-orange-500 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2 text-xs font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" style="width: 100%;">
                        </div>
                        <!-- Marker line for threshold -->
                        <div id="threshold-marker" class="absolute top-0 bottom-0 w-1 bg-white opacity-75 z-20" style="left: 100%;"></div>
                    </div>

                    <div class="relative z-10 flex justify-between text-xs text-gray-400">
                        <span>0</span>
                        <span><span id="threshold-months-val">28</span> months limit</span>
                    </div>

                    <p id="verdict-subtext" class="mt-6 text-sm text-gray-300 relative z-10 text-center">
                        Citizen has served 30 months, which exceeds the mandatory 1/3rd threshold (28 months) for first-time offenders.
                    </p>

                    <button onclick="saveBailStateAndNavigate()" class="mt-6 w-full bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors relative z-10">
                        Attach Calculation to DLSA Brief <i class="fa-solid fa-paperclip ml-2"></i>
                    </button>
                </div>
            </div>

            <!-- Court Stage Timeline -->
            <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 class="text-xl font-bold text-navy-900 mb-8 text-center">Interactive Court Procedural Timeline</h2>

                <!-- Stepper -->
                <div class="relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t-2 border-gray-200"></div>
                    </div>
                    <div class="relative flex justify-between">
                        <button onclick="showTimelineStage(1)" class="timeline-btn bg-navy-900 h-10 w-10 rounded-full flex items-center justify-center border-4 border-white shadow hover:bg-orange-500 transition-colors z-10" data-stage="1">
                            <span class="text-white font-bold text-sm">1</span>
                        </button>
                        <button onclick="showTimelineStage(2)" class="timeline-btn bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center border-4 border-white shadow hover:bg-orange-500 transition-colors z-10" data-stage="2">
                            <span class="text-white font-bold text-sm">2</span>
                        </button>
                        <button onclick="showTimelineStage(3)" class="timeline-btn bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center border-4 border-white shadow hover:bg-orange-500 transition-colors z-10 ring-4 ring-orange-100" data-stage="3">
                            <span class="text-white font-bold text-sm">3</span>
                        </button>
                        <button onclick="showTimelineStage(4)" class="timeline-btn bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center border-4 border-white shadow hover:bg-orange-500 transition-colors z-10" data-stage="4">
                            <span class="text-white font-bold text-sm">4</span>
                        </button>
                        <button onclick="showTimelineStage(5)" class="timeline-btn bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center border-4 border-white shadow hover:bg-orange-500 transition-colors z-10" data-stage="5">
                            <span class="text-white font-bold text-sm">5</span>
                        </button>
                    </div>
                    <!-- Labels -->
                    <div class="relative flex justify-between mt-2 text-xs font-medium text-gray-500">
                        <div class="w-20 text-center -ml-5">FIR / Remand</div>
                        <div class="w-20 text-center">Charge Sheet</div>
                        <div class="w-20 text-center font-bold text-orange-500">Sec 479 Bail</div>
                        <div class="w-20 text-center">Charges</div>
                        <div class="w-20 text-center -mr-5">Trial</div>
                    </div>
                </div>

                <!-- Stage Details -->
                <div id="timeline-details" class="mt-8 bg-callout-bg p-6 rounded-lg border border-callout-border">
                    <!-- Injected by JS -->
                </div>
            </div>
        </div>
    </div>`;
}

function renderLegalBriefPage() {
    return `
    <div class="page page-enter-active bg-gray-200 py-8 min-h-screen">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Kiosk Controls (Hidden on Print) -->
            <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-300 mb-6 flex flex-col sm:flex-row justify-between items-center print:hidden">
                <div class="mb-4 sm:mb-0">
                    <h2 class="text-lg font-bold text-navy-900">DLSA / CSC Kiosk Controls</h2>
                    <p class="text-xs text-gray-500">Auto-populated from Contract Auditor and Bail Tracker.</p>
                </div>
                <div class="flex space-x-3">
                    <button onclick="simulateWhatsApp()" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors text-sm flex items-center">
                        <i class="fa-brands fa-whatsapp mr-2 text-lg"></i> Share to Citizen
                    </button>
                    <button onclick="window.print()" class="bg-navy-900 hover:bg-navy-800 text-white font-bold py-2 px-4 rounded transition-colors text-sm flex items-center">
                        <i class="fa-solid fa-print mr-2"></i> Print 1-Page Brief
                    </button>
                </div>
            </div>

            <!-- WhatsApp Simulation Modal -->
            <div id="wa-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center print:hidden">
                <div class="bg-white w-[350px] rounded-xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
                    <div class="bg-[#075E54] text-white p-3 flex items-center">
                        <button onclick="document.getElementById('wa-modal').classList.add('hidden')" class="mr-3"><i class="fa-solid fa-arrow-left"></i></button>
                        <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3"><i class="fa-solid fa-scale-balanced text-gray-600"></i></div>
                        <div>
                            <div class="font-bold text-sm">Jurix Legal Bot</div>
                            <div class="text-xs text-green-200">online</div>
                        </div>
                    </div>
                    <div class="flex-grow bg-[#E5DDD5] p-4 overflow-y-auto space-y-4" style="background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'); background-size: cover;">

                        <div class="bg-white p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-sm text-gray-800 relative">
                            Namaste 🙏! Here is the plain-language summary of your document:
                            <br><br>
                            <strong>High Risk (85/100)</strong><br>
                            ⚠️ You will lose your entire deposit if you move out before 6 months.
                            <div class="text-[10px] text-gray-400 text-right mt-1">10:42 AM</div>
                        </div>

                        <div class="bg-white p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-sm text-gray-800 relative">
                            📄 <strong>Your 1-Page Legal Aid Brief is ready.</strong> Show this PDF at the DLSA clinic for fast-track free legal help.
                            <div class="flex items-center bg-gray-100 p-2 mt-2 rounded border border-gray-200">
                                <i class="fa-solid fa-file-pdf text-red-500 text-2xl mr-3"></i>
                                <span class="font-medium text-xs">DLSA_Intake_Brief.pdf</span>
                            </div>
                            <div class="text-[10px] text-gray-400 text-right mt-1">10:43 AM</div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- The 1-Page Printable Document -->
            <div id="print-document" class="bg-white p-8 sm:p-12 shadow-2xl mx-auto border-t-8 border-navy-900 text-black max-w-[210mm] min-h-[297mm]">

                <!-- Header -->
                <div class="flex justify-between items-start border-b-2 border-gray-800 pb-4 mb-6">
                    <div>
                        <h1 class="text-2xl font-black uppercase tracking-tight text-black">District Legal Services Authority</h1>
                        <h2 class="text-lg font-bold text-gray-700">Paralegal Intake Brief (Auto-Generated)</h2>
                        <p class="text-sm mt-1"><strong>Ref ID:</strong> JURIX-${Math.floor(Math.random()*10000)} | <strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                    </div>
                    <div class="text-right">
                        <div class="border-2 border-green-600 text-green-700 p-2 rounded text-xs font-bold uppercase inline-block text-center shadow-sm">
                            <i class="fa-solid fa-check-circle mr-1"></i> DPDP Privacy<br>Verified & Redacted
                        </div>
                    </div>
                </div>

                <!-- Section 1: Summary -->
                <div class="mb-6">
                    <h3 class="text-sm font-bold uppercase bg-gray-200 p-2 border-l-4 border-gray-800 mb-3">1. Citizen Plain-Language Summary</h3>
                    <p class="text-sm text-gray-800 text-justify leading-relaxed" id="brief-summary">
                        The citizen has presented a legal document identified as High Risk. The AI analysis indicates potential predatory clauses that violate standard norms. Furthermore, the citizen's undertrial status has been analyzed under BNSS Sec 479.
                    </p>
                </div>

                <!-- Section 2: Split Content (Contract or Bail) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                    <!-- Contract Audit Data -->
                    <div class="border border-gray-300 p-4 rounded">
                        <h3 class="text-xs font-bold uppercase text-gray-500 mb-3 border-b border-gray-200 pb-1">Contract / Notice Flagged Clauses</h3>
                        <div id="brief-contract-data" class="text-sm space-y-3">
                            <!-- Injected by JS -->
                            <p class="italic text-gray-500 text-xs">No contract audited in current session. Run auditor to populate.</p>
                        </div>
                    </div>

                    <!-- Bail Data -->
                    <div class="border border-gray-300 p-4 rounded">
                        <h3 class="text-xs font-bold uppercase text-gray-500 mb-3 border-b border-gray-200 pb-1">Undertrial Bail (BNSS Sec 479) Status</h3>
                        <div id="brief-bail-data" class="text-sm">
                            <!-- Injected by JS -->
                            <p class="italic text-gray-500 text-xs">No bail calculation found in current session. Run tracker to populate.</p>
                        </div>
                    </div>
                </div>

                <!-- Section 3: Citations & Actions -->
                <div class="mb-6">
                    <h3 class="text-sm font-bold uppercase bg-gray-200 p-2 border-l-4 border-gray-800 mb-3">3. Statutory Citations & Required Actions</h3>

                    <div class="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                            <strong class="block mb-1">Relevant Statutes:</strong>
                            <ul class="list-disc pl-4 text-gray-700" id="brief-citations">
                                <li>Bharatiya Nagarik Suraksha Sanhita (BNSS)</li>
                                <li>Indian Contract Act, 1872</li>
                            </ul>
                        </div>
                        <div>
                            <strong class="block mb-1">Recommended DLSA Action:</strong>
                            <ul class="list-disc pl-4 text-gray-700">
                                <li>Assign Panel Lawyer immediately</li>
                                <li>Draft Section 479 Bail Application</li>
                                <li>Translate documents to regional language</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Paralegal Notes -->
                <div class="mt-8 pt-4 border-t border-dashed border-gray-400">
                    <h3 class="text-sm font-bold uppercase text-gray-700 mb-2">Paralegal Intake Notes:</h3>
                    <textarea class="w-full h-32 p-3 border border-gray-300 rounded text-sm print:border-none print:resize-none print:p-0" placeholder="Type intake notes here before printing..."></textarea>
                </div>

                <div class="mt-8 text-center text-xs text-gray-400">
                    Generated securely in-browser via Jurix AI. No personal data left the device.
                </div>
            </div>
        </div>
    </div>`;
}

function renderImpactTeamPage() {
    return `
    <div class="page page-enter-active bg-canvas py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-12 text-center">
                <h1 class="text-3xl font-bold text-navy-900">Impact, Scalability & Team BLACK MOON</h1>
                <p class="text-gray-600 mt-2 max-w-2xl mx-auto">Building a scalable, privacy-first legal empowerment platform for 1.4 billion citizens.</p>
            </div>

            <!-- Impact Dashboard -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="bg-callout-bg p-6 rounded-xl border border-callout-border text-center shadow-sm">
                    <i class="fa-solid fa-users text-4xl text-orange-500 mb-3"></i>
                    <h3 class="text-3xl font-black text-navy-900">50,000+</h3>
                    <p class="text-sm font-bold text-gray-700 uppercase tracking-wide mt-1">Beneficiaries Reached</p>
                    <p class="text-xs text-gray-500 mt-2">Projected Year 1 across 5 pilot hubs</p>
                </div>
                <div class="bg-callout-bg p-6 rounded-xl border border-callout-border text-center shadow-sm">
                    <i class="fa-solid fa-clock text-4xl text-orange-500 mb-3"></i>
                    <h3 class="text-3xl font-black text-navy-900">65%</h3>
                    <p class="text-sm font-bold text-gray-700 uppercase tracking-wide mt-1">Savings in Cost/Time</p>
                    <p class="text-xs text-gray-500 mt-2">For DLSA lawyers on manual intake</p>
                </div>
                <div class="bg-callout-bg p-6 rounded-xl border border-callout-border text-center shadow-sm">
                    <i class="fa-solid fa-briefcase text-4xl text-orange-500 mb-3"></i>
                    <h3 class="text-3xl font-black text-navy-900">1,200+</h3>
                    <p class="text-sm font-bold text-gray-700 uppercase tracking-wide mt-1">Jobs Empowered</p>
                    <p class="text-xs text-gray-500 mt-2">Para-legal volunteers & CSC operators</p>
                </div>
            </div>

            <!-- Pillars -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 accent-border-left">
                    <h3 class="text-lg font-bold text-navy-900 mb-2">Social Impact</h3>
                    <p class="text-sm text-gray-600">Prevents prolonged undertrial detention; protects vulnerable gig workers, tenants, and women SHGs from predatory contracts.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 accent-border-left">
                    <h3 class="text-lg font-bold text-navy-900 mb-2">Sustainability Model</h3>
                    <p class="text-sm text-gray-600">Tiered B2G/B2B model — 100% free for citizens via CSR & Dept of Justice grants, cross-subsidized by enterprise HR licenses.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 accent-border-left">
                    <h3 class="text-lg font-bold text-navy-900 mb-2">Scale-Up Plan</h3>
                    <p class="text-sm text-gray-600">Rollout across 28 states via lightweight WhatsApp bot + deep integration with 250,000+ Gram Panchayats via CSC network.</p>
                </div>
            </div>

            <!-- Roadmap & Tech -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 class="text-xl font-bold text-navy-900 mb-6">12-Month Implementation Roadmap</h2>

                    <div class="relative pl-6 border-l-2 border-orange-500 space-y-6">
                        <div class="relative">
                            <div class="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-green-500 border-4 border-white shadow"></div>
                            <h4 class="font-bold text-sm text-navy-900">Idea & PoC <span class="text-green-600 ml-2">✓ Done</span></h4>
                        </div>
                        <div class="relative">
                            <div class="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-orange-500 border-4 border-white shadow animate-pulse"></div>
                            <h4 class="font-bold text-sm text-navy-900">Working Prototype <span class="text-orange-500 ml-2">(Current Stage)</span></h4>
                            <p class="text-xs text-gray-500 mt-1">Contract scanner & vernacular audio beta in 3 languages (Month 3).</p>
                        </div>
                        <div class="relative opacity-50">
                            <div class="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-gray-300 border-4 border-white shadow"></div>
                            <h4 class="font-bold text-sm text-navy-900">Field Pilot</h4>
                            <p class="text-xs text-gray-500 mt-1">DLSA pilot & bail engine refinement (Month 6).</p>
                        </div>
                        <div class="relative opacity-50">
                            <div class="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-gray-300 border-4 border-white shadow"></div>
                            <h4 class="font-bold text-sm text-navy-900">Ready to Deploy</h4>
                            <p class="text-xs text-gray-500 mt-1">Pan-state rollout & e-Courts cause-list tracker integration (Month 12).</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 class="text-xl font-bold text-navy-900 mb-6">Architecture & Unit Economics</h2>
                    <div class="space-y-4">
                        <div>
                            <h4 class="font-bold text-sm text-gray-700">Technology Stack</h4>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <span class="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-200">React / JS</span>
                                <span class="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-200">Tesseract/PaddleOCR</span>
                                <span class="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-200">LlamaIndex/Milvus</span>
                                <span class="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-200">Bhasini API (Audio)</span>
                            </div>
                        </div>
                        <div class="pt-4 border-t border-gray-100">
                            <h4 class="font-bold text-sm text-gray-700">Estimated Unit Cost</h4>
                            <p class="text-sm mt-1 text-gray-600"><strong class="text-navy-900">₹0.40 to ₹0.80</strong> per query (quantized models & cloud OCR).</p>
                            <p class="text-sm mt-1 text-gray-600"><strong class="text-navy-900">₹1.2 Lakhs</strong> pilot budget for 10,000 citizen consultations.</p>
                        </div>
                        <div class="pt-4 border-t border-gray-100">
                            <h4 class="font-bold text-sm text-gray-700 mb-2">Support Required from SEVA</h4>
                            <ul class="text-sm text-gray-600 list-disc pl-5 space-y-1">
                                <li>Pilot with DLSA / Dept of Justice</li>
                                <li>Funding/grant support for cloud hosting</li>
                                <li>DPDP data privacy certification & Incubation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Team -->
            <h2 class="text-2xl font-bold text-center text-navy-900 mb-8">Team BLACK MOON</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:border-orange-500 transition-colors">
                    <div class="w-20 h-20 bg-navy-100 rounded-full mx-auto mb-4 flex items-center justify-center text-navy-900 text-2xl font-bold">
                        SY
                    </div>
                    <h3 class="font-bold text-navy-900">Sunny Yadav</h3>
                    <p class="text-xs text-orange-500 font-bold mb-2">Team Lead & Systems</p>
                    <p class="text-xs text-gray-500">B.E. Comp. • Distributed Systems & Architecture</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:border-orange-500 transition-colors">
                    <div class="w-20 h-20 bg-navy-100 rounded-full mx-auto mb-4 flex items-center justify-center text-navy-900 text-2xl font-bold">
                        SY
                    </div>
                    <h3 class="font-bold text-navy-900">Sourabh Yadav</h3>
                    <p class="text-xs text-orange-500 font-bold mb-2">AI / ML Engineer</p>
                    <p class="text-xs text-gray-500">B.E. Comp. • NLP, RAG Pipelines & Embeddings</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:border-orange-500 transition-colors">
                    <div class="w-20 h-20 bg-navy-100 rounded-full mx-auto mb-4 flex items-center justify-center text-navy-900 text-2xl font-bold">
                        PY
                    </div>
                    <h3 class="font-bold text-navy-900">Premdayal Yadav</h3>
                    <p class="text-xs text-orange-500 font-bold mb-2">Full-Stack Developer</p>
                    <p class="text-xs text-gray-500">B.E. Comp. • React PWA/JS, Cloud APIs & Bot</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:border-orange-500 transition-colors">
                    <div class="w-20 h-20 bg-navy-100 rounded-full mx-auto mb-4 flex items-center justify-center text-navy-900 text-2xl font-bold">
                        ST
                    </div>
                    <h3 class="font-bold text-navy-900">Sushil Tiwari</h3>
                    <p class="text-xs text-orange-500 font-bold mb-2">Legal Data Engineering</p>
                    <p class="text-xs text-gray-500">B.E. Comp. • Statutory Corpora & DPDP Compliance</p>
                </div>

            </div>
        </div>
    </div>`;
}

// 4. Initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('Jurix App initialized');

    // Handle navigation clicks
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            navigateTo(page);
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Handle initial route based on hash
    const hash = window.location.hash.replace('#/', '');
    navigateTo(hash || 'home');

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.replace('#/', '');
        navigateTo(hash || 'home');
    });
});

// --- PAGE 2 LOGIC ---
const sampleDocuments = {
    1: "RESIDENTIAL LEASE AGREEMENT\n\n1. The Tenant shall deposit a sum of Rs. 50,000 as security deposit. If the Tenant vacates before 6 months, the entire deposit shall be forfeited.\n2. The Landlord reserves the right to evict the Tenant with a 3-day notice without assigning any reason.\n3. The Tenant shall bear all costs for structural repairs of the premises, including roof and plumbing.",
    2: "DELIVERY PARTNER BOND\n\n1. The Partner agrees to a Rs. 50,000 penalty bond if they leave the platform within 1 year of training.\n2. The Company reserves the unilateral right to deduct up to 40% of weekly wages for customer complaints.\n3. The Partner waives all rights to approach the Labor Court and agrees to mandatory arbitration in Delhi.",
    3: "MICRO-FINANCE LOAN AGREEMENT\n\n1. The Borrower (SHG Member) agrees to an interest rate of 36% per annum, compounding monthly.\n2. In event of default of a single weekly EMI, the Lender retains the right for immediate household asset seizure without notice.",
    4: "MAGISTRATE COURT NOTICE\n\nNotice under Section 35 of the BNSS (formerly Sec 41A CrPC). You are hereby directed to appear before the Investigating Officer on 15/10/2023 regarding FIR No. 102/2023 under Section 316 BNS (Criminal Breach of Trust). Failure to appear may result in immediate non-bailable arrest."
};

const mockAuditResults = {
    1: {
        score: 85,
        level: "High Risk",
        redFlags: 2,
        cautions: 1,
        fair: 0,
        clauses: [
            { original: "If the Tenant vacates before 6 months, the entire deposit shall be forfeited.", plain: "You will lose your entire deposit if you move out before 6 months.", type: "red", citation: "Indian Contract Act, Sec 74 (Penalty clause)" },
            { original: "The Landlord reserves the right to evict the Tenant with a 3-day notice without assigning any reason.", plain: "The owner can kick you out with just 3 days' warning, for no reason.", type: "red", citation: "Rent Control Act (Unreasonable Eviction)" },
            { original: "The Tenant shall bear all costs for structural repairs...", plain: "You have to pay for major building repairs like the roof.", type: "caution", citation: "Standard Lease Norms" }
        ]
    },
    2: {
        score: 90,
        level: "High Risk",
        redFlags: 3,
        cautions: 0,
        fair: 0,
        clauses: [
            { original: "Rs. 50,000 penalty bond if they leave... within 1 year", plain: "You must pay a huge fine if you quit in the first year.", type: "red", citation: "Indian Contract Act, Sec 27" },
            { original: "Unilateral right to deduct up to 40% of weekly wages", plain: "They can take almost half your pay just because a customer complained.", type: "red", citation: "Payment of Wages Act" },
            { original: "Waives all rights to approach the Labor Court", plain: "You cannot go to a labor court if they cheat you.", type: "red", citation: "Indian Contract Act, Sec 28" }
        ]
    },
    3: {
        score: 75,
        level: "High Risk",
        redFlags: 2,
        cautions: 0,
        fair: 0,
        clauses: [
            { original: "Interest rate of 36% per annum, compounding monthly", plain: "The interest rate is extremely high and grows every month.", type: "red", citation: "Usurious Loans Act" },
            { original: "Immediate household asset seizure without notice", plain: "They can take your home belongings instantly if you miss one payment.", type: "red", citation: "SARFAESI Act / Civil Procedure Code" }
        ]
    },
    4: {
        score: 40,
        level: "Caution",
        redFlags: 0,
        cautions: 2,
        fair: 1,
        clauses: [
            { original: "Notice under Section 35 of the BNSS", plain: "The police want to question you. This is a notice to appear, not an arrest warrant.", type: "caution", citation: "BNSS Sec. 35" },
            { original: "Failure to appear may result in immediate non-bailable arrest", plain: "If you don't go, the police might get permission to arrest you without bail.", type: "red", citation: "BNSS Sec. 35(3)" },
            { original: "Section 316 BNS (Criminal Breach of Trust)", plain: "You are accused of breaking someone's trust with their money or property.", type: "fair", citation: "BNS Sec. 316" }
        ]
    }
};

let currentSelectedDoc = null;

window.loadSampleDoc = function(id) {
    const textarea = document.getElementById('doc-input');
    if(textarea) {
        // Add some dummy PII to demonstrate redaction
        let docText = sampleDocuments[id];
        if (id === 1) docText += "\nTenant Phone: +91-9876543210\nAadhaar: 1234-5678-9012";
        textarea.value = docText;
        currentSelectedDoc = id;
    }
}

window.handleFileUpload = function(event) {
    const file = event.target.files[0];
    if (file) {
        document.getElementById('doc-input').value = `[Extracted text from ${file.name}]\n\n... (Simulated OCR content) ...`;
        currentSelectedDoc = 1; // Default to doc 1 mock logic for simulation
    }
}

window.togglePiiRedaction = function() {
    const toggle = document.getElementById('pii-toggle');
    const textarea = document.getElementById('doc-input');
    const stats = document.getElementById('pii-stats');

    if(toggle.checked && textarea.value) {
        let text = textarea.value;
        let count = 0;

        // Simple Regex for Indian Phone
        const phoneRegex = /(?:\+91-?|0)?\d{10}/g;
        if(phoneRegex.test(text)) {
            count += text.match(phoneRegex).length;
            text = text.replace(phoneRegex, '[REDACTED_PHONE]');
        }

        // Simple Regex for Aadhaar
        const aadhaarRegex = /\d{4}-\d{4}-\d{4}/g;
        if(aadhaarRegex.test(text)) {
            count += text.match(aadhaarRegex).length;
            text = text.replace(aadhaarRegex, '[REDACTED_AADHAAR]');
        }

        textarea.value = text;

        if(count > 0) {
            stats.innerHTML = `<i class="fa-solid fa-shield-halved mr-1"></i> ${count} PII items auto-redacted locally`;
            stats.classList.remove('hidden');
        }
    } else {
        stats.classList.add('hidden');
    }
}

window.runAudit = function() {
    const textarea = document.getElementById('doc-input');
    if(!textarea.value) {
        alert("Please select or paste a document first.");
        return;
    }

    // trigger PII redaction first
    if(document.getElementById('pii-toggle').checked) {
        togglePiiRedaction();
    }

    const docId = currentSelectedDoc || 1; // Default to 1 if typed manually for mock
    const result = mockAuditResults[docId];

    // Store in global state for Page 4
    globalState.contractAudit = {
        text: textarea.value.substring(0, 100) + "...",
        audit: result
    };

    // Update UI
    document.getElementById('audit-placeholder').classList.add('hidden');
    const container = document.getElementById('audit-results-container');
    container.classList.remove('hidden');

    // Update header stats
    const badge = document.getElementById('risk-score-badge');
    badge.innerText = `${result.level} (${result.score}/100)`;
    if(result.score > 80) {
        badge.className = "px-3 py-1 rounded-full text-sm font-bold bg-red-100 text-red-800";
    } else {
        badge.className = "px-3 py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-800";
    }

    document.getElementById('red-flag-count').innerText = result.redFlags;
    document.getElementById('caution-count').innerText = result.cautions;
    document.getElementById('fair-count').innerText = result.fair;

    // Render clauses
    const clausesHtml = result.clauses.map((c, i) => {
        const bgClass = c.type === 'red' ? 'bg-red-50 border-red-200' : (c.type === 'caution' ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200');
        const iconClass = c.type === 'red' ? 'text-red-500 fa-triangle-exclamation' : (c.type === 'caution' ? 'text-yellow-500 fa-circle-exclamation' : 'text-green-500 fa-circle-check');
        const borderClass = c.type === 'red' ? 'border-l-4 border-l-red-500' : (c.type === 'caution' ? 'border-l-4 border-l-yellow-500' : 'border-l-4 border-l-green-500');

        return `
        <div class="border rounded-lg p-4 ${bgClass} ${borderClass}">
            <div class="flex justify-between items-start mb-2">
                <span class="text-xs font-bold text-gray-500 uppercase"><i class="fa-solid ${iconClass} mr-1"></i> ${c.type} Clause</span>
                <span class="text-xs bg-white border border-gray-300 px-2 py-1 rounded text-navy-800 font-medium">${c.citation}</span>
            </div>
            <div class="mb-3">
                <p class="text-xs text-gray-600 line-through">"${c.original}"</p>
            </div>
            <div class="bg-white p-3 rounded border border-gray-200 shadow-sm relative">
                <h4 class="text-xs font-bold text-navy-900 mb-1">Plain Language Translation:</h4>
                <p class="text-sm font-medium text-gray-900" id="plain-text-${i}">${c.plain}</p>
                <button onclick="playAudio('plain-text-${i}')" class="absolute bottom-2 right-2 text-orange-500 hover:text-orange-600 focus:outline-none">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
        </div>`;
    }).join('');

    document.getElementById('clauses-container').innerHTML = clausesHtml;
}

window.playAudio = function(elementId) {
    const text = document.getElementById(elementId).innerText;
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Basic language mapping for TTS if supported by browser
        const langMap = {
            'en': 'en-IN',
            'hi': 'hi-IN',
            'mr': 'mr-IN',
            'ta': 'ta-IN',
            'te': 'te-IN'
        };
        const langCode = langMap[globalState.currentLanguage] || 'en-IN';
        utterance.lang = langCode;

        window.speechSynthesis.speak(utterance);
    } else {
        alert("Text-to-speech is not supported in this browser.");
    }
}

window.sendToLegalBrief = function() {
    navigateTo('legal-brief');
}

// --- PAGE 3 LOGIC ---
const timelineStages = {
    1: { title: "Stage 1: FIR & First Remand", desc: "Within 24 hours of arrest, you must be presented before a magistrate. You have the right to legal counsel.", rights: ["Right to know grounds of arrest", "Right to inform a relative", "Right to a lawyer"] },
    2: { title: "Stage 2: Police Investigation & Charge Sheet", desc: "Police have 60 or 90 days to file a charge sheet, depending on the offense. If they fail, you are entitled to Default Bail.", rights: ["Right to default bail if delayed", "Right against self-incrimination"] },
    3: { title: "Stage 3: BNSS Sec. 479 Undertrial Bail Review", desc: "Mandatory bail eligibility kicks in based on the maximum sentence for the offense. 1/3rd time for first-timers, 1/2 for others.", rights: ["Mandatory release on personal bond", "No surety required if indigent"] },
    4: { title: "Stage 4: Framing of Charges", desc: "The court formally reads out the charges against you. You can plead guilty or claim trial.", rights: ["Right to discharge if evidence is weak", "Right to translated documents"] },
    5: { title: "Stage 5: Trial & Final Disposal", desc: "Examination of witnesses and final arguments.", rights: ["Right to cross-examine witnesses", "Right to speedy trial"] }
};

window.updateBailCalcPresets = function() {
    const preset = document.getElementById('offense-preset').value;
    const maxSentenceSlider = document.getElementById('max-sentence');
    const timeServedSlider = document.getElementById('time-served');
    const firstTimeCheckbox = document.getElementById('first-time-offender');

    if (preset === 'non-heinous') {
        maxSentenceSlider.value = 7;
        timeServedSlider.value = 30; // ~2.5 years
        firstTimeCheckbox.checked = true;
    } else if (preset === 'bailable') {
        maxSentenceSlider.value = 1;
        timeServedSlider.value = 1;
        firstTimeCheckbox.checked = true;
    } else if (preset === 'financial') {
        maxSentenceSlider.value = 3;
        timeServedSlider.value = 15;
        firstTimeCheckbox.checked = true;
    }

    updateBailCalcDisplay();
}

window.updateBailCalcDisplay = function() {
    if(!document.getElementById('max-sentence')) return; // Page not loaded

    const maxYears = parseInt(document.getElementById('max-sentence').value);
    const maxMonths = maxYears * 12;
    const timeServed = parseInt(document.getElementById('time-served').value);
    const isFirstTime = document.getElementById('first-time-offender').checked;

    document.getElementById('max-sentence-val').innerText = maxYears;
    document.getElementById('time-served-val').innerText = timeServed;

    const fraction = isFirstTime ? (1/3) : (1/2);
    const fractionText = isFirstTime ? "1/3rd" : "1/2";
    const thresholdMonths = Math.ceil(maxMonths * fraction);

    document.getElementById('threshold-text').innerText = fractionText;
    document.getElementById('threshold-months-val').innerText = thresholdMonths;

    const banner = document.getElementById('verdict-banner');
    const subtext = document.getElementById('verdict-subtext');
    const progressBar = document.getElementById('progress-bar');

    // Calculate percentage for progress bar (cap at 100%)
    let progressPercent = (timeServed / thresholdMonths) * 100;
    if (progressPercent > 100) progressPercent = 100;

    progressBar.style.width = `${progressPercent}%`;
    // We position the threshold marker at 100% of the threshold length. The bar itself is the threshold container conceptually,
    // but a better visualization is time served relative to threshold.

    let isEligible = timeServed >= thresholdMonths;

    if (isEligible) {
        banner.className = "bg-green-500 text-white p-4 rounded-lg text-center font-bold mb-6 shadow-inner relative z-10 border border-green-400";
        banner.innerText = "ELIGIBLE FOR MANDATORY BAIL UNDER BNSS SEC. 479";
        subtext.innerText = `Citizen has served ${timeServed} months, which meets or exceeds the mandatory ${fractionText} threshold (${thresholdMonths} months).`;
        progressBar.classList.replace('bg-orange-500', 'bg-green-500');
    } else {
        const remaining = thresholdMonths - timeServed;
        banner.className = "bg-red-500 text-white p-4 rounded-lg text-center font-bold mb-6 shadow-inner relative z-10 border border-red-400";
        banner.innerText = `NOT YET ELIGIBLE (${remaining} MONTHS REMAINING)`;
        subtext.innerText = `Citizen has served ${timeServed} months. Need ${remaining} more months to reach the ${fractionText} threshold of ${thresholdMonths} months.`;
        progressBar.classList.replace('bg-green-500', 'bg-orange-500');
    }

    // Save state globally
    globalState.bailCalculation = {
        maxYears,
        timeServed,
        isFirstTime,
        thresholdMonths,
        isEligible
    };
}

window.showTimelineStage = function(stageNum) {
    // Update active button state
    document.querySelectorAll('.timeline-btn').forEach(btn => {
        if(parseInt(btn.dataset.stage) === stageNum) {
            btn.classList.remove('bg-gray-300', 'bg-navy-900');
            btn.classList.add('bg-orange-500', 'ring-4', 'ring-orange-100');
        } else if (parseInt(btn.dataset.stage) < stageNum) {
            btn.classList.remove('bg-gray-300', 'bg-orange-500', 'ring-4', 'ring-orange-100');
            btn.classList.add('bg-navy-900');
        } else {
            btn.classList.remove('bg-navy-900', 'bg-orange-500', 'ring-4', 'ring-orange-100');
            btn.classList.add('bg-gray-300');
        }
    });

    const data = timelineStages[stageNum];
    const detailsHtml = `
        <h3 class="text-lg font-bold text-navy-900 mb-2">${data.title}</h3>
        <p class="text-sm text-gray-700 mb-4">${data.desc}</p>
        <h4 class="text-xs font-bold text-gray-500 uppercase mb-2">Citizen Rights at this Stage:</h4>
        <ul class="list-disc pl-5 text-sm text-navy-800 font-medium">
            ${data.rights.map(r => `<li>${r}</li>`).join('')}
        </ul>
    `;
    document.getElementById('timeline-details').innerHTML = detailsHtml;
}

window.saveBailStateAndNavigate = function() {
    updateBailCalcDisplay();
    navigateTo('legal-brief');
}

// Ensure default state is set when script loads
setTimeout(() => {
    // mock some initial global state
    if(!globalState.bailCalculation) {
        globalState.bailCalculation = { maxYears: 7, timeServed: 30, isFirstTime: true, thresholdMonths: 28, isEligible: true };
    }
}, 500);

// Hook into router to init specific page JS
const originalNavigateTo = window.navigateTo;
window.navigateTo = function(pageId) {
    originalNavigateTo(pageId);
    if(pageId === 'bail-tracker') {
        setTimeout(() => {
            updateBailCalcDisplay();
            showTimelineStage(3); // Default to stage 3
        }, 50);
    }
}

// --- PAGE 4 LOGIC ---
window.simulateWhatsApp = function() {
    document.getElementById('wa-modal').classList.remove('hidden');
}

window.populateLegalBrief = function() {
    if(!document.getElementById('brief-summary')) return;

    let summaryText = "The citizen has requested assistance.";
    let citations = new Set();

    // Populate Contract Data
    if(globalState.contractAudit) {
        const audit = globalState.contractAudit.audit;
        summaryText = `Citizen presented a document analyzed as ${audit.level} (${audit.score}/100) with ${audit.redFlags} red-flag clauses requiring immediate review.`;

        let contractHtml = audit.clauses.map(c => {
            citations.add(c.citation);
            const color = c.type === 'red' ? 'text-red-600' : (c.type === 'caution' ? 'text-yellow-600' : 'text-green-600');
            return `<div class="mb-2"><strong class="${color} uppercase text-[10px]">${c.type}:</strong> <span class="font-medium">${c.plain}</span></div>`;
        }).join('');
        document.getElementById('brief-contract-data').innerHTML = contractHtml;
    }

    // Populate Bail Data
    if(globalState.bailCalculation) {
        const bail = globalState.bailCalculation;
        if(globalState.contractAudit) summaryText += " Additionally, undertrial status evaluated.";
        else summaryText = "Citizen requires assistance regarding undertrial detention under BNSS Sec 479.";

        let bailHtml = `
            <div class="grid grid-cols-2 gap-2 mb-2">
                <div class="bg-gray-100 p-2 rounded">
                    <span class="block text-[10px] text-gray-500 uppercase">Max Sentence</span>
                    <strong class="text-sm">${bail.maxYears} Yrs</strong>
                </div>
                <div class="bg-gray-100 p-2 rounded">
                    <span class="block text-[10px] text-gray-500 uppercase">Time Served</span>
                    <strong class="text-sm">${bail.timeServed} Mos</strong>
                </div>
            </div>
            <div class="p-2 border rounded ${bail.isEligible ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}">
                <span class="font-bold text-xs ${bail.isEligible ? 'text-green-700' : 'text-red-700'}">
                    ${bail.isEligible ? 'ELIGIBLE FOR MANDATORY BAIL' : 'NOT YET ELIGIBLE'}
                </span>
                <p class="text-[10px] mt-1 text-gray-600">Threshold: ${bail.thresholdMonths} months (First-time offender: ${bail.isFirstTime ? 'Yes' : 'No'})</p>
            </div>
        `;
        document.getElementById('brief-bail-data').innerHTML = bailHtml;
        citations.add("Bharatiya Nagarik Suraksha Sanhita (BNSS) Sec 479");
    }

    document.getElementById('brief-summary').innerText = summaryText;

    if(citations.size > 0) {
        document.getElementById('brief-citations').innerHTML = Array.from(citations).map(c => `<li>${c}</li>`).join('');
    }
}

// Hook into router to populate brief when visited
const originalNavigateToBrief = window.navigateTo;
window.navigateTo = function(pageId) {
    originalNavigateToBrief(pageId);
    if(pageId === 'legal-brief') {
        setTimeout(populateLegalBrief, 50);
    }
}

// Global Language Change Handler
document.addEventListener('DOMContentLoaded', () => {
    const langSelects = [document.getElementById('language-switcher'), document.getElementById('mobile-language-switcher')];

    langSelects.forEach(select => {
        if(select) {
            select.addEventListener('change', (e) => {
                globalState.currentLanguage = e.target.value;
                // Sync the other select
                langSelects.forEach(s => { if(s && s !== e.target) s.value = e.target.value; });

                // Note: Real app would trigger translations here.
                console.log(`Language switched to: ${globalState.currentLanguage}. System configured to handle TTS and future localized text rendering.`);
            });
        }
    });
});

// Ensure default state is set when script loads
setTimeout(() => {
    // mock some initial global state
    if(!globalState.bailCalculation) {
        globalState.bailCalculation = { maxYears: 7, timeServed: 30, isFirstTime: true, thresholdMonths: 28, isEligible: true };
    }

    // Add default contract audit state as requested
    if(!globalState.contractAudit) {
        globalState.contractAudit = {
            text: sampleDocuments[1].substring(0, 100) + "...",
            audit: mockAuditResults[1]
        };
    }
}, 500);
