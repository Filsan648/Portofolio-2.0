import { NavLink } from 'react-router';
import {Projects }from '../../data/DataProject';
import React from 'react';




function ProjectDescription({id}: {id: number }) {
return(
    <div className=''>

    <div className='px-24'> 
       <h1 className='text-5xl font-bold py-5 text-black/90'>{Projects[id].title}</h1>
         <p className='w-1/2 text-black/80'>{Projects[id].SUMMARY}</p>
         </div>
          < DetailItem id={id} />
            <Demo id={id} />
            <NextProject id={id} />

    </div>
)
}
export default ProjectDescription;


function DetailItem({id}: {id: number}) {
  const details = [
  { label: "Role", value: Projects[id].Role },
  { label: "Technologies", value: Projects[id].Tecnologies },
  { label: "Timeline", value: Projects[id].Timeline },
];
  return (
    <div className="bg-gray-200 grid grid-cols-[auto_1fr] gap-y-20 gap-x-10  px-24 my-16 py-24">
  {details.map((item, index) => (
    <React.Fragment key={index}>
      <p className="font-bold text-2xl text-black/85">{item.label}</p>
      <p className="font-light text-2xl text-black/85">{item.value}</p>
    </React.Fragment>
  ))}
</div>
  );
}


function Demo({id}: {id: number }) {
  return (
  <div className="px-6 md:px-24 py-10 flex justify-center">
  <div className="relative w-full max-w-5xl">
    
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20"></div>

    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
    {
         Projects[id].DemoVideo ? (
            <video controls className="w-full h-auto">
              <source src={Projects[id].DemoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={Projects[id].DemoImage}
              alt="Demo"
              className="w-full h-auto"
            />
          )
    }
      
    </div>
  </div>
   
</div>
  );
}


function NextProject({id}: {id: number}) {
  const nextId = (id + 1) % Projects.length; 
  return (
    <div className="px-6 md:px-24 py-10 flex flex-col  gap-12">
      <h2  className="text-black/80   font-extrabold py-4  text-2xl ">
       CHECKOUT MY OTHER PROJECTS
      </h2>
       <div  className='grid md:grid-cols-2  grid-cols-1 gap-10'>
      <OtherProject id={nextId} />
      <OtherProject id={nextId+1 >= Projects.length ? 0 : nextId+1} /></div>
    </div>
  );


}
function OtherProject({id}: {id: number}) {


  return (
  <div  className='m-5'>
      <NavLink to={`/Project/${id}`} >
    <div className="rounded-2xl transition-transform duration-500 ease-in-out hover:scale-110 bg-gray-200/75  p-6 overflow-hidden">
  
  <img
    className="w-full h-72 rounded-2xl object-cover "
    src={Projects[id].Image}
    alt={Projects[id].title}
    
  />
</div>
  
<h4 className="text-lg  text-gray-600 my-4">
    {Projects[id].title}  </h4>
    <p className="text-black/90 font-medium text-2xl ">{Projects[id].description}</p>


  </NavLink>
  </div>
  );
}