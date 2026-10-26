import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill - paidByUser;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bill === "" || paidByUser === "") return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form
      className="relative space-y-6 overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-5 shadow-[0_16px_50px_-30px_rgba(41,70,50,0.22)] backdrop-blur-xl sm:p-7"
      onSubmit={handleSubmit}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="relative space-y-2 border-b border-stone-100 pb-5">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-lg">
            💸
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
            Bill calculator
          </span>
        </div>

        <h2 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
          Split a bill
        </h2>

        <p className="text-sm text-stone-500">
          Sharing expenses with{" "}
          <span className="font-semibold text-stone-800">
            {selectedFriend.name}
          </span>
        </p>
      </div>

      <div className="relative space-y-5">
        <InputField
          id="bill-value"
          label="Bill Value"
          type="number"
          placeholder="0.00"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <InputField
          id="your-expense"
          label="Your Expense"
          type="number"
          min="0"
          placeholder="0.00"
          value={paidByUser}
          onChange={(e) => {
            const value = e.target.value;

            if (value === "") {
              setPaidByUser("");
              return;
            }

            setPaidByUser(Number(value) > Number(bill) ? bill : value);
          }}
        />

        <div className="rounded-2xl border border-emerald-100/80 bg-emerald-50/50 p-4">
          <InputField
            id="friend-expense"
            label={`${selectedFriend.name} Expense`}
            type="number"
            min="0"
            placeholder="0.00"
            disabled
            value={paidByFriend}
          />

          <p className="mt-2 text-xs text-stone-500">
            The remaining amount for {selectedFriend.name}
          </p>
        </div>
      </div>

      <div className="relative space-y-2">
        <label
          htmlFor="who-is-paying"
          className="block text-sm font-semibold tracking-tight text-stone-700"
        >
          Who's paying the bill?
        </label>

        <div className="relative">
          <select
            id="who-is-paying"
            className="w-full cursor-pointer appearance-none rounded-xl border border-stone-200/80 bg-stone-50/70 px-4 py-3 pr-11 text-sm text-stone-700 shadow-sm transition-all duration-200 hover:border-stone-300 hover:bg-white focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>

          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="relative border-t border-stone-100 pt-5">
        <Button>Split Bill</Button>
      </div>
    </form>
  );
}

export default FormSplitBill;
