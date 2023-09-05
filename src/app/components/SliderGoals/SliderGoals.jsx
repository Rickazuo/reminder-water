"use client";
import React, { useState } from "react";
import styles from "./SliderGoals.module.css";

export default function SliderGoal() {
  const [dailyGoal, setDailyGoal] = useState(2000); // Initial value for daily goal
  const [timerGoal, setTimerGoal] = useState(2000); // Initial value for timer goal

  // Handle changes to the daily goal slider
  const handleDailyGoalChange = (event) => {
    setDailyGoal(event.target.value);
  };

  // Handle changes to the timer goal slider
  const handleTimerGoalChange = (event) => {
    setTimerGoal(event.target.value);
  };

  return (
    <main className={styles.main}>
      <section className={styles.sliderSection}>
        <div className={styles.containerSlider}>
          <h4 className={styles.goalTitle}>Meta diária</h4>
          <span className={styles.quantityGoal}>{dailyGoal}ml</span>
        </div>
        <input
          className={styles.rangeSlider}
          max={4000}
          min={0}
          value={dailyGoal}
          onChange={handleDailyGoalChange}
          type="range"
          name=""
          id=""
        />
      </section>
      <section className={styles.sliderSection}>
        <div className={styles.containerSlider}>
          <h4 className={styles.goalTitle}>Quantidade por timer</h4>
          <span className={styles.quantityGoal}>{timerGoal}ml</span>
        </div>
        <input
          className={styles.rangeSlider}
          max={4000}
          min={0}
          value={timerGoal}
          onChange={handleTimerGoalChange}
          type="range"
          name=""
          id=""
        />
      </section>
    </main>
  );
}
