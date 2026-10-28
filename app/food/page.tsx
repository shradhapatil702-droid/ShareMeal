
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import outputs from "../../amplify_outputs.json";
import type { Schema } from "../../amplify/data/resource";
import styles from "./food.module.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

type Donation = Schema["Donation"]["type"];

function getFoodStyle(foodType: string) {
  if (foodType === "Vegetarian" || foodType === "Vegan") {
    return "green";
  }
  if (foodType === "Snacks and bakery") {
    return "yellow";
  }
  return "peach";
}

function getFoodEmoji(foodType: string) {
  if (foodType === "Vegetarian") return "🍱";
  if (foodType === "Vegan") return "🥗";
  if (foodType === "Non-vegetarian") return "🍛";
  if (foodType === "Snacks and bakery") return "🍞";
  return "🍽️";
}

export default function AvailableFoodPage() {
  const [meals, setMeals] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDonations() {
      try {
        const result = await client.models.Donation.list();

        if (result.errors?.length) {
          throw new Error(
            result.errors.map((item) => item.message).join(", ")
          );
        }

        setMeals(result.data);
      } catch (err) {
        console.error("Could not load donations:", err);
        setError("We couldn't load donations right now. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    void loadDonations();
  }, []);

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
          🌱 Listings submitted by our community appear here.
        </div>
      </section>

      <section className={styles.listings}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>COMMUNITY FOOD BOARD</p>
            <h2>Available meals</h2>
          </div>
          <span className={styles.count}>
            {loading ? "Loading..." : `${meals.length} listings`}
          </span>
        </div>

        {loading && <p>Loading community donations...</p>}

        {error && <p role="alert">{error}</p>}

        {!loading && !error && meals.length === 0 && (
          <p>No donations yet. Be the first to share a meal!</p>
        )}

        <div className={styles.grid}>
          {meals.map((meal) => (
            <article className={styles.card} key={meal.id}>
              <div
                className={`${styles.foodImage} ${styles[getFoodStyle(meal.foodType)]}`}
                aria-label={meal.foodName}
                role="img"
              >
                <span>{getFoodEmoji(meal.foodType)}</span>
                <span className={styles.available}>Available</span>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.category}>
                  {meal.foodType}
                </span>

                <h3>{meal.foodName}</h3>
                {meal.notes && (
                  <p className={styles.description}>{meal.notes}</p>
                )}

                <div className={styles.detail}>
                  <span>🍽️</span>
                  <span>{meal.quantity}</span>
                </div>

                <div className={styles.detail}>
                  <span>📍</span>
                  <span>{meal.pickupLocation}</span>
                </div>

                <div className={styles.detail}>
                  <span>🕒</span>
                  <span>Available until: {meal.pickupTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Good food deserves to be shared. 💚</p>
        <Link href="/donate">Donate food</Link>
        {" · "}
        <Link href="/">Return to ShareMeal home</Link>
      </footer>
    </main>
  );
}
