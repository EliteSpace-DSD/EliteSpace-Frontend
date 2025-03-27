export const formatExpirationTime = () => {
  const date = new Date();
  date.setHours(date.getHours() + 24);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${hours}:${formattedMinutes} ${period}`;
};
