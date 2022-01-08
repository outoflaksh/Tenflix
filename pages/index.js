import Head from 'next/head'
import Image from 'next/image'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import { QueryProvider } from '../components/QueryContext'


export default function Home() {
  return (
    <>
      <Head>
        <title>Tenflix</title>
      </Head>
      <QueryProvider>
        <SearchBox />
        <CardList />
      </QueryProvider>
    </>
  )
}
