import React from 'react';
import moment from 'moment';

const BeautifiedTime = ({ isoTime }) => {
  const beautifiedTime = moment(isoTime).utc().format('MMMM D, YYYY h:mm A (UTC)');

  return <div>{beautifiedTime}</div>;
};

export default BeautifiedTime;
