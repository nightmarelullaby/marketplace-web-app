import styles from '../styles/Home.module.css'
import Button from "../components/Button/Button"
import {motion} from "framer-motion"
import { Loader } from '../components/Loader/Loader'


export default function Home() {

  return (
    <>

      <div style={{height:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
          <h1 className={styles.homeTitle}>Bienvenido</h1>
        </motion.div>

        <p className={styles.homeDesc}>Diviértete explorando el catálogo</p>
          <Button href="/AllGames?page=1" as="/AllGames?page=1">
            Ir allí

          </Button>
      </div>
    </>

  )
}
