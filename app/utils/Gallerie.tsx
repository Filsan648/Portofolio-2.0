import React from 'react';
/* Importation de tes images */
import image1 from '../asset/ProjectGallerie/CIMAS/image1.png';
import image2 from '../asset/ProjectGallerie/CIMAS/image2.png';
import image3 from '../asset/ProjectGallerie/CIMAS/image3.png';
import image4 from '../asset/ProjectGallerie/CIMAS/image4.png';
import image5 from '../asset/ProjectGallerie/CIMAS/image5.png';

const projects = [
  { id: 1, src: image1, title: "CIMAS Concept", category: "Architecture" },
  { id: 2, src: image2, title: "Digital Flow", category: "Web Design" },
  { id: 3, src: image3, title: "Modernist", category: "Branding" },
  { id: 4, src: image4, title: "Oceanic", category: "UI/UX" },
  { id: 5, src: image5, title: "Minimalist", category: "Development" },
];

function ProjectGallerie() {
  return (
    <section className="bg-[#0f0f0f] min-h-screen py-20 px-6 md:px-12">
      {/* Header du Projet */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-4">
          CIMAS <span className="text-gray-500">Showcase</span>
        </h2>
        <div className="h-[1px] w-full bg-gray-800 mb-8"></div>
        <p className="text-gray-400 max-w-md text-lg leading-relaxed">
          Une exploration visuelle de l'excellence digitale. Chaque capture représente un jalon dans notre processus de design Awwwards.
        </p>
      </div>

      {/* Grille de Galerie Style Awwwards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`group relative overflow-hidden bg-[#1a1a1a] cursor-pointer
              ${index % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5'} 
              ${index === 4 ? 'md:col-span-12 h-[400px]' : 'h-[500px]'}`}
          >
            {/* Image avec effet Zoom au hover */}
            <img 
              src={project.src} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />

            {/* Overlay d'information */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                {project.category}
              </span>
              <h3 className="text-white text-3xl font-light italic">
                {project.title}
              </h3>
              
              {/* Bouton qui apparaît au hover */}
              <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-500">
                <p className="text-white border-b border-white inline-block text-sm uppercase">
                  Voir le projet
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Minimaliste */}
      <div className="max-w-7xl mx-auto mt-24 text-center">
        <button className="text-white border border-gray-700 px-12 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300 uppercase text-sm tracking-widest">
          Explorer plus
        </button>
      </div>
    </section>
  );
}

export default ProjectGallerie;