import styled from "styled-components";

export const FilterInput = styled.input`
min-width: 200px;
background-color: transparent;
border-radius: 16px;
border: ${props =>  `2px solid ${props.theme.colors.white}`};
height: 30px;
padding: 10px;
font-size: 20px;
margin-top: 10px;
margin-bottom: 20px;
outline: none;
color: ${props => props.theme.colors.white};
`

export const FilterWrapper = styled.div`
    margin-top: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    & svg {
        position: absolute;
        right: 10px;
        top: 38px;
        fill: ${props => props.theme.colors.white};
        width: 30px;
        height: 30px;
    }
`