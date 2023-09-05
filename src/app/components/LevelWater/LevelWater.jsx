import Image from "next/image";
import styles from "./LevelWater.module.css";

import imgGlass from "../../../../public/levelWater.svg";

export default function LevelWater() {
  return (
    <main className={styles.main}>
      <Image
        src={imgGlass}
        alt="image of show level of water"
        layout="responsive"
      />
    </main>
  );
}
