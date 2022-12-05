import styled from "styled-components"
import imgPrestation from "../../assets/prestation.jpg"
import imgCard from "../../assets/card.jpg"

export const ImagePrestation = styled.div`
background: url(${imgPrestation}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;
export const CardPrestation = styled.div`
position: relative;
top: 25%;
left: 26.5%;
background: #eee;
opacity: 0.7;
width: 50%;
height: 500px;
padding-top: 25px;
text-align: center;
line-height: 35px;
border-radius: 10px 10px 10px 10px;
color: black;
&:hover{
opacity: 1;
}
@media (max-width: 820px){
    width: 80%;
    height: 535px;
    left: 10%;
  }
`
export const MainTitleCard = styled.h3`
font-size: 25px;
`
export const ContentCard = styled.p`
font-size: 22px;
font-weight: 500;
padding: 15px;
`
export const Important = styled.span`
font-weight: 600;
`