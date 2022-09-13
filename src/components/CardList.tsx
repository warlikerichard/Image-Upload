import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { title } from 'process';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [url, setUrl] = useState('');

  // TODO MODAL USEDISCLOSURE
  const {
    isOpen,
    onClose,
    onOpen  
  } = useDisclosure()

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string){
    setUrl(url);
    onOpen();
    console.log(url);
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={"40px"}>
        {cards.map(card => {
          return <Card data={card} viewImage={() => handleViewImage(card.url)} key={card.url}/>
        })}
      </SimpleGrid>
      

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={url}/>
    </>
  );
}
