import "./ContactForm.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { use, useState } from "react";
import Contact from '../../assets/contact.svg'

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onsubmit = (event) => {
    event.preventDefault();

    setName(event.target.elements["name"].value);
    setEmail(event.target.elements["email"].value);
    setText(event.target.elements["text"].value);

  //  alert(
   //   `Name: ${event.target.elements["name"].value}\nEmail: ${event.target.elements["email"].value}\nText: ${event.target.elements["text"].value}`
   // );
  };

  return (
    <section className="contact_container">
      <div className="contact_form">
        <div className="form_top_btn">
          <Button 
          text="VIA SUPPORT CHAT" 
          icon={<MdMessage />} />
          <Button 
          text="VIA Call" 
          icon={<MdCall />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL" icon={<MdEmail />} />

        <form onSubmit={onsubmit}>
          <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form_control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form_control">
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            {" "}
            <Button text="Submit" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className="contact_image">
        <img src={Contact} alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
