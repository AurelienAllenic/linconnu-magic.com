import styled from "styled-components"
export const ContainerClass = styled.div`
display: flex;
align-items:center;
justify-content: center;
width: 100%;
`
export const BorderClass = styled.div`
opacity: 0.8;
height: auto;
padding: 15px;
font-weight: 500;
line-height: 35px;
text-align: center;
border-radius: 10px 10px 10px 10px;
animation: fall 3s forwards;
margin-left: 50px;
margin-right: 50px;
margin-top: 50px;
margin-bottom: 100px;
@media (max-width: 893px){
  margin-right: 25px;
  margin-left: 25px;
}
@media (max-width: 820px){
    padding: 15px;
  }
  @media (max-width: 699px){
    margin-right: 15px;
    margin-left: 15px;
  }
  @media (max-width: 545px){
    line-height: 32px;
    padding: 30px;
    opacity: 1;
  }
  @media (max-width: 484px){
    line-height: 29px;
}
@media (max-width: 386px){
    line-height: 25px;
  }
  @media (max-width: 375px){
    padding: 20px;
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