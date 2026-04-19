import me from "../../asset/me.png";

function Aboutme(){
return (<div className="px-24 flex gap-11 justify-center  items-center"> 
<div>
<p className="text-6xl text-black/90 font-meduim leading-snug py-9">
It's so nice to<br/> meet you, I'm <br/>Filsan :)

</p>
<div className="flex  gap-8">
<ButtonStyle2 text="GitHub" />
<ButtonStyle1 text="LinkedIn" />
</div>
</div><div className="w-96 h-96">
<img src={me} alt="Filsan" className="w-full h-full object-cover" />
</div>
</div>)
}
export default Aboutme;




function ButtonStyle1({ text }: { text: string }) {
  return (
    <button className="group relative flex items-center justify-center overflow-hidden border border-black/20 px-10 py-4 transition-colors duration-500 hover:border-black">
      {/* Remplissage de gauche à droite */}
      <span className="absolute inset-0 h-full w-0 bg-black transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full"></span>

      {/* Flèche icône qui apparaît (optionnel mais très Awwwards) */}
      <span className="relative z-10 mr-0 flex items-center transition-all duration-500 group-hover:mr-4 group-hover:text-white">
        <span className="font-medium tracking-tight">{text}</span>
      </span>

      {/* L'icône flèche cachée qui glisse vers l'intérieur */}
      <svg 
        className="relative z-10 h-4 w-4 -translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  );
}



function ButtonStyle2({ text }: { text: string }) {
  return (
    <button className="group relative flex items-center justify-center overflow-hidden border border-black/20 px-10 py-4 transition-colors duration-500 ">
      {/* Remplissage de gauche à droite */}

      <span className="relative z-10 mr-0 flex items-center  ">
        <span className="font-medium tracking-tight">{text}</span>
      </span>

     
      <svg 
        className="relative z-10 h-4 w-4   " 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
      </svg>
    </button>
  );
}


