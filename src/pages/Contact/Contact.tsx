import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="section container">
        <h2 className="section__title">
          <span className="contact__title" data-role="CONTACT">
            CONTACT
          </span>
        </h2>
        <div className="contact">
          <form
            method="post"
            className="contact__form"
            action="https://forms.un-static.com/forms/cead83046c9cafadea6d9787616ce849566585ea
  "
          >
            <div className="contact__field-wrapper">
              <label htmlFor="contactNameTxt">Name:</label>
              <input
                id="contactNameTxt"
                name="name"
                required
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="contact__field-wrapper">
              <label htmlFor="contactEmailTxt">Email:</label>
              <textarea
                name="email"
                id="contactEmailTxt"
                placeholder="JohnDoe@gmail.com"
              ></textarea>
            </div>
            <div className="contact__field-wrapper">
              <label htmlFor="contactDescriptionTxt">Message:</label>
              <textarea
                id="contactDescriptionTxt"
                name="message"
                required
                placeholder="I'd like to create an ERC20 token with mint and burn features."
              ></textarea>
            </div>

            <button name="submit" type="submit" className="contact__submit-btn">
              Submit
            </button>
          </form>

          <span className="contact__illustration">
            <img
              src="./assets/services/Visual data-bro.png"
              alt="Group of people connecting with each other"
            />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
