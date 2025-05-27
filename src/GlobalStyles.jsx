import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        transition: all 0.25s linear;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 90vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-family: sans-serif;

        & button{
        border: ${({theme}) => theme.border};
        background: transparent;
        border-radius: 20px;
        padding: 10px 20px;
        cursor: pointer;
        }

        & button:hover{
            opacity: 0.6
        }

        & img{
        max-height: 50px;
        }
    }

    

    
`