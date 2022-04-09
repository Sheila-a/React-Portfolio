import { useRef, useState } from "react";
import "./contact.css";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  // useState is set to false as initial state
  const [done, setDone] = useState(false);
  // (e) === Event
  const handleSubmit = (e) => {
    // e.preventDefault(); is used to prevent submit button from refreshing the page
    e.preventDefault();
    emailjs
      .sendForm(
        "service_un9bomh",
        "template_fk2j51h",
        formRef.current,
        "cMO-4Vf59a5tJSHqT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="cont">
      <div className="cont-bg"></div>
      <div className="cont-wrapper">
        <div className="cont-left">
          <h1 className="cont-title">Let's discuss your project</h1>
          <div className="cont-info">
            <div className="cont-info-item">
              <img
                src="https://i.ibb.co/yyxbyx4/telephone-call.png"
                alt=""
                className="cont-icon"
              />
              +234 907 624 2114
            </div>
            <div className="cont-info-item">
              <img
                src="https://i.ibb.co/v4zMZxQ/envelope.png"
                alt=""
                className="cont-icon"
              />
              ugwuodo20@gmail.com
            </div>
            <div className="cont-info-item">
              <img
                src="https://i.ibb.co/r7GxmY4/location.png"
                alt=""
                className="cont-icon"
              />
              Hilltop, Nsukka, Enugu, Nigeria.
            </div>
          </div>
        </div>
      </div>
      <div className="cont-right">
        <p className="cont-desc">
          <b>What's your story?</b> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Asperiores doloribus repellendus sunt,
        </p>
        <form action="" ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user-name" />
          <input type="text" placeholder="Email" name="user-email" />
          <input type="text" placeholder="Subject" name="user-subject" />
          <textarea name="message" rows="10" placeholder="Message"></textarea>
          <div className="cont-bottom-flex">
            <button>Submit</button>
            {/* Message after submitting */}
            <div className="cont-msg">{done && "Thank you...!!"}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
