import Faceless from "../../asset/faceless.png";

function Hero(){
return(
<div className="lg:px-24">
  <div className="">
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 ">
          <div className="flex rounded-full justify-center items-center bg-gray-200/75">
  <img src={Faceless} alt="Faceless" className="w-24 h-24 md:w-32 md:h-32 object-cover  " /></div>
<h1 className="lg:text-7xl md:text-6xl text-5xl text-center md:text-start font-bold py-8 text-black/90">Software Developer.</h1></div>
<p className=" text-justify font-extralight  text-black/70 text-xl px-1.5 lg:px-0">Filsan builds digital solutions: web applications and systems that turn ideas into <br/> functional and meaningful digital experiences.Her work is driven by curiosity, discipline,<br/> and a focus on simple and effective solutions.</p>
<p className="font-bold lg:py-8 py-4 px-1.5 lg:px-0 text-lg">  Full-stack Developer @ Freelance </p>
</div>
</div>

)
}
export default Hero;
