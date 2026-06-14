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
    skills: ['JavaScript', 'Java', 'Python'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'RBAC'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'SQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    category: 'Core',
    skills: ['Data Structures & Algorithms', 'OOP', 'API Design'],
  }
]

export const PROJECTS = [
  {
    title: 'Team Task Manager',
    description:
      'A full-stack MERN application for managing projects, tasks, and team collaboration through secure role-based access control and an intuitive dashboard.',
    features: [
      'JWT-based authentication and protected routes',
      'Role-based access control for Admin and Members',
      'Project creation, assignment, and management',
      'Task tracking with todo, in-progress, and done workflows',
      'Team member management with secure REST APIs'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS'],
    github: 'YOUR_GITHUB_LINK',
    demo: 'YOUR_DEMO_LINK',
  },
  {
    title: 'E-commerce Web App',
    description:
      'A full-stack e-commerce application built with the MERN stack, featuring user authentication, shopping cart functionality, and order management.',
    features: [
      'JWT-based authentication with protected routes',
      'Dynamic cart and checkout workflow',
      'Order management with history and detailed tracking',
      'User address and profile management',
      'Admin panel for product CRUD operations'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/Vimal4043/E-Commerce-mern',
    demo: 'https://e-commerce-mern-tau-ten.vercel.app/',
  },
  {
    title: 'Finance Dashboard',
    description:
      'A responsive analytics dashboard for tracking financial data with interactive visualizations and smooth UI animations.',
    features: [
      'Interactive charts using Recharts',
      'Transaction tracking and data insights panels',
      'Framer Motion-based micro-interactions',
      'Responsive and user-friendly dashboard UI'
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
      'Add-to-cart user interface',
      'Interactive buttons and hover effects',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Vimal4043/Fresh-Grocery-Store',
    demo: 'https://fresh-grocery-store-one.vercel.app/',
  },
  {
    title: 'Spotify UI Clone',
    description:
      'A responsive Spotify Web Player UI clone built using HTML5 and CSS3, focusing on pixel-perfect design and modern layout techniques.',
    features: [
      'Responsive layout using Flexbox and CSS Grid',
      'Spotify-inspired UI with sidebar navigation',
      'Album cards with hover effects',
      'Static music player interface',
    ],
    tech: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid'],
    github: 'https://spotify-clone-one-jet-71.vercel.app/',
    demo: '',
  }
]

export const EXPERIENCE = [
  {
    role: 'Full Stack Trainee',
    organization: 'Agilityhive Research',
    duration: 'April 2026 - present',
    highlights: [
      'Built and enhanced backend functionalities using Node.js and Express.js to support core application features.',
      'Designed and developed a complete HRIS platform for employee management, workflows, and role-based access control.',
      'Implemented secure authentication and authorization using JWT and middleware-based access control.',
      'Developed and integrated RESTful APIs for seamless communication between frontend and backend systems.',
      'Designed and developed an Intercept Management module with landing pages, respondent tracking, and status-based callback URLs for survey workflows.',
      'Redesigned frontend interfaces using React.js and Tailwind CSS with reusable and responsive UI components.',
      'Optimized application performance and resolved bugs to improve system stability and user experience.'
    ]
  },
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
