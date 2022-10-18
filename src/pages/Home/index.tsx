import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import pokeballImage from "../../assets/img/pokeball.png";
import { Card, Pokemon, PokemonType } from "../../components/Card";
import * as S from "./styles";
import { FlatList } from "react-native";

export interface Request {
  id: number;
  types: PokemonType[];
}

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get("/pokemon");
      const { results } = response.data;
      console.log(response)

      const payloadPokemon = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      setPokemons(payloadPokemon);
    }

    getAllPokemons();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;

    return { id, types };
  }

  function handleNavigationPokemonDetail(pokemonId: number) {
    navigate("About", {
      pokemonId,
    });
  }

  return (
    <S.Container>
      <FlatList
        ListHeaderComponent={
          <>
            <S.Header source={pokeballImage} />
            <S.Title> Pokédex</S.Title>
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => (
          <Card
            data={pokemon}
            onPress={() => {
              handleNavigationPokemonDetail(pokemon.id);
            }}
          />
        )}
      />
    </S.Container>
  );
}
