import Button from "./Button";
import InputField from "./InputField";

function FormAddFriend() {
  return (
    <form className="space-y-5 rounded-2xl border border-stone-200 bg-stone-50 p-5">
      <InputField
        id="friend-name"
        label="Friend Name"
        type="text"
        placeholder="Enter friend's name"
      />

      <InputField
        id="friend-image"
        label="Image URL"
        type="url"
        placeholder="https://example.com/photo.jpg"
      />

      <div className="flex justify-end pt-1">
        <Button>Add</Button>
      </div>
    </form>
  );
}

export default FormAddFriend;
