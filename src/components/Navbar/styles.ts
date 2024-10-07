import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    padding: 2rem;
    margin: 0%;
    width: 100vw;
    justify-content: space-between;
    height: 12vh;
`

export const Title = styled.h2`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-self: start;
    font-size: 28pt;
`

export const Items = styled.ol`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    gap: 40px;
`

export const Profile = styled.img`

img{
    display: flex;
    flex-direction: row;
    align-self: center;
    border-radius: 100%;
    border: 4px solid rebeccapurple;
    width: 3vw;
    height: 6vh;
    &:hover{
        cursor: pointer;
        border-color: greenyellow;
    }
}
`