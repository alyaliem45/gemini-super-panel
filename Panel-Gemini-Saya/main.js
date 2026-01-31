const mainContent = document.querySelector('#content-area');
const navButtons = document.querySelectorAll('#sidebar button');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    loadFeature(target);
  });
});

function loadFeature(feature) {
  // Logika untuk mengganti UI berdasarkan fitur yang dipilih
  if (feature === 'story-gen') {
    mainContent.innerHTML = `<h3>📖 Story Generator</h3>`;
  } else if (feature === 'ecom-tool') {
    mainContent.innerHTML = `<h3>🛒 E-commerce Content</h3>`;
  }
  // ... dan seterusnya
}