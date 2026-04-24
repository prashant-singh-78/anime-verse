// --- Data Definitions ---

const villages = [
    {
        id: 'leaf',
        name: 'Konohagakure',
        alias: 'The Hidden Leaf Village',
        leader: 'Nanadaime Hokage (Naruto Uzumaki)',
        description: 'The village hidden in the leaves, known for its strong Will of Fire and powerful shinobi like the Uchiha and Senju clans.',
        specialty: 'Strong sense of community and versatile ninjutsu.',
        shinobi: ['Kakashi Hatake', 'Sasuke Uchiha', 'Sakura Haruno'],
        color: 'var(--chakra-green)',
        icon: '🍃',
        pos: { top: '45%', left: '45%' }
    },
    {
        id: 'sand',
        name: 'Sunagakure',
        alias: 'The Hidden Sand Village',
        leader: 'Godaime Kazekage (Gaara)',
        description: 'Located in the middle of a vast desert, Sunagakure relies on wind-based techniques and puppet mastery.',
        specialty: 'Wind Style and Puppet Ninjutsu.',
        shinobi: ['Temari', 'Kankuro', 'Chiyo'],
        color: 'var(--chakra-gold)',
        icon: '⏳',
        pos: { top: '75%', left: '15%' }
    },
    {
        id: 'mist',
        name: 'Kirigakure',
        alias: 'The Hidden Mist Village',
        leader: 'Rokudaime Mizukage (Chojuro)',
        description: 'Once known as the "Bloody Mist," it has evolved into a modernized village known for its elite swordsmen.',
        specialty: 'Water Style and Silent Killing.',
        shinobi: ['Zabuza Momochi', 'Kisame Hoshigaki', 'Suigetsu Hozuki'],
        color: 'var(--chakra-blue)',
        icon: '🌫️',
        pos: { top: '65%', left: '85%' }
    },
    {
        id: 'cloud',
        name: 'Kumogakure',
        alias: 'The Hidden Cloud Village',
        leader: 'Godaime Raikage (Darui)',
        description: 'Built into high mountains, this village is known for its mastery of lightning style and high-speed combat.',
        specialty: 'Lightning Style and Kenjutsu.',
        shinobi: ['Killer B', 'A', 'Omoi'],
        color: 'var(--chakra-purple)',
        icon: '⚡',
        pos: { top: '20%', left: '75%' }
    },
    {
        id: 'stone',
        name: 'Iwagakure',
        alias: 'The Hidden Stone Village',
        leader: 'Yondaime Tsuchikage (Kurotsuchi)',
        description: 'A village surrounded by steep mountains that provide a natural defense. Known for the "Will of Stone."',
        specialty: 'Earth Style and Explosion Release.',
        shinobi: ['Onoki', 'Deidara', 'Akatsuchi'],
        color: 'var(--chakra-red)',
        icon: '🪨',
        pos: { top: '20%', left: '15%' }
    }
];

const characters = [
    {
        id: 'naruto',
        name: 'Naruto Uzumaki',
        hp: 120,
        maxHp: 120,
        atk: 22,
        type: 'Wind',
        special: 'Sage Art: Rasenshuriken',
        specialDmg: 50,
        color: '#ff9900',
        image: './naruto.png'
    },
    {
        id: 'sasuke',
        name: 'Sasuke Uchiha',
        hp: 100,
        maxHp: 100,
        atk: 25,
        type: 'Lightning',
        special: 'Indra\'s Arrow',
        specialDmg: 60,
        color: '#7700ff',
        image: './sasuke.png'
    },
    {
        id: 'kakashi',
        name: 'Kakashi Hatake',
        hp: 110,
        maxHp: 110,
        atk: 24,
        type: 'Lightning',
        special: 'Kamui Lightning Blade',
        specialDmg: 55,
        color: '#00ccff',
        image: './kakashi.png'
    },
    {
        id: 'itachi',
        name: 'Itachi Uchiha',
        hp: 95,
        maxHp: 95,
        atk: 28,
        type: 'Fire',
        special: 'Totsuka Blade Seal',
        specialDmg: 70,
        color: '#ff0033',
        image: './itachi.png'
    },
    {
        id: 'madara',
        name: 'Madara Uchiha',
        hp: 200,
        maxHp: 200,
        atk: 32,
        type: 'Uchiha Legend',
        special: 'Shattered Heaven',
        specialDmg: 85,
        color: '#cc0000',
        image: './madara.png'
    },
    {
        id: 'obito',
        name: 'Obito Uchiha',
        hp: 180,
        maxHp: 180,
        atk: 26,
        type: 'Space-Time',
        special: 'Kamui Shuriken',
        specialDmg: 65,
        color: '#ff5500',
        image: './obito.png'
    },
    {
        id: 'minato',
        name: 'Minato Namikaze',
        hp: 130,
        maxHp: 130,
        atk: 35,
        type: 'Yellow Flash',
        special: 'Flying Raijin: Level 2',
        specialDmg: 80,
        color: '#ffff00',
        image: './minato.png'
    },
    {
        id: 'pain',
        name: 'Pain (Nagato)',
        hp: 170,
        maxHp: 170,
        atk: 30,
        type: 'Deity',
        special: 'Shinra Tensei',
        specialDmg: 75,
        color: '#ff6600',
        image: './pain.png'
    },
    {
        id: 'hashirama',
        name: 'Hashirama Senju',
        hp: 250,
        maxHp: 250,
        atk: 30,
        type: 'Wood Style',
        special: 'Shinsu Senju',
        specialDmg: 90,
        color: '#006600',
        image: './hashirama.png'
    },
    {
        id: 'jiraiya',
        name: 'Jiraiya',
        hp: 140,
        maxHp: 140,
        atk: 24,
        type: 'Sage Mode',
        special: 'Giant Flame Rasengan',
        specialDmg: 60,
        color: '#ff4d4d',
        image: './jiraiya.png',
        spriteFallback: '100% 0%'
    },
    {
        id: 'tsunade',
        name: 'Tsunade',
        hp: 190,
        maxHp: 190,
        atk: 30,
        type: 'Medical Ninja',
        special: 'Hundred Healings Strike',
        specialDmg: 55,
        color: '#00cc66',
        image: './tsunade.png',
        spriteFallback: '66.6% 0%'
    },
    {
        id: 'orochimaru',
        name: 'Orochimaru',
        hp: 120,
        maxHp: 120,
        atk: 22,
        type: 'Serpent',
        special: 'Forbidden Rebirth',
        specialDmg: 70,
        color: '#9933ff',
        image: './orochimaru.png',
        spriteFallback: '0% 33.3%'
    },
    {
        id: 'mightguy',
        name: 'Might Guy',
        hp: 100,
        maxHp: 100,
        atk: 45,
        type: 'Taijutsu Master',
        special: 'Night Guy',
        specialDmg: 120,
        color: '#00ff00',
        image: './mightguy.png'
    },
    {
        id: 'kisame',
        name: 'Kisame Hoshigaki',
        hp: 200,
        maxHp: 200,
        atk: 25,
        type: 'Seven Swordsman',
        special: 'Water Prison Shark',
        specialDmg: 55,
        color: '#0000ff',
        image: './kisame.png',
        spriteFallback: '100% 33.3%'
    },
    {
        id: 'sakura',
        name: 'Sakura Haruno',
        hp: 130,
        maxHp: 130,
        atk: 25,
        type: 'Medical/Strength',
        special: 'Cherry Blossom Burst',
        specialDmg: 60,
        color: '#ffc0cb',
        image: './extras_set.png',
        focal: '0% center',
        spriteFallback: '33.3% 66.6%'
    },
    {
        id: 'hinata',
        name: 'Hinata Hyuga',
        hp: 110,
        maxHp: 110,
        atk: 20,
        type: 'Gentle Step',
        special: 'Twin Lion Fists',
        specialDmg: 55,
        color: '#e6e6fa',
        image: './hinata.png',
        spriteFallback: '66.6% 66.6%'
    },
    {
        id: 'rocklee',
        name: 'Rock Lee',
        hp: 120,
        maxHp: 120,
        atk: 35,
        type: '8 Gates Master',
        special: 'Hidden Lotus',
        specialDmg: 75,
        color: '#228b22',
        image: './rocklee.jpg',
        specialImage: './rocklee_special.jpg',
        spriteFallback: '100% 66.6%'
    },
    {
        id: 'tobirama',
        name: 'Tobirama Senju',
        hp: 150,
        maxHp: 150,
        atk: 28,
        type: 'Water Dragon',
        special: 'Water Colliding Wave',
        specialDmg: 65,
        color: '#4169e1',
        image: './tobirama.png'
    },
    {
        id: 'kaguya',
        name: 'Kaguya Otsutsuki',
        hp: 300,
        maxHp: 300,
        atk: 40,
        type: 'Goddess',
        special: 'Truth Seeking Orb',
        specialDmg: 100,
        color: '#ffffff',
        image: './kaguya.png'
    },
    {
        id: 'gaara',
        name: 'Gaara of the Desert',
        hp: 180,
        maxHp: 180,
        atk: 25,
        type: 'Sand',
        special: 'Imperial Sand Burial',
        specialDmg: 70,
        color: '#a0522d',
        image: './gaara.png',
        spriteFallback: '0% 100%'
    },
    {
        id: 'konan',
        name: 'Konan',
        hp: 120,
        maxHp: 120,
        atk: 28,
        type: 'Paper',
        special: 'Paper Person of God',
        specialDmg: 80,
        color: '#b0c4de',
        image: './konan.png',
        spriteFallback: '66.6% 33.3%'
    }
];

const quizQuestions = [
    {
        question: "When faced with an overwhelming enemy, what is your first move?",
        options: [
            { text: "Charge in head-first with everything I've got!", type: "aggressive" },
            { text: "Observe from the shadows and find a weakness.", type: "strategic" },
            { text: "Protect my teammates and wait for orders.", type: "leader" },
            { text: "Analyze the terrain and escape if necessary.", type: "solo" }
        ]
    },
    {
        question: "What do you value most in a teammate?",
        options: [
            { text: "Sheer destructive power.", type: "aggressive" },
            { text: "Intelligence and tactical planning.", type: "strategic" },
            { text: "Unwavering loyalty and friendship.", type: "leader" },
            { text: "The ability to stay out of my way.", type: "solo" }
        ]
    },
    {
        question: "Choose your preferred primary weapon of choice:",
        options: [
            { text: "Massive chakra-infused energy blasts.", type: "aggressive" },
            { text: "Strategically placed traps and kunai.", type: "strategic" },
            { text: "Anything that ensures my team wins.", type: "leader" },
            { text: "A single, deadly blade.", type: "solo" }
        ]
    },
    {
        question: "How do you handle a mission failure?",
        options: [
            { text: "Train 10 times harder for the next one.", type: "aggressive" },
            { text: "Reflect on every mistake I made.", type: "strategic" },
            { text: "Check on my comrades' wellbeing first.", type: "leader" },
            { text: "Move on; the mission is in the past.", type: "solo" }
        ]
    }
];

const characterTypes = {
    aggressive: {
        name: "Naruto Uzumaki",
        traits: ["Bold", "Unpredictable", "Gutsy"],
        desc: "You have an indomitable spirit. Like Naruto, you never go back on your word and you face every challenge with overwhelming energy!"
    },
    strategic: {
        name: "Shikamaru Nara",
        traits: ["Genius", "Calculated", "Lazy"],
        desc: "You think 10 steps ahead of everyone else. You'd rather win with your brain than your brawn, making you a master tactician."
    },
    leader: {
        name: "Kakashi Hatake",
        traits: ["Protective", "Wise", "Cool"],
        desc: "You prioritize those who are important to you. You understand that those who break the rules are scum, but those who abandon their friends are worse than scum."
    },
    solo: {
        name: "Sasuke Uchiha",
        traits: ["Determined", "Lone Wolf", "Elite"],
        desc: "You carve your own path. Driven by your goals, you possess immense natural talent and the drive to become the strongest version of yourself."
    }
};

// --- App State ---
const state = {
    activeModule: 'explorer',
    selectedFighters: [],
    currentQuestionIndex: 0,
    quizScores: { aggressive: 0, strategic: 0, leader: 0, solo: 0 },
    combatRunning: false,
    p1Hp: 100,
    p2Hp: 100
};

// --- Core Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initVillageExplorer();
    initFightSimulator();
    initPersonalityAnalyzer();
    initDroplets();
});

function initDroplets() {
    const container = document.getElementById('droplet-overlay');
    if (!container) return;
    
    container.innerHTML = '';
    for (let i = 0; i < 25; i++) {
        const droplet = document.createElement('div');
        droplet.className = 'droplet';
        droplet.style.left = Math.random() * 100 + '%';
        droplet.style.animationDuration = Math.random() * 1.5 + 2 + 's';
        droplet.style.animationDelay = Math.random() * 4 + 's';
        droplet.style.opacity = Math.random() * 0.4 + 0.1;
        container.appendChild(droplet);
    }
}

// --- Navigation ---
function initNavigation() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            switchModule(target);
            
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function switchModule(id) {
    state.activeModule = id;
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    document.getElementById(`module-${id}`).classList.add('active');
}

// --- Village Explorer ---
function initVillageExplorer() {
    const map = document.getElementById('world-map');
    const panel = document.getElementById('village-panel');
    const closeBtn = panel.querySelector('.close-panel');

    // Create SVG layer for connections
    const svgLayer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgLayer.setAttribute("class", "map-connector");
    svgLayer.setAttribute("viewBox", "0 0 100 100");
    svgLayer.setAttribute("preserveAspectRatio", "none");
    map.appendChild(svgLayer);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let pathData = "";

    villages.forEach((village, index) => {
        // Build the connecting line
        const x = parseFloat(village.pos.left);
        const y = parseFloat(village.pos.top);
        
        if (index === 0) pathData += `M ${x} ${y}`;
        else pathData += ` L ${x} ${y}`;

        // Create the marker
        const marker = document.createElement('div');
        marker.className = 'village-marker';
        marker.style.top = village.pos.top;
        marker.style.left = village.pos.left;
        
        marker.innerHTML = `
            <div class="village-tag" style="--accent-color: ${village.color};">
                <span class="emoji">${village.icon}</span>
                <span class="name">${village.name}</span>
            </div>
        `;
        
        marker.addEventListener('click', () => showVillageDetails(village));
        map.appendChild(marker);
    });

    // Close the path to form a circuit
    pathData += " Z";
    path.setAttribute("d", pathData);
    svgLayer.appendChild(path);

    closeBtn.addEventListener('click', () => panel.classList.remove('open'));
}

function showVillageDetails(village) {
    const panel = document.getElementById('village-panel');
    const content = panel.querySelector('.panel-content');
    
    panel.classList.add('open');
    content.innerHTML = `
        <h2 style="color: ${village.color}; font-family: var(--font-heading); margin-bottom: 0.5rem;">${village.name}</h2>
        <p style="text-transform: uppercase; font-size: 0.7rem; color: var(--text-secondary); margin-bottom: 2rem;">${village.alias}</p>
        
        <div class="info-group" style="margin-bottom: 1.5rem;">
            <label style="display: block; font-size: 0.8rem; color: var(--chakra-blue); margin-bottom: 0.5rem; font-weight: bold;">LEADER</label>
            <p>${village.leader}</p>
        </div>
        
        <div class="info-group" style="margin-bottom: 1.5rem;">
            <label style="display: block; font-size: 0.8rem; color: var(--chakra-blue); margin-bottom: 0.5rem; font-weight: bold;">SPECIALTY</label>
            <p>${village.specialty}</p>
        </div>
        
        <div class="info-group" style="margin-bottom: 2rem;">
            <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${village.description}</p>
        </div>
        
        <div class="info-group">
            <label style="display: block; font-size: 0.8rem; color: var(--chakra-blue); margin-bottom: 1rem; font-weight: bold;">FAMOUS SHINOBI</label>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${village.shinobi.map(s => `<span style="background: rgba(255,255,255,0.05); padding: 0.4rem 0.8rem; border-radius: 5px; font-size: 0.8rem;">${s}</span>`).join('')}
            </div>
        </div>
    `;
}

// --- Fight Simulator ---
function initFightSimulator() {
    const grid = document.getElementById('character-selection');
    
    characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.innerHTML = `
            <div class="char-image-container" style="background: ${char.color}22;">
                <img src="${char.image || ''}" alt="${char.name}" style="object-position: ${char.focal || 'center'};">
                <div class="char-icon-fallback" style="display: none;">🥷</div>
            </div>
            <h3 style="font-family: var(--font-heading); font-size: 0.9rem;">${char.name}</h3>
            <p style="font-size: 0.6rem; color: var(--text-secondary); margin-top: 0.4rem;">${char.type} Type</p>
        `;
        
        // Handle image loading error
        const img = card.querySelector('img');
        const fallback = card.querySelector('.char-icon-fallback');
        
        img.onerror = () => {
            if (char.spriteFallback) {
                img.src = './all_stars.png';
                img.style.objectPosition = char.spriteFallback;
                img.onerror = null; // Prevent infinite loop
            } else {
                img.style.display = 'none';
                fallback.style.display = 'block';
            }
        };

        card.addEventListener('click', () => selectCharacter(char, card));
        grid.appendChild(card);
    });

    document.getElementById('btn-attack').addEventListener('click', () => performAttack('basic'));
    document.getElementById('btn-special').addEventListener('click', () => performAttack('special'));
    document.getElementById('btn-reset').addEventListener('click', resetFight);
}

function selectCharacter(char, cardElement) {
    if (state.combatRunning) return;
    
    if (state.selectedFighters.length < 2) {
        state.selectedFighters.push(char);
        cardElement.classList.add('selected');
        
        if (state.selectedFighters.length === 2) {
            startFight();
        }
    }
}

function startFight() {
    const grid = document.getElementById('character-selection');
    const arena = document.getElementById('combat-arena');
    
    grid.classList.add('hidden');
    arena.classList.remove('hidden');
    
    state.combatRunning = true;
    state.p1Hp = state.selectedFighters[0].maxHp;
    state.p2Hp = state.selectedFighters[1].maxHp;
    
    updateCombatUI();
    logBattle("The battle begins between " + state.selectedFighters[0].name + " and " + state.selectedFighters[1].name + "!");
}

function updateCombatUI() {
    const f1 = state.selectedFighters[0];
    const f2 = state.selectedFighters[1];
    
    document.getElementById('p1-name').innerText = f1.name;
    document.getElementById('p2-name').innerText = f2.name;
    
    const p1Percent = (state.p1Hp / f1.maxHp) * 100;
    const p2Percent = (state.p2Hp / f2.maxHp) * 100;
    
    document.getElementById('p1-hp').style.width = p1Percent + '%';
    document.getElementById('p2-hp').style.width = p2Percent + '%';
    
    document.querySelector('.p1 .hp-text').innerText = `${Math.ceil(state.p1Hp)} / ${f1.maxHp}`;
    document.querySelector('.p2 .hp-text').innerText = `${Math.ceil(state.p2Hp)} / ${f2.maxHp}`;
    
    // Set avatars color
    document.getElementById('p1-avatar').style.backgroundColor = f1.color + '22';
    document.getElementById('p2-avatar').style.backgroundColor = f2.color + '22';
    
    const getAvatarHtml = (char) => {
        if (!char.image) return `<div style="font-size: 5rem; text-align: center; line-height: 200px;">🥷</div>`;
        
        return `<img src="${char.image}" 
                     alt="${char.name}" 
                     style="width: 100%; height: 100%; object-fit: cover; object-position: ${char.focal || 'center'};"
                     onerror="if(this.src.indexOf('all_stars.png') === -1 && '${char.spriteFallback}'){ this.src='./all_stars.png'; this.style.objectPosition='${char.spriteFallback}'; }">`;
    };

    document.getElementById('p1-avatar').innerHTML = getAvatarHtml(f1);
    document.getElementById('p2-avatar').innerHTML = getAvatarHtml(f2);
}

async function performAttack(type) {
    if (!state.combatRunning) return;

    // Player 1 attacks Player 2
    const f1 = state.selectedFighters[0];
    const f2 = state.selectedFighters[1];
    
    const btnAttack = document.getElementById('btn-attack');
    const btnSpecial = document.getElementById('btn-special');
    btnAttack.disabled = true;
    btnSpecial.disabled = true;

    if (type === 'special' && f1.specialImage) {
        await triggerSpecialCutIn(f1);
    }

    let dmg = type === 'special' ? f1.specialDmg : f1.atk;
    dmg = dmg * (0.8 + Math.random() * 0.4); // Random variance
    
    state.p2Hp -= dmg;
    if (state.p2Hp < 0) state.p2Hp = 0;
    
    const moveName = type === 'special' ? f1.special : "a basic strike";
    logBattle(`<span style="color: ${f1.color}">${f1.name}</span> uses ${moveName} for ${Math.floor(dmg)} damage!`);
    
    // Visual effects
    document.querySelector('.p2').classList.add('shake');
    document.body.classList.add('hit-flash');
    
    // Character Specific Auras
    const auraIds = ['sakura', 'rocklee', 'tsunade', 'jiraiya', 'orochimaru', 'hinata'];
    if (auraIds.includes(f1.id)) {
        document.querySelector('.p1 .avatar').classList.add(`aura-${f1.id}`);
    }

    setTimeout(() => {
        document.querySelector('.p2').classList.remove('shake');
        document.body.classList.remove('hit-flash');
        document.querySelectorAll('.avatar').forEach(a => {
            auraIds.forEach(id => a.classList.remove(`aura-${id}`));
        });
    }, 500);

    updateCombatUI();
    
    if (state.p2Hp <= 0) {
        endFight(f1.name);
        return;
    }

    // AI Counter Attack (Player 2)
    setTimeout(() => {
        if (!state.combatRunning) return;
        
        const aiType = Math.random() > 0.7 ? 'special' : 'basic';
        let aiDmg = aiType === 'special' ? f2.specialDmg : f2.atk;
        aiDmg = aiDmg * (0.8 + Math.random() * 0.4);
        
        state.p1Hp -= aiDmg;
        if (state.p1Hp < 0) state.p1Hp = 0;
        
        const aiMove = aiType === 'special' ? f2.special : "a quick counter";
        logBattle(`<span style="color: ${f2.color}">${f2.name}</span> counters with ${aiMove} for ${Math.floor(aiDmg)} damage!`);
        
        document.querySelector('.p1').classList.add('shake');
        setTimeout(() => document.querySelector('.p1').classList.remove('shake'), 500);
        
        updateCombatUI();
        
        if (state.p1Hp <= 0) {
            endFight(f2.name);
        } else {
            btnAttack.disabled = false;
            btnSpecial.disabled = false;
        }
    }, 1000);
}

function triggerSpecialCutIn(char) {
    return new Promise(resolve => {
        const overlay = document.getElementById('special-cut-in');
        const img = document.getElementById('cut-in-image');
        const charName = document.getElementById('cut-in-char-name');
        const moveName = document.getElementById('cut-in-move-name');

        img.src = char.specialImage;
        charName.innerText = char.name;
        moveName.innerText = char.special;

        overlay.classList.remove('hidden');
        
        // Vibration effect for mobile if available
        if (navigator.vibrate) navigator.vibrate(200);

        setTimeout(() => {
            overlay.classList.add('hidden');
            resolve();
        }, 1500);
    });
}

function logBattle(msg) {
    const log = document.getElementById('battle-log');
    const p = document.createElement('p');
    p.innerHTML = `> ${msg}`;
    log.prepend(p);
}

function endFight(winner) {
    state.combatRunning = false;
    logBattle(`<strong>BATTLE OVER! ${winner} is the winner!</strong>`);
    
    document.getElementById('btn-attack').classList.add('hidden');
    document.getElementById('btn-special').classList.add('hidden');
    document.getElementById('btn-reset').classList.remove('hidden');
}

function resetFight() {
    state.selectedFighters = [];
    state.combatRunning = false;
    
    document.getElementById('combat-arena').classList.add('hidden');
    document.getElementById('character-selection').classList.remove('hidden');
    document.getElementById('btn-attack').classList.remove('hidden');
    document.getElementById('btn-attack').disabled = false;
    document.getElementById('btn-special').classList.remove('hidden');
    document.getElementById('btn-special').disabled = false;
    document.getElementById('btn-reset').classList.add('hidden');
    document.getElementById('battle-log').innerHTML = '<p>Waiting for battle to begin...</p>';
    
    document.querySelectorAll('.char-card').forEach(c => c.classList.remove('selected'));
}

// --- Personality Analyzer ---
function initPersonalityAnalyzer() {
    showQuestion();
    document.getElementById('btn-retake').addEventListener('click', () => {
        state.currentQuestionIndex = 0;
        state.quizScores = { aggressive: 0, strategic: 0, leader: 0, solo: 0 };
        document.getElementById('result-view').classList.add('hidden');
        document.getElementById('question-view').classList.remove('hidden');
        showQuestion();
    });
}

function showQuestion() {
    const q = quizQuestions[state.currentQuestionIndex];
    const text = document.getElementById('question-text');
    const options = document.getElementById('answer-options');
    const progress = document.getElementById('quiz-progress');
    
    progress.style.width = ((state.currentQuestionIndex) / quizQuestions.length * 100) + '%';
    text.innerText = q.question;
    options.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.addEventListener('click', () => {
            state.quizScores[opt.type]++;
            nextQuestion();
        });
        options.appendChild(btn);
    });
}

function nextQuestion() {
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    // Determine highest score
    let maxScore = -1;
    let resultType = 'aggressive';
    
    for (const type in state.quizScores) {
        if (state.quizScores[type] > maxScore) {
            maxScore = state.quizScores[type];
            resultType = type;
        }
    }
    
    const result = characterTypes[resultType];
    document.getElementById('question-view').classList.add('hidden');
    document.getElementById('result-view').classList.remove('hidden');
    
    document.getElementById('result-name').innerText = result.name;
    document.getElementById('result-description').innerText = result.desc;
    
    const traits = document.getElementById('result-traits');
    traits.innerHTML = result.traits.map(t => `<span class="trait-badge">${t}</span>`).join('');

    // Save to localStorage
    localStorage.setItem('shinobi_result', JSON.stringify({
        name: result.name,
        date: new Date().toLocaleDateString()
    }));
}
