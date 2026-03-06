// MailboxList.jsx (The Gallery)

// Mapping: Loop through the mailboxes array passed from props.

// Link Each Box: Each mailbox should be a clickable link (using <Link>) that leads to /mailboxes/ID_NUMBER.

// Styling: Apply the .mail-box CSS class to the container to make it look like a square

import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <main>
      <h1>Mailbox List</h1>
      <ul className="mailbox-container">
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MailboxList;
