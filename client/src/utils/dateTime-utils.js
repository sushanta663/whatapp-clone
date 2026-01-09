


export const formatDate = (date) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  return `${hours < 12 ? hours : (hours % 12)} : ${minutes < 10 ? '0' + minutes : minutes} ${hours< 12 ? 'am' : 'pm'}`
}