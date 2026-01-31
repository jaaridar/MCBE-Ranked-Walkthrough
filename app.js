/* ============================================
   MCBE Ranked - Vanilla JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initCapabilities();
    initWalkthrough();
    initBackendTransparency();
    initSurveyInsights();
    initRoadmap();
    initClosureSection();
    initParticles();
    initVideo();
});

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // Scroll handler for navbar background
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active section
        updateActiveSection();
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Navigation click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const section = this.dataset.section;
            scrollToSection(section);

            // Close mobile menu
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function updateActiveSection() {
    const sections = ['hero', 'architecture', 'capabilities', 'walkthrough', 'backend', 'survey', 'plan', 'video', 'closure'];
    const scrollPosition = window.scrollY + 200;

    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                // Update nav links
                document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('section-visible');
                    }, index * 100);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.hidden-section').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// CAPABILITIES SECTION
// ============================================
function initCapabilities() {
    const capabilities = [
        {
            icon: `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>`,
            title: 'Multi-Platform Support',
            description: 'Seamlessly connects players across Windows, iOS, Android, and Console platforms',
            gradient: 'linear-gradient(135deg, #60a5fa, #22d3ee)'
        },
        {
            icon: `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>`,
            title: 'Version Independent',
            description: 'Works with any Minecraft Bedrock Edition version without modifications',
            gradient: 'linear-gradient(135deg, #c084fc, #f472b6)'
        },
        {
            icon: `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>`,
            title: 'Real-Time Events',
            description: 'Live synchronization of game events with minimal latency',
            gradient: 'linear-gradient(135deg, #34d399, #2dd4bf)'
        },
        {
            icon: `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>`,
            title: 'Value Transparency',
            description: 'Honest, open approach to competitive integrity and fair play',
            gradient: 'linear-gradient(135deg, #fb923c, #fbbf24)'
        },
        {
            icon: `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>`,
            title: 'Global Accessibility',
            description: 'Connect from anywhere in the world via secure ngrok tunneling',
            gradient: 'linear-gradient(135deg, #fb7185, #ef4444)'
        },
        {
            icon: `<svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>`,
            title: 'Event Subscription',
            description: 'Subscribe to specific game events for targeted tracking',
            gradient: 'linear-gradient(135deg, #818cf8, #a78bfa)'
        }
    ];

    const grid = document.getElementById('capabilitiesGrid');
    if (!grid) return;

    capabilities.forEach((cap, i) => {
        const card = document.createElement('div');
        card.className = 'capability-card';
        card.style.transitionDelay = `${i * 100}ms`;

        card.innerHTML = `
            <div class="capability-glow" style="background: ${cap.gradient}"></div>
            <div class="capability-icon-wrapper" style="background: ${cap.gradient}">
                <div class="capability-icon">${cap.icon}</div>
            </div>
            <h3>${cap.title}</h3>
            <p>${cap.description}</p>
        `;

        grid.appendChild(card);
    });
}

// ============================================
// INTERACTIVE WALKTHROUGH
// ============================================
function initWalkthrough() {
    const steps = [
        {
            title: 'Start the Server',
            description: 'Launch the MCBE Ranked WebSocket server to begin accepting connections',
            command: 'node server.js',
            output: [
                '✓ WebSocket server initialized',
                '✓ Listening on port 19132',
                '✓ Ready to accept connections...'
            ]
        },
        {
            title: 'Connect via Ngrok',
            description: 'Create a secure tunnel for global accessibility using ngrok',
            command: 'ngrok tcp 19132',
            output: [
                'Session Status: online',
                'Forwarding: tcp://0.tcp.ngrok.io:12345 -> localhost:19132',
                '✓ Tunnel URL ready for players'
            ]
        },
        {
            title: 'Share the URL',
            description: 'Players can now connect from anywhere - Windows, Mobile, or Console',
            output: [
                '📋 Copy the ngrok URL',
                '📱 Share with players',
                '🌍 Connect from anywhere in the world'
            ]
        },
        {
            title: 'Players Connect',
            description: 'Both players join using the /connect command in Minecraft',
            command: '/connect wss://0.tcp.ngrok.io:12345',
            output: [
                '→ Player 1 connected (Windows)',
                '→ Player 2 connected (Mobile)',
                '✓ All players ready!'
            ]
        },
        {
            title: 'Match Begins',
            description: 'Real-time event synchronization starts automatically',
            output: [
                '🎮 Match initialized',
                '⚡ Event sync active',
                '🏁 Speedrun timer ready'
            ]
        }
    ];

    let currentStep = 0;
    let isTyping = false;
    let typeInterval = null;

    const stepsContainer = document.getElementById('walkthroughSteps');
    const terminalContent = document.getElementById('terminalContent');
    const stepDotsContainer = document.getElementById('stepDots');
    const prevBtn = document.getElementById('prevStepBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    if (!stepsContainer) return;

    // Create step buttons
    steps.forEach((step, index) => {
        const button = document.createElement('button');
        button.className = `step-button ${index === 0 ? 'active' : ''}`;
        button.innerHTML = `
            <div class="step-content">
                <div class="step-number">${index + 1}</div>
                <div class="step-info">
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                </div>
            </div>
        `;
        button.addEventListener('click', () => goToStep(index));
        stepsContainer.appendChild(button);
    });

    // Create step dots
    steps.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `step-dot ${index === 0 ? 'active' : ''}`;
        stepDotsContainer.appendChild(dot);
    });

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) goToStep(currentStep - 1);
    });

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) goToStep(currentStep + 1);
    });

    function goToStep(index) {
        if (typeInterval) clearInterval(typeInterval);
        currentStep = index;

        // Update step buttons
        document.querySelectorAll('.step-button').forEach((btn, i) => {
            btn.classList.remove('active', 'completed');
            if (i < index) btn.classList.add('completed');
            if (i === index) btn.classList.add('active');
        });

        // Update step dots
        document.querySelectorAll('.step-dot').forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) dot.classList.add('active');
        });

        // Update navigation buttons
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === steps.length - 1;

        // Animate terminal
        animateTerminal(steps[index]);
    }

    function animateTerminal(step) {
        terminalContent.innerHTML = '';

        if (step.command) {
            const commandLine = document.createElement('div');
            commandLine.className = 'terminal-line';
            commandLine.innerHTML = `<span class="terminal-prompt">$</span><span class="terminal-command"></span><span class="terminal-cursor">▊</span>`;
            terminalContent.appendChild(commandLine);

            const commandSpan = commandLine.querySelector('.terminal-command');
            const cursor = commandLine.querySelector('.terminal-cursor');

            let charIndex = 0;
            isTyping = true;

            typeInterval = setInterval(() => {
                if (charIndex <= step.command.length) {
                    commandSpan.textContent = step.command.slice(0, charIndex);
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    cursor.style.display = 'none';
                    isTyping = false;
                    showOutput(step.output);
                }
            }, 50);
        } else {
            showOutput(step.output);
        }
    }

    function showOutput(output) {
        if (!output) return;

        const outputContainer = document.createElement('div');
        outputContainer.className = 'terminal-output';
        terminalContent.appendChild(outputContainer);

        output.forEach((line, i) => {
            setTimeout(() => {
                const outputLine = document.createElement('div');
                outputLine.className = 'terminal-output-line';
                outputLine.textContent = line;
                outputContainer.appendChild(outputLine);
            }, (i + 1) * 400);
        });
    }

    // Initialize first step
    animateTerminal(steps[0]);
}

// ============================================
// BACKEND TRANSPARENCY
// ============================================
function initBackendTransparency() {
    const subscribedEvents = [
        { name: 'PlayerMessage', color: 'yellow' },
        { name: 'MobKilled', color: 'red' },
        { name: 'PlayerTravelled', color: 'blue' },
        { name: 'ItemAcquired', color: 'green' },
        { name: 'PlayerDied', color: 'red' }
    ];

    const eventTypes = [
        { event: 'PlayerMessage', data: 'message: "GG!", sender: Player1' },
        { event: 'MobKilled', data: 'entity: zombie, weapon: iron_sword' },
        { event: 'PlayerTravelled', data: 'distance: 15.2m, biome: plains' },
        { event: 'ItemAcquired', data: 'item: ender_pearl, count: 1' },
        { event: 'PlayerDied', data: 'cause: lava, pos: [100, 11, -50]' },
        { event: 'PlayerMessage', data: 'message: "Nether coords?", sender: Player2' },
        { event: 'MobKilled', data: 'entity: skeleton, weapon: bow' },
        { event: 'PlayerTravelled', data: 'distance: 120m, biome: nether_wastes' },
        { event: 'ItemAcquired', data: 'item: blaze_rod, count: 2' },
        { event: 'PlayerDied', data: 'cause: fall_damage, pos: [200, 64, 100]' }
    ];

    let isRunning = true;
    let eventInterval = null;
    let events = [];
    const maxEvents = 12;

    const eventsGrid = document.getElementById('subscribedEvents');
    const logContent = document.getElementById('eventLogContent');
    const toggleBtn = document.getElementById('toggleStreamBtn');
    const statusDot = document.getElementById('eventStatusDot');
    const logStatusDot = document.getElementById('logStatusDot');
    const statusText = document.getElementById('eventStatusText');

    if (!eventsGrid) return;

    // Create subscribed events tags
    subscribedEvents.forEach(evt => {
        const tag = document.createElement('div');
        tag.className = 'event-tag';
        tag.innerHTML = `
            <span class="event-dot ${evt.color}"></span>
            <span>${evt.name}</span>
        `;
        eventsGrid.appendChild(tag);
    });

    // Toggle stream button
    toggleBtn.addEventListener('click', () => {
        isRunning = !isRunning;

        if (isRunning) {
            toggleBtn.textContent = 'Pause Event Stream';
            toggleBtn.classList.remove('paused');
            statusDot.classList.add('active');
            logStatusDot.classList.add('active');
            statusText.textContent = 'Active';
            startEventStream();
        } else {
            toggleBtn.textContent = 'Resume Event Stream';
            toggleBtn.classList.add('paused');
            statusDot.classList.remove('active');
            logStatusDot.classList.remove('active');
            statusText.textContent = 'Paused';
            stopEventStream();
        }
    });

    function generateEvent() {
        const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
        const now = new Date();
        const timestamp = now.toTimeString().split(' ')[0];

        return {
            timestamp,
            event: randomEvent.event,
            data: randomEvent.data,
            type: 'event'
        };
    }

    function addInitialEvents() {
        const initEvents = subscribedEvents.slice(0, 4).map((evt, i) => {
            const now = new Date(Date.now() - (4 - i) * 1000);
            return {
                timestamp: now.toTimeString().split(' ')[0],
                event: 'Subscribe',
                data: `eventName: "${evt.name}"`,
                type: 'subscribe'
            };
        });

        events = initEvents;
        renderEvents();
    }

    function renderEvents() {
        if (!logContent) return;

        // Add newest event if it exists
        if (events.length > 0) {
            if (logContent.querySelector('.log-waiting')) {
                logContent.innerHTML = '';
            }

            const currentRenderedCount = logContent.querySelectorAll('.log-entry').length;

            // If we have new events to render
            if (currentRenderedCount < events.length) {
                // Just render the last one for smoothness
                const lastLog = events[events.length - 1];
                const entry = document.createElement('div');
                entry.className = 'log-entry';
                entry.style.opacity = '0';
                entry.style.transform = 'translateY(10px)';
                entry.style.transition = 'all 0.3s ease';

                entry.innerHTML = `
                    <span class="log-timestamp">[${lastLog.timestamp}]</span>
                    <span class="log-event ${lastLog.type === 'subscribe' ? 'subscribe' : lastLog.event}">${lastLog.event}</span>
                    <span class="log-arrow">→</span>
                    <span class="log-data">${lastLog.data}</span>
                `;
                logContent.appendChild(entry);

                // Animate in
                requestAnimationFrame(() => {
                    entry.style.opacity = '1';
                    entry.style.transform = 'translateY(0)';
                });

                // Maintain max count
                const entries = logContent.querySelectorAll('.log-entry');
                if (entries.length > maxEvents) {
                    entries[0].remove();
                }
            }
        }

        // Auto-scroll to bottom smoothly
        logContent.scrollTo({
            top: logContent.scrollHeight,
            behavior: 'smooth'
        });
    }

    function startEventStream() {
        if (eventInterval) stopEventStream();

        function queueNext() {
            const delay = 800 + Math.random() * 2000; // Randomized delay for realism
            eventInterval = setTimeout(() => {
                if (!isRunning) return;

                events.push(generateEvent());
                if (events.length > maxEvents) {
                    events = events.slice(-maxEvents);
                }
                renderEvents();
                queueNext();
            }, delay);
        }

        queueNext();
    }

    function stopEventStream() {
        if (eventInterval) {
            clearTimeout(eventInterval);
            eventInterval = null;
        }
    }

    // Start with initial events when section becomes visible
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && events.length === 0) {
                    addInitialEvents();
                    if (isRunning) startEventStream();
                }
            });
        },
        { threshold: 0.2 }
    );

    const backendSection = document.getElementById('backend');
    if (backendSection) {
        observer.observe(backendSection);
    }
}

// ============================================
// SURVEY INSIGHTS
// ============================================
function initSurveyInsights() {
    const insights = [
        { title: 'Cross-Platform Connection Issues', description: 'Players on different platforms (Windows, Mobile) struggle to connect reliably', icon: '🎮' },
        { title: 'No Real-Time Verification', description: 'Lack of automated systems to verify runs without manual video review', icon: '✅' },
        { title: 'Manual Coordination Overhead', description: 'Discord-based matchmaking requires constant manual coordination and scheduling', icon: '📅' },
        { title: 'High Latency for Global Players', description: 'Players from different regions face connection issues and unfair ping advantages', icon: '🌍' },
        { title: 'Lack of Transparent Event Logs', description: 'No accessible proof of fair play or event history for competitive matches', icon: '📋' },
        { title: 'Inconsistent Tournament Rules', description: 'Different community tournaments use varying rules causing confusion', icon: '📏' },
        { title: 'Mobile Player Exclusion', description: 'Mobile players feel left out due to platform-specific limitations', icon: '📱' },
        { title: 'Anti-Cheat Concerns', description: 'No reliable anti-cheat mechanisms specific to MCBE speedrunning', icon: '🛡️' }
    ];

    const grid = document.getElementById('insightsGrid');
    if (!grid) return;

    insights.forEach((insight, i) => {
        const card = document.createElement('div');
        card.className = 'insight-card';
        card.style.transitionDelay = `${i * 50}ms`;

        card.innerHTML = `
            <div class="insight-icon">${insight.icon}</div>
            <h3>${insight.title}</h3>
            <p>${insight.description}</p>
        `;

        grid.appendChild(card);
    });
}

// ============================================
// ROADMAP / OUR PLAN
// ============================================
function initRoadmap() {
    const plans = [
        {
            phase: 'phase1',
            title: 'Foundation Complete',
            status: 'completed',
            color: 'emerald',
            items: [
                'WebSocket server implementation',
                'Event subscription system',
                'Multi-client connection handling',
                'Ngrok tunnel integration',
                'Cross-platform testing (Windows & Mobile)'
            ]
        },
        {
            phase: 'phase2',
            title: 'Current Development',
            status: 'current',
            color: 'cyan',
            items: [
                'Real-time event logging dashboard',
                'Player authentication system',
                'Match session management',
                'Event replay functionality',
                'Automated run timing'
            ]
        },
        {
            phase: 'phase3',
            title: 'Integration Goals',
            status: 'upcoming',
            color: 'purple',
            items: [
                'Leaderboard integration',
                'Community tournament support',
                'Extended event tracking',
                'Statistics and analytics',
                'API for third-party tools'
            ]
        }
    ];

    const integratedFeatures = [
        { icon: '🔌', title: 'Seamless Connection', description: 'One-command setup for players to connect from any device' },
        { icon: '📊', title: 'Live Statistics', description: 'Real-time tracking of in-game events and performance metrics' },
        { icon: '🏆', title: 'Competition Ready', description: 'Built specifically for ranked speedrun matches' },
        { icon: '🔒', title: 'Secure Sessions', description: 'Encrypted connections through ngrok tunneling' }
    ];

    const roadmapContainer = document.getElementById('roadmap');
    const featuresContainer = document.getElementById('integratedFeatures');

    if (!roadmapContainer) return;

    let expandedPhase = 'phase1';

    // Create roadmap phases
    plans.forEach((plan, i) => {
        const phaseEl = document.createElement('div');
        phaseEl.className = `roadmap-phase ${plan.color} ${expandedPhase === plan.phase ? 'expanded' : ''}`;
        phaseEl.dataset.phase = plan.phase;

        const statusBadgeText = plan.status === 'completed' ? '✓ Completed' :
            plan.status === 'current' ? '◉ In Progress' : '○ Planned';

        const itemsHTML = plan.items.map(item => `
            <div class="phase-item ${plan.color}">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    ${plan.status === 'completed'
                ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />'
                : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />'}
                </svg>
                <span>${item}</span>
            </div>
        `).join('');

        phaseEl.innerHTML = `
            <button class="phase-header">
                <div class="phase-info">
                    <div class="phase-number ${plan.color}">${i + 1}</div>
                    <div>
                        <div class="phase-title">${plan.title}</div>
                        <div class="phase-badge ${plan.status}">${statusBadgeText}</div>
                    </div>
                </div>
                <svg class="phase-toggle" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div class="phase-content" style="${expandedPhase === plan.phase ? '' : 'display: none;'}">
                <div class="phase-items">${itemsHTML}</div>
            </div>
        `;

        // Toggle handler
        const header = phaseEl.querySelector('.phase-header');
        header.addEventListener('click', () => {
            const isExpanded = phaseEl.classList.contains('expanded');

            // Close all
            document.querySelectorAll('.roadmap-phase').forEach(el => {
                el.classList.remove('expanded');
                el.querySelector('.phase-content').style.display = 'none';
            });

            // Open if not already expanded
            if (!isExpanded) {
                phaseEl.classList.add('expanded');
                phaseEl.querySelector('.phase-content').style.display = 'block';
                expandedPhase = plan.phase;
            } else {
                expandedPhase = null;
            }
        });

        roadmapContainer.appendChild(phaseEl);
    });

    // Create integrated features
    if (featuresContainer) {
        integratedFeatures.forEach(feature => {
            const card = document.createElement('div');
            card.className = 'integrated-feature-card';
            card.innerHTML = `
                <div class="feature-emoji">${feature.icon}</div>
                <h4>${feature.title}</h4>
                <p>${feature.description}</p>
            `;
            featuresContainer.appendChild(card);
        });
    }
}

// ============================================
// CLOSURE SECTION
// ============================================
function initClosureSection() {
    const highlights = [
        { icon: '✓', text: 'Real-time event synchronization across platforms' },
        { icon: '✓', text: 'Two connected clients with WebSocket communication' },
        { icon: '✓', text: 'Global accessibility through ngrok tunneling' },
        { icon: '✓', text: 'Transparent event logging for fair competition' },
        { icon: '✓', text: 'Version independent - works with any MCBE version' },
        { icon: '✓', text: 'Community-driven development based on real feedback' }
    ];

    const grid = document.getElementById('highlightsGrid');
    if (!grid) return;

    highlights.forEach((item, i) => {
        const el = document.createElement('div');
        el.className = 'highlight-item';
        el.style.transitionDelay = `${i * 50}ms`;

        el.innerHTML = `
            <div class="highlight-icon">${item.icon}</div>
            <span>${item.text}</span>
        `;

        grid.appendChild(el);
    });
}

// ============================================
// PARTICLES
// ============================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${5 + Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// VIDEO SECTION
// ============================================
function initVideo() {
    const isLocal = window.location.protocol === 'file:';
    const videoWrapper = document.querySelector('.video-wrapper');
    const iframe = videoWrapper ? videoWrapper.querySelector('iframe') : null;
    const fallback = document.getElementById('videoFallback');

    if (isLocal && iframe && fallback) {
        // On local protocol, YouTube often blocks embeds.
        // We hide the iframe so it doesn't show the error screen,
        // and show the fallback button instead.
        iframe.style.display = 'none';
        fallback.style.zIndex = '10';
        fallback.style.background = 'rgba(10, 10, 15, 0.95)';
    }
}

// Make scrollToSection available globally
window.scrollToSection = scrollToSection;
