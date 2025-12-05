// Smooth scroll untuk navigasi
function scrollToArtikel() {
    document.getElementById('artikel').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll untuk semua link navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;
    
    // Validasi input
    if (nama.trim() === '' || email.trim() === '' || pesan.trim() === '') {
        alert('Mohon isi semua field yang tersedia');
        return;
    }
    
    // Simulasi pengiriman pesan
    console.log('Pesan dikirim:', { nama, email, pesan });
    
    // Reset form
    event.target.reset();
    
    // Tampilkan notifikasi sukses
    showSuccessMessage();
}

// Fungsi menampilkan pesan sukses
function showSuccessMessage() {
    const message = document.createElement('div');
    message.textContent = '✓ Pesan Anda berhasil dikirim! Terima kasih.';
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    // Hapus pesan setelah 3 detik
    setTimeout(() => {
        message.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

// Tambahkan animasi CSS untuk notifikasi
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Observer untuk animasi saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observasi semua article card
document.querySelectorAll('.article-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle (untuk navbar yang responsive)
document.addEventListener('DOMContentLoaded', () => {
    // Highlight active nav link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--primary-color)';
            } else {
                link.style.color = 'var(--text-dark)';
            }
        });
    });
});
