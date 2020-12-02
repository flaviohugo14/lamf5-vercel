import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt';

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "d 'de' LLLL 'de' yyyy", {  locale: pt })}</time>
}

export default DateFormatter
