"use client";
import { useEffect, useState } from "react";
import styles from "./Timer.module.css";
import Image from "next/image";

import arrow from "../../../../public/arrow.svg";
import overlay from "../../../../public/overlay.svg";
import closeButton from "../../../../public/closeButton.svg";

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  function verificationTimer() {
    if (minutes === 0 && hours > 0) {
      setHours(hours - 1);
      setMinutes(59);
    } else if (minutes !== 0) {
      setMinutes(minutes - 1);
    }

    if (minutes === 0 && hours === 0) {
      setIsRunning(false);
      defaultTimer();
    }
  }

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        verificationTimer();
      }, 60000); // 60,000 milliseconds = 1 minute
      return () => clearTimeout(timer);
    }
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
    setShowOverlay(true);
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
            value={String(minutes).padStart(2, "0")}
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

          if (minutes === 0 && hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
          }
        }}
      >
        {isRunning ? "Pausar" : "Começar"}
        <Image src={arrow} alt="arrow icon" sizes="(max-width: 1980px) 100vw" />
      </button>
      {showOverlay && (
        <div className={styles.overlay}>
          <section className={styles.noticeOverlay}>
            <Image
              className={styles.buttonOverlay}
              onClick={() => setShowOverlay(false)}
              src={closeButton}
              alt="close button icon"
              width={26}
              height={26}
            />
            <Image
              className={styles.imageOverlay}
              src={overlay}
              alt="reset overlay"
              layout="responsive"
            />
          </section>
        </div>
      )}
    </main>
  );
}
