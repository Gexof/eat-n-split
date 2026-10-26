function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-900/10 transition-all duration-200 hover:bg-emerald-700 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-600/20 active:scale-[0.97]"
    >
      {children}
    </button>
  );
}

export default Button;
