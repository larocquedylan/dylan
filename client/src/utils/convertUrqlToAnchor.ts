// Define a new type for urlAliases
interface UrlAliases {
  [key: string]: string;
}

const convertUrlsToAnchors = (text: string, urlAliases: UrlAliases) => {
  const urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  return text.replace(urlRegex, (url) => {
    const alias = urlAliases[url] || url;
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-bold">${alias}</a>`;
  });
};

export default convertUrlsToAnchors;
