import styled from "styled-components"

export const MainTitle = styled.h1`
color: white;
font-size: 45px;
display:flex;
justify-content: center;
align-items: center;
padding-top: 100px;
padding-bottom: 50px;
animation: fade 1s forwards;
animation-delay: 3s;
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
justify-content: center;
width: 100%;
height: 85vh;
margin-top: 90px;
color: white;
font-weight: 600;
@media (max-width: 736px) and (max-height: 414px){
  height: 100vh;
}
`

export const BioCard = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
opacity: 0.8;
padding: 15px;
margin-left: 50px;
margin-right: 50px;
padding-bottom: 20px;
width: 100%;
height: auto;
border-radius: 10px 10px 10px 10px;
z-index: 1;
animation: fall 3s forwards;
margin-bottom: 350px;
@media (max-width: 893px){
  margin-right: 25px;
  margin-left: 25px;
}
  @media (max-width: 699px){
    margin-right: 15px;
    margin-left: 15px;
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
