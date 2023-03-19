import { Navigate, Route, Routes } from 'react-router-dom';
import NavBarLayout from '../components/NavBarLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/signup';

const Router = () => {
    const loggedIn=true
    
    return(
        <>
                <Routes>
                {loggedIn && (
                    <Route path='/' element={<NavBarLayout/>}>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='*' element={<Navigate to='/' replace/>} />
                    </Route>  
                )}
                {!loggedIn && (
                    <>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/signup' element={<Signup/>}/>
                        <Route path='*' element={<Navigate to='/login' replace/>} />
                        </>
                )}
                </Routes>
        </>
    )
};

export default Router;