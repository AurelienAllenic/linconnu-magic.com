import styled from "styled-components"

export const ContactDiv = styled.div`
padding: 50px;
margin-top: 100px;
@media (max-width: 420px){
  padding: 20px;
 }
 @media (max-width: 350px){
  padding: 15px;
 }
 @media (max-width: 300px){
  padding: 10px;
 }
 @media (max-width: 250px){
  padding: 5px;
 }
`
export const FormAndCard = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 3rem;
margin-left: 50px;
margin-right: 50px;
padding-bottom: 50px;
@media (max-width: 1020px){
  grid-template-columns: 1fr;
}
@media (max-width: 893px){
  margin-right: 25px;
  margin-left: 25px;
}
@media (max-width: 699px){
  margin-right: 15px;
  margin-left: 15px;
}
@media (max-width: 500px){
  margin-right: 5px;
  margin-left: 5px;
}
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #333;
  padding: 15px;
  gap : 10px;
  animation: fade 3s forwards;
  border-radius: 10px 10px 10px 10px;
} 
`
export const Input = styled.input`
font-size: 25px;
padding: 10px;
width: 80%;
color: white;
background-color: transparent;
border: 1px solid white;
border-radius: 10px 10px 10px 10px;
text-align: center;
&::placeholder{
  color: white;
}
&:hover{
  background-color: transparent;
  cursor: pointer;
  border: 1px solid white;
  &::placeholder{
    color: black;
  }
}
&:focus{
 outline: none;
 text-align: left;
 font-size: 20px;
}
@media (max-width: 1630px){
  font-size: 20px;
}
@media (max-width: 1280px){
  font-size: 25px;
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
background-color: transparent;
height: 140px;
border: 1px solid white;
color: white;
border-radius: 10px 10px 10px 10px;
&::placeholder{
  color: white;
}
&:hover{
  cursor: pointer;
  border: 1px solid white;
  &::placeholder{
    color: black;
  }
}
&:focus{
  outline: none;
  text-align: left;
 }
 &::placeholder{
  text-align: center;
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
border: 1px solid white;
border-radius: 10px 10px 10px 10px;
background-color: transparent;
color: white;
&:hover{
  color: black;
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
height: auto;
opacity: 0.8;
border-radius: 10px 10px 10px 10px;
animation: fall 3s forwards;
@media (max-width: 1280px){
  opacity: 1;
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
