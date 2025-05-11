function getReviewTimeTagDateString(date: Date) {
  const SECONDS_IN_MIN = 60;
  const MS_IN_SECOND = 1000;
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - (offset * SECONDS_IN_MIN * MS_IN_SECOND));
  return date.toISOString().split('T')[0];
}

function getReviewDateString(date: Date): string {
  const formatter = Intl.DateTimeFormat('en', { 'month': 'long', year: 'numeric' });
  return formatter.format(date);
}

export { getReviewTimeTagDateString, getReviewDateString };
