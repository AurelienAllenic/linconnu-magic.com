import styled from "styled-components";

export const Footer = styled.footer`
background-color: #333;
color: white;
position: fixed;
bottom: 0%;
left : calc (100% - 150px / 2);
display: grid;
grid-template-columns: repeat(3, 1fr);
z-index: 1;
width: 180px;
height: auto;
`
export const Icons = styled.div`
gap: 30px;
display: flex;
align-items: center;
justify-content: center;
padding: 15px;
`
export const LinkIcon = styled.a`
color: white;
font-size: 30px;
&:hover{
    color: #000;
}
`