import { makeStyles, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import getUrlFromLink from "../../../helpers/functions/getUrlFromLink";
import BaseSecondaryContainer from "../../BaseComponents/BaseSecondaryContainer";
import BaseSecondaryHeader from "../../BaseComponents/BaseSecondaryHeader";
import LinkItem from "./LinkItem";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  container: {
    left: "100%",
  },
  tab: {
    minWidth: 0,
  },
  flexContainer: {
    justifyContent: "space-between",
  },
});

const LinksMediaDocs = ({ isOpen, close, links, media, docs }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BaseSecondaryContainer isOpen={isOpen} className={!isOpen && classes.container}>
      <BaseSecondaryHeader close={close} title={"Docs, Media and Links"}></BaseSecondaryHeader>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
        <Tab className={classes.tab} label="Docs" index={0} {...a11yProps(0)} /> */
        <Tab className={classes.tab} label="Media" index={1} {...a11yProps(1)} />
        <Tab className={classes.tab} label="Links" index={2} {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        1
      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
      <TabPanel value={value} index={2}>
        {links.map((link) => {
          console.log(link);
          const url = getUrlFromLink(link.url);
          return (
            <LinkItem key={link.id} url={url}>
              {url}
            </LinkItem>
          );
        })}
      </TabPanel>
    </BaseSecondaryContainer>
  );
};

export default LinksMediaDocs;
