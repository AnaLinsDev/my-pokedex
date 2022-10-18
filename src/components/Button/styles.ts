import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    background-color: ${theme.colors.backgroundCard.water};

    border-radius: 20px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 17px;
    color: ${theme.colors.white_text};
  `}
`;
