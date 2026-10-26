import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

function FormAddFriend({ onAddFriedns }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // ** Handlers
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
      className="space-y-5 rounded-2xl border border-stone-200 bg-stone-50 p-5"
      onSubmit={handleSubmit}
    >
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

      <div className="flex justify-end pt-1">
        <Button>Add</Button>
      </div>
    </form>
  );
}

export default FormAddFriend;
