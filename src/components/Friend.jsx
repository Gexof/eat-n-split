import Button from "./Button";

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className={`flex items-center gap-3 rounded-2xl border p-3 transition-all duration-200 sm:gap-4 sm:p-4 ${
        isSelected
          ? "border-emerald-200 bg-emerald-50 shadow-sm"
          : "border-transparent hover:border-stone-200 hover:bg-stone-50"
      }`}
    >
      <img
        src={friend.image}
        alt={friend.name}
        className="h-12 w-12 shrink-0 rounded-full border-2 border-white object-cover shadow-sm sm:h-14 sm:w-14"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold text-stone-900 sm:text-base">
          {friend.name}
        </h3>

        {friend.balance < 0 && (
          <p className="mt-1 text-xs leading-5 text-red-600 sm:text-sm">
            You owe {friend.name}{" "}
            <span className="font-semibold">${Math.abs(friend.balance)}</span>
          </p>
        )}

        {friend.balance > 0 && (
          <p className="mt-1 text-xs leading-5 text-emerald-700 sm:text-sm">
            {friend.name} owes you{" "}
            <span className="font-semibold">${Math.abs(friend.balance)}</span>
          </p>
        )}

        {friend.balance === 0 && (
          <p className="mt-1 text-xs leading-5 text-stone-500 sm:text-sm">
            You and {friend.name} are even
          </p>
        )}
      </div>

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
