function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-600/20 active:scale-[0.98]"
    >
      {children}
    </button>
  );
}

export default Button;
