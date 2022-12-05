import styled from "styled-components"
import imgBio from "../../assets/bio.jpg"

export const ImageBio = styled.div`
background: url(${imgBio}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;
export const MainTitle = styled.h1`
color: white;
font-size: 45px;
position: absolute;
left: 46.5%;
padding-top: 100px;
@media (max-width: 820px){
  left: 40%;
}
`
export const BioCardOne = styled.div`
position: absolute;
top: 26.5%;
left: 10%;
padding: 15px;
background-color: #eee;
opacity: 0.7;
width: 20%;
height: 550px;
border-radius: 10px 10px 10px 10px;
z-index: 1;
&:hover{
    opacity: 1;
}
@media (max-width: 820px){
  width: 30%;
  left: 3%;
}
`

export const BioCardTwo = styled.div`
position: absolute;
top: 26.5%;
right: 12%;
padding: 15px;
background-color: #eee;
opacity: 0.7;
width: 20%;
height: 550px;
border-radius: 10px 10px 10px 10px;
z-index: 1;
&:hover{
    opacity: 1;
}
@media (max-width: 820px){
  width: 33%;
  right: 3%;
}
`
export const P = styled.p`
font-size: 20px;
line-height: 35px;
font-weight: 500;
@media (max-width: 820px){
  line-height: 26px;
}
`
