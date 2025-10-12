import { useState, useEffect } from "react";

export function useHash() {
  const [hash, setHash] = useState("#home");

  useEffect(() => {
    const handleHash = () => {
      const current = window.location.hash || "#home"
      setHash(current);
      console.log("routing to " + current)
    };

    window.addEventListener("hashchange", handleHash);
    handleHash();

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const navigateTo = (newHash) => {
    window.location.hash = newHash
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return [hash, navigateTo];
}
