import getUrlFromLink from "./getUrlFromLink";
import getUrls from "./getUrls";
import useBaseLinkStyles from "../../commonStyles/baseLinkStyles";

const getReplacedMessage = (message) => {
  const classes = useBaseLinkStyles();

  let msg = message;
  const urls = getUrls(message);
  if (urls) {
    urls.forEach((link) => {
      const url = getUrlFromLink(link);
      msg = msg.replaceAll(
        link,
        `<a class=${classes.link} target="_blank" href=${url} rel="noopener noreferrer">${link}</a>`
      );
    });
  }
  return msg;
};

export default getReplacedMessage;
