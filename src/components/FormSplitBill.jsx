import Button from "./Button";

function FormSplitBill() {
  return (
    <form>
      <h2>Split a bill with friend</h2>

      <label>Bill Value</label>
      <input type="text" />

      <label>Your Expence</label>
      <input type="text" />

      <label>Friend's Expence</label>
      <input type="text" disabled />

      <label>Who's paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Friend's</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
