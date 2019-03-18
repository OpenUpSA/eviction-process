import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import addStyles from './styles';
import { linksList } from './data.json';


const Footer = ({ classes }) => {
  const {
    helpline,
    helplineWrapper,
    helplineText,
    helpLineTitle,
    links,
    linkUnderline,
    textWhite,
    divider,
    callIcon,
    footerWrapper,
    helpLineSpan
  } = classes;


  const helplineMarkup = (
    <div className={helpline}>
      <div className={helpLineSpan}>
        <Typography component="span" className={helpLineTitle}>Reclaim the city</Typography>
      </div>
      <div className={helpLineSpan}>
        <CallIcon color="primary" fontSize="large" className={callIcon}/>

        <a href="tel:+27117178645" className={helplineWrapper}>
          <Button component="span" className={helplineText}>+27 (0)21 012 5094</Button>
        </a>
      </div>
    </div>
  );

  const linksMarkup = (
    <div className={links}>
      {
        linksList.map((obj, index) => (
          <React.Fragment key={obj.name}>
            {index !== 0 && <span className={divider}>|</span>}

            <a href={obj.link} className={linkUnderline}>
              <Button className={textWhite}>{obj.name}</Button>
            </a>
          </React.Fragment>
        ))
      }
    </div>
  );

  return (
    <footer className={footerWrapper}>
      {helplineMarkup}
      {linksMarkup}
    </footer>
  )
};


export default addStyles(Footer);