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
      className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold tracking-tight text-stone-900">
        Split a bill with {selectedFriend.name}
      </h2>

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

      <InputField
        id="friend-expense"
        label={`${selectedFriend.name} Expense`}
        type="number"
        min="0"
        placeholder="0.00"
        disabled
        value={paidByFriend}
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
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>

      <div className="pt-2">
        <Button>Split Bill</Button>
      </div>
    </form>
  );
}

export default FormSplitBill;
