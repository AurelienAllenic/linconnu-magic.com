import styled from "styled-components"
import imgPrestation from "../../assets/prestation.jpg"
import imgCard from "../../assets/card.jpg"

export const ImagePrestation = styled.div`
background: url(${imgPrestation}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 1024px) and (max-height: 768px){
    height: 120vh;
    }
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
export const CardPrestation = styled.div`
position: relative;
top: 5%;
background: #eee;
left: 26.5%;
opacity: 0.7;
width: 50%;
height: 500px;
padding-top: 25px;
text-align: center;
line-height: 35px;
border-radius: 10px 10px 10px 10px;
color: black;
animation: fall 3s forwards;
&:hover{
opacity: 1;
}
@media (max-width: 1420px){
    height: 530px;
  }
  @media (max-width: 1145px){
    height: 560px;
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
    width: 80%;
    height: 590px;
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
@media (max-width: 545px){
    font-size: 18px;
}
`
export const ContentCard = styled.p`
font-size: 22px;
font-weight: 500;
padding: 15px;
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