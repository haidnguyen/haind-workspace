import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export interface DateProps {
  dateString: string;
}

export function Date({ dateString }: DateProps) {
  const date = dayjs(dateString).format('LL');
  return <time dateTime={dateString}>{date}</time>;
}
