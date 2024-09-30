import styled from "styled-components";
import { Icon } from "../Icon/styles";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    padding: 10px;
    background-color: #adadad;
    color: aliceblue;
    font-weight: bolder;
    font-size: 14pt;
    text-align: center;
    border-radius: 10px 10px;
    gap: 5px;
    &:hover, &:focus{
        cursor: pointer;
        background-color: greenyellow;
        color: #333;

        ${Icon} {
        background-color: white;
        color: #333;
        }
    }
`