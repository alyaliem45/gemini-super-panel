// modules/api.js

export async function panggilGemini(instruksi, inputUser) {
    // Di sini kamu bisa memasukkan Endpoint Cloudflare Worker atau API Gemini kamu
    // Sementara kita gunakan simulasi agar aplikasi tidak error saat dicoba
    console.log("Menghubungi Gemini dengan instruksi:", instruksi);
    
    // Simulasi jeda loading
    await new Promise(res => setTimeout(res, 1500)); 

    return `[Hasil AI] Berdasarkan input "${inputUser}", ini adalah saran terbaik untuk konten kamu...`;
}
