import styled from "styled-components"
import imgBio from "../../assets/bio.jpg"

export const ImageBio = styled.div`
background: url(${imgBio}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 1024px) and (max-height: 768px){
  height: 120vh;
  }
  @media (max-width: 414px){
    height: 120vh;
  }
  @media (max-width: 736px) and (max-height: 414px){
    height: 220vh;
  }
  @media (max-width: 375px){
    height: 140vh;
  }
  @media (max-width: 667px) and (max-height: 375px){
    height: 250vh;
  }
  @media (max-width: 320px) and (max-height: 568px){
    height: 160vh;
  }
`;
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
animation: fall 3s forwards;
@keyframes fall {
  0% {
    background: transparent;
  }
  100% {
    background: #eee;
  }
}
&:hover{
    opacity: 1;
}
@media (max-width: 1559px){
  width: 25%;
}
@media (max-width: 1247px){
  width: 28%;
  left: 7%;
}
@media (max-width: 1114px){
  height: 600px;
  top: 22%;
}
@media (max-width: 1036px){
  height: 650px;
  top: 18%;
}
@media (max-width: 961px){
  width: 30%;
  left: 4%;
}
@media (max-width: 897px){
  width: 33%;
  left: 1%;
}
@media (max-width: 820px){
  width: 30%;
  left: 3%;
}
@media (max-width: 567px){
  width: 90%;
  height: 250px;
  top: 22%;
  left: 2.5%;
}
@media (max-width: 414px){
  height: 280px;
  left: 1.5%;
}
@media (max-width: 736px) and (max-height: 414px){
  top: 40%;
}
@media (max-width: 405px){
  height: 300px;
  top: 17%;
}
@media (max-width: 379px){
  left: 1%;
}
@media (max-width: 375px){
  top: 25%;
}
@media (max-width: 667px) and (max-height: 375px){
  width: 90%;
  height: 250px;
  top: 50%;
}
@media (max-width: 360px) and (max-height: 640px){
  top: 25%;
}
@media (max-width: 320px) and (max-height: 568px){
  top: 35%;
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
animation: fall 3s forwards;
&:hover{
    opacity: 1;
}
@media (max-width: 1559px){
  width: 25%;
}
@media (max-width: 1247px){
  width: 28%;
  right: 7%;
}
@media (max-width: 1114px){
  height: 600px;
  top: 22%;
}
@media (max-width: 1036px){
  height: 650px;
  top: 18%;
}
@media (max-width: 961px){
  width: 30%;
}
@media (max-width: 897px){
  width: 33%;
  right: 4%;
}
@media (max-width: 820px){
  width: 33%;
  right: 3%;
}
@media (max-width: 567px){
  width: 90%;
  height: 250px;
  top: 55%;
  left: 2.5%;
}
@media (max-width: 414px){
  top: 65%;
  left: 1.5%;
}
@media (max-width: 736px) and (max-height: 414px){
  top: 40%;
}
@media (max-width: 405px){
  height: 300px;
}
@media (max-width: 379px){
  left: 1%;
}
@media (max-width: 375px){
  top: 75%;
}
@media (max-width: 667px) and (max-height: 375px){
  width: 90%;
  top: 130%;
  height: 270px;
}
@media (max-width: 360px) and (max-height: 640px){
  top: 80%;
}
@media (max-width: 320px) and (max-height: 568px){
  top: 100%;
}
`
export const P = styled.p`
font-size: 20px;
line-height: 35px;
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
@media (max-width: 379px){
  line-height: 21px;
}
`
