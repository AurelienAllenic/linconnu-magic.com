import styled from "styled-components"

export const CardPrestation = styled.div`
position: relative;
margin-top: 90px;
background: #eee;
left: 26.5%;
width: 50%;
height: auto;
padding-top: 25px;
text-align: center;
line-height: 35px;
border-radius: 10px 10px 10px 10px;
color: black;
animation: fall 3s forwards;
  @media (max-width: 1115px){
    width: 65%;
    left: 20%;
  }
  @media (max-width: 1036px){
    width: 85%;
    left: 10%;
  }
@media (max-width: 820px){
    width: 80%;
    left: 10%;
    top: 5%;
  }
  @media (max-width: 507px){
    line-height: 30px;
}
@media (max-width: 438px){
    line-height: 27px;
}
@media (max-width: 396px){
    width: 95%;
    left: 2.5%;
  }
`
export const MainTitleCard = styled.h3`
font-size: 25px;
color: white;
@media (max-width: 545px){
    font-size: 18px;
}
`
export const ContentCard = styled.p`
font-size: 22px;
font-weight: 500;
padding: 15px;
color: white;
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