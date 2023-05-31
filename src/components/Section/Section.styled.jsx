import styled from "styled-components";

export const SectionWrapper = styled.section`
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    color: ${props => props.theme.colors.mainText};
    background-color: ${({ sectionType, theme }) => {
        switch (sectionType) {
            case "form":
                return theme.colors.mainBcg;
            case "phonebook":
                return theme.colors.oddBcg;
            default:
                return theme.colors.mainBcg;
        }
    }};
`;
