/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable react/no-unknown-property */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="website yes" />
      </Head>
      <button class="hover:bg-gray-300 hover:text-violet-600 bg-white focus:font-bold focus:text-violet-600 focus:bg-gray-400 disabled:scale-0">
        among us?
      </button>
    </div>
  )
}
