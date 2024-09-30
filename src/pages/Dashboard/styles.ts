import styled from "styled-components";
import { Button } from "../../components/Button/styles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Image = styled.img`
    display: flex;
    border: none;
    padding: 1rem;
    margin: 0%;
    width: 100vw;
    height: fit-content;
`

export const Subtext = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin-top: -10%;
    margin-right: -20%;
    padding: 0;
` 
export const ModifiedButton = styled(Button)`
    padding: '20px';
    background-color: 'greenyellow';
    color: '#333';
`