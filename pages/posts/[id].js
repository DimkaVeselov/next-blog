import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { useState, useEffect } from 'react';
import Loading from '../../components/loading';

import utilStyles from '../../styles/utils.module.scss';

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
	});

	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>

				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
			</article>
		</Layout>
	);
}
