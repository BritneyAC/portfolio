import styles from "@/styles/css/Gallery.module.css"
import Image from "next/future/image"
import Demo from "@/previews/idleitaireDemo.gif"
import CarverVo from "@/previews/carvervo.png"

export default function Gallery(){
  return (
    <div className={styles.gallery}>
      <div className={styles.project}>
        <a href="https://www.idleitaire.com"><h2>Idleitaire</h2>
        <div>
          <Image src={"/previews/idleitaireDemo.gif"} unoptimized={true} priority fill alt="preview of idleitaire.com" quality={75}/>
        </div></a>
        <p>A version of solitaire made into a idle game.</p>
        <a href="https://github.com/BritneyAC/idleitaire">Github</a>
      </div>
      <div className={styles.project}>
        <a href="https://www.carvervo.com"><h2>Carver VO</h2>
        <div>
          <Image src={"/previews/carvervo.png"} unoptimized={true} priority fill alt="preview of carvervo.com"/>
        </div>
        </a>
        <p>Portfolio website for my friend that is a narrorator</p>
        <a href="https://github.com/BritneyAC/talia-narration">Github</a>
      </div>
    </div>
  )
}