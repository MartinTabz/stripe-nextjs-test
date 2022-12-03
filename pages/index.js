import Head from 'next/head';
import Image from 'next/image';
import { checkout } from '../checkout';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
	return (
		<>
			<Head>
				<title>Testovací stránka s teniskami</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<h1 className={styles.title}>Kupte si nejnovější tenisky</h1>
				<div className={styles.grid}>
					<div className={styles.card}>
						<Image
							src="/img/tenisky/teniska1.png"
							alt="Teniska Jordan 1 Mid GS Fire Red"
							width={1080}
							height={673}
						/>
						<h2>Jordan 1 Mid GS Fire Red</h2>
						<p>5.499 Kč</p>
						<button
							onClick={() => {
								checkout({
									lineItems: [
										{
											price: 'price_1M9umIBMpREfxNmDKPZGpeZq',
											quantity: 1,
										},
									],
								});
							}}
						>
							Koupit!
						</button>
					</div>

					<div className={styles.card}>
						<Image
							src="/img/tenisky/teniska2.png"
							alt="Teniska Jordan 1 Mid Stealth"
							width={1080}
							height={673}
						/>
						<h2>Jordan 1 Mid Stealth</h2>
						<p>4.999 Kč</p>
						<button
							onClick={() => {
								checkout({
									lineItems: [
										{
											price: 'price_1M9unLBMpREfxNmDg2f9UK0E',
											quantity: 1,
										},
									],
								});
							}}
						>
							Koupit!
						</button>
					</div>
				</div>
				<div className={styles.newsletter_area}>
					<h2>Přihlásit se k novinkám</h2>
					<form
						method="post"
						action="https://agencyms.ecomailapp.cz/public/subscribe/1/43c2cd496486bcc27217c3e790fb4088"
					>
						<div className={styles.input_field}>
							<label htmlFor="name">Vaše Jméno</label>
							<input name="name" id="name" type="text"></input>
						</div>

						<div className={styles.input_field}>
							<label htmlFor="email">Váš E-Mail</label>
							<input id="email" name="email" type="email"></input>
						</div>

						<button className={styles.submit} type="submit">
							Odebírat
						</button>
					</form>
				</div>
			</Layout>
		</>
	);
}
