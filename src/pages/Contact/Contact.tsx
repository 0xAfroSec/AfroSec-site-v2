import img from "../../assets/contact-img.png";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="container mx-auto flex flex-col items-center"
      >
        <h2 className="text-8xl border-b-4 border-red-600 border-dashed  font-extrabold relative">
          <span className="text-black">CONTACT</span>
        </h2>
        <div className="flex flex-col lg:flex-row py-8 gap-8 w-full">
          <form method="post" className="flex flex-col w-full lg:w-2/5">
            <div className="mb-4">
              <label
                htmlFor="contactNameTxt"
                className="flex font-semibold mb-2"
              >
                Name:
              </label>
              <input
                id="contactNameTxt"
                name="name"
                required
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 border-2 border-red-600 border-dashed rounded text-white text-lg focus:border-red-600 focus:border-4 focus:ring-2 focus:ring-red-600 focus:outline-none focus:border-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactEmailTxt"
                className="flex font-semibold mb-2"
              >
                Email:
              </label>
              <textarea
                name="email"
                required
                id="contactEmailTxt"
                placeholder="JohnDoe@gmail.com"
                className="w-full px-3 py-2 border-2 border-red-600 border-dashed rounded text-white text-lg resize-y min-h-[150px] focus:border-red-600 focus:border-4 focus:ring-2 focus:ring-red-600 focus:outline-none focus:border-none"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactDescriptionTxt"
                className="flex font-semibold mb-2"
              >
                Message:
              </label>
              <textarea
                id="contactDescriptionTxt"
                name="message"
                required
                placeholder="I'd like to create an ERC20 token with mint and burn features."
                className="w-full px-3 py-2 border-2 border-red-600 border-dashed rounded  text-white text-lg resize-y min-h-[150px] focus:border-red-600 focus:border-4 focus:ring-2 focus:ring-red-600 focus:outline-none focus:border-none"
              ></textarea>
            </div>
            <button
              name="submit"
              type="submit"
              className="bg-red-600 text-white text-lg py-3 px-4 rounded mt-4 hover:bg-red-700"
            >
              Submit
            </button>
          </form>
          <span className="lg:w-3/5 flex justify-center lg:flex-col-reverse items-center opacity-70">
            <img
              src={img}
              alt="Group of people connecting with each other"
              className="w-full"
            />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
