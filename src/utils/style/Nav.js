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
`
export const LogoSection = styled.div`

`
export const WebsiteSections = styled.div`
margin-left: 240px;
`
export const Socials = styled.div`
    margin-left: 260px;
`