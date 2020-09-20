import Head from 'next/head'

import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Resume from "../components/Resume"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta name="Author" content="Sahil Singh" />
				<meta name="Keywords" content="sahil singh, sahilsingh.ml, sahil singh portfolio, sahil singh,sahil portfolio,sahil singh mumbai portfolio,sahil singh nallasopara,shs,web developer in nallasopara,web developer in mumbai,developer in efurtherance,content developer in nallasopara" />
				<meta name="Description" content="Hi this is a portfolio of Sahil Singh, who lives in mumbai and develops and design Websites. I design website in Language such as HTML5, CSS3, Bootstrap, jQuery, Javascript, Angular,etc. " />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#008000" />
				<title>Sahil Singh</title>
				<link rel="icon" href="images/logo.jpg" />
				{/* Latest compiled and minified CSS */}
				{/* @ts-ignore */}
				<link rel="preload" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" as="style" media="all" onLoad="this.onload=null;this.rel='stylesheet'" />
				{/* jQuery library */}
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
				{/* Latest compiled JavaScript */}
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
				{/* Font awesome */}
				{/* @ts-ignore */}
				<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" as="style" media="all" onLoad="this.onload=null;this.rel='stylesheet'" />
				{/* Google font Roboto */}
				{/* @ts-ignore */}
				<link rel="preload" href='https://fonts.googleapis.com/css?family=Roboto' as="style" media="all" onLoad="this.onload=null;this.rel='stylesheet'" />
				<script type="text/javascript" src="/main.js"></script>
			</Head>

			<Banner />
			<Navbar />
			<AboutMe />
			<Skills />
			<Resume />
			<Education />
			<Experience />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	)
}
