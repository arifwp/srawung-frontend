export default function formatDate(value: Date) {
  const date = new Date(value);
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return formattedDate;
}
