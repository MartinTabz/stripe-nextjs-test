import Link from "next/link"
import styles from '../styles/Home.module.css'
import Image from "next/image"

export default function Layout({children}) {
   return (
      <>
         <header>
            <div className={styles.logo_area}>
               <Image 
                  src="/img/ostatni/logo.webp"
                  alt="Logo internetového obchodu s teniskami ClearOut"
                  width={675}
						height={156}
                  />
            </div>
            {/* <nav>
               <Link href="/">Domů</Link>
            </nav> */}
         </header>
         <main className={styles.main}>
            <main>
               <div className={styles.container}>
               {children}
               </div>
            </main>
         </main>
         <footer className={styles.footer}>
				<a>Made by Martin Šíl &copy; 2022</a>
			</footer>
      </>
   )
}