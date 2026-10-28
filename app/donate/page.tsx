
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import outputs from "../../amplify_outputs.json";
import type { Schema } from "../../amplify/data/resource";
import styles from "./donate.module.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function DonatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await client.models.Donation.create({
        foodName: String(formData.get("foodName")),
        quantity: String(formData.get("quantity")),
        foodType: String(formData.get("foodType")),
        pickupLocation: String(formData.get("pickupLocation")),
        pickupTime: String(formData.get("pickupTime")),
        notes: String(formData.get("notes") || ""),
      });

      if (result.errors?.length) {
        throw new Error(result.errors.map((item) => item.message).join(", "));
      }

      if (!result.data) {
        throw new Error("The donation was not saved. Please try again.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Donation save failed:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Could not save your donation. Please try again."
      );
    } finally {
      setSaving(false);
    }
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
          community.
        </p>

        {submitted ? (
          <div className={styles.success}>
            <span>💚</span>
            <h2>Thank you for your kindness!</h2>
            <p>Your donation was saved successfully.</p>
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

            {error && <p role="alert">{error}</p>}

            <button
              className={styles.submit}
              type="submit"
              disabled={saving}
            >
              {saving ? "Saving donation..." : "Submit donation"}
            </button>

            <p className={styles.disclaimer}>
              Please share only a general pickup location, not private
              or sensitive information.
            </p>
          </form>
        )}
      </section>
    </main>
  );
}
