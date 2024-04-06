import React from 'react'
import Perfil from "./imagensPortfolio/perfil.png"
import Cartoon from "./imagensPortfolio/cartoon.png"
import Cruzeiro from "./imagensPortfolio/cruzeiro.png"
import * as S from "./Style.jsx"

function Galeria(){
    return(
        <S.Fotos>
       <img src={Perfil} alt="perfil" />
       <img src={Cartoon} alt="cartoon" />
       <img src={Cruzeiro} alt="cruzeiro" />
      
        </S.Fotos>
    )
}

export default Galeria
