import styled from "styled-components"

export const ContainerPrestation = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const CardPrestation = styled.div`
margin-top: 90px;
opacity: 0.8;
background: #eee;
height: auto;
padding-top: 25px;
margin-bottom: 100px;
text-align: center;
line-height: 35px;
border-radius: 10px 10px 10px 10px;
color: black;
margin-left: 50px;
margin-right: 50px;
animation: fall 3s forwards;
@media (max-width: 893px){
  margin-right: 25px;
  margin-left: 25px;
}
  @media(max-width: 736px) and (max-height: 414px) {
    line-height: 30px;
  } 
  @media (max-width: 699px){
    margin-right: 15px;
    margin-left: 15px;
  }
  @media (max-width: 545px){
    line-height: 30px;
    padding: 30px;
    opacity: 1;
}
@media (max-width: 438px){
    line-height: 27px;
}
@media (max-width: 375px){
  padding: 20px;
}
`
export const MainTitleCard = styled.h3`
font-size: 25px;
color: white;
@media(max-width: 736px) and (max-height: 414px) {
  font-size: 20px;
}
@media (max-width: 545px){
    font-size: 18px;
}
`
export const ContentCard = styled.p`
font-size: 22px;
font-weight: 500;
padding: 15px;
color: white;
@media(max-width: 736px) and (max-height: 414px) {
  font-size: 20px;
}
@media (max-width: 717px){
    font-size: 20px;
    padding: 10px;
}
@media (max-width: 573px){
    font-size: 17px;
}
`
export const Important = styled.span`
font-weight: 600;
`