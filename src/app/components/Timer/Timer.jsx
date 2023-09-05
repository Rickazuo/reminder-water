"use client";
import styles from "./Timer.module.css";
import Image from "next/image";

import arrow from "../../../../public/arrow.svg";
import overlay from "../../../../public/overlay.svg";
import { useEffect, useState } from "react";

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setTimeout(() => {
        if (minutes === 0 && hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          console.log("entrou horas");
        } else if (minutes !== 0) {
          setMinutes(minutes - 1);
          console.log("entrou minutos");
        }

        if (minutes === 0 && hours === 0) {
          setIsRunning(false);
          defaultTimer();
          console.log("entrou default");
        }
      }, 60000); // 60,000 milliseconds = 1 minute
    }

    return () => clearTimeout(timer);
  }, [isRunning, hours, minutes]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      setShowOverlay(false);
    }
  };

  const defaultTimer = () => {
    setHours(0);
    setMinutes(0);
  };

  return (
    <main className={styles.main}>
      <section className={styles.sectionTimer}>
        <div className={styles.containerTimer}>
          <input
            className={styles.inputTimer}
            type="text"
            value={String(hours).padStart(2, "0")}
            onChange={(e) => setHours(Number(e.target.value))}
          />
          <span className={styles.unityTime}>h</span>
        </div>
        <span className={styles.textTimer}>:</span>
        <div className={styles.containerTimer}>
          <input
            className={styles.inputTimer}
            type="text"
            defaultValue={String(minutes).padStart(2, "0")}
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
          <span className={styles.unityTime}>m</span>
        </div>
      </section>
      <button
        className={styles.buttonStart}
        onClick={() => {
          if (isRunning) {
            setIsRunning(false); // Pause the timer
          } else {
            startTimer(); // Start the timer
          }
        }}
      >
        {isRunning ? "Pausar" : "Começar"}
        <Image src={arrow} alt="arrow icon" sizes="(max-width: 1980px) 100vw" />
      </button>
      {showOverlay && (
        <div className={styles.overlay}>
          <Image src={overlay} alt="reset overlay" width={10} height={10} />
        </div>
      )}
    </main>
  );
}
