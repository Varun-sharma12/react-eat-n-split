import { useState } from "react";
import { Button } from "./Button";

export function FromSplitBill({ selectedFriend, handleUpdateFriend }) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const freindsBill = bill ? bill - paidByUser : "";
  function splitBill(e) {
    e.preventDefault();
    if (!bill) return;
    handleUpdateFriend(whoIsPaying === "user" ? freindsBill : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={splitBill}>
      <h2>Split a bill with {selectedFriend.name} </h2>
      <label htmlFor="">Bill Value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value) >= 0 ? Number(e.target.value) : 0)} />
      <label htmlFor="">Your Expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) => setPaidByUser(
          Number(e.target.value) > Number(bill)
            ? paidByUser
            : Number(e.target.value) < 0
              ? 0
              : Number(e.target.value)
        )} />
      <label htmlFor="">{selectedFriend.name}'s Expense</label>
      <input type="number" disabled value={freindsBill} />
      <label htmlFor="">Who is Paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name} </option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
