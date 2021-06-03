const getUrlFromLink = (link) => {
  const https = "https://";
  const result = link.startsWith("http");
  if (!result) {
    return https.concat(link);
  }
  return link;
};

export default getUrlFromLink