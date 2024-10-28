export const CartAmount = ({ increase, decrease, amount }) => {
  return (
    <div className="flex items-center justify-center gap-3 py-1 rounded-full px-4">
      <button
        className="text-2xl bg-gray-100 px-3 py-1 rounded-lg"
        onClick={decrease}
      >
        -
      </button>
      <p className="text-lg w-6 text-center">{amount}</p>
      <button
        className="text-2xl bg-gray-100 px-3 py-1 rounded-lg"
        onClick={increase}
      >
        +
      </button>
    </div>
  );
};
