import CartActions from "./CartActions";
import CartList from "./CartList";

export default function Cart() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <CartList />

          <CartActions />
        </div>
      </div>
    </div>
  );
}

// ​UI = f(state). I saw a lot of authors said this. I have some understanding with this equation but don't have a proper clarity. Dan abramov also said React is value UI. Need your explanations vai.
