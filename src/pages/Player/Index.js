import Banner from "Components/Banner/Index"
import Titulo from "Components/Titulo/Index"
import { useParams } from "react-router-dom"
import styles from "./Player.module.css"

import NotFound from "pages/NotFound/Index"
import { useEffect, useState } from "react"

function Player() {

    const [video, setVideo] = useState([])

    const parametros = useParams()
    // const video = videos.find(video => video.id === Number(parametros.id))
    console.log(video);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/ankhcaesar/alura-cinema-api/videos?id=${parametros.id}`)
            .then(response => response.json())
            .then(data => {
                setVideo(...data)
            })
    }, [])

    if (!video)
        return <NotFound />

    return (
        <>
            <Banner img="player" color="#5889AE" />
            <Titulo>
                <h1> Player </h1>
            </Titulo>
            <section className={styles.container}>

                <iframe width="100%" height="100%"
                    src={video.link}
                    title={video.titulo}
                ></iframe>

            </section>
        </>
    )
}

export default Player