import styles from "./Favoritos.module.css"
import Banner from "Components/Banner/Index"
import Card from "Components/Card/Index"
import Titulo from "Components/Titulo/Index"
import { useFavoritosContext } from "context/Favoritos"

function Favoritos() {
    const { favorito } = useFavoritosContext()

    return (
        <>
            <Banner img="favoritos" color="#154580" />
            <Titulo>
                <h1> favoritos </h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map(fav => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}


export default Favoritos