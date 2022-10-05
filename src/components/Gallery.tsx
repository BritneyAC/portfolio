import styles from "@/styles/css/Gallery.module.css"
import Image from "next/image"
import Demo from "@/previews/idleitaireDemo.gif"
import CarverVo from "@/previews/carvervo.png"

export default function Gallery(){
  return (
    <div className={styles.gallery}>
      <div className={styles.project}>
        <a href="https://www.idleitaire.com"><h2>Idleitaire</h2>
        <Image src={Demo} alt="preview of idleitaire.com" quality={75}/></a>
        <p>A version of solitaire made into a idle game.</p>
        <a href="https://github.com/BritneyAC/idleitaire">Github</a>
      </div>
      <div className={styles.project}>
        <a href="https://www.carvervo.com"><h2>Carver VO</h2>
        <Image src={CarverVo} alt="preview of carvervo.com"/></a>
        <p>Portfolio website for my friend that is a narrorator</p>
        <a href="https://github.com/BritneyAC/talia-narration">Github</a>
      </div>
    </div>
  )
}