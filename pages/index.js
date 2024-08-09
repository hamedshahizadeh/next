import { useState } from "react";

export default function index() {
  const [name, setName] = useState("");
  const postHandler = async () => {
    const res = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <h2>Connecting DataBase to Next.js Project!</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={postHandler}>post</button>
    </div>
  );
}
