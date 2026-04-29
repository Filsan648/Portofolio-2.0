import DemosCIMASDESKTOP from '../asset/DemosCIMASDESKTOP.mp4';
import DemosCimasMobile from '../asset/DemosCimasMobile.mp4';

function DemosResponsiveDesign(){
    return(
           <div>
                 <h1 className="text-5xl py-2.5 font-bold  text-black/80">Highlights</h1>

         <div className="flex md:flex-row flex-col gap-3"  >

        <Demosdesktop  />
        <Demosmobile />
        
         </div>
            </div>
    )

}
export default DemosResponsiveDesign;


function Demosdesktop() {
  return (
    <div className=" w-225 rounded-4xl overflow-hidden shadow-2xl ">
      <video
        src={DemosCIMASDESKTOP}
        className="w-full h-auto md:h-[500px] object-contain"
        
        autoPlay
        muted
        loop
      />
    </div>
  );
}

function Demosmobile(){
    return(<div className=" z-10 relative w-62.5 md:w-70 rounded-4xl overflow-hidden shadow-2xl  bg-black">  <video src={DemosCimasMobile}    className="w-full h-full  object-cover"
        
        autoPlay
        muted
        loop />  </div>)
}