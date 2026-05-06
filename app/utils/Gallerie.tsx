import React from 'react';
import Slider from './slider';
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
    <section className='' >
    {projects.map((item,index)=>(
      <div> 
        <img src={item.src}    />
      </div>

    ))}
    <Slider />
    </section>
  );
}

export default ProjectGallerie;




