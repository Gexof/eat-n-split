import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

function FormAddFriend({ onAddFriedns }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // Handlers
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriedns(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form
      className="relative space-y-5 overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-5 shadow-[0_16px_50px_-30px_rgba(41,70,50,0.22)] backdrop-blur-xl sm:p-6"
      onSubmit={handleSubmit}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-100/60 blur-3xl" />

      <div className="relative mb-6 flex items-center gap-3 border-b border-stone-100 pb-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xl">
          👋
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight text-stone-900">
            Add a friend
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Bring someone to the table.
          </p>
        </div>
      </div>

      <div className="relative space-y-5">
        <InputField
          id="friend-name"
          label="Friend Name"
          type="text"
          placeholder="Enter friend's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputField
          id="friend-image"
          label="Image URL"
          type="url"
          placeholder="https://example.com/photo.jpg"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="relative flex justify-end border-t border-stone-100 pt-5">
        <Button>Add Friend</Button>
      </div>
    </form>
  );
}

export default FormAddFriend;
