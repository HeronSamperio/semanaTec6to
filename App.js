import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Card from './Card';

function App() {
  const [power, setPower] = useState(0);
  const [power1, setPower1] = useState(0);
  var powerDiff = power - power1;
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Heading h="105%" bg="#F56565">
            Pokemones
            {powerDiff >= 1 ? (
              <Heading bg="#38B2AC" h="60%">Group 1 gana</Heading>
            ) : (
              <Heading bg="#D53F8C" h="60%">Group 2 gana</Heading>
            )}
          </Heading>
          <Card setPower={setPower} />
          <Card setPower={setPower1} />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
