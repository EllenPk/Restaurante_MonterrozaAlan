import { Route,Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { MenuCrear } from "../../componentes/Menu/Menucrear";
import { MenuAdmin } from "../../componentes/Menu/MenuAdmin";
import { MenuActualizar } from "../../componentes/Menu/MenuActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () =>{
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>

            <Route path="/mecre" element={<MenuCrear/>}/>

            <Route path="/menadmin" element={<MenuAdmin/>}/>

            <Route path="/menactu/:codigo" element={<MenuActualizar/>}/>

            <Route path="/menuacer" element={<Acerca/>}/>

            <Route path="/noencontrado" element={<NoEncontrado/>}/>
        </Routes>

    )
}