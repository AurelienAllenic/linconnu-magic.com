import styled, { keyframes } from "styled-components";

export const SpanArrow = styled.a`
    position: absolute;
    bottom : 0%;
    left: 47%;
    color: #eee;
    font-size: 90px;
    &:hover{
        transform: scaleY(1.25);
    }
    @media (max-width: 1630px){
        font-size: 70px;
    }
    @media (max-width: 414px){
        bottom: -20%;
        left: 40%;
    }
    @media (max-width: 375px){
        bottom: -40%;
        left: 41.5%;
      }
      @media (max-width: 667px) and (max-height: 375px){
        position: relative;
        bottom: -75%;
      }
`
export const SpanArrow2 = styled.a`
    position: absolute;
    bottom : -100%;
    left: 48.5%;
    color: #eee;
    font-size: 90px;
    &:hover{
        transform: scaleY(1.25);
    }
    @media (max-width: 1630px){
        font-size: 70px;
    }
    @media (max-width: 414px){
        position: relative;
        bottom: -5%;
        left: 42.5%;
    }
    @media (max-width: 375px){
        left: 43%;
      }
      @media (max-width: 667px) and (max-height: 375px){
        position: relative;
        bottom: -5%;
    }
`

export const SpanArrow3 = styled.a`
    position: absolute;
    bottom : -200%;
    left: 48.5%;
    color: #eee;
    font-size: 90px;
    &:hover{
        transform: scaleY(1.25);
    }
    @media (max-width: 1630px){
        font-size: 70px;
    }
    @media (max-width: 414px){
        position: relative;
        bottom: -10%;
        left: 43%;
    }
    @media (max-width: 667px) and (max-height: 375px){
        position: relative;
        bottom: -10%;
    }

`