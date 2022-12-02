import styled from "styled-components"
import imgContact from "../../assets/contact.jpg"


export const ImageContact = styled.div`
  background: url(${imgContact}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;
export const Form = styled.form`
  position: relative;
  top: 37%;
  left: 27%;
  display: flex;
  flex-direction: column;
  width: 22%;
  transform: rotate(-1.5deg);
  gap : 10px;

`
export const Input = styled.input`
font-size: 25px;
padding: 10px;
width: 80%;
background-color: transparent;
border: 0;
border-radius: 10px 10px 10px 10px;
text-align: center;
&:focus{
 outline: none;
 background-color: #eee;
 text-align: left;
 font-size: 20px;
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
border-radius: 10px 10px 10px 10px;
&:hover{
  opacity: 1;
}
`
export const ContentContactCard = styled.p`
font-size: 25px;
margin-top: 10px;
padding : 20px;
font-weight: 400;
line-height: 35px;
`