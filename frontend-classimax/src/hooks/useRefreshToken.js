import axios from '../api/axios';
import useAuth from "./useAuth"

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/auth/refresh', {
            withCredentials: true
        });
        const userName = response?.data?.userName;
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.userRoles;
      console.log('accessToken:',accessToken);
      console.log('roles:',roles);
      // Handle successful login here
      console.log('userName:',userName);
    //   setAuth({ userName, roles, accessToken });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.accessToken
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;