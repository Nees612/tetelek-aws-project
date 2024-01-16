import {Outlet, Navigate} from "react-router-dom"

interface Props {
    auth : {token: boolean}
};

function PrivateRouteComponent ({auth}: Props ){    

    return <>
        {auth.token ? <Outlet/> : <Navigate to="/login"/> }
    </>
}


export default PrivateRouteComponent;