const puppy = document.getElementById("puppy");

const actionButton =
    document.getElementById("actionButton");

const buttonText =
    document.getElementById("buttonText");

const speech =
    document.getElementById("speech");

const speechName =
    document.getElementById("speechName");

const questTitle =
    document.getElementById("questTitle");

const questDescription =
    document.getElementById("questDescription");

const questNumber =
    document.getElementById("questNumber");

const questFill =
    document.getElementById("questFill");

const questText =
    document.getElementById("questText");

const moodFill =
    document.getElementById("moodFill");

const statusText =
    document.getElementById("statusText");

const flowerField =
    document.getElementById("flowerField");

const completionScreen =
    document.getElementById("completionScreen");

const loveScreen =
    document.getElementById("loveScreen");

const claimButton =
    document.getElementById("claimButton");

const exitButton =
    document.getElementById("exitButton");

const screenFlash =
    document.getElementById("screenFlash");

const particles =
    document.getElementById("particles");

const nameScreen =
    document.getElementById("nameScreen");

const puppyNameInput =
    document.getElementById("puppyNameInput");

const nameButton =
    document.getElementById("nameButton");

const nameError =
    document.getElementById("nameError");


/* =========================
   PUPPY NAME
========================= */

let puppyName = "";


/* =========================
   QUEST DATA
========================= */

const quests = [

    {
        title: "DEPLOY THE PUPPY",

        description:
            "ask puppy bro to help you out :)",

        button:
            "DEPLOY her",

        speech:
            "SUP human babe, you seem moody today",

        status:
            "SYSTEM STATUS: puppy bro has arrived"
    },


    {
        title: "FEED THE PUPPY",

        description:
            "puppy bro is already asking for food btw",

        button:
            "FEED HER",

        speech:
            "okay so basically im hungry now. this is actually very serious",

        status:
            "SYSTEM STATUS: snack successfully acquired"
    },


    {
        title: "FEED HER AGAIN",

        description:
            "apparently one snack was not enough. typical.",

        button:
            "FINE. AGAIN",

        speech:
            "nahhh one snack was NOT enough apparently. pls feed me again",

        status:
            "SYSTEM STATUS: bro requested another snack"
    },


    {
        title: "THE PUPPY WANTS WATER",

        description:
            "she has decided hydration is suddenly important",

        button:
            "GIVE WATER",

        speech:
            "okay wait im thirsty now. dont ask questions just give me the water",

        status:
            "SYSTEM STATUS: hydration arc"
    },


    {
        title: "WATER THE FLOWER",

        description:
            "look theres a little flower. go water it pls",

        button:
            "WATER IT",

        speech:
            "WAITTT look at the flower. okay we actually have to take care of this now",

        status:
            "SYSTEM STATUS: flower is doing its thing"
    },


    {
        title: "MAKE ANOTHER FLOWER",

        description:
            "one flower is cute but like... we need more",

        button:
            "MORE FLOWERS",

        speech:
            "one flower? be serious. we need MORE",

        status:
            "SYSTEM STATUS: garden expansion in progress"
    },


    {
        title: "PET THE PUPPY",

        description:
            "puppy bro has been working very hard obviously",

        button:
            "PET HER",

        speech:
            "okay i think ive done enough work now. come here and pet me pls",

        status:
            "SYSTEM STATUS: maximum tail wag activated"
    },


    {
        title: "GIVE HER A BOW",

        description:
            "she deserves to look cute after all this",

        button:
            "GIVE HER THE BOW",

        speech:
            "waittt put the bow on me. i need to look cute real quick",

        status:
            "SYSTEM STATUS: bro is serving"
    },


    {
        title: "PICK A FLOWER",

        description:
            "pick one for your human babe",

        button:
            "PICK FLOWER",

        speech:
            "okay pick one for her. obviously dont pick an ugly one pls",

        status:
            "SYSTEM STATUS: flower secured"
    },


    {
        title: "ONE LAST HUG",

        description:
            "okay last thing. hug the puppy bro",

        button:
            "HUG HER",

        speech:
            "okayyy last one. come here babe. youve made it this far",

        status:
            "SYSTEM STATUS: mood restored"
    }

];


let currentQuest = 0;


/* =========================
   AUDIO
========================= */

let audioContext = null;


function initialiseAudio() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    if (
        audioContext.state === "suspended"
    ) {
        audioContext.resume();
    }
}


function playTone(
    frequency,
    duration = 0.08,
    type = "square",
    volume = 0.04
) {

    initialiseAudio();

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.type = type;

    oscillator.frequency.setValueAtTime(
        frequency,
        audioContext.currentTime
    );

    gain.gain.setValueAtTime(
        volume,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
    );

    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + duration
    );
}


function playClick() {

    playTone(
        420,
        0.06,
        "square",
        0.035
    );

    setTimeout(() => {

        playTone(
            620,
            0.08,
            "square",
            0.03
        );

    }, 45);
}


function playSuccess() {

    playTone(
        523,
        0.09,
        "square",
        0.04
    );

    setTimeout(() => {

        playTone(
            659,
            0.09,
            "square",
            0.04
        );

    }, 90);

    setTimeout(() => {

        playTone(
            784,
            0.16,
            "square",
            0.04
        );

    }, 180);
}


function playFinal() {

    const notes = [
        392,
        523,
        659,
        784,
        1046
    ];

    notes.forEach(
        (note, index) => {

            setTimeout(() => {

                playTone(
                    note,
                    0.18,
                    "square",
                    0.035
                );

            }, index * 110);

        }
    );
}


/* =========================
   PUPPY SPEECH
========================= */

function updatePuppyName() {

    speechName.textContent =
        puppyName.toUpperCase() + ".EXE";

}


function updateQuestUI() {

    const quest =
        quests[currentQuest];


    questTitle.textContent =
        quest.title;


    questDescription.textContent =
        quest.description;


    buttonText.textContent =
        quest.button;


    speech.textContent =
        quest.speech;


    statusText.textContent =
        quest.status;


    questNumber.textContent =
        String(currentQuest + 1)
            .padStart(2, "0");


    const completed =
        currentQuest;


    const percentage =
        (
            completed /
            quests.length
        ) * 100;


    questFill.style.width =
        `${percentage}%`;


    questText.textContent =
        `${completed} / ${quests.length}`;


    moodFill.style.width =
        `${Math.max(
            25,
            percentage
        )}%`;

}


/* =========================
   PUPPY ANIMATIONS
========================= */

function happyPuppy() {

    puppy.classList.remove(
        "happy"
    );

    void puppy.offsetWidth;

    puppy.classList.add(
        "happy"
    );
}


function blinkPuppy() {

    puppy.classList.add(
        "blink"
    );

    setTimeout(() => {

        puppy.classList.remove(
            "blink"
        );

    }, 120);
}


setInterval(() => {

    if (
        !completionScreen.classList.contains(
            "active"
        ) &&
        !loveScreen.classList.contains(
            "active"
        ) &&
        !nameScreen.classList.contains(
            "active"
        )
    ) {

        blinkPuppy();

    }

}, 3000);


/* =========================
   FLOWERS
========================= */

function createFlower() {

    const flower =
        document.createElement(
            "div"
        );

    flower.className =
        "pixel-flower";


    const randomLeft =
        5 +
        Math.random() * 90;


    const colors = [
        "var(--pink)",
        "var(--orange)",
        "var(--purple)",
        "var(--blue)"
    ];


    const chosenColor =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    flower.style.left =
        `${randomLeft}%`;


    flower.innerHTML = `

        <div
            class="petal p1"
            style="background:${chosenColor}"
        ></div>

        <div
            class="petal p2"
            style="background:${chosenColor}"
        ></div>

        <div
            class="petal p3"
            style="background:${chosenColor}"
        ></div>

        <div
            class="petal p4"
            style="background:${chosenColor}"
        ></div>

        <div class="center"></div>

        <div class="stem"></div>

    `;


    flowerField.appendChild(
        flower
    );
}


/* =========================
   PARTICLES
========================= */

function createParticles(
    amount = 18
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "pixel-particle";


        particle.style.left =
            `${50 +
                (
                    Math.random() *
                    10 -
                    5
                )}%`;


        particle.style.top =
            `${48 +
                (
                    Math.random() *
                    8 -
                    4
                )}%`;


        particle.style.setProperty(
            "--x",
            `${Math.random() *
                260 -
                130}px`
        );


        particle.style.setProperty(
            "--y",
            `${Math.random() *
                -220 -
                40}px`
        );


        particles.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 900);

    }
}


/* =========================
   SCREEN FLASH
========================= */

function flashScreen() {

    screenFlash.classList.remove(
        "flash"
    );

    void screenFlash.offsetWidth;

    screenFlash.classList.add(
        "flash"
    );
}


/* =========================
   SHAKE
========================= */

function shakeGame() {

    const game =
        document.getElementById(
            "game"
        );


    game.animate(
        [
            {
                transform:
                    "translateX(0)"
            },

            {
                transform:
                    "translateX(-5px)"
            },

            {
                transform:
                    "translateX(5px)"
            },

            {
                transform:
                    "translateX(-4px)"
            },

            {
                transform:
                    "translateX(4px)"
            },

            {
                transform:
                    "translateX(0)"
            }
        ],
        {
            duration: 260,
            easing: "steps(5)"
        }
    );
}


/* =========================
   NAME SETUP
========================= */

nameButton.addEventListener(
    "click",
    startGame
);


puppyNameInput.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter"
        ) {

            startGame();

        }

    }
);


function startGame() {

    const enteredName =
        puppyNameInput.value.trim();


    if (!enteredName) {

        nameError.textContent =
            "bro you gotta give her a name first";

        puppyNameInput.focus();

        return;
    }


    puppyName =
        enteredName;


    nameError.textContent =
        "";


    speechName.textContent =
        puppyName.toUpperCase() +
        ".EXE";


    speech.textContent =
        `okayyy hi im ${puppyName}. apparently im your emotional support puppy now`;


    nameScreen.classList.remove(
        "active"
    );


    playSuccess();

    createParticles(20);


    setTimeout(() => {

        speech.textContent =
            `SUP human babe, im ${puppyName}. you seem moody today`;

    }, 900);

}


/* =========================
   MAIN QUEST ACTION
========================= */

actionButton.addEventListener(
    "click",
    () => {

        initialiseAudio();

        playClick();

        happyPuppy();

        shakeGame();

        flashScreen();

        createParticles(10);

        createFlower();


        currentQuest++;


        if (
            currentQuest >=
            quests.length
        ) {

            questFill.style.width =
                "100%";


            questText.textContent =
                "10 / 10";


            moodFill.style.width =
                "100%";


            setTimeout(
                finishGame,
                900
            );


            return;
        }


        updateQuestUI();


        if (
            currentQuest >= 4
        ) {

            createFlower();

        }


        if (
            currentQuest >= 7
        ) {

            createFlower();

        }

    }
);


/* =========================
   FINISH
========================= */

function finishGame() {

    playFinal();

    createParticles(45);


    setTimeout(() => {

        completionScreen.classList.add(
            "active"
        );

    }, 500);

}


/* =========================
   FINAL MESSAGE
========================= */

claimButton.addEventListener(
    "click",
    () => {

        playSuccess();

        createParticles(60);


        completionScreen.classList.remove(
            "active"
        );


        setTimeout(() => {

            loveScreen.classList.add(
                "active"
            );

        }, 250);

    }
);


/* =========================
   EXIT QUEST
========================= */

exitButton.addEventListener(
    "click",
    () => {

        playClick();


        loveScreen.classList.remove(
            "active"
        );


        currentQuest = 0;


        flowerField.innerHTML =
            "";


        questFill.style.width =
            "0%";


        questText.textContent =
            "0 / 10";


        moodFill.style.width =
            "25%";


        updateQuestUI();


        puppyNameInput.value =
            puppyName;


        setTimeout(() => {

            nameScreen.classList.add(
                "active"
            );

        }, 200);

    }
);


/* =========================
   START
========================= */

updateQuestUI();
