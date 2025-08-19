import React, { useEffect, useState } from "react";
import "./IntroDoor.css"; // css animasi pintu

export default function IntroDoor({ onFinish }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // kasih jeda 1 detik lalu mulai animasi buka
    const timer1 = setTimeout(() => setOpen(true), 1000);

    // setelah 3 detik, trigger onFinish biar hilang
    const timer2 = setTimeout(() => onFinish(), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`intro-door ${open ? "open" : ""}`}>
      <div className="door left"></div>
      <div className="door right"></div>
    </div>
  );
}
