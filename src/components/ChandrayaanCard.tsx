import Image from "next/image"
import styles from "./ChandrayaanCard.module.css"
import Link from "next/link"

export default function ChandrayaanCard() {
  return (
    <article className={styles.card} role="region" aria-labelledby="card-title">
      <Image
        src="/chandrayaan-5.jpg"
        alt="Concept image of ISRO Chandrayaan-5 rover"
        width={640}
        height={360}
        role="presentation"
        className={styles.image}
        priority
      />
      <h1 id="card-title" className={styles.title}>
        ISRO Announces Chandrayaan‑5 Lunar Rover Mission
      </h1>
      <p className={styles.description}>
        ISRO has officially approved Chandrayaan‑5, a next-gen lunar exploration
        mission featuring a 350 kg rover developed in collaboration with JAXA.
        Launch window and mission specifics will be finalized by late 2025.
      </p>
      <Link
        href="https://www.isro.gov.in/Chandrayaan3_Details.html"
        className={styles.cta}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more about Chandrayaan‑5 on isro.gov.in
      </Link>
    </article>
  )
}
