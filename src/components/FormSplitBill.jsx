import Button from "./Button";
import InputField from "./InputField";

function FormSplitBill() {
  return (
    <form className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold tracking-tight text-stone-900">
        Split a bill with friend
      </h2>

      <InputField
        id="bill-value"
        label="Bill Value"
        type="number"
        min="0"
        placeholder="0.00"
      />

      <InputField
        id="your-expense"
        label="Your Expense"
        type="number"
        min="0"
        placeholder="0.00"
      />

      <InputField
        id="friend-expense"
        label="Friend's Expense"
        type="number"
        min="0"
        placeholder="0.00"
        disabled
      />

      <div className="space-y-2">
        <label
          htmlFor="who-is-paying"
          className="block text-sm font-semibold text-stone-700"
        >
          Who's paying the bill?
        </label>

        <select
          id="who-is-paying"
          className="w-full appearance-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 outline-none transition hover:border-stone-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
        >
          <option value="user">You</option>
          <option value="friend">Your friend</option>
        </select>
      </div>

      <div className="pt-2">
        <Button>Split Bill</Button>
      </div>
    </form>
  );
}

export default FormSplitBill;
