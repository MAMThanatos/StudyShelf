document.addEventListener('DOMContentLoaded', () => {

    const bookData = {
        1: {
            title: "Belajar Python untuk Pemula",
            price: "Rp 80.000",
            imgSrc: "gambar/E-Book BPUP.jpeg",
            description: "Buku Belajar Python untuk Pemula merupakan panduan praktis bagi siapa pun yang ingin memulai perjalanan dalam dunia pemrograman. Disusun secara sistematis dengan bahasa yang mudah dipahami, buku ini menjelaskan dasar-dasar sintaks, struktur data, hingga pembuatan program sederhana menggunakan Python. Cocok bagi pelajar, mahasiswa, maupun profesional yang ingin memperluas keterampilan di bidang teknologi."
        },
        2: {
            title: "Manajemen Waktu Efektif",
            price: "Rp 53.000",
            imgSrc: "gambar/E-Book MWE.jpeg",
            description: "Buku Manajemen Waktu Efektif membahas strategi dan teknik mengatur waktu secara optimal untuk meningkatkan produktivitas. Pembaca akan diajak memahami pentingnya prioritas, disiplin, serta cara menghindari penundaan pekerjaan. Dengan contoh nyata dan tips aplikatif, buku ini menjadi panduan tepat bagi siapa pun yang ingin mengelola waktu secara profesional dan efisien."
        },
        3: {
            title: "Pengantar Akuntansi 1",
            price: "Rp 68.000",
            imgSrc: "gambar/E-Book PA1.jpeg",
            description: "Pengantar Akuntansi 1 menyajikan dasar-dasar ilmu akuntansi yang komprehensif, mulai dari konsep laporan keuangan, siklus akuntansi, hingga prinsip-prinsip pencatatan transaksi. Buku ini dirancang khusus untuk mahasiswa ekonomi, bisnis, maupun pembaca umum yang ingin memahami sistem pencatatan keuangan perusahaan secara ilmiah dan terstruktur."
        },
        4: {
            title: "Undang-Undang Cipta Kerja",
            price: "Rp 71.000",
            imgSrc: "gambar/E-Book UUCK.jpeg",
            description: "Buku Undang-Undang Cipta Kerja memuat teks resmi beserta penjelasan mendalam mengenai pasal-pasal dalam UU Nomor 11 Tahun 2020. Buku ini dilengkapi analisis terhadap dampak regulasi tersebut pada sektor ketenagakerjaan, investasi, dan usaha kecil menengah. Sangat berguna bagi akademisi, praktisi hukum, pengusaha, dan masyarakat umum untuk memahami dinamika kebijakan ekonomi nasional."
        },
        5: {
            title: "Prinsip Dasar Desain Komunikasi Visual",
            price: "Rp 64.000",
            imgSrc: "gambar/E-Book PDDKV.jpeg",
            description: "Buku Prinsip Dasar Desain Komunikasi Visual menjelaskan konsep fundamental dalam dunia desain grafis, termasuk elemen, prinsip estetika, tipografi, warna, dan tata letak. Ditulis dengan pendekatan teoritis sekaligus aplikatif, buku ini membantu pembaca memahami bagaimana visual dapat digunakan secara efektif untuk menyampaikan pesan secara kreatif dan komunikatif."
        },
        6: {
            title: "Atomic Habits",
            price: "Rp 80.000",
            imgSrc: "gambar/E-Book AtomicHabit.jpeg",
            description: "Atomic Habits karya James Clear membahas cara membangun kebiasaan kecil yang menghasilkan perubahan besar dalam hidup. Buku ini menekankan pentingnya sistem, bukan sekadar tujuan, dalam mencapai kesuksesan jangka panjang. Dengan contoh nyata dan pendekatan ilmiah, buku ini menjadi bacaan inspiratif bagi siapa pun yang ingin memperbaiki diri secara konsisten."
        },
        7: {
            title: "Cara Budidaya Ikan Lele",
            price: "Rp 50.000",
            imgSrc: "gambar/E-Book CBIL.jpeg",
            description: "Buku Cara Budidaya Ikan Lele menyajikan panduan lengkap mengenai teknik pembenihan, perawatan, pemberian pakan, hingga strategi pemasaran ikan lele. Disusun berdasarkan praktik lapangan dan pengetahuan agribisnis, buku ini sangat bermanfaat bagi petani ikan, pelaku usaha kecil, maupun masyarakat yang ingin memulai usaha budidaya perikanan air tawar."
        },
        8: {
            title: "Mother Nature Laugh Last",
            price: "Rp 40.000",
            imgSrc: "gambar/E-Book MNLL.jpeg",
            description: "Mother Nature Laugh Last merupakan buku inspiratif yang menyoroti hubungan manusia dengan alam serta konsekuensi dari eksploitasi berlebihan terhadap lingkungan. Melalui narasi yang kuat dan reflektif, penulis mengajak pembaca untuk memahami pentingnya menjaga keseimbangan ekosistem demi keberlanjutan bumi. Cocok bagi pecinta lingkungan dan pembaca yang peduli terhadap isu ekologi."
        },
        9: {
            title: "Mahir UI/UX Design",
            price: "Rp 55.000",
            imgSrc: "gambar/E-Book MUUD.jpeg",
            description: "Buku Mahir UI/UX Design membahas prinsip dan praktik terbaik dalam merancang antarmuka pengguna (UI) dan pengalaman pengguna (UX) yang efektif. Disertai studi kasus dan ilustrasi menarik, buku ini membantu pembaca memahami alur desain digital mulai dari riset pengguna, pembuatan prototipe, hingga evaluasi. Sangat sesuai untuk desainer pemula maupun profesional di bidang teknologi."
        },
        10: {
            title: "The Psychology of Money",
            price: "Rp 75.000",
            imgSrc: "gambar/E-Book TPOM.jpeg",
            description: "The Psychology of Money karya Morgan Housel mengeksplorasi hubungan antara perilaku manusia dan keputusan finansial. Buku ini menjelaskan bahwa kecerdasan finansial tidak hanya bergantung pada pengetahuan ekonomi, tetapi juga pada emosi dan kebiasaan seseorang. Sebuah bacaan reflektif bagi siapa pun yang ingin mengelola uang dengan lebih bijak dan rasional."
        },
        11: {
            title: "Ngomongin Uang",
            price: "Rp 53.000",
            imgSrc: "gambar/E-Book Uang.jpeg",
            description: "Buku Ngomongin Uang membahas konsep dasar keuangan pribadi dengan gaya bahasa yang ringan namun informatif. Melalui pendekatan yang mudah dipahami, penulis membantu pembaca memahami cara mengatur pengeluaran, menabung, dan berinvestasi dengan bijak. Cocok untuk generasi muda yang ingin membangun kesadaran finansial sejak dini."
        },
        12: {
            title: "Jejak Balak",
            price: "Rp 60.000",
            imgSrc: "gambar/E-Book JejakBalak.jpeg",
            description: "Jejak Balak merupakan karya sastra yang mengangkat tema kehidupan sosial, perjuangan, dan makna keadilan dalam konteks budaya lokal. Melalui alur cerita yang kuat dan karakter yang mendalam, buku ini menggambarkan realitas masyarakat dengan gaya bahasa yang estetis dan reflektif. Bacaan ini memberikan pengalaman emosional sekaligus pemahaman tentang nilai kemanusiaan."
        }
    };

    const modal = document.getElementById('modal-detail');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');
    const closeModalButton = document.querySelector('.modal-close');
    const bookCards = document.querySelectorAll('.ebook-card');

    function openModal(bookId) {
        const book = bookData[bookId];

        if (book) {
            modalImg.src = book.imgSrc;
            modalTitle.innerText = book.title;
            modalPrice.innerText = book.price;
            modalDesc.innerText = book.description;

            modal.style.display = 'flex';
        }
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    bookCards.forEach(card => {
        card.addEventListener('click', () => {
            const bookId = card.dataset.id;
            openModal(bookId);
        });
    });

    closeModalButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

});