"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Ejercicio1 from "./AnimalList";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Library";

export default function Home() {
  return (
    <div className={styles.page}>
    <Ejercicio1/>
    <Ejercicio2/>
    <Ejercicio3/>
    </div>
  );
}
