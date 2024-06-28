import Cabecera from "Components/Cabecera/Cabecera"
import Container from "Components/Container/Index"
import FavoritoProvider from "context/Favoritos"
import Pie from "Components/Pie/Pie"
import { Outlet } from "react-router-dom"

function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <Container>
                <FavoritoProvider>
                    <Outlet />

                </FavoritoProvider>
            </Container>
            <Pie />
        </main>
    )
}

export default PaginaBase