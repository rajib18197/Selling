export default function Cabin({ cabin }) {
  const { id, name, regularPrice, discount, image, maxCapacity } = cabin;

  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <a href="#">
        <img className="w-full object-cover" src={image} alt={name} />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{name}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{maxCapacity}</p>
          <div className="flex items-center space-x-1 mb-5">8 stars</div>
          <button
            className="bg-primary bg-pink-600 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <span>
              {" "}
              {discount} || {regularPrice} | Add to Cart
            </span>
          </button>
        </figcaption>
      </a>
    </figure>
  );
}
