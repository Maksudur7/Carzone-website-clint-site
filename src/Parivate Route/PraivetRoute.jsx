import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth Context/AuthProvider';
import { useContext } from 'react';

const PraivetRoute = ({ children }) => {
    const { users, loding } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    console.log(location.pathname)
    if (loding) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (users) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PraivetRoute.propTypes ={
    children : PropTypes.object.isRequired
}

export default PraivetRoute;