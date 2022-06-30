import { Fragment } from 'react';
import Header from './header';
const HeaderLayout = ({ children, current }) => {
  return (
    <Fragment>
      <Header current={current}/>{children}
    </Fragment>
  );
};
export default HeaderLayout;
