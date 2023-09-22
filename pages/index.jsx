import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { useEffect, useState } from 'react';
import Loading from '../components/loading';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
	});

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Frontend в</p>
				<a href='https://multitech.agency/#ru' target='_blank'>
					Multitech
				</a>
			</section>

			<section className={` ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Блог</h2>
				{loading ? (
					<ul className={utilStyles.list}>
						{allPostsData.map(({ id, date, title }) => (
							<li className={utilStyles.listItem} key={id}>
								<Link href={`/posts/${id}`}>{title}</Link>
								<small
									className={[utilStyles.lightText, utilStyles.mainDate].join(
										' ',
									)}>
									<Date dateString={date} />
								</small>
							</li>
						))}
					</ul>
				) : (
					<Loading />
				)}
			</section>
		</Layout>
	);
}
