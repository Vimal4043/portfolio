export const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
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
  // {
  //   title: 'Spotify UI Clone',
  //   description:
  //     'A responsive Spotify Web Player UI clone built using HTML5 and CSS3, focusing on pixel-perfect design and modern layout techniques.',
  //   features: [
  //     'Responsive layout using Flexbox and CSS Grid',
  //     'Spotify-inspired UI with sidebar navigation',
  //     'Album cards with hover effects',
  //     'Static music player interface',
  //   ],
  //   tech: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid'],
  //   github: 'https://github.com/Vimal4043/Spotify-Clone',
  //   demo: '',
  // }
]

export const EXPERIENCE = [
  {
    role: 'Business Development Intern',
    organization: 'Synergy Telecom Pvt. Ltd.',
    duration: 'June 2025 - July 2025',
    highlights: [
      'Conducted market research and competitor analysis to support business growth strategies.',
      'Prepared structured business reports and performance summaries using Excel.',
      'Maintained and organized client datasets to track sales activities and metrics.',
      'Monitored sales trends and assisted in performance tracking through reports.',
      'Collaborated with cross-functional teams to ensure accurate data communication.',
    ],
  },
  {
    role: 'Full Stack Trainee',
    organization: 'Agilityhive Research',
    duration: 'April 2026 - present',
    highlights: [
      'Improved company website UI / UX, enhancing usability and overall user experience',
      'Developed backend functionality using Node.js and Express.js to support application features',
      'Designed and built a complete HRIS platform for managing employee data, workflows, and role- based access',
      'Implemented secure authentication and authorization using JWT',
      'Built and integrated RESTful APIs for efficient data communication between frontend and backend',
      'Optimized application performance and resolved bugs to improve stability'
    ],
  }
]

export const LEADERSHIP = [
  {
    role: 'Tech Head',
    organization: 'Shatranj Society, NSUT',
    highlights: [
      'Led technical initiatives and delivered 5+ sessions to 40+ members.',
      'Coordinated content planning and team tasks.',
    ],
  },
  {
    role: 'Event Organizer',
    organization: 'College Fest Team',
    highlights: [
      'Managed event logistics and coordination across teams.',
      'Handled real-time issue resolution during events.',
    ],
  },
  {
    role: 'Mentor',
    organization: 'Desh Ke Mentor',
    highlights: [
      'Mentored students and simplified complex concepts.',
      'Improved student confidence through structured guidance.',
    ],
  },
]

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
