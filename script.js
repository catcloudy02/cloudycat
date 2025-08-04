const cat = document.getElementById('cat');
const meowSound = document.getElementById('meow-sound');
const copyBtn = document.getElementById('copyCa');

cat.addEventListener('click', () => {
    meowSound.currentTime = 0;
    meowSound.play();
});

copyBtn.addEventListener('click', () => {
    const ca = "Coming soon...";
    navigator.clipboard.writeText(ca).then(() => {
        copyBtn.innerText = "Copied!";
        setTimeout(() => {
            copyBtn.innerText = "CA";
        }, 2000);
    });
});