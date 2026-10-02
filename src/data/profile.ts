// Edit file ini untuk mengubah isi website.

export const profile = {
  name: "Azihan",
  tagline:
    "Mahasiswa Sistem Informasi di Uniska yang lagi belajar jadi game developer, sambil bekerja sebagai Admin Accounts Receivable di Campina Ice Cream.",
  about: [
    "Aku Azihan, mahasiswa semester 1 Sistem Informasi di Uniska. Sehari-hari aku bekerja sebagai Admin Accounts Receivable di Campina Ice Cream, mengelola data piutang dengan Excel dan sistem internal perusahaan, jadi aku terbiasa kerja teliti dengan data.",
    "Di luar itu, aku tertarik dengan dunia game development dan mulai belajar membuat game sendiri. Portofolio ini jadi tempat aku mencatat perjalanan karier, kuliah, dan proyek-proyek yang aku bikin.",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/Azihan-QQ" },
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/..." },
    // { label: "Email", url: "mailto:..." },
  ],
};

export const experience = [
  {
    role: "Admin Accounts Receivable",
    place: "Campina Ice Cream",
    period: "Sekarang",
    points: [
      "Mengelola dan mencatat data piutang pelanggan",
      "Mengolah data dengan Excel dan sistem internal perusahaan",
    ],
  },
  {
    role: "Mahasiswa S1 Sistem Informasi",
    place: "Uniska",
    period: "2026 sampai sekarang",
    points: ["Semester 1"],
  },
];

export const skills = ["Microsoft Excel", "Sistem internal Campina", "HTML", "Astro"];

// Tambahkan proyek baru di sini.
export const projects: {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}[] = [
  {
    title: "Website Portofolio",
    description: "Website yang sedang kamu lihat ini, dibuat dengan Astro dan di-hosting gratis di GitHub Pages.",
    tags: ["Astro", "GitHub Pages"],
    url: "https://github.com/Azihan-QQ/azihan-qq.github.io",
  },
];
