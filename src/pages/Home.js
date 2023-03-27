import { Outlet } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';

const Home = ({ logout }) => {

    return (
        <>
            <Navigation logout={logout} />
            <h1 className='welcome'>Bienvenido {localStorage.userName}</h1>
            <Outlet />
        </>
    );
};

export default Home;