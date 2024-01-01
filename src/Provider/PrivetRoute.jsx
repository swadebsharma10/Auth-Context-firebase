import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div className="text-center"><span className="loading text-purple-400 loading-ring loading-lg"></span></div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;