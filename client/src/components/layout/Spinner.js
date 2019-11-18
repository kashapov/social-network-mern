import React, { Fragment } from 'react';
import spinner from '../../assets/img/spinner.svg';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ margin: 'auto', display: 'block', width: '100px' }}
      alt="Loading..."
    />
  </Fragment>
);
