import Favoritos from "pages/Favoritos/Index";
import NotFound from "pages/NotFound/Index";
import PaginaBase from "pages/PaginaBase/Index";
import Player from "pages/Player/Index";
import Inicio from "pages/inicio/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom"

//const { default: Inicio } = require("pages/inicio/Index");


function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="Favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoute
