import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface Data{
  pages: {
    title, description, url, id: string;
    ts: number;
  }[]
}
export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    // TODO AXIOS REQUEST WITH PARAM
    ({pageParam = null}) => {
      const data = api.get('/api/images', {params: {after: pageParam}});
      return data;
    }
    ,
    // TODO GET AND RETURN NEXT PAGE PARAM
    {
      getNextPageParam: (lastRequestResult) => {
        const {data} = lastRequestResult;
        return data.after? data.after : null;
      }
    }

  );

  const formattedData = useMemo(() => {
    console.log(data)
    return data
  
  }, [data]);

  return isLoading ? <Loading/>
  : isError ? <Error/>
  : 
  (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && <Button 
        isLoading={isFetchingNextPage} 
        loadingText="Carregando..." 
        onClick={()=>{
          fetchNextPage();
        }}>Carregar mais</Button>}
      </Box>
    </>
  );
}