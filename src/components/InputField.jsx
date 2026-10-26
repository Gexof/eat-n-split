function InputField({ label, ...inputProps }) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={inputProps.id}
        className="block text-sm font-semibold text-stone-700"
      >
        {label}
      </label>

      <input
        {...inputProps}
        className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 hover:border-stone-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
      />
    </div>
  );
}

export default InputField;
