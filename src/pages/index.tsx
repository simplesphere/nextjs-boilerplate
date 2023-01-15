import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>NextSimple - NextJs Boilerplate to scaffold apps quickly</title>
				<meta name="description" content="NextJs Boilerplate built for developers" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-grey-50">
				<div className="container flex flex-wrap items-center">
					<h1 className="text-4xl">Hello World</h1>
				</div>
			</main>
		</>
	);
}
