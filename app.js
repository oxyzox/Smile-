const compliments = [
    "You are awesome!",
    "You're doing great!",
    "You're a star!",
    "Keep smiling!",
    "You light up the room!",
    "You're amazing just the way you are!",
    "You have a great sense of humor!",
    "You make the world a better place!"
];

function getRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}

function toggleWink() {
    const smiley = document.getElementById('smiley');
    const rightEye = document.getElementById('right-eye');
    if (smiley.classList.toggle('wink')) {
        rightEye.textContent = "<";
        showPopup();
    } else {
        rightEye.textContent = ".";
    }
}

function showPopup() {
    const popup = document.getElementById('popup');
    const complimentText = document.getElementById('compliment');
    complimentText.textContent = getRandomCompliment();
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function createFallingEmojis() {
    const emojis = ['💖', '😂', '😍', '😎', '😊', '😜','💖'];
    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
        emoji.style.fontSize = `${Math.random() * 24 + 24}px`;
        document.body.appendChild(emoji);
    }
}

createFallingEmojis();
setInterval(createFallingEmojis, 100000);