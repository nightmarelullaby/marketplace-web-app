import styles from '../styles/Home.module.css'
import Button from "../components/Button/Button"

export default function Home() {

  return (
    <>

      <div style={{height:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
        <h1 className={styles.homeTitle}>Bienvenido1</h1>
        <p className={styles.homeDesc}>Diviértete explorando el catálogo</p>
          <Button href="/AllGames?page=1" as="/AllGames?page=1">
            Ir allí
          </Button>
      </div>
    </>

  )
}
