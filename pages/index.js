import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { checkout } from "../checkout"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tenisky</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Kupte si nejnovější tenisky
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
          <Image 
            src="/img/tenisky/teniska1.png" 
            alt="Teniska Jordan 1 Mid GS Fire Red"
            width={1080}
            height={673}/>
            <h2>Jordan 1 Mid GS Fire Red</h2>
            <p>5.499 Kč</p>
            <button onClick={(() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1M9umIBMpREfxNmDKPZGpeZq",
                      quantity: 1
                    }
                  ]
                })
              })}>Koupit!</button>
          </div>

          <div className={styles.card}>
            <Image 
              src="/img/tenisky/teniska2.png" 
              alt="Teniska Jordan 1 Mid Stealth"
              width={1080}
              height={673}/>
            <h2>Jordan 1 Mid Stealth</h2>
            <p>4.999 Kč</p>
              <button onClick={(() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1M9unLBMpREfxNmDg2f9UK0E",
                      quantity: 1
                    }
                  ]
                })
              })}>Koupit!</button>
          </div>
        </div>
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
