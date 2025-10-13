"use client";
import { useEffect, useState } from "react";

export default function Login({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [passSet, setPassSet] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localPass = localStorage.getItem("alzheimers-society-pass");
    if (localPass === "true") {
      setPassSet(true);
      setLoading(false);
      return;
    }
    const pass = prompt("Enter pass");
    if (pass === process.env.NEXT_PUBLIC_PASSWORD) {
      alert("Welcome back!");
      setPassSet(true);
      localStorage.setItem("alzheimers-society-pass", "true");
    }
  }, []);

  if (passSet) return children;
  if (loading) return <div>Loading...</div>;

  return <div>Not logged in</div>;
}

export { Login };
