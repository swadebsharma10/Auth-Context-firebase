import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Home = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <h2>Home: {user}</h2>
        </div>
    );
};

export default Home;