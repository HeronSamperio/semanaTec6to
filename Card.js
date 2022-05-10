import React, { useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  VStack,
  Center,
  Image,
  Heading,
} from '@chakra-ui/react';

//Genera las cartas
let pokeIterator = x => (
  <VStack alignItems="center">
    <Grid templateColumns="repeat(4, 1fr)" gap={10}>
      {x.map((data, i) => (
        <GridItem maxWidth="100%" p="40px" bg="gray.500" borderRadius="5%">
          <Center>
            <VStack>
              <h1>{x[i].name}</h1>
              <Image maxWidth="100%" src={x[i].photo}></Image>
              <h1>Exp:</h1> <p>{x[i].exp}</p>
            </VStack>
          </Center>
        </GridItem>
      ))}
    </Grid>
  </VStack>
);

//funcion pokemones aleatorios
function rand() {
  var adjustedHigh = 890 - 1;
  return Math.floor(Math.random() * adjustedHigh) + parseFloat(1);
}

function Card(props) {
  const [pokemon, setPokemon] = useState([]);
  let power = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        for (var i = 0; i <= 3; i++) {
          const url = `https://pokeapi.co/api/v2/pokemon/${rand()}`;
          const response = await fetch(url);
          const json = await response.json();
          const data = {
            name: json.name,
            exp: json.base_experience,
            photo: json.sprites.front_default,
          };
          setPokemon(pokemon => [...pokemon, data]);
        }
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  for (var i = 0; i < pokemon.length; i++) {
    power += pokemon[i].exp;
    console.log(power);
  }
  props.setPower(power);
  return (
    <Center>
      <VStack>
        <Heading p="3%">Total attack: {power}</Heading>
        {pokeIterator(pokemon)}
      </VStack>
    </Center>
  );
}

export default Card;
