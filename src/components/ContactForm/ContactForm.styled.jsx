import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-top: 20px;
`
export const Label = styled.label`
    font-size: 18px;
    text-align: left;
    color: ${props => props.theme.colors.lightDecorative};
`

export const Input = styled.input`
    background-color: ${props => props.theme.colors.white};
    border: ${props => `2px solid ${props.theme.colors.lightDecorative}`};
    padding: 10px;
    min-width: 200px;
    border-radius: 16px;
    outline: none;
    color: ${props => props.theme.colors.mainText};
    font-size: 20px;
`
export const Button = styled.button`
    align-self: center;
    padding-left: 20px;
    padding-right: 20px;
    height: 40px;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 16px;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.colors.mainText};
`