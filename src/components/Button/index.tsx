import React from "react";
import AnimatedLottieView from "lottie-react-native";

import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = {
  title: string;
} & TouchableOpacityProps;

export function Button({ title, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
