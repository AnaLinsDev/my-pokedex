import { Dimensions } from 'react-native';
import styled, { css } from "styled-components/native";

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};

    position: relative;
  `}
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${windowWidth}px;
    margin-left: -20px;
    height: 220px;
    background: ${theme.colors.background};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
    margin-top: -70px;
  `}
`;