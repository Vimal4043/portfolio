export const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'Java', 'Python', 'C'],
  },
  {
    category: 'MERN Stack',
    skills: ['MongoDB', 'Express', 'React', 'Node'],
  },
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['REST APIs', 'JWT Auth'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

export const PROJECTS = [
  {
    title: 'E-commerce Web App',
    description:
      'A full-stack shopping platform with secure auth flows, cart management, checkout, and robust order lifecycle handling.',
    features: [
      'Authentication and protected routes',
      'Cart and checkout workflow',
      'Order history and detailed order views',
    ],
    tech: ['MERN', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/Vimal4043/E-Commerce-mern',
    demo: 'https://e-commerce-mern-tau-ten.vercel.app/',
  },
  {
    title: 'Finance Dashboard',
    description:
      'An analytics-heavy dashboard for transaction tracking with animated charts and interaction-focused UI patterns.',
    features: [
      'Interactive chart visualizations',
      'Transaction tracking panels',
      'Framer Motion-based micro interactions',
    ],
    tech: ['React', 'Recharts', 'Framer Motion'],
    github: 'https://github.com/Vimal4043/Finance-Dashboard',
    demo: 'https://finance-dashboard-eosin-sigma.vercel.app/',
  },
  {
    title: 'Fresh Grocery Store',
    description:
      'A responsive grocery store website built using HTML5, CSS3, and Vanilla JavaScript, focusing on clean UI design, structured layout, and interactive user experience.',
    features: [
      'Responsive design (mobile-friendly)',
      'Product listing section',
      'Smooth scrolling navigation bar',
      'Add-to-cart user interface',
      'Interactive buttons and hover effects',
      'Organized folder structure',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Vimal4043/Fresh-Grocery-Store',
    demo: 'https://fresh-grocery-store-one.vercel.app/',
  },
]

export const ACHIEVEMENTS = [
  'Solved 300+ DSA problems on LeetCode with strong consistency.',
  'Built production-level full-stack applications with clean architecture.',
]

export const EXPERIENCE = {
  role: 'Tech Head',
  organization: 'Shatranj Society, NSUT',
  highlights: [
    'Led 5+ technical initiatives for student development.',
    'Designed and delivered 10+ hands-on technical sessions.',
  ],
}

export const CONTACT = {
  email: 'vimalkumar40437@gmail.com',
  socials: [
    {
      name: 'GitHub',
      href: 'https://github.com/Vimal4043',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vimal-kumar-bb3258218/',
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/_VimalKumar_/',
    },
  ],
}
