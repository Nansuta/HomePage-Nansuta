import type { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout'
import { Introduction } from '../components/Introduction'
import { Blog } from '../components/Blog'
import { Movie } from '../components/Movie'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <Introduction />
      <Blog />
      <Movie />
    </Layout>
  )
}

export default Home
