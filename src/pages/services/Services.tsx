import ether from "../../assets/services/whitebg_ether.png";
import consultancy from "../../assets/services/consultancy.png";
import security from "../../assets/services/security.png";

const Services = () => {
  return (
    <div>
      <section id="services" className="section container">
        <h2 className="section__title text-8xl font-extrabold relative mb-16">
          <span className="service__title relative text-red-600">SERVICES</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <article className="service-card__box relative bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
            <span className="service-card__illustration mb-4 block">
              <img
                src={ether}
                alt="Support Illustration"
                className="w-full h-auto"
              />
            </span>
            <h3 className="service-card__title text-xl font-bold mb-4">
              Token Creation
            </h3>
            <p className="service-card__msg text-gray-700">
              We specialize in crafting and deploying ERC20 contracts, the
              backbone of the digital asset world. Our experts will work with
              you to create customized tokens that cater to your project's
              specific needs. Whether it's for personal use, fundraising,
              rewards, or digital communities, we'll guide you through the
              entire process, from concept to deployment, ensuring your project
              is built on a strong foundation in the world of blockchain.
            </p>
            <span className="service-card__bg absolute inset-0 bg-red-500 opacity-10 rounded-lg"></span>
          </article>

          <article className="service-card__box relative bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
            <span className="service-card__illustration mb-4 block">
              <img
                src={security}
                alt="Design Illustration"
                className="w-full h-auto"
              />
            </span>
            <h3 className="service-card__title text-xl font-bold mb-4">
              Security Reviews
            </h3>
            <p className="service-card__msg text-gray-700">
              Security is paramount in the digital landscape, especially when
              dealing with blockchain and cryptocurrencies. AfroSec offers
              comprehensive security reviews to safeguard your blockchain
              projects. Our team of experts conducts rigorous assessments,
              identifying vulnerabilities and providing recommendations to
              fortify your system.
            </p>
            <span className="service-card__bg absolute inset-0 bg-red-500 opacity-10 rounded-lg"></span>
          </article>

          <article className="service-card__box relative bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
            <span className="service-card__illustration mb-4 block">
              <img
                src={consultancy}
                alt="Deploy Illustration"
                className="w-full h-auto"
              />
            </span>
            <h3 className="service-card__title text-xl font-bold mb-4">
              Consultancy
            </h3>
            <p className="service-card__msg text-gray-700">
              In the ever-evolving world of blockchain and decentralized
              technologies, navigating the landscape can be challenging.
              AfroSec's consultancy services provide you with invaluable
              insights and expert guidance. Whether you're a seasoned blockchain
              enthusiast or just beginning your journey, our consultants will
              provide tailored advice, strategic planning, and industry
              knowledge to help you make informed decisions and achieve success
              in the blockchain space.
            </p>
            <span className="service-card__bg absolute inset-0 bg-red-500 opacity-10 rounded-lg"></span>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Services;
