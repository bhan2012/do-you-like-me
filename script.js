console.log('SCRIPT JS ĐÃ CHẠY!');

const SUPABASE_URL = 'https://hussgapvcfrbxjzozgog.supabase.co';
const SUPABASE_KEY = 'sb_publishable_IMXrSYo3v9WsmF24oeGBRQ_psOWMsOT';

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function recordClick(choice) {
    const { error } = await supabaseClient
        .from('clicks')
        .insert({ choice: choice });

    if (error) {
        console.error('Lỗi lưu click:', error.message);
    } else {
        console.log('Đã lưu:', choice);
    }
}

const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const container = document.querySelector('.container');
const celebration = document.getElementById('celebration');
const heart1 = document.getElementById('heart1');
const aw = document.getElementById('aw');
const giggling = document.getElementById('giggling');
const angry = document.getElementById('angry');
const cothomay = document.getElementById('cothomay');
const speakerButton = document.getElementById('speaker');

speakerButton.addEventListener('click', () => {
		if (cothomay.paused) {
			cothomay.currentTime = 0;
			cothomay.play();
			speakerButton.textContent = 'tắt nhạc 🔇';
		} else {
			cothomay.pause();
			speakerButton.textContent = 'bật nhạc 🔊';
		}
});

yesButton.addEventListener('click', () => {
    recordClick('yes');

    container.style.display = 'none';
    celebration.style.display = 'block';

    aw.currentTime = 0;
    aw.playbackRate = 1.5;
    aw.play();

    giggling.currentTime = 0;
    giggling.playbackRate = 1.5;
    giggling.play();

    const emojis = ['💗', '♡', '✨', '🎉', '😍'];

    const message = document.getElementById('message');
    message.style.display = 'block';
    message.style.opacity = '1';

    for (let i = 0; i < 200; i++) {
        const heart = document.createElement('span');
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        celebration.appendChild(heart);
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
    }
    heart1.style.display = 'block';
    requestAnimationFrame(() => {
    heart1.style.opacity = '1';
    heart1.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

    const noTexts = [
    'no plis 😤',
    'chắc chưa m 🤨',
    'bấm nhầm đúng hong',
    'ê ác zị 😭',
    'suy nghĩ lại đi mà 🥺',
    'ong se phai hoi han 😡',
    ];

    let noClicks = 0;
    let nsize = 1;
    let ysize = 1;
    
noButton.addEventListener('click', () => {
    recordClick('no');

    noButton.textContent = noTexts[
        Math.min(noClicks, noTexts.length - 1)
    ];
    noClicks++;

    angry.currentTime = 0;
    angry.playbackRate = 1.5;
    angry.play();
    const no = document.getElementById('no');
    const yes = document.getElementById('yes');
    nsize -= 0.1;
    ysize += 1;
    no.style.transform = `scale(${nsize})`;
    yes.style.transform = `scale(${ysize})`;

    no.style.position = "relative";

    no.style.left = `${Math.random() * 600 - 100}px`;
    no.style.top = `${Math.random() * 350 - 100}px`;
    
    if (nsize <= 0.4) {
        noButton.style.display = 'none';
        yesButton.style.position = "fixed";
        yesButton.style.inset = '0';
        yesButton.style.width = '100vw';
        yesButton.style.height = '100vh';
    }
});