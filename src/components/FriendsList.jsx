import Friend from "./Friend";

function FriendsList({ friends, onSelection }) {
  return (
    <ul className="space-y-3">
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelection={onSelection} />
      ))}
    </ul>
  );
}

export default FriendsList;
