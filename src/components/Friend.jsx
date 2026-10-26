import Button from "./Button";

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  const balanceStatus =
    friend.balance < 0
      ? {
          message: `You owe ${friend.name}`,
          amount: Math.abs(friend.balance),
          style: "bg-rose-50 text-rose-700 ring-rose-100",
        }
      : friend.balance > 0
        ? {
            message: `${friend.name} owes you`,
            amount: friend.balance,
            style: "bg-emerald-50 text-emerald-700 ring-emerald-100",
          }
        : null;

  return (
    <li
      className={`group flex items-center gap-3 rounded-2xl border p-3 transition-all duration-200 sm:gap-4 sm:p-4 ${
        isSelected
          ? "border-emerald-200 bg-emerald-50/80 shadow-sm shadow-emerald-900/5"
          : "border-stone-100 bg-white/70 hover:border-emerald-100 hover:bg-emerald-50/30 hover:shadow-sm"
      }`}
    >
      {/* Friend Avatar */}
      <div className="relative shrink-0">
        <img
          src={friend.image}
          alt={friend.name}
          className="h-12 w-12 rounded-2xl border border-white object-cover shadow-sm sm:h-14 sm:w-14"
        />

        <span
          className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white ${
            isSelected ? "bg-emerald-500" : "bg-stone-300"
          }`}
        />
      </div>

      {/* Friend Information */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold tracking-tight text-stone-900 sm:text-base">
          {friend.name}
        </h3>

        {balanceStatus ? (
          <div className="mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5">
            <p className="truncate text-xs text-stone-500">
              {balanceStatus.message}
            </p>

            <span
              className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold ring-1 ring-inset ${balanceStatus.style}`}
            >
              ${balanceStatus.amount}
            </span>
          </div>
        ) : (
          <p className="mt-1.5 text-xs font-medium text-stone-500">
            You and {friend.name} are all settled up
          </p>
        )}
      </div>

      {/* Select Button */}
      <div className="shrink-0">
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </div>
    </li>
  );
}

export default Friend;
