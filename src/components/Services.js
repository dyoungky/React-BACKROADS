import Title from "./Title";
import Service from "./Service";
import { services } from "../data";

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
}
export default Services;
