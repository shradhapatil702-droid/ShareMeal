
const foodImage = "/images/Hands of Hopeful Giving.png";

export default function Home() {
  return (
    <main className="sharemeal">
      <header className="navbar">
        <a className="logo" href="/">
          🥗 ShareMeal
        </a>

        <nav className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#impact">Our impact</a>
        </nav>

        <a className="nav-button" href="/food">
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
            <a className="primary-button" href="/food">
              Find available food →
            </a>

            <a className="secondary-button" href="/donate">
              Donate food ♡
            </a>
          </div>

          <div className="trust-row">
            <span>🌱 Reduce food waste</span>
            <span>♡ Build community</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={foodImage}
            alt="Fresh food ready to share"
          />

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

      <section className="how-it-works" id="how-it-works">
        <span className="eyebrow">SIMPLE. MEANINGFUL. COMMUNITY-DRIVEN.</span>

        <h2>How ShareMeal works</h2>

        <p className="how-intro">
          Sharing food should be easy. Here is how our
          community can make a difference, one meal at a time.
        </p>

        <div className="steps">
          <article className="step-card">
            <span className="step-number">01</span>
            <div className="step-icon">🥗</div>
            <h3>Share surplus food</h3>
            <p>
              Have extra food? Add a donation with its
              quantity, details, and pickup information.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">02</span>
            <div className="step-icon">🤝</div>
            <h3>Find a meal</h3>
            <p>
              Explore food listings and discover meals
              shared by people in your community.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">03</span>
            <div className="step-icon">💚</div>
            <h3>Connect and care</h3>
            <p>
              Coordinate a safe pickup and help good food
              reach someone who can use it.
            </p>
          </article>
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

      <section className="explore">
        

  <div className="community-gallery">
    <article className="community-photo photo-large">
      <img
        src="images\Hands Preparing Hopeful Meal Trays.png"
        alt="Volunteers preparing meals for community food sharing"
      />
      <div className="photo-caption">
        <span>01</span>
        <div>
          <h3>Meals prepared with care</h3>
          <p>Making surplus food useful to others.</p>
        </div>
      </div>
    </article>

    <article className="community-photo">
      <img
        src="images\Good Food, Shared Hope.png"
        alt="Community volunteers distributing food"
      />
      <div className="photo-caption">
        <span>02</span>
        <div>
          <h3>Sharing with dignity</h3>
          <p>Helping food reach the community.</p>
        </div>
      </div>
    </article>

    <article className="community-photo">
      <img
        src="images\Small Acts, Big Changes.png"
        alt="Volunteers working together in a community kitchen"
      />
      <div className="photo-caption">
        <span>03</span>
        <div>
          <h3>People making a difference</h3>
          <p>Small acts of kindness matter.</p>
        </div>
      </div>
    </article>
  </div>

  <p className="community-note">
    Our vision is a community where good food is shared
    rather than wasted.
  </p>
      </section>

      <footer>
        <a className="logo" href="/">
          🥗 ShareMeal
        </a>
        <p>Good food deserves a second chance.</p>
        <a href="#how-it-works">How it works ↑</a>
      </footer>
    </main>
  );
}
