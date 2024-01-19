import CartItem from "./CartItem";

export default function CartList() {
  return (
    <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
      <CartItem />
    </div>
  );
}
