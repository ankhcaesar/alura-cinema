import Banner from "Components/Banner/Index";
import Titulo from "Components/Titulo/Index";
import Card from "Components/Card/Index";
import styles from "./Index.module.css"
import { useEffect, useState } from "react";

function Inicio() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/ankhcaesar/alura-cinema-api/videos")
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    }, [])

    return (
        <>

            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos </h1>
            </Titulo>

            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>


        </>

    )
}
export default Inicio;