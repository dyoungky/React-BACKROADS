function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <svg viewBox="0 0 3500 250">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Continue exploring
          </text>
        </svg>
        <p>Portofino, Metropolitan City of Genoa, Italy</p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
}
export default Hero;
