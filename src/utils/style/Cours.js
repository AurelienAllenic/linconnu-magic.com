import styled from "styled-components"
import imgCours from "../../assets/cours.jpg"

export const ImageCours = styled.div`
background: url(${imgCours}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 414px){
    height: 130vh;
  }
  @media (max-width: 736px) and (max-height: 414px){
    height: 230vh;
  }
  @media (max-width: 375px){
    height: 145vh;
  }
  @media (max-width: 667px) and (max-height: 375px){
    height: 270vh;
}
`;

export const BorderClass = styled.div`
background-color: #eee;
opacity: 0.7;
width: 55%;
height: 550px;
position : relative;
left: 23.5%;
top: 6%;
padding-top: 15px;
font-weight: 500;
line-height: 35px;
text-align: center;
border-radius: 10px 10px 10px 10px;
&:hover{
    opacity: 1;
}
@media (max-width: 1630px){
    top: 2%;
    height: 570px;
}
@media (max-width: 1341px){
    height: 610px;
  }
  @media (max-width: 1115px){
    width: 65%;
    left: 20%;
  }
  @media (max-width: 1036px){
    width: 85%;
    left: 10%;
  }
@media (max-width: 820px){
    width: 85%;
    height: 660px;
    left: 7%;
    top: 1%;
    padding: 15px;
  }
  @media (max-width: 545px){
    line-height: 32px;
  }
  @media (max-width: 484px){
    left: 5%;
    line-height: 29px;
}
@media (max-width: 386px){
    line-height: 25px;
  }
  @media (max-width: 375px){
    left: 4%;
}
  `
export const MainPhraseClass = styled.h2`
    font-size: 25px;
    padding-top: 15px;
    @media (max-width: 717px){
    font-size: 20px;
    }
    @media (max-width: 573px){
        font-size: 17px;
    }
`
export const Ul = styled.ul`
padding-top: 20px;
line-height: 45px;
@media (max-width: 406px){
    line-height: 30px;
  }
`

export const Li = styled.li`
list-style : none;
font-size: 25px;
font-weight: 600;
@media (max-width: 717px){
    font-size: 20px;
}
@media (max-width: 573px){
    font-size: 17px;
}
`
export const SecondTextClass = styled.p`
font-size: 25px;
font-weight: 700;
padding-top: 15px;
@media (max-width: 717px){
    font-size: 20px;
}
@media (max-width: 573px){
    font-size: 17px;
}
`
export const ThirdTextClass = styled.p`
font-size: 25px;
font-weight: 700;
padding-top: 15px;
@media (max-width: 717px){
 font-size: 20px;   
}
@media (max-width: 573px){
    font-size: 17px;
}
`
export const ContactClass = styled.a`
text-decoration : none;
color: black;
font-weight: 900;
&:hover{
    font-weight: 500;
}
`
export const IconClass = styled.span`
font-size: 25px;
`
export const ContainerLogoAndClass = styled.div`
display: flex;
gap: 20px;
justify-content: center;
`
export const PostScriptum = styled.p`
font-size: 18px;
font-weight: 600;
font-style: italic;
padding: 10px;
@media (max-width: 573px){
    font-size: 17px;
}
@media (max-width: 545px){
    font-size: 15px;
  }
`