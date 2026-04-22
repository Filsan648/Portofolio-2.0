import {Projects }from '../../data/DataProject';
import React from 'react';
const details = [
  { label: "Role", value: Projects[0].Role },
  { label: "Technologies", value: Projects[0].Tecnologies },
  { label: "Timeline", value: Projects[0].Timeline },
];


function ProjectDescription() {
return(
    <div className=''>

    <div className='px-24'> 
       <h1 className='text-5xl font-bold py-5 text-black/90'>{Projects[0].title}</h1>
         <p className='w-1/2 text-black/80'>{Projects[0].SUMMARY}</p>
         </div>
          < DetailItem />
            <Demo />

    </div>
)
}
export default ProjectDescription;


function DetailItem() {
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


function Demo() {
  return (
  <div className="px-6 md:px-24 py-10 flex justify-center">
  <div className="relative w-full max-w-5xl">
    
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20"></div>

    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
      <img
        src={Projects[0].DemoImage}
        alt="Demo"
        className="w-full h-auto"
      />
    </div>

  </div>
</div>
  );
}
