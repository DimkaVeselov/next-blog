import styles from '../styles/utils.module.scss';

export default function Custom404() {
	return (
		<div className={styles.error__wrap}>
			<h1 className={styles.error__text}>404 - Page Not Found</h1>
		</div>
	);
}
