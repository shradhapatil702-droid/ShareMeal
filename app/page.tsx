
const foodImage =
 "/images/Hands of Hopeful Giving.png";

export default function Home() {
  return (
    <main className="sharemeal">
      <header className="navbar">
        <a className="logo" href="#">🥗 ShareMeal</a>
        <nav className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#impact">Our impact</a>
        </nav>
        <a className="nav-button" href="#explore">
          Find food ↗
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            ✳ GOOD FOOD. GOOD PEOPLE.
          </span>
          <h1>
            Share more.
            <br />
            Waste <span>less.</span>
            <br />
            Care together.
          </h1>
          <p className="hero-description">
            Connect with your community, share surplus
            food, and help make sure a good meal never
            goes to waste.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#explore">
              Explore available food →
            </a>
            <a className="secondary-button" href="#how-it-works">
              How it works
            </a>
          </div>

          <div className="trust-row">
            <span>🌱 Reduce food waste</span>
            <span>♡ Build community</span>
          </div>
        </div>

        <div className="hero-visual">
          <img src={foodImage} alt="Fresh, healthy food ready to share" />
          <div className="image-label">
            <span className="status-dot" />
            <div>
              <strong>Good food, shared locally</strong>
              <p>Small acts make a big difference.</p>
            </div>
          </div>
          <div className="floating-note">
            <span>🌍</span>
            <div>
              <strong>Make an impact</strong>
              <p>One meal at a time</p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact" id="impact">
        <div>
          <span className="impact-icon">♧</span>
          <h3>Less food waste</h3>
          <p>Give surplus food another purpose.</p>
        </div>
        <div>
          <span className="impact-icon">♡</span>
          <h3>Stronger communities</h3>
          <p>Help neighbors connect and care.</p>
        </div>
        <div>
          <span className="impact-icon">✳</span>
          <h3>More shared meals</h3>
          <p>Make sharing a simple daily habit.</p>
        </div>
      </section>

      <section className="explore" id="explore">
        <span className="eyebrow">A LITTLE KINDNESS GOES FAR</span>
        <h2>There is always room at the table.</h2>
        <p>
          Ready to make a difference? Start by exploring
          how food sharing can bring your community closer.
        </p>
        <a className="primary-button" href="#how-it-works">
          Get started →
        </a>
      </section>

      <footer id="how-it-works">
        <a className="logo" href="#">🥗 ShareMeal</a>
        <p>Good food deserves a second chance.</p>
      </footer>
    </main>
  );
}
