// Pesan-pesan spesial untuk ditampilkan
const messages = [
    { title: "Hallo Sayang", text: "Hari ini adalah hari spesialmu. Semoga semua impianmu menjadi kenyataan!" },
    { title: "love you", text: "Kamu adalah inspirasiku. Selamat ulang tahun, semoga hidupmu penuh kebahagiaan." },
    { title: "love you", text: "Selamat ulang tahun! Semoga tahun ini membawa banyak cinta dan tawa ya sayang." },
    { title: "love you", text: "Terima kasih telah menjadi seseorang yang sangat spesial untukku. Selamat ulang tahun!" },
    { title: "love you", text: "Semoga hari ulang tahunmu penuh dengan kenangan manis dan kebahagiaan." },
    { title: "love you", text: "Selamat ulang tahun! Jangan pernah berhenti bermimpi dan mengejar mimpimu sayang." }
];

let currentPhotoIndex = 0;

// Fungsi untuk memulai program
function startProgram(useAudio) {
    // Sembunyikan dialog konfirmasi
    document.getElementById('confirmation').style.display = 'none';
    
    // Hapus blur dari konten utama
    document.getElementById('mainContent').classList.remove('blur');

    // Jika pengguna memilih untuk menggunakan audio, mulai pemutaran
    if (useAudio) {
        document.getElementById('bgMusic').play().catch(error => {
            console.error("Audio tidak dapat diputar:", error);
        });
    }
}

// Fungsi untuk menampilkan pesan spesial sesuai dengan indeks gambar yang diklik
function displayMessage(index) {
    document.getElementById('messageTitle').textContent = messages[index - 1].title;
    document.getElementById('messageText').textContent = messages[index - 1].text;
    document.getElementById('messageContainer').style.display = 'flex';
    createBalloons(); // Tampilkan balon-balon saat menampilkan pesan
}

// Fungsi untuk menutup pesan spesial
function closeMessage() {
    document.getElementById('messageContainer').style.display = 'none';
    removeBalloons(); // Hapus balon-balon saat menutup pesan
}

// Fungsi untuk membuat balon-balon animasi di latar belakang
function createBalloons() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 4 + 2 + 's';
        container.appendChild(balloon);
    }
}

// Fungsi untuk menghapus balon-balon dari latar belakang
function removeBalloons() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(b => b.remove());
}

// Fungsi untuk menampilkan foto berikutnya
function showNextPhoto() {
    const photos = document.querySelectorAll('.photo-container');
    photos[currentPhotoIndex].style.display = 'none';
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photos[currentPhotoIndex].style.display = 'block';
}

// Fungsi untuk menampilkan foto sebelumnya
function showPrevPhoto() {
    const photos = document.querySelectorAll('.photo-container');
    photos[currentPhotoIndex].style.display = 'none';
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    photos[currentPhotoIndex].style.display = 'block';
}

// Inisialisasi galeri
function initGallery() {
    const photos = document.querySelectorAll('.photo-container');
    // Tampilkan hanya foto pertama, sembunyikan lainnya
    photos.forEach((photo, index) => {
        if (index === 0) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
    
    // Buat tombol navigasi
    const nextButton = document.createElement('button');
    nextButton.classList.add('nav-button', 'next');
    nextButton.innerHTML = '&#10095;'; // HTML entity for right arrow
    nextButton.onclick = showNextPhoto;
    document.querySelector('.gallery').appendChild(nextButton);

    const prevButton = document.createElement('button');
    prevButton.classList.add('nav-button', 'prev');
    prevButton.innerHTML = '&#10094;'; // HTML entity for left arrow
    prevButton.onclick = showPrevPhoto;
    document.querySelector('.gallery').appendChild(prevButton);
}

// Panggil inisialisasi galeri saat dokumen siap
document.addEventListener('DOMContentLoaded', initGallery);
