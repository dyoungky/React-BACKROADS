import tour1 from "../images/tour-1.jpeg";
import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}
export default Tours;
