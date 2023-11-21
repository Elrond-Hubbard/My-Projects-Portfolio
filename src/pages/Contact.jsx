import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }
    alert(`Thank you for submitting your message!`);
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section className="w-100 d-flex">
      <div className="col-xl-4 col-md-6 col-12 border container text-center">
        <h1>CONTACT ME:</h1>
        <form
          action="https://formsubmit.co/marsolomichael@gmail.com"
          method="POST"
          className="form d-flex flex-column"
          onSubmit={handleFormSubmit}
        >
          <input
            className="my-3"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              if (!email) {
                setErrorMessage("Email is required");
              } else {
                setErrorMessage("");
              }
            }}
            type="email"
            placeholder="email"
          />
          <input
            className="my-3"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (!name) {
                setErrorMessage("Name is required");
              } else {
                setErrorMessage("");
              }
            }}
            type="text"
            placeholder="name"
          />
          <textarea
            className="my-3"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => {
              if (!message) {
                setErrorMessage("Message is required");
              } else {
                setErrorMessage("");
              }
            }}
            type="text"
            placeholder="message"
          />
          <button className="mb-2 btn btn-dark" type="submit">
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
