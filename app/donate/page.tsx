
"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./donate.module.css";

export default function DonatePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Share<span>Meal</span>
        </Link>
        <Link href="/" className={styles.backLink}>
          ← Back to home
        </Link>
      </header>

      <section className={styles.content}>
        <p className={styles.eyebrow}>MAKE A DIFFERENCE</p>
        <h1>Share a meal.<br />Spread kindness.</h1>
        <p className={styles.intro}>
          Have extra food? Tell us about it and help someone in your
          community. This first version demonstrates the donation form.
        </p>

        {submitted ? (
          <div className={styles.success}>
            <span>💚</span>
            <h2>Thank you for your kindness!</h2>
            <p>
              Your form was submitted in this demo. The information has
              not been saved to a database yet.
            </p>
            <button onClick={() => setSubmitted(false)}>
              Add another donation
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="foodName">Food name</label>
            <input
              id="foodName"
              name="foodName"
              placeholder="e.g. Homemade vegetable rice"
              required
            />

            <label htmlFor="quantity">Quantity available</label>
            <input
              id="quantity"
              name="quantity"
              placeholder="e.g. 5 meal portions"
              required
            />

            <label htmlFor="foodType">Food type</label>
            <select id="foodType" name="foodType" required defaultValue="">
              <option value="" disabled>Select food type</option>
              <option>Vegetarian</option>
              <option>Non-vegetarian</option>
              <option>Vegan</option>
              <option>Snacks and bakery</option>
            </select>

            <label htmlFor="pickupLocation">Pickup location</label>
            <input
              id="pickupLocation"
              name="pickupLocation"
              placeholder="Enter a general pickup location"
              required
            />

            <label htmlFor="pickupTime">Available until</label>
            <input
              id="pickupTime"
              name="pickupTime"
              type="datetime-local"
              required
            />

            <label htmlFor="notes">Additional details (optional)</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Ingredients, storage details, or other useful information"
              rows={3}
            />

            <button className={styles.submit} type="submit">
              Submit donation
            </button>

            <p className={styles.disclaimer}>
              Demo only: please don't enter private or sensitive information.
            </p>
          </form>
        )}
      </section>
    </main>
  );
}
