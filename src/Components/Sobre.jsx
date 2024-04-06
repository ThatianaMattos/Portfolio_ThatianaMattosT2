import React from "react";
import Vnw from "./imagensPortfolio/vnw.png"
import Css from "./imagensPortfolio/css.png";
import Js from "./imagensPortfolio/js.png"
import Html from "./imagensPortfolio/html.png"
import Mic from "./imagensPortfolio/mic.png"
import * as S from "./Style.jsx"

function Sobre() {
    return (
        <S.Sobre>

            <S.Estudos>
                <h2> ESTUDOS</h2>

                <div>
                    <h2>Desenvolvimento front-end</h2>
                    <h3>AGO/2023 - MAIO/2024</h3>
                </div>

                <img src={Vnw} alt="logo do vai na web" />
            </S.Estudos>

            <S.Habilidades>
                <h2> HABILIDADES</h2>

                <div>
                    <img src={Css} alt="logo do css" />
                    <h3>CSS</h3>
                </div>

                <div>
                    <img src={Js} alt="logo do javascript" />
                    <h3>Javascript</h3>
                </div>

                <div>
                    <img src={Html} alt="logo do html5" />
                    <h3>HTML</h3>
                </div>

            </S.Habilidades>

            <S.Profissional>
                <h2> PROFISSIONAL</h2>
                <div>
                    <h2> Estudante, Artesã, empreendedora, maternar e  Mãe ma Web Developer.</h2>
                    <img src={Mic} alt="logo de um microfone" />
                </div>

            </S.Profissional>

        </S.Sobre>
    )
}

export default Sobre