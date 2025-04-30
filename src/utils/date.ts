function getReviewDateString(date: Date): string {
  const formatter = Intl.DateTimeFormat('en', { 'month': 'long', year: 'numeric' });
  return formatter.format(date);
}

export { getReviewDateString };
