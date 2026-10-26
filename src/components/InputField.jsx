function InputField({ label, ...inputProps }) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={inputProps.id}
        className="block text-sm font-semibold tracking-tight text-stone-700"
      >
        {label}
      </label>

      <input
        {...inputProps}
        className="w-full rounded-xl border border-stone-200/80 bg-stone-50/70 px-4 py-3 text-sm text-stone-800 shadow-sm transition-all duration-200 placeholder:text-stone-400 hover:border-stone-300 hover:bg-white focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
      />
    </div>
  );
}

export default InputField;
