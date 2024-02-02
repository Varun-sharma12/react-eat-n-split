import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ addFriend }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !url) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name: name,
      image: `${url}?=${id}`,
      balance: 0,
    };
    addFriend(newFriend);
    setName("");
    setUrl("https://i.pravatar.cc/48");
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <label htmlFor="">Image URL</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}
