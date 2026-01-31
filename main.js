// Pastikan jalur (path) ke folder modules sudah benar
import { initTiktok } from './modules/tiktok.js';
import { initStory } from './modules/story.js';
import { initEcom } from './modules/ecom.js';

const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-box');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;

        // Reset tampilan
        sections.forEach(s => s.classList.add('hidden'));
        document.getElementById(target).classList.remove('hidden');

        // Jalankan fungsi berdasarkan menu yang diklik
        if (target === 'tiktok-v2') initTiktok();
        if (target === 'story') initStory();
        if (target === 'ecom') initEcom();
        }
    });
});

// Jalankan fitur default saat halaman pertama kali dimuat
initStory();

