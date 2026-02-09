import { useEffect, useState } from "react";

export default function HeartRain() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: 14 + Math.random() * 20,
          duration: 6 + Math.random() * 6,
        },
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-heartfall"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
