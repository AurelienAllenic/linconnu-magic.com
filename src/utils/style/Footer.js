import styled from "styled-components";

export const Footer = styled.footer`
background-color: #333;
color: white;
position: fixed;
bottom: 0%;
display: grid;
grid-template-columns: repeat(3, 1fr);
z-index: 1;
width: 135px;
height: auto;
@media(max-width: 795px){
    width: 120px;
}
`
export const Icons = styled.div`
gap: 20px;
display: flex;
align-items: center;
justify-content: center;
padding: 8px;
@media(max-width: 795px){
    gap: 15px;
}
`
export const LinkIcon = styled.a`
color: white;
font-size: 25px;
&:hover{
    color: #000;
}
@media(max-width: 795px){
    font-size: 20px;
}
`