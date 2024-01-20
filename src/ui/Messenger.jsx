import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  const [text, setText] = useState(
    contacts.reduce((acc, contact) => {
      acc[contact.id] = "";
      return acc;
    }, {})
  );

  console.log(text);

  function handleChange(id, value) {
    setText((cur) => ({
      ...cur,
      [id]: value,
    }));
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat
        key={to.id}
        contact={to}
        text={text[to.id]}
        onChange={handleChange}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
