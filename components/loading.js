import loadSt from './loading.module.scss';

export default function Loading() {
	return <div className={loadSt.loading}>
		<span></span>
		<span></span>
		<span></span>
	</div>;
}
