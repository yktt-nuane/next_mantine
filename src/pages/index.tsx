
import { Center, Container } from '@mantine/core';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Container mt={'lg'}>
        <Center>This is BoilerPlate</Center>
      </Container>
    </>
  );
}
