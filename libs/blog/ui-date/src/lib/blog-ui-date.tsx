export interface DateProps {
  dateString: string;
  locale?: string;
}

export function UiDate({ dateString, locale }: DateProps) {
  return (
    <time dateTime={dateString}>
      {Intl.DateTimeFormat(locale ?? 'en', { dateStyle: 'long' }).format(new Date(dateString))}
    </time>
  );
}
