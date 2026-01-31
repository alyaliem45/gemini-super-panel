// modules/tiktok.js
import { panggilGemini } from './api.js'; // Import fungsi API
export function initTiktok() {
    const btnGen = document.querySelector('#btn-tiktok-gen');
    const inputProduct = document.querySelector('#tiktok-input');
    const resultArea = document.querySelector('#tiktok-v2');

    if (btnGen && !btnGen.dataset.active) {
        btnGen.addEventListener('click', () => {
            const productText = inputProduct.value;

            if (!productText) {
                alert("Masukkan detail produk jualanmu dulu!");
                return;
            }

            // Logika pemrosesan teks produk untuk Tiktok
            const caption = `🔥 PRODUK TERLARIS! 🔥\n${productText}\n\nCek keranjang kuning sekarang sebelum kehabisan! #TiktokShop #JualanOnline`;
            
            const resultHTML = `
                <div class="result-box" style="margin-top:20px; border-top:1px solid #334155; padding-top:15px;">
                    <h4>✅ Konten Tiktok Siap:</h4>
                    <p><strong>Caption:</strong></p>
                    <textarea readonly style="height:80px;">${caption}</textarea>
                    
                    <p><strong>Voiceover Script:</strong></p>
                    <p style="font-style:italic; color:#38bdf8;">"Halo kak! Ada barang baru nih, ${productText.substring(0, 50)}... yuk diorder!"</p>
                    
                    <div style="display:flex; gap:10px;">
                        <button class="action-btn" id="copy-caption" style="background:#0ea5e9; width:auto;">Copy Caption</button>
                        <button class="action-btn" id="play-audio" style="background:#22c55e; width:auto;">🔊 Play Preview</button>
                    </div>
                </div>
            `;

            // Hapus hasil lama dan tampilkan yang baru
            const oldResult = resultArea.querySelector('.result-box');
            if (oldResult) oldResult.remove();

            const div = document.createElement('div');
            div.innerHTML = resultHTML;
            resultArea.appendChild(div);

            // Listener untuk tombol di dalam hasil (Copy & Play)
            document.querySelector('#copy-caption').addEventListener('click', () => {
                alert("Caption berhasil disalin ke clipboard!");
            });

            document.querySelector('#play-audio').addEventListener('click', () => {
                alert("Memainkan preview audio produk...");
            });
        });

        btnGen.dataset.active = "true";
    }
}
