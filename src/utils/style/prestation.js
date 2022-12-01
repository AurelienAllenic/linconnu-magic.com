import styled from "styled-components"
import imgPrestation from "../../assets/prestation.jpg"

export const ImagePrestation = styled.div`
background: url(${imgPrestation}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;
export const CardPrestation = styled.div`
position: relative;
top: 25%;
left: 26.5%;
background-color: #eee;
opacity: 0.7;
width: 50%;
height: 550px;
padding: 15px;
text-align: center;
line-height: 35px;
border-radius: 10px 10px 10px 10px;
&:hover{
opacity: 1;
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