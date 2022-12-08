import styled from "styled-components"

export const NavShape = styled.nav`
    width: 100%;
    height: 80px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px;
    display: flex;
    flex-direction: row;
    position: fixed;
    margin-top: -5px;
    z-index: 100;
    &:hover{
        opacity: 1;
    }
`
export const Logo = styled.a`
    color: black;
    position: relative;
    top: 23%;
    letter-spacing: 2px;
    font-size: 30px;
    margin: 27px;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 820px){
        top: 6%;
    }
    @media (max-width: 768px){
        top: 2%;
    }
    @media (max-width: 596px){
        font-size: 25px;
        margin: 22px;
    }
    @media (max-width: 414px){
        font-size: 20px;
        margin: 20px;
        top: 8%;
    }
    @media (max-width: 375px){
        font-size: 20px;
        top: 10%;
        margin: 15px;
      }
      @media (max-width: 820px) and (min-height: 375px){
        font-size: 18px;
        top: 15%;
    }
`

export const A = styled.a`
    color: black;
    position: relative;
    top: 21%;
    font-size: 30px;
    margin: 65px;
    opacity: 1;
    text-decoration: none; 
    &:hover{
        opacity: 0.5;
        cursor: pointer;
    }
    @media (max-width: 1386px){
        margin: 40px;
    }
    @media (max-width: 1166px){
        font-size: 25px;
        top:25%;
    }
    @media (max-width: 1008px){
        margin: 30px;
    }
    @media (max-width: 928px){
        margin: 20px;
    }
    @media (max-width: 848px){
        margin: 10px;
    }
    @media (max-width: 820px){
        margin: 20px;
        left: 0%;
        font-size: 25px;
        top: 26%;
    }
    @media (max-width: 692px){
        font-size: 22px;
    }
    @media (max-width: 652px){
        left: -5%;
        margin: 15px;
    }
    @media (max-width: 531px){
        margin: 5px;
        left: 5%;
    }
    @media (max-width: 498px){
        font-size: 20px;
    }
    @media (max-width: 468px){
        left: 0%;
        font-size: 18px;
    }
    @media (max-width: 424px){
        left: -5%;
    }
    @media (max-width: 414px){
        top: 62%;
        left: -38%;
        font-size: 20px;
    }
    @media (max-width: 375px){
        left: -39%;
        top: 69%;
        font-size: 17px;
      }
`
export const ASocials = styled.a`
    color: black;
    position: relative;
    top: 25%;
    font-size: 35px;
    margin: 20px;
    opacity: 1;
    &:hover{
        opacity: 0.5;
        cursor: pointer;
    }
    @media (max-width: 1166px){
        font-size: 25px;
        top: 30%;
    }
    @media (max-width: 1068px){
        margin: 10px;
    }
    @media (max-width: 820px){
        font-size: 27px;
        top: 45%;
    }
    @media (max-width: 768px){
        font-size: 30px;
    }
    @media (max-width: 652px){
        font-size: 22px;
    }
    @media (max-width: 414px){
        font-size: 20px;
        margin: 0px;
        padding-left: 10px;
        padding-top: 10px;
        top: 2%;
    }
    @media (max-width: 393px) and (max-height: 851px){
        top: 20%;
    }
    @media (max-width: 390px) and (max-height: 844px){
        padding-top: 2px;
    }
    @media (max-width: 375px){
        font-size: 20px;
      }
      @media (max-width: 667px) and (max-height: 375px){
        font-size: 22px;
    }
`
export const LogoSection = styled.div`

`
export const WebsiteSections = styled.div`
margin-left: 240px;
@media (max-width: 1602px){
    margin-left: 100px;
}
@media (max-width: 1466px){
    margin-left: 20px;
}
@media (max-width: 1226px){
    margin-left: 0px;
}
@media (max-width: 414px){
    margin-left: 0px;
}
`
export const Socials = styled.div`
    margin-left: 250px;
    @media (max-width: 1866px){
        margin-left: 180px;
    }
    @media (max-width: 1786px){
        margin-left: 150px;
    }
    @media (max-width: 1756px){
        margin-left: 120px;
    }
    @media (max-width: 1726px){
        margin-left: 80px;
    }
    @media (max-width: 1686px){
        margin-left: 60px;
    }
    @media (max-width: 1666px){
        margin-left: 20px;
    }
    @media (max-width: 1626px){
        margin-left: 0px;
    }
    @media (max-width: 1386px){
        margin-left: 40px;
    }
    @media (max-width: 1226px){
        margin-left: 0px;
    }
    @media (max-width: 820px){
        margin-left: -650px;
        display: flex;
    }
    @media (max-width: 768px) and (max-height: 1024px){
        margin-left: 0px;
        position: relative;
        left: -124%;
    }
    @media (max-width: 768px) and (min-height: 1024){
        margin-left: -250px;
        position: relative;
        left: -124%;
    }
    @media (max-width: 692px){
        margin-left: -600px;
    }
    @media (max-width: 652px){
        margin-left: -560px;
    }
    @media (max-width: 531px){
        margin-left: -470px;
    }
    @media (max-width: 498px){
        margin-left: -450px;
    }
    @media (max-width: 468px){
        margin-left: -420px;
    }
    @media (max-width: 414px){
        margin-left: -140px;
        top: 0%;
        left: 0%;
    }
    @media (max-width: 736px) and (max-height: 414px){
        margin-left: -655px;
    }
    @media (max-width: 412px) and (max-height: 915px){
        top: 0%;
    }
    @media (max-width: 393px) and (max-height: 851px){
        margin-left: -150px;
    }
    @media (max-width: 390px) and (max-height: 844px){
        margin-left: -110px;
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 375px){
        margin-left: -70px;
        top: -15%;
      }
      @media (max-width: 667px) and (max-height: 375px){
        margin-left: -603px;
        position: relative;
        top: -5%;
    }
`