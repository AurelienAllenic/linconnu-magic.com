import styled from "styled-components"

export const MainTitle = styled.h1`
color: white;
font-size: 45px;
display:flex;
justify-content: center;
align-items: center;
padding-top: 100px;
animation: fade 1s forwards;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
@media (max-width: 820px){
  left: 40%;
}
`
export const CardInCenter = styled.div`
display: flex;
align-items: center;
justify-content: center:
width: 100%;
height: 85vh;
margin-top: 90px;
`

export const BioCard = styled.div`
box-sizing: border-box;
padding: 15px;
position: relative;
top: -10%;
left: 15%;
padding-bottom: 20px;
width: 70%;
height: auto;
border-radius: 10px 10px 10px 10px;
z-index: 1;
animation: fall 3s forwards;
margin-bottom: 5%;
color:white;
@media(max-width: 845px){
  width: 90%;
  left: 5%;
}
@keyframes fall {
  0% {
    background: transparent;
  }
  100% {
    background: #333;
  }
}
`
export const P = styled.p`
font-size: 23px;
line-height: 40px;
font-weight: 500;
@media (max-width: 820px){
  line-height: 30px;
}
@media (max-width: 783px){
  font-size: 19px;
}
@media (max-width: 744px){
  font-size: 18px;
}
@media (max-width: 705px){
    font-size: 17px;
}
@media (max-width: 666px){
    line-height: 27px;
}
@media (max-width: 626px){
  line-height: 25px;
}
@media (max-width: 597px){
  line-height: 24px;
}
@media (max-width: 531px){
  font-size: 16px;
}
@media (max-width: 379px){
  line-height: 21px;
}
`
