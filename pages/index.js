import Head from 'next/head'
import Image from 'next/image'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Tenflix</title>
      </Head>
      <SearchBox />
      <CardList />
    </>
  )
}
