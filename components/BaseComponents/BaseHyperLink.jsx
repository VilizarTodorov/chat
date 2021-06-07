import React from "react";
import useBaseLinkStyles from "../../commonStyles/baseLinkStyles";

const BaseHyperLink = ({ url, children, ...others }) => {
  const classes = useBaseLinkStyles();

  return (
    <a className={classes.link} target="_blank" href={url} rel="noopener noreferrer" {...others}>
      {children}
    </a>
  );
};

export default BaseHyperLink;
