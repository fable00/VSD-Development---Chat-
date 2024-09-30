import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: 1px solid black;
    padding: 20px;
`
export const Text = styled.h2`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;
    position: relative; 
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background: greenyellow;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: translateX(0);
    }
`
