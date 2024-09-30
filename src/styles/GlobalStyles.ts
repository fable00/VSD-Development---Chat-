import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
        font-family: "Poppins";
    }


    a{
        text-decoration: none;
    }


    button:hover{
        cursor: pointer;
    }
`