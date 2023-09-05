import Image from 'next/image'
import styles from './page.module.css'
import LevelWater from './components/LevelWater/LevelWater'
import SliderGoal from './components/SliderGoals/SliderGoals'
import Timer from './components/Timer/Timer'

export default function Home() {
  return (
    <main className={styles.main}>
      <LevelWater/>
      <div className={styles.counters}>
      <SliderGoal />
      <Timer />
      </div>
    </main>
  )
}
