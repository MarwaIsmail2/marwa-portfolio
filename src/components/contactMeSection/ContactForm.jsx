import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ko3hmpt", "template_ahbmmqd", form.current, {
        publicKey: "I6HAT5mUZH7WHabGE",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Succesfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        
        
       
      </form>
    </div>
  );
};

export default ContactForm;
