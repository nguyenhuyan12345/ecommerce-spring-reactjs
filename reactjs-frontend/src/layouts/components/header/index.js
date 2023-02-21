import Topbar from './Topbar';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';

function Header() {
    return (
        <>
            <Topbar />
            <Searchbar />
            <Navbar />
        </>
    );
}

export default Header;
