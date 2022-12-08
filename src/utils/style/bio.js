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
  @media(max-width: 490px) and (max-height: 882px){
    height: 120vh;;
  }
  @media(max-width: 414px) and (max-height: 736px){
    height: 140vh;
  }
  @media(max-width: 375px) and (max-height: 667px){
    height: 160vh;
  }
  @media(max-width: 330px) and (max-height: 882px){
    height: 130vh;
  }
  @media (max-width: 320px) and (max-height: 568px){
    height: 160vh;
  }
  @media(max-width: 314px) and (max-height: 882px){
    height: 140vh;
  }
  @media(max-width: 265px) and (max-height: 882px){
    height : 160vh;
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
export const AlignCardsInCenter = styled.div`
display: flex;
align-items: center;
justify-content: center:
width: 100%;
height: 80vh;
`
export const DivCards = styled.div`
display: grid;
grid-template-columns: 350px 350px;
grid-template-rows: auto;
box-sizing: border-box;
width: 100%;
gap: 750px;
padding-left: 10%;
@media(max-width: 1750px) and (max-height: 1000px){
  gap: 650px;
}
@media(max-width: 1629px) and (min-height: 882px){
  gap : 500px;
}
@media(max-width: 1629px) and (max-height: 882px){
  gap : 550px;
}
@media(max-width: 1583px) and (max-height: 1000px){
  gap: 550px;
}
@media(max-width: 1445px) and (max-height: 1000px){
  gap: 450px;
}
@media(max-width: 1338px) and (min-height: 1000px){
  gap : 350px;
}
@media(max-width: 1329px) and (max-height: 1000px){
  gap: 350px;
}
@media(max-width: 1253px) and (max-height: 1000px){
  gap: 265px;
}
@media(max-width: 1214px) and (max-height: 1000px){
  padding-left: 5%;
  gap: 350px;
}
@media(max-width: 1178px) and (min-height: 1000px){
  gap : 200px;
}
@media(max-width: 1112px) and (max-height: 1000px){
  gap: 270px;
}
@media(max-width: 1025px) and (max-height: 1000px){
  gap: 200px;
}
@media(max-width: 1750px) and (max-height: 1000px){
  gap: 650px;
}

@media(max-width: 1537px) and (max-height: 882px){
  gap : 500px;
}
@media(max-width: 1479px) and (max-height: 882px){
  gap : 450px;
}
@media(max-width: 1417px) and (max-height: 882px){
  gap : 400px;
}
@media(max-width: 1351px) and (max-height: 882px){
  gap : 350px;
}
@media(max-width: 1289px) and (max-height: 882px){
  gap : 300px;
}
@media(max-width: 1227px) and (max-height: 882px){
  gap : 250px;
}
@media(max-width: 1163px) and (max-height: 882px){
  gap : 280px;
  padding-left: 6%;
}
@media(max-width: 1149px) and (max-height: 882px){
  grid-template-rows: none;
  grid-template-columns: repeat(1, 1fr);
  width: 80%;
  padding-top: 0%;
  padding-left: 10%;
  gap: 30px;
}
@media(max-width: 1149px) and (max-height: 882px){
  gap: 10px;
  padding-top: 5%;
}
@media(max-width: 820px) and (max-height: 1180px){
  gap: 30px;
  padding-left: 5%;
}
@media(max-width: 768px) and (max-height: 1024px){
  padding-left: 2%;
}
@media(max-width: 490px) and (max-height: 882px){
  padding-top: 30%;
}
@media(max-width: 419px) and (max-height: 882px){
  padding-top: 35%;
}
@media(max-width: 414px) and (max-height: 736px){
  padding-left: 12%;
  padding-top: 70%;
}
@media(max-width: 375px) and (max-height: 667px){
  padding-top: 90%;
}
@media(max-width: 356px) and (max-height: 882px){
  padding-top: 45%;
}
@media(max-width: 344px) and (max-height: 882px){
  padding-top: 55%;
}
@media(max-width: 330px) and (max-height: 882px){
  padding-top: 80%;
}
@media(max-width: 314px) and (max-height: 882px){
  padding-top: 100%;
}
@media(max-width: 265px) and (max-height: 882px){
  padding-top: 200%;
  padding-left: 10%;
  width: 90%;
}
`
export const BioCardOne = styled.div`
box-sizing: border-box;
padding: 15px;
padding-bottom: 20px;
background-color: #eee;
opacity: 0.7;
width: 100%;
height: auto;
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
`

export const BioCardTwo = styled.div`
box-sizing: border-box;
padding: 15px;
background-color: #eee;
opacity: 0.7;
width: 100%;
height: auto;
border-radius: 10px 10px 10px 10px;
z-index: 1;
animation: fall 3s forwards;
&:hover{
    opacity: 1;
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
@media (max-width: 531px){
  font-size: 16px;
}
@media (max-width: 379px){
  line-height: 21px;
}
`
