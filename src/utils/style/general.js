import styled, { keyframes } from "styled-components";

export const SpanArrow = styled.span`
    position: absolute;
    bottom : 0%;
    left: 47%;
    color: #eee;
    font-size: 90px;
    cursor: pointer;
    &:hover{
        transform: scaleY(1.25);
        
    }
    @media (max-width: 1630px){
        display: none;
    }
`
export const SpanArrow2 = styled.span`
    position: absolute;
    bottom : -100%;
    left: 48.5%;
    color: #eee;
    font-size: 90px;
    &:hover{
        transform: scaleY(1.25);
    }
    @media (max-width: 1630px){
        display: none;
    }
`

export const SpanArrow3 = styled.span`
    position: absolute;
    bottom : -200%;
    left: 48.5%;
    color: #eee;
    font-size: 90px;
    &:hover{
        transform: scaleY(1.25);
    }
    @media (max-width: 1630px){
        display: none;
    }

`