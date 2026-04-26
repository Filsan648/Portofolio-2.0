function Button({
  text,
  link,
  image,
}: {
  text: string;
  link: string;
  image: string;
}) {
  return (
    <button
      onClick={() => (window.location.href = link)}
      className="
        flex items-center gap-3
        px-6 py-3
        bg-transparent text-black font-medium
        rounded-full border border-black/20
        hover:shadow-md
        active:scale-95
      "
    >
      <img
        src={image}
        alt={text}
        className="w-5 h-5 object-contain"
      />

      <span>{text}</span>
    </button>
  );
}

export default Button;