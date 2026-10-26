import Button from "./Button";

function Friend({ friend, onSelection }) {
  return (
    <li className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-stone-100 sm:gap-4">
      <img
        src={friend.image}
        alt={friend.name}
        className="h-12 w-12 shrink-0 rounded-full object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-stone-800">{friend.name}</h3>

        {friend.balance < 0 && (
          <p className="mt-1 text-sm text-red-600">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}

        {friend.balance > 0 && (
          <p className="mt-1 text-sm text-emerald-700">
            {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}

        {friend.balance === 0 && (
          <p className="mt-1 text-sm text-stone-500">
            You and {friend.name} are even
          </p>
        )}
      </div>

      <Button onClick={() => onSelection(friend)}>Select</Button>
    </li>
  );
}

export default Friend;
