import React from "react"
import Perfil from "./imagensPortfolio/perfil.png"
import Instagram from "./imagensPortfolio/instagram.png"
import Facebook from "./imagensPortfolio/facebook.png"
import Linkedin from "./imagensPortfolio/linkedin.png"
import * as S from "./Style.jsx"

function Inicio() {
    return (

        <S.SectionInicio>
            <img src={Perfil} alt="Foto do perfil" />


            <S.ContainerDivs> 
                <S.BoxInicio>
                    <h2> Olá! Sou  Thatiana Mattos,</h2>
                    <h2>Venham conhecer o meu portfólio.</h2>
                </S.BoxInicio>
                <S.BoxInicio2>
                    <img src={Instagram} alt="logo do instagram" />
                    <img src={Facebook} alt="logo do facebook" />
                    <img src={Linkedin} alt="logo do linkedin" />
                </S.BoxInicio2>
            </S.ContainerDivs>

        </S.SectionInicio>
    )
}

export default Inicio