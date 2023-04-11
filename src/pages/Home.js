import "./Home.css";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <section className="home-container">
        <div className="home-left-content">
          <p id="home-title"> So, you want to travel to</p>
          <h1>Space</h1>
          <p>
            {" "}
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-right-content">
          <p> Explore</p>
        </div>
      </section>
    </div>
  );
};
