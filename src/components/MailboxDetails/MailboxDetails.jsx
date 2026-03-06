// MailboxDetails.jsx (The Deep Dive)Extract ID: Use the useParams() hook to get the mailboxId from the URL. Find the Box: Use .find() on the mailboxes array to match the ID from the URL with the ID in your state. Note: Remember to convert the URL string to a Number for the comparison! Error Handling: If the mailbox isn't found, display "Mailbox Not Found!

import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((box) => box._id === Number(mailboxId));

  if (!mailbox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div>
      <h2>{mailbox.boxOwner}</h2>
      <p>Size: {mailbox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
