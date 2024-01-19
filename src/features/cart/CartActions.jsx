export default function CartActions() {
  return (
    <div className="flex items-center justify-end gap-2">
      <a
        className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
        href="#"
      >
        <img src={Checkout} width="24" height="24" alt="Checkout" />
        <span>Checkout</span>
      </a>
      <a
        className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
        href="#"
        onClick={onClose}
      >
        Cancel
      </a>
    </div>
  );
}
