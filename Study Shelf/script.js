document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DATABASE TOKEN & PRODUK ---
    const tokenDatabase = {
        "PYTHON-VIP": "files/ebook-python.pdf", 
        "WAKTU-EMAS": "files/ebook-manajemen-waktu.pdf",
        "AKUNTANSI-01": "files/ebook-akuntansi.pdf",
        "HUKUM-UUCK": "files/ebook-omnibus-law.pdf",
        "DKV-DASAR": "files/ebook-dkv.pdf",
        "ATOMIC-HABIT": "files/ebook-atomic-habits.pdf",
        "JURAGAN-LELE": "files/ebook-lele.pdf",
        "ALAM-SEMESTA": "files/ebook-mother-nature.pdf",
        "UIUX-PRO": "files/ebook-uiux.pdf",
        "UANG-PSIKOLOGI": "files/ebook-psychology-money.pdf",
        "MELEK-FINANSIAL": "files/ebook-ngomongin-uang.pdf",
        "NOVEL-JEJAK": "files/ebook-jejak-balak.pdf"
    };

    // Tambahan Field Rating (4.0 - 5.0)
    const bookData = [
        { id: 1, title: "Belajar Python untuk Pemula", price: 80000, category: "teknologi", badge: "Best Seller", badgeType: "hot", rating: 4.8, imgSrc: "gambar/E-Book BPUP.jpeg", description: "Panduan praktis bagi pemula dalam dunia pemrograman Python." },
        { id: 2, title: "Manajemen Waktu Efektif", price: 53000, category: "pengembangan", badge: null, rating: 4.5, imgSrc: "gambar/E-Book MWE.jpeg", description: "Strategi mengatur waktu untuk meningkatkan produktivitas." },
        { id: 3, title: "Pengantar Akuntansi 1", price: 68000, category: "bisnis", badge: "New", badgeType: "new", rating: 4.7, imgSrc: "gambar/E-Book PA1.jpeg", description: "Dasar-dasar akuntansi keuangan dan pelaporan." },
        { id: 4, title: "Undang-Undang Cipta Kerja", price: 71000, category: "lainnya", badge: null, rating: 4.2, imgSrc: "gambar/E-Book UUCK.jpeg", description: "Kumpulan regulasi terbaru ketenagakerjaan." },
        { id: 5, title: "Prinsip Dasar DKV", price: 64000, category: "teknologi", badge: null, rating: 4.6, imgSrc: "gambar/E-Book PDDKV.jpeg", description: "Teori dan praktik dasar Desain Komunikasi Visual." },
        { id: 6, title: "Atomic Habits", price: 80000, category: "pengembangan", badge: "Wajib Baca", badgeType: "hot", rating: 4.9, imgSrc: "gambar/E-Book AtomicHabit.jpeg", description: "Membangun kebiasaan baik dan menghilangkan kebiasaan buruk." },
        { id: 7, title: "Cara Budidaya Ikan Lele", price: 50000, category: "bisnis", badge: null, rating: 4.4, imgSrc: "gambar/E-Book CBIL.jpeg", description: "Panduan lengkap budidaya lele dari persiapan hingga panen." },
        { id: 8, title: "Mother Nature Laugh Last", price: 45000, category: "lainnya", badge: null, rating: 4.3, imgSrc: "gambar/E-Book MNLL.jpeg", description: "Refleksi tentang hubungan manusia dengan alam semesta." },
        { id: 9, title: "Mahir UI/UX Design", price: 55000, category: "teknologi", badge: "Populer", badgeType: "hot", rating: 4.8, imgSrc: "gambar/E-Book MUUD.jpeg", description: "Belajar mendesain antarmuka aplikasi mobile dan web." },
        { id: 10, title: "The Psychology of Money", price: 75000, category: "bisnis", badge: "Best Seller", badgeType: "hot", rating: 4.9, imgSrc: "gambar/E-Book TPOM.jpeg", description: "Pelajaran abadi mengenai kekayaan dan kebahagiaan finansial." },
        { id: 11, title: "Ngomongin Uang", price: 53000, category: "bisnis", badge: null, rating: 4.7, imgSrc: "gambar/E-Book Uang.jpeg", description: "Buku finansial untuk milenial yang ingin melek investasi." },
        { id: 12, title: "Jejak Balak", price: 60000, category: "lainnya", badge: "New", badgeType: "new", rating: 4.6, imgSrc: "gambar/E-Book JejakBalak.jpeg", description: "Novel petualangan yang penuh dengan teka-teki." }
    ];

    // --- STATE ---
    let cart = JSON.parse(localStorage.getItem('studyShelfCart')) || [];
    let isDarkMode = localStorage.getItem('studyShelfTheme') === 'dark';

    // --- DOM ELEMENTS ---
    const productList = document.getElementById('product-list');
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');
    const overlay = document.getElementById('overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');
    
    // Search & Filter
    const searchInput = document.getElementById('search-input');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Modal Product
    const modal = document.getElementById('product-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');
    const modalRating = document.getElementById('modal-rating-val'); // Baru
    const modalAddBtn = document.getElementById('modal-add-btn');

    // Modal Claim
    const navClaimBtn = document.getElementById('nav-claim-btn');
    const claimModal = document.getElementById('claim-modal');
    const closeClaimBtn = document.getElementById('close-claim');
    const tokenInput = document.getElementById('token-input');
    const claimMsg = document.getElementById('claim-msg');

    // Theme Toggle
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = themeBtn.querySelector('i');

    // --- FUNCTIONS ---

    // 1. Dark Mode Logic
    const updateTheme = () => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            document.body.classList.remove('dark-mode');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    };
    updateTheme(); // Init run

    themeBtn.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('studyShelfTheme', isDarkMode ? 'dark' : 'light');
        updateTheme();
    });

    // 2. Format Currency
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    };

    // 3. Helper: Generate Stars HTML
    const getStarsHTML = (rating) => {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fa-solid fa-star"></i>';
            } else if (i - 0.5 <= rating) {
                stars += '<i class="fa-solid fa-star-half-stroke"></i>';
            } else {
                stars += '<i class="fa-regular fa-star"></i>';
            }
        }
        return `<div class="product-rating">${stars} <span>(${rating})</span></div>`;
    };

    // 4. Render Products
    const renderProducts = (data = bookData) => {
        productList.innerHTML = "";
        
        if(data.length === 0) {
            productList.innerHTML = `<p style="text-align:center; width:100%; grid-column: 1/-1; padding: 2rem; color: #6b7280;">Buku tidak ditemukan.</p>`;
            return;
        }

        productList.innerHTML = data.map(book => `
            <div class="product-card">
                <div class="product-img">
                    ${book.badge ? `<span class="product-badge ${book.badgeType || ''}">${book.badge}</span>` : ''}
                    <img src="${book.imgSrc}" alt="${book.title}" loading="lazy">
                    <div class="product-overlay">
                        <button class="view-btn" onclick="openDetailModal(${book.id})">Lihat Detail</button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${book.title}</h3>
                    <div class="product-meta">
                        ${getStarsHTML(book.rating)}
                    </div>
                    <div class="product-price">${formatRupiah(book.price)}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${book.id})">
                        <i class="fa-solid fa-cart-plus"></i> Tambah
                    </button>
                </div>
            </div>
        `).join('');
    };

    // 5. Toast Notification (Updated)
    const showToast = (message, type = 'success') => {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = type === 'error' ? 'fa-circle-xmark' : 'fa-circle-check';
        
        toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    };

    // 6. Cart Logic
    const renderCart = () => {
        cartCountElement.textContent = cart.reduce((acc, item) => acc + item.qty, 0);
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Keranjang Anda masih kosong.</div>';
            cartTotalElement.textContent = formatRupiah(0);
            return;
        }

        let total = 0;
        cartItemsContainer.innerHTML = cart.map(item => {
            const book = bookData.find(b => b.id === item.id);
            const itemTotal = book.price * item.qty;
            total += itemTotal;

            return `
                <div class="cart-item">
                    <img src="${book.imgSrc}" alt="${book.title}">
                    <div class="item-details">
                        <h4>${book.title}</h4>
                        <div class="item-price">${formatRupiah(book.price)}</div>
                        <div class="item-quantity">
                            <div class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</div>
                            <span>${item.qty}</span>
                            <div class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</div>
                        </div>
                    </div>
                    <div class="item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            `;
        }).join('');

        cartTotalElement.textContent = formatRupiah(total);
        localStorage.setItem('studyShelfCart', JSON.stringify(cart));
    };

    window.addToCart = (id) => {
        const existingItem = cart.find(item => item.id === id);
        const book = bookData.find(b => b.id === id);

        if (existingItem) {
            existingItem.qty++;
            showToast(`Jumlah <b>${book.title}</b> ditambahkan!`);
        } else {
            cart.push({ id: id, qty: 1 });
            showToast(`<b>${book.title}</b> masuk keranjang!`);
        }
        renderCart();
    };

    window.updateQuantity = (id, change) => {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.qty += change;
            if (item.qty <= 0) {
                removeFromCart(id);
            } else {
                renderCart();
            }
        }
    };

    window.removeFromCart = (id) => {
        cart = cart.filter(item => item.id !== id);
        renderCart();
    };

    const openCart = () => {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
    };

    const closeCart = () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    };

    // 7. Modal Logic
    window.openDetailModal = (id) => {
        const book = bookData.find(b => b.id === id);
        if (book) {
            modalImg.src = book.imgSrc;
            modalTitle.textContent = book.title;
            modalPrice.textContent = formatRupiah(book.price);
            modalDesc.textContent = book.description;
            modalRating.textContent = `${book.rating} / 5.0`; // Update Rating Text
            
            modalAddBtn.onclick = () => {
                addToCart(book.id);
                closeModal();
            };

            modal.classList.add('active');
        }
    };

    const closeModal = () => {
        modal.classList.remove('active');
    };

    // 8. Claim Token Logic (Updated with Shake Animation)
    window.checkToken = () => {
        const code = tokenInput.value.trim().toUpperCase(); 
        tokenInput.classList.remove('error-shake'); // Reset animation
        
        if (tokenDatabase.hasOwnProperty(code)) {
            const fileLink = tokenDatabase[code];
            
            claimMsg.style.color = "#10b981"; 
            claimMsg.innerHTML = "<i class='fa-solid fa-spinner fa-spin'></i> Kode benar! Sedang mengunduh...";
            
            showToast("Token Valid! Download dimulai...", "success");

            setTimeout(() => {
                const link = document.createElement('a');
                link.href = fileLink;
                link.download = ''; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                claimMsg.innerHTML = `<i class="fa-solid fa-check"></i> Download Berhasil!`;
            }, 1000);
            
        } else {
            claimMsg.style.color = "#ef4444"; 
            claimMsg.textContent = "Kode Token tidak valid.";
            
            // Trigger Animasi Shake
            void tokenInput.offsetWidth; // Trigger reflow
            tokenInput.classList.add('error-shake');
            
            showToast("Token Salah!", "error");
        }
    };

    // 9. Scroll Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- EVENT LISTENERS ---
    
    // Search
    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const filteredBooks = bookData.filter(book => 
            book.title.toLowerCase().includes(keyword)
        );
        renderProducts(filteredBooks);
        
        filterBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
    });

    // Filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            if (category === 'all') {
                renderProducts(bookData);
            } else {
                const filteredBooks = bookData.filter(book => book.category === category);
                renderProducts(filteredBooks);
            }
            searchInput.value = "";
        });
    });
    
    // UI Events
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Claim Modal
    if (navClaimBtn) {
        navClaimBtn.addEventListener('click', (e) => {
            e.preventDefault();
            claimModal.classList.add('active');
            navbar.classList.remove('active');
            tokenInput.value = "";
            claimMsg.textContent = "";
        });
    }

    if (closeClaimBtn) closeClaimBtn.addEventListener('click', () => claimModal.classList.remove('active'));
    if (claimModal) claimModal.addEventListener('click', (e) => {
        if (e.target === claimModal) claimModal.classList.remove('active');
    });

    // Global Overlay Close
    overlay.addEventListener('click', () => {
        closeCart();
        closeModal();
        if(claimModal) claimModal.classList.remove('active');
    });

    // Mobile Menu
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Smooth Scroll Link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navbar.classList.remove('active');
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Keranjang Anda kosong!', 'error');
            return;
        }
        const total = cartTotalElement.textContent;
        const message = `Halo Admin Study Shelf, saya ingin memesan e-book berikut:\n\n${cart.map(item => {
            const book = bookData.find(b => b.id === item.id);
            return `- ${book.title} (${item.qty}x)`;
        }).join('\n')}\n\nTotal: ${total}\n\nMohon info pembayaran.`;
        
        window.open(`https://wa.me/6281315731299?text=${encodeURIComponent(message)}`, '_blank');
        
        cart = [];
        renderCart();
        closeCart();
        localStorage.removeItem('studyShelfCart');
    });

    // --- INITIALIZATION ---
    renderProducts();
    renderCart();
});