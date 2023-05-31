import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0;
    padding: 0;
`
export const Contact = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    position: relative;
`

export const Name = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.white};
`

export const Tel = styled.p`
    font-size: 18px;
`

export const DeleteButton = styled.button`
    position: absolute;
    right: 0;
    height: 30px;
    width: 30px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    border: none;
    & svg {
        width: 20px;
        height: 20px;
        fill: ${props => props.theme.colors.mainText}
    }
    &:hover {
        background-color: ${props => props.theme.colors.mainBcg}
    }
`