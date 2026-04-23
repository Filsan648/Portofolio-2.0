function ButtonStyle1({ text }: { text: string }) {
  return (
    <button
      className="
        group relative px-8 py-4 
        bg-transparent text-black font-medium 
        rounded-full border border-black/20
        transition-all duration-500 ease-[0.22,1,0.36,1]
        overflow-hidden
        hover:border-black
        active:scale-95
      "
    >
      {/* Effet de remplissage au survol (Slide up) */}
      <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-y-0"></span>
      
      {/* Texte qui change de couleur au survol */}
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </button>
  );
}

export default ButtonStyle1;