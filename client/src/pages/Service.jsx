import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();
  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">SERVICES</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((currentElem, index) => {
          const { price, description, provider, service } = currentElem;

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="/images/design.png"
                  alt="Our Design Services info"
                  width="500"
                />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
