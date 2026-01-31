import { initStory } from './modules/story.js';
import { initEcom } from './modules/ecom.js'; // Pastikan baris ini ada

const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-box');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        sections.forEach(s => s.classList.add('hidden'));
        document.getElementById(target).classList.remove('hidden');

        if (target === 'story') initStory();
        if (target === 'ecom') initEcom(); // Panggil fungsi ecom di sini
    });
});

initStory();
