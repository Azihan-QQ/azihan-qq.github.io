// Edit file ini untuk mengubah isi website.

export const profile = {
  name: "Azihan",
  tagline:
    "Info Systems student at Uniska University and Accounts Receivable Admin at Campina Ice Cream, currently locked in on building a few portfolio projects.",
  about: [
    "Hey, I'm Azihan, a first-semester Information Systems student at Uniska. By day I'm an Accounts Receivable Admin at Campina Ice Cream, wrangling receivables data in Excel and the company's internal system, so yeah, I'm kinda obsessed with getting the numbers right.",
    "Right now I'm focused on building out a few portfolio projects. This site is where I keep track of my career, college life, and whatever I'm cooking up next.",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/Azihan-QQ" },
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/..." },
    // { label: "Email", url: "mailto:..." },
  ],
};

export const experience = [
  {
    role: "Accounts Receivable Admin",
    place: "Campina Ice Cream",
    period: "Now",
    points: [
      "Managing and keeping customer receivables data on point",
      "Crunching data in Excel and the company's internal system",
    ],
  },
  {
    role: "Information Systems Student (S1)",
    place: "Uniska",
    period: "2026 to now",
    points: ["1st semester, just getting started"],
  },
  {
    role: "Computer & Network Engineering (TKJ)",
    place: "SMK Negeri 5 Banjarmasin",
    period: "Graduated",
    points: ["Vocational high school where I learned the basics of computer hardware and networking"],
  },
];

export const skills = ["Microsoft Excel", "Campina internal system", "HTML", "PHP", "Astro"];

// Tambahkan proyek baru di sini.
export const projects: {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}[] = [
  {
    title: "Portfolio Website",
    description: "The site you're literally looking at rn. Built with Astro and hosted for free on GitHub Pages.",
    tags: ["Astro", "GitHub Pages"],
    url: "https://github.com/Azihan-QQ/azihan-qq.github.io",
  },
  {
    title: "Cashier App (WIP)",
    description: "A web-based cashier app for tracking orders, customers, and stock. Still cooking 🍳",
    tags: ["PHP", "Bootstrap"],
  },
];

// Tambahkan pendakian baru di sini. Taruh fotonya di folder public/hiking/.
export const hikes: {
  name: string;
  elevation: string;
  date: string;
  story: string;
  photo?: string;
}[] = [
  {
    name: "Mt. Lumut",
    elevation: "601 masl",
    date: "Aug 16, 2026",
    story:
      "About 4 km from basecamp to the summit. Me and the squad ran out of supplies mid-hike, but we still pushed through. The view? Totally worth it 🌄",
    photo: "/hiking/gunung-lumut.jpg",
  },
];
