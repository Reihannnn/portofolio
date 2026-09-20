(() => {
  "use strict";

  const I18N = {
    en: {
      skip: "Skip to content",
      logoHome: "Portfolio home",
      mainNav: "Main navigation",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      "nav.overview": "Overview",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.contact": "Contact Me",
      "footer.role": "Junior Software Engineer",
      "footer.rights": "All rights reserved.",
      "detail.back": "← Back to projects",
      "detail.label": "Project Detail",
      "detail.gallery": "Gallery",

      "hero.greeting": "Hello, welcome to my portfolio",
      "hero.role": "Junior Software Engineer",
      "hero.tagline":
        "Web Developer — focused on web applications, backend & business process digitalization.",
      "hero.desc":
        "Informatics fresh graduate with experience through academic projects, internships, freelance work, and professional roles. I build web applications that are clean, fast, and easy to maintain.",
      "hero.viewProjects": "View Projects",
      "hero.contactMe": "Contact Me",
      "hero.location": "Location",
      "hero.locationVal": "Indonesia · Open to Remote",
      "hero.focus": "Focus",

      "overview.label": "Overview",
      "overview.title": "Building clean & impactful software",
      "overview.lead":
        "I am an Informatics fresh graduate with software development experience through academic projects, internships, freelance work, and professional roles. I have hands-on experience in web application development, backend development, database management, and business process digitalization.",
      "overview.desc":
        "I am comfortable working from understanding business requirements, designing flows, implementing features, to debugging and maintenance. My priorities: clean code, clear communication, and results that are ready to use.",
      "overview.link": "See my experience →",
      "overview.areas": "Key expertise areas",
      "overview.h1t": "Software Development",
      "overview.h1d": "End-to-end features, debugging & maintenance.",
      "overview.h2t": "Web Development",
      "overview.h2d": "From landing pages to responsive web apps.",
      "overview.h3t": "Database",
      "overview.h3d": "Modeling, querying & PostgreSQL optimization.",
      "overview.h4t": "Digitalization",
      "overview.h4d": "Turning manual processes into digital flows.",

      "projects.label": "Projects",
      "projects.title": "Featured projects",
      "projects.sub": "Click a project image or title to open its detail page.",
      "projects.ir":
        "An audit system for the Industrial Relations division to review compliance between company regulations and government rules. Digitized the audit process — cut employee document submission from hours of manual work to minutes, and centralized documents in a single database for fast retrieval of evidentiary files during audits.",
      "projects.manatok":
        "A web-based culinary store management platform featuring a Point of Sale and Self Order System.",
      "projects.gymapp":
        "A desktop application for digitalizing member and membership management for a gym business.",
      "projects.gymlanding":
        "A landing page for a gym business: pricing, facilities, location, personal trainers, and a CTA to WhatsApp.",

      "exp.label": "Experience",
      "exp.title": "Experience",
      "exp.j1date": "Latest · Full-time",
      "exp.j1t": "Junior Software Engineer",
      "exp.j1a": "Developed software solutions based on business requirements.",
      "exp.j1b": "Built and maintained applications.",
      "exp.j1c": "Performed debugging and database management.",
      "exp.j1d": "Collaborated to understand business needs and workflows.",
      "exp.j2date": "6 months · Internship",
      "exp.j2t": "Programmer Intern",
      "exp.j2a":
        "6 months of experience developing and maintaining an ERP system.",
      "exp.j2b": "Debugged applications.",
      "exp.j2c": "Processed and managed databases.",
      "exp.j2d": "Helped understand client needs and business processes.",
      "exp.j3date": "Freelance",
      "exp.j3t": "Freelance Web Developer",
      "exp.j3a": "Built websites for business needs.",
      "exp.j3b": "Created landing pages and informational websites.",
      "exp.j3c": "Implemented responsive design.",
      "exp.j3d": "Delivered digital solutions tailored to clients.",

      "skills.label": "Technical Skills",
      "skills.title": "Technical skills",

      "edu.label": "Education",
      "edu.title": "Education",
      "edu.degree": "Bachelor of Informatics / Informatics Engineering",
      "edu.focus":
        "Focus: Software Development, Web Development, Database, and Information Technology.",

      "contact.label": "Contact",
      "contact.title": "Let's Build Something Together",
      "contact.desc":
        "I am open to software development opportunities, freelance projects, and collaboration. Reach me through the channels below.",
      "contact.email": "Email Me",

      "ir.lead":
        "An audit system for the Industrial Relations division to review compliance between company regulations and government rules.",
      "ir.aboutTitle": "About this project",
      "ir.aboutLead":
        "Digitized the system audit process for the Industrial Relations division at PT. Sugity Creatives.",
      "ir.aboutDesc":
        "Employee uploads went from hours of manual work to minutes. All evidentiary files now live in one central database.",
      "ir.aboutContext":
        "Industrial Relations is the function that manages and maintains harmonious relationships among the workforce, the company, and the government — ensuring compliance with regulations and rules while supporting productivity and mutual well-being. At PT. Sugity Creatives, that means keeping company policies aligned with government regulations in every audit period: collecting workforce documents, reviewing them against the rules, scoring compliance, and monitoring follow-ups. IR_COMPASS digitizes that entire loop, so the relationship between people, company, and regulator is backed by data that is complete, traceable, and always ready for audit.",
      "ir.outcomes": "Key outcomes",
      "ir.o1": "Uploads take minutes, not hours.",
      "ir.o2t": "Centralized Data",
      "ir.o2": "One database for all evidence.",
      "ir.o3t": "Compliance Review",
      "ir.o3": "Audit, scoring & monitoring in one flow.",
      "ir.o4t": "Digital Process",
      "ir.o4": "Manual steps turned into digital flows.",
      "ir.problemTitle": "Problem discovery",
      "ir.problemDesc": "Bottlenecks found before writing any code.",
      "ir.s1date": "Step 1 · Observe",
      "ir.s1t": "Manual, scattered workflow",
      "ir.s1d": "Docs in chats, evidence collection took hours.",
      "ir.s2date": "Step 2 · Interview",
      "ir.s2t": "Pain points with PICs",
      "ir.s2d": "Slow submissions, files hard to find.",
      "ir.s3date": "Step 3 · Define",
      "ir.s3t": "No structured review flow",
      "ir.s3d": "Ad hoc checks, manual untracked scoring.",
      "ir.solutionTitle": "Solution offered",
      "ir.solutionDesc": "One platform covering the full audit loop.",
      "ir.solutions": "Solutions offered",
      "ir.sol1t": "Self-service document upload",
      "ir.sol1d": "Direct uploads — minutes, not hours.",
      "ir.sol2t": "Single centralized database",
      "ir.sol2d": "One PostgreSQL database — files found in seconds.",
      "ir.sol3t": "Structured review & scoring",
      "ir.sol3d": "Consistent scoring against compliance rules.",
      "ir.sol4t": "Compliance monitoring dashboard",
      "ir.sol4d": "Periods, PIC progress, and status at a glance.",
      "ir.flowTitle": "How it works",
      "ir.flowDesc": "Simple flow of the website, end to end.",
      "ir.f1date": "Step 1 · Setup",
      "ir.f1t": "Master data setup",
      "ir.f1d": "Superadmin sets up users, domains, criteria, and prepares the period to open.",
      "ir.f2date": "Step 2 · Launch",
      "ir.f2t": "Period launched",
      "ir.f2d": "Superadmin launches the period for the upload process.",
      "ir.f3date": "Step 3 · Upload",
      "ir.f3t": "PIC uploads evidence",
      "ir.f3d": "PIC uploads required evidence matching each criterion.",
      "ir.f4date": "Step 4 · Review",
      "ir.f4t": "Admin reviews evidence",
      "ir.f4d": "Admin reviews the uploaded evidence.",
      "ir.f5date": "Step 5 · Approve",
      "ir.f5t": "Approved, score rises",
      "ir.f5d": "Approved evidence increases the assessment score.",
      "ir.f6date": "Step 6 · Archive",
      "ir.f6t": "Becomes history document",
      "ir.f6d": "Approved evidence is archived as a history document.",
      "ir.f7date": "Step 7 · Done",
      "ir.f7t": "Finished",
      "ir.f7d": "Audit loop complete for the period.",
      "ir.capBackground": "Project background",
      "ir.capProblem": "Problem analysis",
      "ir.capGoals": "Project goals",
      "ir.capLanding": "Landing page",
      "ir.capDashboard": "Superadmin dashboard",
      "ir.capReview": "Audit review",
      "ir.capReviewSugity": "Audit review — Sugity",
      "ir.capPeriods": "list Periods (PIC section)",
      "ir.capLogin": "Login page",

      "manatok.lead":
        "A web-based culinary store management platform featuring a Point of Sale and Self Order System.",
      "manatok.aboutTitle": "About this project",
      "manatok.aboutLead":
        "Built to help culinary stores manage daily operations from one web platform.",
      "manatok.aboutDesc":
        "Covers the cashier-side Point of Sale flow and a customer-facing Self Order System, backed by a centralized database for menus, orders, and transactions.",
      "manatok.features": "Key features",
      "manatok.f1": "Cashier flow for fast order & payment handling.",
      "manatok.f2t": "Self Order",
      "manatok.f2": "Customers order directly from their own device.",
      "manatok.f3t": "Centralized Data",
      "manatok.f3": "Menus, orders & transactions in one database.",
      "manatok.f4t": "Responsive Web",
      "manatok.f4": "Works on cashier desktop and customer phones.",
      "manatok.capOverview": "Platform overview",
      "manatok.capLogin": "Login page",
      "manatok.capRegister": "Register page",
      "manatok.capTables": "Admin table management",
      "manatok.capProducts": "Product page",
      "manatok.capAddOrder": "Add order",
      "manatok.capCustomerMenu": "Customer menu",
      "manatok.capClosedMenu": "Closed menu view",
      "manatok.capSettings": "Settings",
      "manatok.capAccounts": "Account management",
      "manatok.capQr": "QR code print",

      "gymapp.lead":
        "A desktop application for digitalizing member and membership management for a gym business.",
      "gymapp.backgroundTitle": "Background",
      "gymapp.backgroundLead":
        "DRP Gym has been operating since 2021 — but member data was still managed in messy Excel files.",
      "gymapp.backgroundDesc":
        "Records were scattered and hard to monitor, so audits and business decisions took too long to happen.",
      "gymapp.problemLead":
        "Recording was still partly manual and the Excel sheets were a mess.",
      "gymapp.problemDesc":
        "No grouping, no reliable monthly view — the owner could not track members and memberships with confidence.",
      "gymapp.solutionTitle": "Solution offered",
      "gymapp.solutionDesc":
        "A desktop app that groups member and membership data — so the owner can monitor everything monthly and make fast, accurate decisions.",
      "gymapp.sol1t": "Grouped member data",
      "gymapp.sol1d": "Members organized and easy to monitor per month.",
      "gymapp.sol2t": "Membership tracking",
      "gymapp.sol2d": "Monthly membership status at a glance.",
      "gymapp.sol3t": "KPI dashboard",
      "gymapp.sol3d": "Key performance indicators for quick decisions.",
      "gymapp.sol4t": "PDF & Excel reports",
      "gymapp.sol4d": "One-click reports for audits and reviews.",
      "gymapp.featuresTitle": "Features built",
      "gymapp.f1": "Member CRUD",
      "gymapp.f2": "Monthly membership data",
      "gymapp.f3": "KPI dashboard",
      "gymapp.f4": "PDF reports",
      "gymapp.f5": "Excel reports",
      "gymapp.featuresDesc":
        "Full CRUD (create, read, update, delete) for member (person) data and monthly membership records, plus a KPI dashboard and PDF/Excel reporting — all running offline on a local SQLite database.",
      "gymapp.capOverview": "App overview",
      "gymapp.capMembers": "Member management view",
      "gymapp.capList": "Membership list",

      "gymlanding.lead":
        "A landing page for a gym business: pricing, facilities, location, personal trainers, and a CTA to WhatsApp.",
      "gymlanding.aboutTitle": "About this project",
      "gymlanding.aboutLead":
        "Introduces DRP so prospects know it better — building trust that turns visitors into members.",
      "gymlanding.aboutDesc":
        "Complete info on location, pricing, facilities, and opening hours, with a WhatsApp CTA for consultation — creating new member opportunities with every visit.",
      "gymlanding.f1t": "Trust building",
      "gymlanding.f1d": "Know DRP better, join with confidence.",
      "gymlanding.f2t": "Full info",
      "gymlanding.f2d": "Location, pricing, facilities, hours.",
      "gymlanding.f3t": "WhatsApp CTA",
      "gymlanding.f3d": "Consultation CTA that wins new members.",
      "gymlanding.f4t": "Responsive",
      "gymlanding.f4d": "Clean layout on mobile and desktop.",
      "gymlanding.capOverview": "Landing page overview",
      "gymlanding.capAlt": "Landing page alternate view",
      "gymlanding.capLocation": "Location section",
    },

    id: {
      skip: "Lewati ke konten",
      logoHome: "Beranda portfolio",
      mainNav: "Navigasi utama",
      openMenu: "Buka menu navigasi",
      closeMenu: "Tutup menu navigasi",
      "nav.overview": "Ringkasan",
      "nav.projects": "Proyek",
      "nav.experience": "Pengalaman",
      "nav.education": "Pendidikan",
      "nav.contact": "Hubungi Saya",
      "footer.role": "Junior Software Engineer",
      "footer.rights": "Hak cipta dilindungi.",
      "detail.back": "← Kembali ke proyek",
      "detail.label": "Detail Proyek",
      "detail.gallery": "Galeri",

      "hero.greeting": "Halo, selamat datang di portfolio saya",
      "hero.role": "Junior Software Engineer",
      "hero.tagline":
        "Web Developer — fokus pada aplikasi web, backend & digitalisasi proses bisnis.",
      "hero.desc":
        "Fresh graduate Informatika dengan pengalaman lewat proyek akademik, internship, freelance, dan pekerjaan profesional. Saya membangun aplikasi web yang bersih, cepat, dan mudah dirawat.",
      "hero.viewProjects": "Lihat Proyek",
      "hero.contactMe": "Hubungi Saya",
      "hero.location": "Lokasi",
      "hero.locationVal": "Indonesia · Siap Remote",
      "hero.focus": "Fokus",

      "overview.label": "Ringkasan",
      "overview.title": "Membangun software yang rapi & berdampak",
      "overview.lead":
        "Saya merupakan fresh graduate Informatika dengan pengalaman dalam pengembangan perangkat lunak melalui proyek akademik, internship, freelance, dan pekerjaan profesional. Memiliki pengalaman dalam pengembangan aplikasi web, backend development, database management, serta digitalisasi proses bisnis.",
      "overview.desc":
        "Saya nyaman bekerja dari memahami kebutuhan bisnis, merancang alur, mengimplementasikan fitur, hingga debugging dan maintenance. Prioritas saya: kode bersih, komunikasi jelas, dan hasil yang siap dipakai.",
      "overview.link": "Lihat pengalaman saya →",
      "overview.areas": "Area keahlian utama",
      "overview.h1t": "Pengembangan Software",
      "overview.h1d": "Fitur end-to-end, debugging & maintenance.",
      "overview.h2t": "Pengembangan Web",
      "overview.h2d": "Dari landing page hingga aplikasi web responsif.",
      "overview.h3t": "Database",
      "overview.h3d": "Modeling, query & optimasi PostgreSQL.",
      "overview.h4t": "Digitalisasi",
      "overview.h4d": "Mengubah proses manual jadi alur digital.",

      "projects.label": "Proyek",
      "projects.title": "Proyek pilihan",
      "projects.sub":
        "Klik gambar atau judul proyek untuk membuka halaman detailnya.",
      "projects.ir":
        "Sistem audit untuk divisi Industrial Relations guna meninjau kepatuhan antara aturan perusahaan dan pemerintah. Mendigitalisasi proses audit — memangkas pengumpulan dokumen karyawan dari berjam-jam kerja manual menjadi hitungan menit, dan memusatkan dokumen dalam satu database untuk retrieval bukti yang cepat saat audit.",
      "projects.manatok":
        "Platform manajemen toko kuliner berbasis website dengan fitur Point of Sale dan Self Order System.",
      "projects.gymapp":
        "Aplikasi desktop untuk digitalisasi pengelolaan member dan membership pada bisnis gym.",
      "projects.gymlanding":
        "Landing page untuk bisnis gym: harga, fasilitas, lokasi, personal trainer, dan CTA menuju WhatsApp.",

      "exp.label": "Pengalaman",
      "exp.title": "Pengalaman",
      "exp.j1date": "Terbaru · Full-time",
      "exp.j1t": "Junior Software Engineer",
      "exp.j1a":
        "Mengembangkan solusi perangkat lunak sesuai kebutuhan bisnis.",
      "exp.j1b": "Mengembangkan dan melakukan maintenance aplikasi.",
      "exp.j1c": "Melakukan debugging dan database management.",
      "exp.j1d": "Berkolaborasi dalam memahami kebutuhan dan alur bisnis.",
      "exp.j2date": "6 bulan · Internship",
      "exp.j2t": "Programmer Intern",
      "exp.j2a":
        "Pengalaman 6 bulan mengembangkan dan me-maintenance sistem ERP.",
      "exp.j2b": "Melakukan debugging aplikasi.",
      "exp.j2c": "Melakukan pengolahan database.",
      "exp.j2d": "Membantu memahami kebutuhan dan proses bisnis client.",
      "exp.j3date": "Freelance",
      "exp.j3t": "Freelance Web Developer",
      "exp.j3a": "Mengembangkan website untuk kebutuhan bisnis.",
      "exp.j3b": "Membuat landing page dan website informatif.",
      "exp.j3c": "Mengimplementasikan responsive design.",
      "exp.j3d": "Mengembangkan solusi digital sesuai kebutuhan client.",

      "skills.label": "Keahlian Teknis",
      "skills.title": "Keahlian teknis",

      "edu.label": "Pendidikan",
      "edu.title": "Pendidikan",
      "edu.degree": "Sarjana Informatika / Teknik Informatika",
      "edu.focus":
        "Fokus: Software Development, Web Development, Database, dan Information Technology.",

      "contact.label": "Kontak",
      "contact.title": "Mari Bangun Sesuatu Bersama",
      "contact.desc":
        "Saya terbuka untuk peluang software development, freelance projects, dan kolaborasi. Hubungi saya melalui kanal di bawah ini.",
      "contact.email": "Email Saya",

      "ir.lead":
        "Sistem audit untuk divisi Industrial Relations guna meninjau kepatuhan antara aturan perusahaan dan pemerintah.",
      "ir.aboutTitle": "Tentang proyek ini",
      "ir.aboutLead":
        "Mendigitalisasi proses audit sistem untuk divisi Industrial Relations di PT. Sugity Creatives.",
      "ir.aboutDesc":
        "Upload dokumen karyawan dari berjam-jam kerja manual menjadi hitungan menit. Semua file bukti kini tersimpan dalam satu database terpusat.",
      "ir.aboutContext":
        "Industrial Relations adalah fungsi yang mengelola dan menjaga hubungan harmonis antara tenaga kerja, perusahaan, dan pemerintah — memastikan kepatuhan terhadap regulasi dan aturan sekaligus mendukung produktivitas dan kesejahteraan bersama. Di PT. Sugity Creatives, hal ini berarti menjaga kebijakan perusahaan tetap selaras dengan regulasi pemerintah di setiap periode audit: mengumpulkan dokumen ketenagakerjaan, meninjaunya terhadap aturan, menilai kepatuhan, dan memantau tindak lanjut. IR_COMPASS mendigitalisasi seluruh alur tersebut, sehingga hubungan antara pekerja, perusahaan, dan regulator didukung oleh data yang lengkap, tertelusur, dan selalu siap diaudit.",
      "ir.outcomes": "Hasil utama",
      "ir.o1": "Upload hitungan menit, bukan jam.",
      "ir.o2t": "Data Terpusat",
      "ir.o2": "Satu database untuk semua bukti.",
      "ir.o3t": "Review Kepatuhan",
      "ir.o3": "Audit, scoring & monitoring dalam satu alur.",
      "ir.o4t": "Proses Digital",
      "ir.o4": "Langkah manual menjadi alur digital.",
      "ir.problemTitle": "Penemuan masalah",
      "ir.problemDesc": "Hambatan ditemukan sebelum menulis kode.",
      "ir.s1date": "Langkah 1 · Observasi",
      "ir.s1t": "Alur manual yang tersebar",
      "ir.s1d": "Dokumen di chat, pengumpulan bukti makan waktu berjam-jam.",
      "ir.s2date": "Langkah 2 · Wawancara",
      "ir.s2t": "Kendala bersama tim PIC",
      "ir.s2d": "Submission lambat, file sulit ditemukan.",
      "ir.s3date": "Langkah 3 · Definisi",
      "ir.s3t": "Review tanpa alur terstruktur",
      "ir.s3d": "Pengecekan ad hoc, scoring manual tak terlacak.",
      "ir.solutionTitle": "Solusi yang ditawarkan",
      "ir.solutionDesc": "Satu platform mencakup seluruh alur audit.",
      "ir.solutions": "Solusi yang ditawarkan",
      "ir.sol1t": "Upload dokumen mandiri",
      "ir.sol1d": "Upload langsung — hitungan menit, bukan jam.",
      "ir.sol2t": "Satu database terpusat",
      "ir.sol2d": "Satu database PostgreSQL — file ketemu dalam detik.",
      "ir.sol3t": "Review & scoring terstruktur",
      "ir.sol3d": "Scoring konsisten terhadap aturan kepatuhan.",
      "ir.sol4t": "Dashboard monitoring kepatuhan",
      "ir.sol4d": "Periode, progres PIC, dan status sekilas.",
      "ir.flowTitle": "Cara kerja",
      "ir.flowDesc": "Alur simpel website dari awal sampai akhir.",
      "ir.f1date": "Langkah 1 · Setup",
      "ir.f1t": "Setup master data",
      "ir.f1d": "Superadmin menyiapkan user, domain, kriteria, dan periode yang akan dibuka.",
      "ir.f2date": "Langkah 2 · Launching",
      "ir.f2t": "Periode diluncurkan",
      "ir.f2d": "Superadmin me-launching periode untuk proses upload.",
      "ir.f3date": "Langkah 3 · Upload",
      "ir.f3t": "PIC upload evidence",
      "ir.f3d": "PIC mengunggah evidence wajib sesuai tiap kriteria.",
      "ir.f4date": "Langkah 4 · Review",
      "ir.f4t": "Admin mereview evidence",
      "ir.f4d": "Admin mereview evidence yang sudah diunggah.",
      "ir.f5date": "Langkah 5 · Approve",
      "ir.f5t": "Disetujui, skor naik",
      "ir.f5d": "Evidence yang disetujui menaikkan assessment score.",
      "ir.f6date": "Langkah 6 · Arsip",
      "ir.f6t": "Menjadi dokumen history",
      "ir.f6d": "Evidence yang disetujui diarsipkan sebagai dokumen history.",
      "ir.f7date": "Langkah 7 · Selesai",
      "ir.f7t": "Selesai",
      "ir.f7d": "Alur audit periode tersebut selesai.",
      "ir.capBackground": "Latar belakang proyek",
      "ir.capProblem": "Analisis masalah",
      "ir.capGoals": "Tujuan proyek",
      "ir.capLanding": "Halaman landing",
      "ir.capDashboard": "Dashboard superadmin",
      "ir.capReview": "Review audit",
      "ir.capReviewSugity": "Review audit — Sugity",
      "ir.capPeriods": "Daftar Periode (bagian PIC)",
      "ir.capLogin": "Halaman login",

      "manatok.lead":
        "Platform manajemen toko kuliner berbasis website dengan fitur Point of Sale dan Self Order System.",
      "manatok.aboutTitle": "Tentang proyek ini",
      "manatok.aboutLead":
        "Dibangun untuk membantu toko kuliner mengelola operasional harian dari satu platform web.",
      "manatok.aboutDesc":
        "Mencakup alur Point of Sale di sisi kasir dan Self Order System untuk pelanggan, didukung database terpusat untuk menu, order, dan transaksi.",
      "manatok.features": "Fitur utama",
      "manatok.f1": "Alur kasir untuk order & pembayaran cepat.",
      "manatok.f2t": "Self Order",
      "manatok.f2": "Pelanggan memesan langsung dari perangkat sendiri.",
      "manatok.f3t": "Data Terpusat",
      "manatok.f3": "Menu, order & transaksi dalam satu database.",
      "manatok.f4t": "Web Responsif",
      "manatok.f4": "Berjalan di desktop kasir dan HP pelanggan.",
      "manatok.capOverview": "Ringkasan platform",
      "manatok.capLogin": "Halaman login",
      "manatok.capRegister": "Halaman register",
      "manatok.capTables": "Manajemen meja admin",
      "manatok.capProducts": "Halaman produk",
      "manatok.capAddOrder": "Tambah pesanan",
      "manatok.capCustomerMenu": "Menu pelanggan",
      "manatok.capClosedMenu": "Tampilan menu tutup",
      "manatok.capSettings": "Pengaturan",
      "manatok.capAccounts": "Manajemen akun",
      "manatok.capQr": "Cetak QR code",

      "gymapp.lead":
        "Aplikasi desktop untuk digitalisasi pengelolaan member dan membership pada bisnis gym.",
      "gymapp.backgroundTitle": "Latar belakang",
      "gymapp.backgroundLead":
        "DRP Gym sudah berdiri sejak 2021 — tapi data member masih dikelola di file Excel yang berantakan.",
      "gymapp.backgroundDesc":
        "Catatan tersebar dan sulit dipantau, sehingga audit / keputusan bisnis lama terjadi.",
      "gymapp.problemLead":
        "Pencatatan masih sebagian manual dan Excel-nya berantakan.",
      "gymapp.problemDesc":
        "Tidak ada grouping, tidak ada tampilan bulanan yang andal — pemilik sulit memantau data member dan membership.",
      "gymapp.solutionTitle": "Solusi yang ditawarkan",
      "gymapp.solutionDesc":
        "Aplikasi desktop yang mengelompokkan data member dan membership — pemilik mudah memantau per bulan sehingga keputusan bisnis gym cepat dan tepat.",
      "gymapp.sol1t": "Data member terkelompok",
      "gymapp.sol1d": "Member tertata dan mudah dipantau per bulan.",
      "gymapp.sol2t": "Tracking membership",
      "gymapp.sol2d": "Status membership bulanan sekilas.",
      "gymapp.sol3t": "Dashboard KPI",
      "gymapp.sol3d": "Key performance indicator untuk keputusan cepat.",
      "gymapp.sol4t": "Laporan PDF & Excel",
      "gymapp.sol4d": "Laporan sekali klik untuk audit dan review.",
      "gymapp.featuresTitle": "Fitur yang dibuat",
      "gymapp.f1": "CRUD Member",
      "gymapp.f2": "Data membership bulanan",
      "gymapp.f3": "Dashboard KPI",
      "gymapp.f4": "Laporan PDF",
      "gymapp.f5": "Laporan Excel",
      "gymapp.featuresDesc":
        "CRUD penuh (create, read, update, delete) untuk data member (person) dan data membership bulanan, plus dashboard KPI dan laporan PDF/Excel — semuanya berjalan offline di database SQLite lokal.",
      "gymapp.capOverview": "Ringkasan aplikasi",
      "gymapp.capMembers": "Tampilan manajemen member",
      "gymapp.capList": "Daftar membership",

      "gymlanding.lead":
        "Landing page untuk bisnis gym: harga, fasilitas, lokasi, personal trainer, dan CTA menuju WhatsApp.",
      "gymlanding.aboutTitle": "Tentang proyek ini",
      "gymlanding.aboutLead":
        "Mengenalkan DRP lebih jauh — membangun kepercayaan yang mengubah pengunjung menjadi member.",
      "gymlanding.aboutDesc":
        "Informasi lengkap lokasi, harga, fasilitas, dan jam buka-tutup, dengan CTA WhatsApp untuk konsultasi — menciptakan peluang member baru di setiap kunjungan.",
      "gymlanding.f1t": "Membangun kepercayaan",
      "gymlanding.f1d": "Kenal DRP lebih jauh, daftar dengan yakin.",
      "gymlanding.f2t": "Info lengkap",
      "gymlanding.f2d": "Lokasi, harga, fasilitas, jam buka.",
      "gymlanding.f3t": "CTA WhatsApp",
      "gymlanding.f3d": "CTA konsultasi yang menarik member baru.",
      "gymlanding.f4t": "Responsif",
      "gymlanding.f4d": "Tampilan rapi di mobile dan desktop.",
      "gymlanding.capOverview": "Ringkasan landing page",
      "gymlanding.capAlt": "Tampilan alternatif landing page",
      "gymlanding.capLocation": "Bagian lokasi",
    },
  };

  const KEY = "portfolio-lang";

  const get = (obj, path) =>
    path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

  const applyLang = (lang) => {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === "id" ? "id" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = dict[el.getAttribute("data-i18n")];
      if (typeof val === "string") el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const val = dict[el.getAttribute("data-i18n-alt")];
      if (typeof val === "string") el.setAttribute("alt", val);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const val = dict[el.getAttribute("data-i18n-aria")];
      if (typeof val === "string") el.setAttribute("aria-label", val);
    });
    document.querySelectorAll("#langToggle .lang-opt").forEach((opt) => {
      opt.classList.toggle("active", opt.dataset.lang === lang);
    });
    const toggle = document.getElementById("langToggle");
    if (toggle)
      toggle.setAttribute(
        "aria-label",
        lang === "id" ? "Ganti bahasa" : "Switch language",
      );
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {
      /* ponytail: private mode, default EN is fine */
    }
  };

  const current = () => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "id" || saved === "en") return saved;
    } catch (e) {
      /* ignore */
    }
    return "en";
  };

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("langToggle");
    let lang = current();
    applyLang(lang);
    if (toggle) {
      toggle.addEventListener("click", () => {
        lang = lang === "en" ? "id" : "en";
        applyLang(lang);
      });
    }
  });
})();
