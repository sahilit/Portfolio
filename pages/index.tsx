import Head from 'next/head'
import Banner from "../components/Banner"

export default function Home() {
	return (
		<div>
			<Head>
				<title>PORTFOLIO</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Banner />

		</div>
	)
}
