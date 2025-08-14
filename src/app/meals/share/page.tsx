"use client";

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShareMealPage() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const res = await fetch("/api/meals", { method: "POST", body: fd });
    if (res.ok) {
      router.push("/meals");
      return;
    }
    const data = await res.json().catch(() => ({}));
    setMessage(data?.message || "Submit failed.");
    setPending(false);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions" name="instructions" rows={10} required></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          {message && <p>{message}</p>}
          <p className={classes.actions}>
            <button disabled={pending}>{pending ? "Submitting..." : "Share Meal"}</button>
          </p>
        </form>
      </main>
    </>
  );
}