import styled from "styled-components"
import imgCours from "../../assets/cours.jpg"

export const ImageCours = styled.div`
background: url(${imgCours}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;

export const BorderClass = styled.div`
background-color: #eee;
opacity: 0.7;
width: 55%;
height: 600px;
position : relative;
left: 23.5%;
top: 21%;
padding: 15px;
font-weight: 500;
line-height: 35px;
text-align: center;
border-radius: 10px 10px 10px 10px;
&:hover{
    opacity: 1;
}
`
export const MainPhraseClass = styled.h2`
    font-size: 25px;
    padding-top: 15px;
`
export const Ul = styled.ul`
padding-top: 20px;
line-height: 45px;
`

export const Li = styled.li`
list-style : none;
font-size: 25px;
font-weight: 600;
`
export const SecondTextClass = styled.p`
font-size: 25px;
font-weight: 700;
padding-top: 15px;
`
export const ThirdTextClass = styled.p`
font-size: 25px;
font-weight: 700;
padding-top: 15px;
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
`