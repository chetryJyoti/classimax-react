import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios('/auth/logout', {
                withCredentials: true
            });
            console.log('logoutresponse:',response.data);
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout