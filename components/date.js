import { parseISO, format } from 'date-fns';
import ru from 'date-fns/locale/ru';

export default function Date({ dateString }) {
	const date = parseISO(dateString);

	return (
		<time dateTime={dateString}>
			{format(date, 'LLLL yyyy', { locale: ru })}
		</time>
	);
}
