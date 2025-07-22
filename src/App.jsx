import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, Menu, X, GraduationCap, Award, Star, Home } from 'lucide-react';

// --- STEP 1: Cleaned up and verified image imports ---

// Profile Picture
import profilePic from './assets/profile.jpg';

// Project Images
import campus1 from './assets/1.png';
import campus2 from './assets/2.png';
import campus3 from './assets/3.png';
import ecommerce1 from './assets/ecommerce-1.png';
import ecommerce2 from './assets/ecommerce-2.png';
import ecommerce3 from './assets/ecommerce-3.png';
import ecommerce4 from './assets/ecommerce-4.png';
import ecommerce5 from './assets/ecommerce-5.png';
import ecommerce6 from './assets/ecommerce-6.png';
import ecommerce7 from './assets/ecommerce-7.png';
import yoga1 from './assets/yoga-1.png';
import yoga2 from './assets/yoga-2.png';
import doctor1 from './assets/doctor-1.png';
import doctor2 from './assets/doctor-2.png';
// --- NEW: Swift AId Project Images ---
import amb1 from './assets/amb1.png';
import amb2 from './assets/amb2.png';
import amb3 from './assets/amb3.png';
import amb4 from './assets/amb4.png';
import amb5 from './assets/amb5.png';
import amb6 from './assets/amb6.png';


// Activity Images 
import basketballImage1 from './assets/basketball-1.jpg';
import basketballImage2 from './assets/basketball-2.jpg';
import nss from './assets/nss.jpg';

const portfolioData = {
  name: "Vedika Sharma",
  title: "Software Developer",
  summary: "A Final-Year AI and Data Science student with a strong foundation in Data Structures, Algorithms, and Full-Stack Development. Passionate about leveraging technology to build scalable, real-world applications and solve ambiguous problems.",
  contact: {
    email: "vedikasharma2801@gmail.com",
    linkedin: "https://www.linkedin.com/in/vedika-sharma-80a0a228a/",
    github: "https://github.com/vedikasharma2801",
  },
  education: [
    {
      degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
      institution: "MBM University, Jodhpur",
      period: "2022 - 2026",
      description: "Pursuing my Bachelor's degree, maintaining a good academic record with an average CGPA of 8.89."
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "Emmanuel Mission Sr. Sec. School, Sirohi",
      period: "2021",
      description: "Passed with 93.4% from CBSE board."
    },
    {
      degree: "Secondary (Class X)",
      institution: "Emmanuel Mission Sr. Sec. School, Sirohi",
      period: "2019",
      description: "Passed with 95% from CBSE board."
    }
  ],
  skills: [
    { name: "Languages", items: ["JavaScript", "Python", "C", "C++"] },
    { name: "Web Tech", items: ["ReactJS", "NodeJS", "ExpressJS", "Flask", "HTML5", "CSS3"] },
    { name: "Databases", items: ["MySQL", "MongoDB", "Firebase"] },
    { name: "AI/ML", items: ["Machine Learning", "Deep Learning", "NLP", "Pandas", "NumPy", "Scikit-learn", "OpenCV"] },
    { name: "Core Concepts", items: ["Data Structures & Algorithms", "OOP", "Operating Systems"]},
    { name: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "AWS", "Linux", "Redux"] },
  ],
  experience: [
    { 
      role: "React Dev. Intern", 
      company: "Celebal Technologies", 
      date: "May 2025 - July 2025", 
      description: [
        "Spearheaded the development of multiple applications, including a Full-Stack E-Commerce Platform, a feature-rich Admin Dashboard, and a Music Streaming App prototype.",
        "Strengthened core React skills by building and testing foundational projects, solidifying understanding of state management, component lifecycle, and hooks.",
        "Gained significant hands-on experience working with industry-standard codebases and agile development workflows."
      ] 
    },
    { 
      role: "AI Intern", 
      company: "RoboAI Hub", 
      date: "June 2024 - July 2024", 
      description: [
        "Contributed as a key member of the AI team in a dynamic startup environment, focusing on practical applications of machine learning.",
        "Engineered the 'Virtual Doctor' project, a diagnostic tool based on ML models, which was the capstone project of the internship.",
        "Successfully presented and demonstrated the 'Virtual Doctor' project at a public technology exhibition, communicating complex technical concepts to a diverse audience."
      ] 
    }
  ],
  projects: [
    { title: "E-Commerce Platform", description: "A full-featured e-commerce application with product browsing, shopping cart, user authentication (JWT), and payment gateway integration.", tags: ["MERN", "Redux", "PayPal API", "JWT"], imageUrls: [ecommerce1, ecommerce2, ecommerce3, ecommerce4, ecommerce5, ecommerce6, ecommerce7], link: "https://github.com/vedikasharma2801/celebal/tree/main/ass08" },
    { title: "Swift AId", description: "An emergency ambulance-calling website with one-tap location sharing, integrated with an AI chatbot for immediate assistance. Sends patient details to the hospital in advance.", tags: ["MERN Stack", "Tailwind CSS", "AI Chatbot"], imageUrls: [amb1, amb2, amb3, amb4, amb5, amb6], link: "https://swiftaid.vercel.app/" },
    { title: "Yoga Asana Classification", description: "A deep learning model to classify yoga asanas from images and video frames, applying CNN and LSTM.", tags: ["Deep Learning", "Computer Vision", "CNN", "LSTM", "OpenCV"], imageUrls: [campus1, campus2, campus3], link: "https://github.com/vedikasharma2801/Yoga-Pose-Detector" },
    { title: "Virtual Doctor", description: "An AI-powered diagnostic tool that predicts potential ailments based on user-inputted symptoms.", tags: ["Python", "Flask", "Scikit-learn", "Pandas"], imageUrls: [doctor1, doctor2], link: "https://github.com/vedikasharma2801/Virtual-Doctor" },
    { title: "Viber", description: "A modern music streaming web app built with React, Redux Toolkit, Tailwind CSS, and the Shazam Core API.", tags: ["React", "Redux", "Tailwind CSS", "Shazam Core API"], imageUrls: [yoga1, yoga2],  link: "https://github.com/vedikasharma2801/celebal/tree/main/ass06/Viber" },
  ],
  activities: {
    details: [
        { title: "University Athlete: Basketball", description: "Represented University at West-Zone AIU Tournament. Won Bronze at Spardha-24 (IIT-BHU) and Varchas-24 (IIT-J)." },
        { title: "Yoga & Chess", description: "Active player in Yoga and Chess, with a keen interest in strategic games and physical fitness." },
        { title: "PR & Event Management", description: "As PR Coordinator for the 'TechKriti' fest and a World Record Attempt, I managed event execution and led a team in creating a large-scale human formation of the Indian map with robots." },
        { title: "NSS Coordinator", description: "Coordinated activities for the National Service Scheme (NSS) for the AI & DS branch." },
        
    ],
    images: [basketballImage1, basketballImage2, nss]
  }
};


// --- Reusable Components ---

const NavLink = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-slate-600 hover:text-slate-900 transition-colors duration-300">
    {children}
  </a>
);

const SkillPill = ({ children }) => (
  <span className="inline-block bg-slate-200 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">
    {children}
  </span>
);

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (project.imageUrls.length <= 1) return;
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % project.imageUrls.length);
    }, 2500); // Slightly slower for better viewing
    return () => clearInterval(intervalId);
  }, [project.imageUrls.length]);

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        {project.imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`${project.title} screenshot ${index + 1}`} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} />
        ))}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => <SkillPill key={tag}>{tag}</SkillPill>)}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto pt-2 flex items-center text-slate-500 group-hover:text-blue-600 transition-colors duration-300 font-semibold">
          <span>View Project</span>
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

const ActivitySlideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Activity image ${index + 1}`} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} />
            ))}
        </div>
    );
};


// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#activities', label: 'Activities' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" aria-label="Home" className="text-slate-900 hover:text-blue-600 transition-colors">
            <Home className="w-6 h-6" />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50 text-slate-800">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-700 hover:text-slate-900">{link.label}</a>
            ))}
          </div>
        )}
      </header>

      <main className="container mx-auto px-6 pt-24">
        <section id="about" className="min-h-screen flex items-center justify-center py-16">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <div className="w-full md:w-2/5 flex-shrink-0">
                    <img 
                        src={profilePic}
                        alt="Vedika Sharma" 
                        className="w-64 h-64 md:w-80 md:h-80 rounded-3xl mx-auto shadow-2xl border-8 border-white object-cover"
                    />
                </div>
                <div className="md:w-3/5 text-center md:text-left">
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-2 tracking-tight">{portfolioData.name}</h1>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-slate-700 mb-4">{portfolioData.title}</h2>
                    <p className="max-w-2xl text-lg text-slate-600 mb-8 mx-auto md:mx-0">
                        {portfolioData.summary}
                    </p>
                    <div className="flex justify-center md:justify-start items-center space-x-4">
                        <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center justify-center bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-colors duration-300 shadow-sm">
                            <Mail className="w-5 h-5 mr-2" /> Contact Me
                        </a>
                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-slate-200 hover:bg-slate-300 transition-colors duration-300"><Linkedin className="w-6 h-6 text-slate-700" /></a>
                        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-slate-200 hover:bg-slate-300 transition-colors duration-300"><Github className="w-6 h-6 text-slate-700" /></a>
                    </div>
                </div>
            </div>
        </section>

        <section id="education" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="max-w-3xl mx-auto space-y-8 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200"></div>
                {portfolioData.education.map((edu, index) => (
                    <div key={index} className="pl-12 relative">
                        <div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 bg-white border-2 border-blue-500 rounded-full">
                            <GraduationCap className="w-4 h-4 text-blue-500" />
                        </div>
                        <p className="text-sm text-slate-500 mb-1">{edu.period}</p>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-md text-slate-700 font-semibold mb-2">{edu.institution}</p>
                        <p className="text-slate-600">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section id="skills" className="py-20 bg-slate-100 -mx-6 px-6 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {portfolioData.skills.map(skillCategory => (
                    <div key={skillCategory.name} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                        <h3 className="text-xl font-semibold mb-4">{skillCategory.name}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillCategory.items.map(item => <SkillPill key={item}>{item}</SkillPill>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8 relative">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200"></div>
            {portfolioData.experience.map((job, index) => (
              <div key={index} className="pl-12 relative">
                <div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 bg-white border-2 border-slate-800 rounded-full">
                    <Star className="w-4 h-4 text-slate-800" />
                </div>
                <p className="text-sm text-slate-500 mb-1">{job.date}</p>
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="text-md text-slate-700 font-semibold mb-2">{job.company}</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    {job.description.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        <section id="projects" className="py-20 bg-slate-100 -mx-6 px-6 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="activities" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12">Extracurricular Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 space-y-6">
                    {portfolioData.activities.details.map((activity, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full">
                                <Award className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{activity.title}</h3>
                                <p className="text-slate-600">{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <ActivitySlideshow images={portfolioData.activities.images} />
                </div>
            </div>
        </section>

      </main>

      <footer id="contact" className="bg-white border-t border-slate-200 mt-20">
        <div className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">I'm currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.</p>
             <div className="flex justify-center items-center space-x-4">
                <a href={`mailto:${portfolioData.contact.email}`} className="font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-300">{portfolioData.contact.email}</a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors duration-300"><Linkedin className="w-5 h-5 text-slate-700" /></a>
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors duration-300"><Github className="w-5 h-5 text-slate-700" /></a>
            </div>
            <p className="text-sm text-slate-500 mt-10">&copy; {new Date().getFullYear()} Vedika Sharma. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
