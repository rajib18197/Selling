export default function Movie() {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <a href="#">
        <img className="w-full object-cover" src={""} alt={""} />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{"t"}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{"j"}</p>
          <div className="flex items-center space-x-1 mb-5">8 stars</div>
          <button
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <span>{"9"} | Add to Cart</span>
          </button>
        </figcaption>
      </a>
    </figure>
  );
}
