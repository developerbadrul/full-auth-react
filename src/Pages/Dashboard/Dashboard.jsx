import { useContext } from "react";
import LoggedUserInfo from "../../components/LoogedUserInfo/LoggedUserInfo";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    if(user){
        return <LoggedUserInfo></LoggedUserInfo>
    }else{
        navigate("/")
    }

};

export default Dashboard;