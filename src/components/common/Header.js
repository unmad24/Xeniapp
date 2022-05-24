/* eslint-disable jsx-a11y/anchor-is-valid */
import LoginButton from './buttons/LoginButton';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  return (
    <div>
      <div className="container p-0">
      <nav className="navbar navbar-expand-lg navbar-light ps-0 pe-0 pt-2 pb-2">
        <div className="container-fluid p-0">
          <a className="navbar-brand" href="#">
                <img src="./images/logo.png" className='logo' alt="" />
          </a>
          <LoginButton/>
        </div>
      </nav>
      </div>
      <hr className='m-0'/>
    </div>
  );
};

export default Header;
