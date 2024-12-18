import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const PROJECTS = [
    {
        title: "Airbnb Clone",
        image: "/images/Airbnb-Frontend.PNG",
        description: "A fully responsive Airbnb-inspired web application featuring user authentication, property listings, booking functionality, and user-friendly interfaces.",
        technologies: ["MongoDB", "React", "Node.js", "Express", "Tailwind CSS"],
        url: "https://mern-project-liart.vercel.app/"
    },
    {
      "title": "Portfolio Website",
      image: "/images/portfolio.PNG",
      "url": "https://khp-dev-portfolio.netlify.app/",
      "description": "A personal portfolio designed to showcase skills, projects, and achievements. Built using React and enhanced with animation effects using AOS (Animate on Scroll).",
      "technologies": ["React", "AOS"]
    },
    {
      "title": "StyleSwap",
      image: "/images/StyleSwap.PNG",
      "url": "https://styleswap.vercel.app/",
      "description": "A feature-rich e-commerce platform with an integrated admin panel. Users can browse products, and the admin can manage inventory and orders. Features include Cloudinary for image hosting and Toastify for notifications.",
      "technologies": ["MongoDB", "Express", "React", "Node.js", "Cloudinary", "Toastify"]
    },
    {
      "title": "Blog Website",
      image: "/images/blog.PNG",
      "url": "https://blog-frontend-kappa-one.vercel.app/",
      "description": "A blogging platform where logged-in users can create and manage their blogs. Users can edit only their own blogs, ensuring secure and personalized content management.",
      "technologies": ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      "title": "LinkedIn Clone",
      image: "/images/Linkedin.PNG",
      "url": "https://project-umber-delta.vercel.app/",
      "description": "A social platform inspired by LinkedIn. Users can sign up, log in, create posts, and follow others. Designed for networking and professional connections.",
      "technologies": ["MongoDB", "Express", "React", "Node.js"]
    }
  ]
  

const Projects = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return(
        <section >
          <h2 className="mb-8 text-center text-4xl font-bold">Projects</h2>
          <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="rounded-lg p-4 shadow-lg transform transition duration-500 hover:scale-105"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 h-40 w-full rounded object-cover"
                  />
                </a>
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((item, index) => (
                    <span
                      key={index}
                      className="rounded bg-gray-700 px-2 py-1 text-sm text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      );
    };
    
export default Projects;
