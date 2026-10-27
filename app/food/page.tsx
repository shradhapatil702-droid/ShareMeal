
import Link from "next/link";
import styles from "./food.module.css";

const meals = [
  {
    id: 1,
    emoji: "🍱",
    title: "Fresh Homemade Lunch",
    description: "A freshly prepared vegetarian meal.",
    quantity: "3 meal portions",
    location: "Community pickup point",
    category: "Vegetarian",
    color: "peach",
  },
  {
    id: 2,
    emoji: "🥗",
    title: "Healthy Veg Meal",
    description: "A simple, wholesome meal to share.",
    quantity: "2 meal portions",
    location: "Community pickup point",
    category: "Healthy",
    color: "green",
  },
  {
    id: 3,
    emoji: "🍞",
    title: "Bread and Snacks",
    description: "Bread and snacks available for sharing.",
    quantity: "4 portions",
    location: "Community pickup point",
    category: "Snacks",
    color: "yellow",
  },
];

export default function AvailableFoodPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Share<span>Meal</span>
        </Link>

        <Link href="/" className={styles.homeLink}>
          ← Back to home
        </Link>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>SHARE FOOD, SHARE KINDNESS</p>
        <h1>Find a meal.<br />Make a difference.</h1>
        <p className={styles.subtitle}>
          Explore food shared by our community. Every meal shared
          is a step toward reducing food waste and helping people.
        </p>

        <div className={styles.note}>
          🌱 These are sample listings for our first version.
        </div>
      </section>

      <section className={styles.listings}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>COMMUNITY FOOD BOARD</p>
            <h2>Available meals</h2>
          </div>
          <span className={styles.count}>
            {meals.length} sample listings
          </span>
        </div>

        <div className={styles.grid}>
          {meals.map((meal) => (
            <article className={styles.card} key={meal.id}>
              <div
                className={`${styles.foodImage} ${styles[meal.color]}`}
                aria-label={meal.title}
                role="img"
              >
                <span>{meal.emoji}</span>
                <span className={styles.available}>Sample</span>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.category}>
                  {meal.category}
                </span>

                <h3>{meal.title}</h3>
                <p className={styles.description}>
                  {meal.description}
                </p>

                <div className={styles.detail}>
                  <span>🍽️</span>
                  <span>{meal.quantity}</span>
                </div>

                <div className={styles.detail}>
                  <span>📍</span>
                  <span>{meal.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Good food deserves to be shared. 💚</p>
        <Link href="/">Return to ShareMeal home</Link>
      </footer>
    </main>
  );
}
