import { useState } from "react";

export default function Chat({ text, contact, onChange }) {
  //   const [text, setText] = useState("");
  console.log(text);
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => onChange(contact.id, e.target.value)}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
