import Faceless from "../../asset/faceless.png";

function Hero(){
return(
<div className="px-24">
  <div className="">
      <div className="flex items-center gap-6 p-6 ">
          <div className="flex rounded-full justify-center items-center bg-gray-200/75">
  <img src={Faceless} alt="Faceless" className="w-24 h-24 md:w-32 md:h-32 object-cover  " /></div>
<h1 className="text-7xl font-bold py-8 text-black/90">Software Developer.</h1></div>
<p className=" text-justify font-extralight  text-black/70 text-xl">Filsan builds digital solutions: web applications and systems that turn ideas into <br/> functional and meaningful digital experiences.Her work is driven by curiosity, discipline,<br/> and a focus on simple and effective solutions.</p>
<p className="font-bold py-8 text-lg">  Full-stack Developer @ Freelance </p>

</div>

</div>

)
}
export default Hero;
