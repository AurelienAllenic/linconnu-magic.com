import styled from "styled-components"
import imgContact from "../../assets/contact.jpg"


export const ImageContact = styled.div`
  background: url(${imgContact}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 414px){
    height: 105vh;
  }
  @media (max-width: 375px){
    height: 150vh;
  }
  @media (max-width: 667px) and (max-height: 375px){
    height: 270vh;
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
@media (max-width: 1141px){
  width: 32%;
  left: 18.5%;
}
@media (max-width: 1036px){
  width: 35%;
  left: 15%;
  top: 19.5%;
}
@media (max-width: 897px){
  width: 42%;
  left: 9%;
}
  @media (max-width: 820px){
    width: 46%;
    left: 3%;
    top: 28%;
  }
  @media (max-width: 820px) && (max-width: 1180px) {
    width: 46%;
    left: 3%;
    top: 28%;
  }
  @media (max-width: 768px){
    top: 23%;
    width: 50%;
    left: 1%;
  }
  @media (max-width: 715px){
    width: 50%;
    left: 1.5%;
  }  

  @media (max-width: 414px) {
    top: 17%;
  }
  @media (max-width: 375px){
    top: 22%;
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
@media (max-width: 607px){
  font-size: 17px;
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
@media (max-width: 607px){
  font-size: 17px;
}
@media (max-width: 529px){
  font-size: 15px;
}
@media (max-width: 414px){
    height: 90px;
}
@media (max-width: 375px){
    height: 150px;
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
background-color: #eee;
opacity: 0.7;
width: 25%;
height: 400px;
position : relative;
left: 60%;
top: -15%;
border-radius: 10px 10px 10px 10px;
&:hover{
  opacity: 1;
}
@media (max-width: 1351px){
  height: 450px;
}
@media (max-width: 1269px){
  height: 490px;
}
@media (max-width: 1115px){
  width: 30%;
}
@media (max-width: 1036px){
  width: 35%;
}
@media (max-width: 820px){
  width: 35%;
  height: 500px;
  top: -5%;
}
@media (max-width: 790px){
  height: 420px;
  top: -18%;
}
@media (max-width: 666px){
  height: 480px;
  top: -22%;
}
@media (max-width: 474px){
  height: 500px;
  width: 38%;
}
@media (max-width: 407px){
  top: 22%;
  width: 80%;
  left: 18%;
  height: 260px;
}
@media (max-width: 382px){
  height: 280px;
  top: 21%;
}
@media (max-width: 375px){
  top: 29%;
}
`
export const ContentContactCard = styled.p`
font-size: 25px;
margin-top: 10px;
padding : 20px;
font-weight: 400;
line-height: 35px;
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