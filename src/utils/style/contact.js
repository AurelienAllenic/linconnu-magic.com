import styled from "styled-components"
import imgContact from "../../assets/contact.webp"
import imgContact2 from "../../assets/contact2.webp"


export const ImageContact = styled.div`
  background: url(${imgContact}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 1280px){
    background: url(${imgContact2}) no-repeat center/cover;
  }
  @media(max-width: 1256px) and (max-height: 777px) {
    height: 120vh;
  }
  @media(max-width: 1256px) and (max-height:692px) {
    height: 140vh;
  }
  @media(max-width: 1256px) and (max-height:612px) {
    height: 160vh;
  }
  @media(max-width: 1256px) and (max-height:512px) {
    height: 180vh;
  }
  @media(max-width: 1256px) and (max-height:447px) {
    height: 200vh;
  }
  @media(max-width: 1256px) and (max-height:407px) {
    height: 220vh;
  }
  @media(max-width: 1256px) and (max-height:366px) {
    height: 240vh;
  }
  @media(max-width: 1256px) and (max-height:337px) {
    height: 260vh;
  }
  @media(max-width: 1256px) and (max-height:311px) {
    height: 280vh;
  }
  @media(max-width: 1256px) and (max-height:290px) {
    height: 300vh;
  }
  @media(max-width: 1256px) and (max-height:234px) {
    height: 360vh;
  }
  @media(max-width: 1256px) and (max-height:225px) {
    height: 380vh;
  }
  @media(max-width: 1256px) and (max-height:212px) {
    height: 420vh;
  }
  @media (max-width: 736px) and (max-height: 414px){
    height: 220vh;
  }
  @media (max-width: 414px) and (max-height: 736px){
    height: 120vh;
  }
  @media (max-width: 414px) and (max-height: 667px){
    height: 130vh;
  }
`;
export const Form = styled.form`
  position: relative;
  top: 20%;
  left: 27%;
  display: flex;
  flex-direction: column;
  width: 22%;
  transform: rotate(-1.5deg);
  gap : 10px;
  animation: fade 3s forwards;
} 
@media (max-width: 1630px){
  gap: 5px;
  top: 18.5%;
}
@media (max-width: 1600px){
  top: 19%;
}
@media (max-width: 1496px){
  width: 25%;
  left: 25%;
}
@media (max-width: 1320px){
  left: 22%;
  width: 29%;
}
@media (max-width: 1280px){
  background-color: #333;
  padding: 20px;
  transform: rotate(0deg);
  border-radius: 10px 10px 10px 10px;
  width: 94%;
  left: 1%;
  top: 10%;
  margin-right: 1%;
}
@media (max-width: 789px){
  width: fit-content;
}
`
export const Input = styled.input`
font-size: 25px;
padding: 10px;
width: 80%;
background-color: #eee;
border: 0;
border-radius: 10px 10px 10px 10px;
text-align: center;
&:focus{
 outline: none;
 text-align: left;
 font-size: 20px;
}
@media (max-width: 1630px){
  font-size: 20px;
}
@media (max-width: 1280px){
  color: white;
  background-color: transparent;
  font-size: 25px;
  &::placeholder{
    color: white;
  }
}
@media (max-width: 607px){
  font-size: 17px;
  border-bottom: 1px solid white;
  border-radius: 0px;
}
@media (max-width: 529px){
  font-size: 15px;
}
@media (max-width: 407px){
  font-size: 12px;
}
@media (max-width: 375px){
    font-size: 10.5px;
}
`

export const Textarea = styled.textarea`
font-size: 20px;
padding: 10px;
margin-top: 10px;
background-color: #eee;
height: 140px;
border: 0;
border-radius: 10px 10px 10px 10px;
&:focus{
  outline: none;
  text-align: left;
 }
 @media (max-width: 1630px){
  height: 130px;
}
@media (max-width: 1600px){
  height: 120px;
}
@media (max-width: 1280px){
  background-color: transparent;
  color: white;
  border: 1px solid white;
  &::placeholder{
    color: white;
  }
}
@media (max-width: 607px){
  font-size: 17px;
}
@media (max-width: 529px){
  font-size: 15px;
}
`

export const Button = styled.button`
font-size: 20px;
padding: 5px;
width: 30%;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
left: 35%;
cursor: pointer;
border: 0;
border-radius: 10px 10px 10px 10px;
&:hover{
  background-color: transparent;
  font-weight: 600;
}
@media (max-width: 1280px){
  background-color: transparent;
  color: white;
}
@media (max-width: 607px){
  font-size: 17px;
}
@media (max-width: 529px){
  font-size: 15px;
}
`
export const InputDiv = styled.div`
display: inline-block;
display: flex;
flex-direction: row;
gap : 10px;
`
export const CardContact = styled.div`
width: 25%;
height: 400px;
opacity: 0.8;
position : relative;
left: 60%;
top: -15%;
border-radius: 10px 10px 10px 10px;
animation: fall 3s forwards;
@media (max-width: 1351px){
  height: 450px;
}
@media (max-width: 1280px){
  width: 99%;
  left: 0%;
  top: 15%;
  height: 200px;
  opacity: 1;
}
@media (max-width: 424px){
  height: 250px;
  top: 12%;
}
@media (max-width: 270px){
  height: 280px;
  top: 10%;
}
@media (max-width: 244px){
  height: 350px;
  top: 8%;
}
`
export const ContentContactCard = styled.p`
font-size: 25px;
margin-top: 10px;
padding : 20px;
font-weight: 400;
line-height: 35px;
color: white;
@media (max-width: 790px){
  font-size: 20px;
  line-height: 30px;
}
@media (max-width: 715px){
  font-size: 19px;
  line-height: 25px;
}
@media (max-width: 666px){
  font-size: 18px;
}
@media (max-width: 536px){
  font-size: 17px;
}
@media (max-width: 512px){
  line-height: 23px;
}
`
export const ContactDiv = styled.div`
width: 100%;
height: 100vh;
`