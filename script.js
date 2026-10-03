//loading screen
const loadingScreen = document.getElementById("loadingScreen");
const loadingProgressBar = document.getElementById("loadingProgressBar");
const loadingPercentage = document.getElementById("loadingPercentage");
const loadingStatus = document.getElementById("loadingStatus");

//continue button in loading screen
const startButton = document.getElementById("startButton");

//login
const nameInput = document.getElementById("nameInput");
const verifyButton = document.getElementById("verifyButton");

//three major modals
const loginScreen = document.getElementById("loginScreen");
const verificationScreen = document.getElementById("verificationScreen");
const gameScreen = document.getElementById("gameScreen");

//incorrect target name modal
const errorModal = document.getElementById("errorModal");
const exitButton = document.getElementById("exitButton");

//progress bar verification modal
const progressBar = document.getElementById("progressBar");
const percentage = document.getElementById("percentage");

//game screen continue button
const continueButton = document.getElementById("continueButton");

//loading function
function startLoadingScreen() {

    let progress = 0;

    const loading = setInterval(function () {

        progress += 2;

        loadingProgressBar.style.width = progress + "%";
        loadingPercentage.textContent = progress + "%";

        // Loading messages
        if (progress < 35) {

            loadingStatus.textContent = "LOADING ASSETS...";

        } else if (progress < 70) {

            loadingStatus.textContent = "PREPARING CAKE...";

        } else if (progress < 90) {

            loadingStatus.textContent = "SETTING UP QUEST...";

        } else {

            loadingStatus.textContent = "READY...";

        }

        if (progress >= 100) {

            clearInterval(loading);

            loadingStatus.textContent = "READY!";
            loadingPercentage.textContent = "100%";

            startButton.disabled = false;
            startButton.classList.add("ready");
        }

    }, 100);
}


//event listener for the clickable function button in the loading
startButton.addEventListener("click", function () {

    const hbdtyMusic = document.getElementById("hbdty");

    if (hbdtyMusic) {
        hbdtyMusic.currentTime = 0;
        hbdtyMusic.play();
    }

    loadingScreen.style.opacity = "0";

    setTimeout(function () {

        loadingScreen.classList.add("hidden");

    }, 500);

});

// VERIFY BUTTON
verifyButton.addEventListener("click", function () {

    const name = nameInput.value.trim().toLowerCase();

    // Incorrect name
    if (name !== "erich joy garde") {

        errorModal.classList.remove("hidden");

        return;
    }

    // Correct name
    loginScreen.classList.add("hidden");

    verificationScreen.classList.remove("hidden");

    startVerification();
});


// EXIT BUTTON
exitButton.addEventListener("click", function () {

    errorModal.classList.add("hidden");

    nameInput.value = "";

    nameInput.focus();
});


// VERIFICATION
function startVerification() {

    let progress = 0;

    progressBar.style.width = "0%";
    percentage.textContent = "0%";

    const verification = setInterval(function () {

        progress += 4;

        progressBar.style.width = progress + "%";
        percentage.textContent = progress + "%";

        if (progress >= 100) {

            clearInterval(verification);

            setTimeout(function () {

                verificationScreen.classList.add("hidden");

                gameScreen.classList.remove("hidden");

            }, 200);
        }

    }, 100);
}

// CONTINUE BUTTON
continueButton.addEventListener("click", function () {

    gameScreen.innerHTML = `
        <div class="game-area countdown-area">
            <div id="countdown"></div>
        </div>
    `;

    startCountdown();
});


// COUNTDOWN
function startCountdown() {

    const countdown = document.getElementById("countdown");

    const numbers = ["3", "2", "1"];
    let index = 0;

    function showNumber() {

        if (index >= numbers.length) {

            countdown.innerHTML = "";

            setTimeout(function () {
                startCakeQuest();
            }, 700);

            return;
        }

        countdown.textContent = numbers[index];

        // Restart the animation
        countdown.classList.remove("countdown-animation");

        // Force browser to restart the animation
        void countdown.offsetWidth;

        countdown.classList.add("countdown-animation");

        index++;

        setTimeout(showNumber, 600);
    }

    showNumber();
}


function startCakeQuest() {

    gameScreen.innerHTML = `
        <div class="game-area">

        <div class="quest-particles">
            <span>💚</span>
            <span>🍀</span>
            <span>💚</span>
            <span>🍀</span>
            <span>💚</span>
            <span>🍀</span>
            <span>💚</span>
            <span>🍀</span>
            <span>💚</span>
            <span>🍀</span>
            <span>💚</span>
            <span>🍀</span>
            <span>💚</span>
            <span>🍀</span>
            <span>💚</span>
            <span>🍀</span>
            <span>💚</span>
            <span>🍀</span>
            <span>💚</span>
            <span>🍀</span>
        </div>

            <div class="quest-title">
                <h2>QUEST 01</h2>
                <p>Prepare the birthday cake...</p>
            </div>

            <div class="quest-notification hidden" id="candleNotification">
                <h3>QUEST UPDATE</h3>
                <p>Press <strong>PLACE</strong> to put the first candle on the cake.</p>
                <button id="gotItButton">GOT IT!</button>
            </div>

                <button class="place-button hidden" id="place_1">PLACE</button>

                <button class="place-button hidden" id="place_8">PLACE</button>

                <div class="fire-buttons hidden" id="fireButtons">
                    <button class="fire-button" id="fire_1">🔥</button>
                    <button class="fire-button" id="fire_8">🔥</button>
                </div>

                <div class="candle-verification hidden" id="candleVerification">
                    <div class="verification-icon" id="verificationIcon">◌</div>
                    <p id="verificationText">VERIFYING CANDLE...</p>
                </div>

            <div class="cake-scene" id="cakeScene">

        <div class="cake" id="cake">

            <div class="cake-top">

                <div class="cake-decoration decoration-1"></div>
                <div class="cake-decoration decoration-2"></div>
                <div class="cake-decoration decoration-3"></div>

            </div>

            <div class="cake-frosting">

                <div class="frosting-drip drip-1"></div>
                <div class="frosting-drip drip-2"></div>
                <div class="frosting-drip drip-3"></div>

                <div class="drip-drop"></div>
                <div class="drip-drop"></div>
                <div class="drip-drop"></div>
                <div class="drip-drop"></div>
                <div class="drip-drop"></div>

                <div class="heavy-drip"></div>

            </div>

            <div class="cake-body">

                <div class="cake-pixel pixel-1"></div>
                <div class="cake-pixel pixel-2"></div>
                <div class="cake-pixel pixel-3"></div>

            </div>

            <div class="cake-bottom"></div>

        </div>

            <div class="landing-splash" id="landingSplash">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>

                <div class="table">

                    <div class="table-top"></div>

                    <div class="table-leg left"></div>

                    <div class="table-leg right"></div>

                </div>

            </div>

        </div>
    `;

    setTimeout(function () {

        const cake = document.getElementById("cake");
        const cakeScene = document.getElementById("cakeScene");

        cake.classList.add("cake-land");

        cake.addEventListener("animationend", function () {
            cakeScene.classList.add("scene-shake");

            const landingSplash =
                document.getElementById("landingSplash");

            landingSplash.classList.add("active");

            startFrostingDrips();
            startHeavyDrip();

            // Show candle notification AFTER the cake lands
            const candleNotification =
                document.getElementById("candleNotification");

            candleNotification.classList.remove("hidden");

            const gotItButton =
                document.getElementById("gotItButton");

            const placeOneButton =
                document.getElementById("place_1");

            const placeEightButton =
                document.getElementById("place_8");


            gotItButton.onclick = function () {

                candleNotification.classList.add("hidden");

                placeOneButton.classList.remove("hidden");

            };


            placeOneButton.addEventListener("click", function () {

                placeOneButton.classList.add("hidden");

                const candle = document.createElement("div");

                candle.classList.add("number-candle");
                candle.classList.add("candle-one");

                candle.textContent = "1";

                cakeScene.appendChild(candle);

                void candle.offsetWidth;

                candle.classList.add("candle-fall");

                candle.addEventListener("animationend", function () {

                    startCandleVerification("1");

                }, { once: true });

            });

//candle 8 animationend
            placeEightButton.addEventListener("click", function () {

                placeEightButton.classList.add("hidden");

                const candle = document.createElement("div");

                candle.classList.add("number-candle");
                candle.classList.add("candle-eight");

                candle.textContent = "8";

                cakeScene.appendChild(candle);

                void candle.offsetWidth;

                candle.classList.add("candle-fall");

                candle.addEventListener("animationend", function () {

                    startCandleVerification("8");

                }, { once: true });

            });

        }, { once: true });

    }, 100);

    function startFrostingDrips() {

    const drips = [...document.querySelectorAll(".drip-drop")];

    function nextDrip() {

        const availableDrips = drips.filter(
            drip => !drip.classList.contains("dripping")
        );

        if (availableDrips.length === 0) {
            setTimeout(nextDrip, 200);
            return;
        }

        const drip =
            availableDrips[
                Math.floor(Math.random() * availableDrips.length)
            ];

        const leftPosition = 10 + Math.random() * 110;
        const size = 4 + Math.random() * 4;
        const duration = 450 + Math.random() * 250;

        drip.style.left = leftPosition + "px";
        drip.style.width = size + "px";
        drip.style.height = size + "px";

        drip.classList.add("dripping");

        const animation = drip.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 0
                },

                {
                    transform: "translateY(8px)",
                    opacity: 1
                },

                {
                    transform: "translateY(48px)",
                    opacity: 1
                },

                {
                    transform: "translateY(48px)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "linear",
                fill: "forwards"
            }
        );

        animation.finished.then(function () {

            drip.classList.remove("dripping");

            drip.style.opacity = "0";
            drip.style.transform = "translateY(0)";

            const burst = Math.random() < 0.75;

            if (burst) {

                setTimeout(function () {
                    nextDrip();
                }, 150 + Math.random() * 250);

            } else {

                setTimeout(
                    nextDrip,
                    400 + Math.random() * 1400
                );
            }

        });
    }

    setTimeout(
        nextDrip,
        500 + Math.random() * 1200
    );
}

}

function startHeavyDrip() {

    const heavyDrip = document.querySelector(".heavy-drip");

    if (!heavyDrip) {
        return;
    }

    function triggerHeavyDrip() {

        heavyDrip.classList.remove("active");

        // Pick a random horizontal position
        const randomLeft = 15 + Math.random() * 100;

        heavyDrip.style.left = randomLeft + "px";

        // Reset the animation
        void heavyDrip.offsetWidth;

        heavyDrip.classList.add("active");

        // Wait until this drip finishes
        setTimeout(function () {

            heavyDrip.classList.remove("active");

            // Wait a random amount of time before the next heavy drip
            const nextDelay = 3000 + Math.random() * 5000;

            setTimeout(triggerHeavyDrip, nextDelay);

        }, 1800);
    }

    // First heavy drip appears after a random delay
    const firstDelay = 2500 + Math.random() * 4000;

    setTimeout(triggerHeavyDrip, firstDelay);
}

function startCandleVerification(candleNumber) {

    const verification =
        document.getElementById("candleVerification");

    const icon =
        document.getElementById("verificationIcon");

    const text =
        document.getElementById("verificationText");

    verification.classList.remove("hidden");

    icon.textContent = "◌";
    icon.classList.remove("verification-check");

    text.textContent = "VERIFYING CANDLE...";

    setTimeout(function () {

        icon.textContent = "✓";
        icon.classList.add("verification-check");

        text.textContent = "CANDLE PLACEMENT VERIFIED";

        setTimeout(function () {

            verification.classList.add("hidden");

            if (candleNumber === "1") {

                showNextCandleNotification();

            } else if (candleNumber === "8") {

                showLightingNotification();

            }
        }, 1500);

    }, 1500);
}

function showLightingNotification() {

    const notification =
        document.getElementById("candleNotification");

    const notificationTitle =
        notification.querySelector("h3");

    const notificationText =
        notification.querySelector("p");

    const gotItButton =
        document.getElementById("gotItButton");

    notificationTitle.textContent = "QUEST UPDATE";

    notificationText.innerHTML =
        "The candles have been placed! Now, light them up!";

    notification.classList.remove("hidden");

    gotItButton.onclick = function () {

        notification.classList.add("hidden");

        const fireButtons =
            document.getElementById("fireButtons");

        fireButtons.classList.remove("hidden");

        setupFireButtons();
    };
}

function setupFireButtons() {

    const fireOneButton = document.getElementById("fire_1");
    const fireEightButton = document.getElementById("fire_8");

    let firePowerOne = 0;
    let firePowerEight = 0;

    function checkBothCandlesLit() {

        if (firePowerOne >= 10 && firePowerEight >= 10) {

            // Prevent this from triggering more than once
            if (document.getElementById("candleLitVerification")) {
                return;
            }

            startLitCandleVerification();
        }
    }

    let fireTimerOne = null;
    let fireTimerEight = null;

    function resetFire(candleNumber) {

        if (candleNumber === "1") {
            firePowerOne = 0;

            clearTimeout(fireTimerOne);
            fireTimerOne = null;

        } else {
            firePowerEight = 0;

            clearTimeout(fireTimerEight);
            fireTimerEight = null;
        }

        const flame = document.getElementById("flame-" + candleNumber);

        if (flame) {
            flame.remove();
        }
    }


    fireOneButton.onclick = function () {

        firePowerOne++;

        // Reset the 2-second idle timer
        clearTimeout(fireTimerOne);

        // Show the correct flame stage
        createCandleFlame("1", firePowerOne);

        console.log("Candle 1 fire power:", firePowerOne);

        // Once fully lit, DO NOT start the reset timer
        if (firePowerOne >= 10) {
            firePowerOne = 10;
            checkBothCandlesLit();
            return;
        }

        // Reset only if the user stops clicking for 2 seconds
        fireTimerOne = setTimeout(function () {
            resetFire("1");
        }, 2000);
    };


    fireEightButton.onclick = function () {

        firePowerEight++;

        // Reset the 2-second idle timer
        clearTimeout(fireTimerEight);

        // Show the correct flame stage
        createCandleFlame("8", firePowerEight);

        console.log("Candle 8 fire power:", firePowerEight);

        // Once fully lit, DO NOT start the reset timer
        if (firePowerEight >= 10) {
            firePowerEight = 10;
            checkBothCandlesLit();
            return;
        }

        // Reset only if the user stops clicking for 2 seconds
        fireTimerEight = setTimeout(function () {
            resetFire("8");
        }, 2000);
    };
}

function startLitCandleVerification() {

    const gameArea = document.querySelector(".game-area");

    if (!gameArea) {
        return;
    }

    // Create verification overlay
    const verification = document.createElement("div");

    verification.classList.add("candle-verification");
    verification.id = "candleLitVerification";

    verification.innerHTML = `
        <div class="verification-icon">◌</div>
        <p>VERIFYING CANDLE PROGRESS...</p>
    `;

    gameArea.appendChild(verification);

    // First verification message
    setTimeout(function () {

        verification.querySelector(".verification-icon").textContent = "✓";

        verification.querySelector("p").textContent =
            "CANDLE PROGRESS VERIFIED";

    }, 1500);

    // Finish verification
    setTimeout(function () {

        verification.remove();

        showWishNotification();

    }, 3000);
}

function showWishNotification() {

    const questTitle = document.querySelector(".quest-title");

    if (questTitle) {
        questTitle.innerHTML = `
            <h2>QUEST 02</h2>
            <p>MAKE A WISH, AND BLOW THE CANDLES!</p>
        `;
    }

        //this function makes the fire buttons vanish after the quest update notif appears.
        const fireButtons = document.getElementById("fireButtons");

        if (fireButtons) {
            fireButtons.classList.add("hidden");
        }

    const notification = document.createElement("div");

    notification.classList.add("quest-notification");
    notification.id = "wishNotification";

    notification.innerHTML = `
        <h3>QUEST UPDATE</h3>

        <p>
            You've lit the candles, now it's time to make a wish!
            Blow the candles if you're done!
        </p>

        <button id="wishGotItButton">GOT IT!</button>
    `;

    document.querySelector(".game-area").appendChild(notification);

    document
        .getElementById("wishGotItButton")
        .addEventListener("click", function () {

            notification.classList.add("hidden");

            // Give the player 5 seconds to make their wish
            setTimeout(function () {

                showBlowButton();

            }, 5000);

        });
}

function showBlowButton() {

    const blowButton = document.createElement("button");

    blowButton.classList.add("place-button");
    blowButton.id = "blowButton";
    blowButton.textContent = "BLOW";

    blowButton.addEventListener("click", function () {

        blowButton.remove();

        const flameOne = document.getElementById("flame-1");
        const flameEight = document.getElementById("flame-8");

        if (flameOne) {
            flameOne.remove();
        }

        if (flameEight) {
            flameEight.remove();
        }

        createBirthdaySurprise();

        setTimeout(function () {
            createBirthdaySurprise();
        }, 500);

        setTimeout(function () {

            createBirthdaySurprise();

            setTimeout(function () {
                showFinalBirthdayMessage();
            }, 2800);

        }, 1000);

    });

    document.querySelector(".game-area").appendChild(blowButton);

}

//confetti things after the BLOW button is clicked.

function createBirthdaySurprise() {

    const gameArea = document.querySelector(".game-area");

    if (!gameArea) {
        return;
    }

    const surprise = document.createElement("div");

    surprise.classList.add("birthday-surprise");

    surprise.innerHTML = `
        <div class="emoji-confetti-container">

            <span class="emoji-confetti">🎁</span>
            <span class="emoji-confetti">🎈</span>
            <span class="emoji-confetti">🎁</span>
            <span class="emoji-confetti">🎈</span>
            <span class="emoji-confetti">🎁</span>
            <span class="emoji-confetti">🎈</span>

            <span class="emoji-confetti">🥳</span>
            <span class="emoji-confetti">💐</span>
            <span class="emoji-confetti">🥳</span>
            <span class="emoji-confetti">💐</span>
            <span class="emoji-confetti">🥳</span>
            <span class="emoji-confetti">💐</span>

            <span class="emoji-confetti">🎊</span>
            <span class="emoji-confetti">🍀</span>
            <span class="emoji-confetti">🎊</span>
            <span class="emoji-confetti">🍀</span>
            <span class="emoji-confetti">🎊</span>

            <span class="emoji-confetti">🎂</span>
            <span class="emoji-confetti">🎉</span>
            <span class="emoji-confetti">🎂</span>
            <span class="emoji-confetti">🎉</span>
            <span class="emoji-confetti">🎂</span>

            <span class="emoji-confetti">✨</span>
            <span class="emoji-confetti">🎉</span>
            <span class="emoji-confetti">✨</span>
            <span class="emoji-confetti">🎉</span>
            <span class="emoji-confetti">✨</span>

        </div>

        <div class="confetti-container"></div>

    `;

    gameArea.appendChild(surprise);

    createConfettiExplosion(surprise);
    createEmojiConfettiExplosion(surprise);

}

//confetti explosion

function createConfettiExplosion(surprise) {

    const container = surprise.querySelector(".confetti-container");

    if (!container) {
        return;
    }

    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        const angle = Math.random() * Math.PI * 2;

        const distance =
            180 + Math.random() * 320;

        const size =
            5 + Math.random() * 12;

        const rotation =
            Math.random() * 720 - 360;

        const fall =
            120 + Math.random() * 260;

        const delay =
            Math.random() * 0.15;

        piece.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        piece.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        piece.style.setProperty(
            "--fall",
            `${fall}px`
        );

        piece.style.setProperty(
            "--size",
            `${size}px`
        );

        piece.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );

        piece.style.animationDelay = `${delay}s`;

        container.appendChild(piece);
    }
}

//confetti emoji explosion

function createEmojiConfettiExplosion(surprise) {

    const container = surprise.querySelector(
        ".emoji-confetti-container"
    );

    if (!container) {
        return;
    }

    const emojis = container.querySelectorAll(
        ".emoji-confetti"
    );

    emojis.forEach(function (emoji) {

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            150 + Math.random() * 350;

        const fall =
            100 + Math.random() * 300;

        const size =
            25 + Math.random() * 35;

        const rotation =
            Math.random() * 720 - 360;

        const delay =
            Math.random() * 0.25;

        emoji.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        emoji.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        emoji.style.setProperty(
            "--fall",
            `${fall}px`
        );

        emoji.style.setProperty(
            "--size",
            `${size}px`
        );

        emoji.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );

        emoji.style.animationDelay =
            `${delay}s`;

    });
}

function showFinalBirthdayMessage() {

    const hbdtyMusic = document.getElementById("hbdty");
    const smileMusic = document.getElementById("with_a_smile");

    if (hbdtyMusic) {
        hbdtyMusic.pause();
        hbdtyMusic.currentTime = 0;
    }

    if (smileMusic) {
        smileMusic.currentTime = 0;
        smileMusic.play();
    }

    const gameArea = document.querySelector(".game-area");

    if (!gameArea) {
        return;
    }

    const notification = document.createElement("div");

    notification.classList.add("final-birthday-notification");

    notification.innerHTML = `
        <div class="final-birthday-layout">

            <div class="final-birthday-content">
                <h1>HAPPIEST<br>BIRTHDAY TO YOU!</h1>

                <div class="birthday-message">

                    <p>
                        Happy 18th Birthday, Bambiii! 🎉💚
                    </p>

                    <p>
                        Today is a pretty special day because you've officially
                        reached another huge milestone in your life! Eighteen, imagine!
                        It sounds simple when you say the number, but there's
                        actually something really amazing about being able to
                        look back at everything you've experienced and realize
                        how far you've already come, I mean... it's quite an experience for you before the legal age, no?
                    </p>

                    <p>
                        I hope that when you look back at this little birthday
                        quest—although medyo late na hehe—you remember that it wasn't really about the cake,
                        the candles, the fire, or all the ridiculous amount of
                        confetti I decided to put there... It was about making
                        something specifically for you.
                    </p>

                    <p>
                        There are so many things I could say, and honestly,
                        I probably wouldn't know where to begin even if I had
                        an entire book prepared. Most things naman na sinabi ko has been said already na through messages, so... for now, I'll just say that
                        I hope you continue to find reasons to smile, reasons
                        to laugh until your stomach hurts, and reasons to keep
                        moving forward even when things don't go exactly the
                        way you planned.
                    </p>

                    <p>
                        Eighteen is only the beginning of another chapter.
                        There will be new places, new people, new memories,
                        unexpected problems, and probably
                        a whole lot of moments where you'll wonder what you're
                        even doing with your life.
                    </p>

                    <p>
                        But that's okay, yeah? You don't have to have everything
                        figured out right now. You don't have to know exactly
                        where you're going. Just keep going at your own pace,
                        keep being yourself, and keep collecting those little
                        moments that eventually become the memories you treasure.
                    </p>

                    <p>
                        I hope this year gives you plenty of moments worth
                        remembering. I hope you get opportunities that make
                        you excited, challenges that make you stronger, and
                        people around you who make the ordinary days feel
                        special. I really hope that...
                    </p>

                    <p>
                        And whenever things get difficult, I hope you remember
                        that you've already made it through every difficult day
                        you've faced before this one. That's something worth
                        being proud of.
                    </p>

                    <p>
                        So here's to Level 18... 🎂
                    </p>

                    <p>
                        Here's to new experiences, new memories, stupid jokes,
                        unexpected adventures, late-night conversations,
                        celebrations, failures, successes, and everything
                        else that's waiting for you.
                    </p>

                    <p>
                        May your next chapter be bigger than you expect,
                        stranger than you imagine, and filled with plenty of
                        reasons to look back and smile.
                    </p>

                    <p>
                        Most importantly, I hope you have a birthday that
                        feels genuinely yours.
                    </p>

                    <p>
                        Happy Birthday, Erich. 💚
                    </p>

                    <p>
                        And welcome to the 18th level of your life.
                    </p>

                </div>

            </div>

        <div>
            <div class="lyric-container" id="lyricContainer">
                <div class="lyric-label">
                    ♪ NOW PLAYING ♪
                </div>

                <div class="lyric-text" id="lyricText">
                    ♫
                </div>
            </div>

            <div class="return-container">
                <button id="returnButton">RETURN</button>
            </div>
        </div>

    </div>
    `;

    gameArea.appendChild(notification);

    startLyrics();
    const returnButton = document.getElementById("returnButton");

    if (returnButton) {
        returnButton.addEventListener("click", function () {
        window.location.reload();
    });
}
}

const lyrics = [

    // CHORUS
    { time: 0, text: "Lift your head, baby, don't be scared" },
    { time: 8.9, text: "Of the things that could go wrong along the way" },
    { time: 15.3, text: "You'll get by with a smile" },
    { time: 22, text: "You can't win at everything, but you can try" },

    // VERSE 1
    { time: 29, text: "Baby, you don't have to worry" },
    { time: 32.5, text: "'Cause there ain't no need to hurry" },
    { time: 35.5, text: "No one ever said that there's an easy way" },
    { time: 42, text: "When they're closing all their doors" },
    { time: 45, text: "And they don't want you anymore" },
    { time: 48.5, text: "It sounds funny but I'll say it anyway" },

    // CHORUS
    { time: 55, text: "Girl, I'll stay through the bad times" },
    { time: 61.5, text: "Even if I have to fetch you everyday" },
    { time: 68, text: "We'll get by with a smile" },
    { time: 74.3, text: "You can never be too happy in this life" },

    // VERSE 2
    { time: 81, text: "'Cause in a world where everybody" },
    { time: 84, text: "Hates a happy ending story" },
    { time: 87.5, text: "It's a wonder love can make the world go round" },
    { time: 93.5, text: "But don't let it bring you down" },
    { time: 96.5, text: "And turn your face into a frown" },
    { time: 100, text: "Get along with a little prayer and a song" },

    // BRIDGE
    { time: 107, text: "(Too, doo-doo-doo)" },
    { time: 117, text: "Let me hear you sing it" },
    { time: 119.5, text: "(Too, doo-doo-doo)" },

    // VERSE 2 — REPEAT
    { time: 132, text: "'Cause in a world where everybody" },
    { time: 135, text: "Hates a happy ending story" },
    { time: 138, text: "It's a wonder love can make the world go round" },
    { time: 144.5, text: "But don't let it bring you down" },
    { time: 147.5, text: "And turn your face into a frown" },
    { time: 150.5, text: "Get along with a little prayer and a song" },

    // FINAL CHORUS
    { time: 157, text: "Lift your head, baby, don't be scared" },
    { time: 164, text: "Of the things that could go wrong along the way" },
    { time: 171, text: "You'll get by with a smile" },
    { time: 177, text: "So now it's time to kiss away those tears, goodbye" },

    // OUTRO
    { time: 184, text: "(Too, doo-doo-doo)" },
    { time: 194.5, text: "Let me hear you sing it" },
    { time: 197, text: "(Too, doo-doo-doo)" },
    { time: 237, text: "With a smile" }
];

function startLyrics() {

    const smileMusic = document.getElementById("with_a_smile");
    const lyricText = document.getElementById("lyricText");

    if (!smileMusic || !lyricText) {
        return;
    }

    let currentLyric = -1;

    function updateLyrics() {

        const currentTime = smileMusic.currentTime;

        let newLyric = -1;

        for (let i = 0; i < lyrics.length; i++) {

            if (currentTime >= lyrics[i].time) {
                newLyric = i;
            } else {
                break;
            }
        }

        if (newLyric !== currentLyric && newLyric !== -1) {

            currentLyric = newLyric;

            lyricText.style.opacity = "0";
            lyricText.style.transform = "translateY(8px)";

            setTimeout(function () {

                lyricText.textContent = lyrics[currentLyric].text;

                lyricText.style.opacity = "1";
                lyricText.style.transform = "translateY(0)";

            }, 250);
        }

        if (!smileMusic.paused && !smileMusic.ended) {
            requestAnimationFrame(updateLyrics);
        }
    }

    updateLyrics();
}

function createCandleFlame(candleNumber, firePower) {

    const candle = document.querySelector(
        candleNumber === "1"
            ? ".candle-one"
            : ".candle-eight"
    );

    if (!candle) {
        return;
    }

    // Nothing happens before 3 clicks
    if (firePower < 3) {
        return;
    }

    let flame = document.getElementById(
        "flame-" + candleNumber
    );

    // Create flame structure
    if (!flame) {

        flame = document.createElement("div");

        flame.id = "flame-" + candleNumber;
        flame.classList.add("candle-flame");

        flame.innerHTML = `
            <div class="flame flame-outer"></div>
            <div class="flame flame-orange"></div>
            <div class="flame flame-yellow"></div>
            <div class="flame flame-core"></div>

            <div class="spark"></div>
            <div class="spark"></div>
            <div class="spark"></div>
            <div class="spark"></div>
            <div class="spark"></div>
            <div class="spark"></div>
            <div class="spark"></div>
            <div class="spark"></div>
            <div class="spark"></div>
            <div class="spark"></div>
        `;

        candle.appendChild(flame);
    }

    // Remove previous power stages
    flame.classList.remove(
        "flame-power-small",
        "flame-power-medium",
        "flame-power-large",
        "flame-power-full"
    );

    // 3–4 clicks
    if (firePower < 5) {

        flame.classList.add("flame-power-small");

    }

    // 5–6 clicks
    else if (firePower < 7) {

        flame.classList.add("flame-power-medium");

    }

    // 7–9 clicks
    else if (firePower < 10) {

        flame.classList.add("flame-power-large");

    }

    // 10 clicks
    else {

        flame.classList.add("flame-power-full");
    }
}

function showNextCandleNotification() {

    const notification =
        document.getElementById("candleNotification");

    const notificationTitle =
        notification.querySelector("h3");

    const notificationText =
        notification.querySelector("p");

    const gotItButton =
        document.getElementById("gotItButton");

    const placeEightButton =
        document.getElementById("place_8");

    notificationTitle.textContent = "QUEST UPDATE";

    notificationText.innerHTML =
        "Well done! Next Quest, place another candle!";

    notification.classList.remove("hidden");

    gotItButton.onclick = function () {

        notification.classList.add("hidden");

        placeEightButton.classList.remove("hidden");

    };
}

//page loads starter for loading feature
startLoadingScreen();