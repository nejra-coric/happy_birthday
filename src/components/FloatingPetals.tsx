export function FloatingPetals() {
  const petals = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 7) % 90}%`,
    delay: `${i * 0.7}s`,
    duration: `${14 + (i % 5)}s`,
    size: 10 + (i % 4) * 4,
  }));

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="animate-float-soft absolute rounded-full opacity-40"
          style={{
            left: p.left,
            top: `${-5 + (p.id % 3) * 8}%`,
            width: p.size,
            height: p.size * 1.3,
            background:
              "linear-gradient(135deg, rgba(201,169,98,0.5) 0%, rgba(139,90,107,0.25) 100%)",
            animationDelay: p.delay,
            animationDuration: p.duration,
            transform: `rotate(${p.id * 17}deg)`,
          }}
        />
      ))}
    </div>
  );
}
