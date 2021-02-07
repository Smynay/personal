import Navbar from '../components/Navbar/Navbar';
import '../assets/fonts/fonts.css';
import './default.scss';

function Layout(props) {
  return (
    <div className="Layout">
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
