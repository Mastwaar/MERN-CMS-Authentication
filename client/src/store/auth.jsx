import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setServices] =  useState("");

    // function to store token in localStorage
    const storeTokenInLS = (servertoken) => {
        setToken(servertoken);
        return localStorage.setItem("token", servertoken);
    };


    //   this is to get the value in either true or false in the original state of token
  let  isLoggedIn = !!token;


  //   to check whether is loggedIn or not
    const LogoutUser = () => {
        setToken(" ");
        return localStorage.removeItem('token');
    };

    // JWT AUTHENTICATION TO GET THE CURRENTLY LOGGED IN USER DATA

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers : {
                    Authorization: `Bearer ${token}`,
                },
            });

            if(response.ok) {
                const data = await response.json();
                setUser(data.userData);
            }
            else {
                console.error("Error fetching user data");
            }
        } catch (error) {
            console.log(error);
        }
    };

    // To fetch the services data from the database
    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service", {
                method: "GET",
            });

        if(response.ok){
            const data = await response.json();
            console.log(data.msg);
            setServices(data.msg);  
        }
        } catch (error) {
            console.log(`Failed to get Services data ${error}`);
        }
    }

    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);

    return (
    <AuthContext.Provider value={{user, token, storeTokenInLS, LogoutUser, services}}>
        {children}
    </AuthContext.Provider>);
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}; 

