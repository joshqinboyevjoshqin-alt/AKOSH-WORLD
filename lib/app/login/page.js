
"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        window.location.href = "/";
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        setMessage("Ro‘yxatdan o‘tish muvaffaqiyatli! Emailingizni tekshiring.");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <a href="/" className="logo">
          AKOSH<span> WORLD</span>
        </a>

        <div className="auth-heading">
          <span className="eyebrow">YOUR DIGITAL UNIVERSE</span>
          <h1>{isLogin ? "Xush kelibsiz!" : "Hisob yarating"}</h1>
          <p>
            {isLogin
              ? "AKOSH WORLD hisobingizga kiring."
              : "AKOSH WORLD platformasiga qo‘shiling."}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Email manzilingiz</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Parol</label>
          <input
            type="password"
            placeholder="Kamida 6 ta belgi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />

          <button type="submit" disabled={loading}>
            {loading
              ? "Kutilmoqda..."
              : isLogin
              ? "Kirish →"
              : "Ro‘yxatdan o‘tish →"}
          </button>
        </form>

        {message && <div className="auth-message">{message}</div>}

        <p className="auth-switch">
          {isLogin ? "Hisobingiz yo‘qmi?" : "Hisobingiz bormi?"}
          <button onClick={() => {
            setIsLogin(!isLogin);
            setMessage("");
          }}>
            {isLogin ? "Ro‘yxatdan o‘tish" : "Kirish"}
          </button>
        </p>

        <a href="/" className="back-home">← Bosh sahifaga qaytish</a>
      </div>
    </main>
  );
}
