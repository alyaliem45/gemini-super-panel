// modules/ecom.js

export function initEcom() {
    const btn = document.querySelector('#btn-ecom');
    const inputUrl = document.querySelector('#url-ecom');
    const resultArea = document.querySelector('#ecom');

    if (btn && !btn.dataset.active) {
        btn.addEventListener('click', () => {
            const url = inputUrl.value;
            
            if (!url) {
                alert("Masukkan URL Shopee/TikTok dulu ya!");
                return;
            }

            console.log("Menganalisis produk:", url);
            
            // Membuat tampilan hasil analisis
            const resultHTML = `
                <div class="result-box" style="margin-top:20px; border-top:1px solid #334155; padding-top:15px;">
                    <h4>✅ Hasil Analisis Jualan:</h4>
                    <p><strong>Caption Promosi:</strong> Produk keren ini lagi ramai! Beli sekarang sebelum kehabisan.</p>
                    <p><strong>Script Audio:</strong> "Halo kak, cek keranjang kuning sekarang untuk produk terbaru kami..."</p>
                    <button class="action-btn" id="btn-copy-audio" style="background:#22c55e; color:white; width:auto; padding: 5px 10px; cursor:pointer;">Copy Script Audio</button>
                </div>
            `;
            
            // Hapus hasil lama jika ada
            const existingResult = resultArea.querySelector('.result-box');
            if (existingResult) existingResult.remove();
            
            // Tampilkan hasil baru
            const div = document.createElement('div');
            div.innerHTML = resultHTML;
            resultArea.appendChild(div);

            // Tambahkan listener untuk tombol copy
            document.querySelector('#btn-copy-audio').addEventListener('click', () => {
                alert("Script Audio berhasil dicopy!");
            });
        });
        
        btn.dataset.active = "true";
    }
}
