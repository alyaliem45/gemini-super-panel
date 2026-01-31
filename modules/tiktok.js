// modules/tiktok.js
export function initTiktok() {
    const btn = document.querySelector('#btn-tiktok-gen');
    const input = document.querySelector('#tiktok-input');

    if (btn && !btn.dataset.active) {
        btn.addEventListener('click', () => {
            const value = input.value;
            if (!value) {
                alert("Masukkan detail produk terlebih dahulu!");
                return;
            }
            
            // Masukkan logika generate audio produk kamu di sini
            console.log("Generating audio for Tiktok:", value);
            alert("Sedang memproses audio produk Tiktok...");
        });
        btn.dataset.active = "true";
    }
}
