
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import supabase from '../utils/supabase'

export async function getStaticProps() {

  const {data: posts, error} = await supabase.from('posts').select('*')

  if(error){
    throw new Error(error);
  }

  return {
    props:{
      posts
    }
  }  
}


export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido <a href="https://nextjs.org">Next.js for Andres!</a>
        </h1>
        <pre>
          {JSON.stringify(posts, null, 2)}
        </pre>

       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
