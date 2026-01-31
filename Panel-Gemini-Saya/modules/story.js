export function initStory() {
    const btn = document.querySelector('#btn-story');
    
    // Gunakan pengecekan agar tidak double listener
    if (!btn.dataset.active) {
        btn.addEventListener('click', () => {
            const input = document.querySelector('#input-story').value;
            console.log("Membuat cerita tentang: " + input);
            alert("Sistem Story Berjalan!");
        });
        btn.dataset.active = "true";
    }
}