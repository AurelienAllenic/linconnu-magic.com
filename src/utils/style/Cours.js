import styled from "styled-components"

export const BorderClass = styled.div`
width: 55%;
height: auto;
position : relative;
left: 23.5%;
padding: 15px;
margin-top: 50px;
font-weight: 500;
line-height: 35px;
text-align: center;
border-radius: 10px 10px 10px 10px;
animation: fall 3s forwards;
margin-bottom: 5%;
@media (max-width: 1630px){
    top: 2%;
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
    width: 85%;
    left: 7%;
    top: 1%;
    padding: 15px;
  }
  @media(max-width: 845px){
    width: 90%;
    left: 4%;
  }
  @media (max-width: 545px){
    line-height: 32px;
  }
  @media(max-width: 527px){
    width: 90%;
    left: 2%;
  }
  @media (max-width: 484px){
    line-height: 29px;
}
@media (max-width: 386px){
    line-height: 25px;
    left: 1%;
  }
  @media (max-width: 375px){
    left: 4%;
}
  `
export const MainPhraseClass = styled.h2`
    font-size: 25px;
    padding-top: 15px;
    color: white;
    @media(max-width: 736px) and (max-height: 414px) {
    font-size: 20px;
    }
    @media (max-width: 717px){
    font-size: 20px;
    }
    @media (max-width: 573px){
        font-size: 17px;
    }  
    @media (max-width: 375px){
      font-size : 15px;
    }
`
export const Ul = styled.ul`
padding-top: 20px;
line-height: 45px;
color: white;
@media(max-width: 736px) and (max-height: 414px) {
  font-size: 20px;
  line-height: 35px;
  }
@media (max-width: 406px){
    line-height: 30px;
  }
  @media (max-width: 375px){
    font-size : 15px;
  }
`

export const Li = styled.li`
list-style : none;
font-size: 25px;
font-weight: 600;
@media(max-width: 736px) and (max-height: 414px) {
  font-size: 20px;
  }
@media (max-width: 717px){
    font-size: 20px;
}
@media (max-width: 573px){
    font-size: 17px;
}
@media (max-width: 375px){
  font-size : 15px;
}
`
export const SecondTextClass = styled.p`
font-size: 25px;
font-weight: 700;
padding-top: 15px;
color: white;
@media(max-width: 736px) and (max-height: 414px) {
  font-size: 20px;
  padding-top: 10px;
  }
@media (max-width: 717px){
    font-size: 20px;
}
@media (max-width: 573px){
    font-size: 17px;
}
@media (max-width: 375px){
  font-size : 15px;
}
`
export const ThirdTextClass = styled.p`
font-size: 25px;
font-weight: 700;
padding-top: 15px;
color: white;
@media(max-width: 736px) and (max-height: 414px) {
  font-size: 20px;
  }
@media (max-width: 717px){
 font-size: 20px;   
}
@media (max-width: 573px){
    font-size: 17px;
}
@media (max-width: 375px){
  font-size : 15px;
}
`
export const ContactClass = styled.a`
text-decoration : none;
color: black;
font-weight: 900;
color: white;
@media(max-width: 736px) and (max-height: 414px) {
  font-size: 20px;
  }
&:hover{
    font-weight: 500;
}
`
export const IconClass = styled.span`
font-size: 25px;
@media(max-width: 736px) and (max-height: 414px) {
  font-size: 20px;
  }
`
export const ContainerLogoAndClass = styled.div`
display: flex;
gap: 20px;
justify-content: center;
`
export const PostScriptum = styled.p`
font-size: 18px;
font-weight: 600;
font-style: italic;
color: white;
padding: 10px;
@media(max-width: 736px) and (max-height: 414px) {
  font-size: 20px;
  }
@media (max-width: 573px){
    font-size: 17px;
}
@media (max-width: 545px){
    font-size: 15px;
  }
  @media (max-width: 375px){
    font-size : 13px;
  }
`