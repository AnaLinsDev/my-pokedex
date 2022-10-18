import React from "react";
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from "lottie-react-native";

import pokemonGif from "./pokemon.json";
import { Button } from "../../components/Button";

import * as S from "./styles";

export function Welcome() {

  const { navigate } = useNavigation();

  function handleNavigateToHome() {
    navigate('Home');
  }

  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <S.WrapperImage>
            <AnimatedLottieView
              style={{ width: 200 }}
              autoPlay
              source={pokemonGif}
            />
          </S.WrapperImage>
        </S.WrapperAnimation>
        <S.Title>Bem vindo</S.Title>
        <S.SubTitle>Encontre todods os pokémons em um só lugar</S.SubTitle>
      </S.Content>
      <S.Footer>
        <Button title='Iniciar' onPress={handleNavigateToHome} />
      </S.Footer>
    </S.Container>
  );
}
