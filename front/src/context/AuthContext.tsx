import {createContext, useContext, ReactNode} from "react";
import {useEffect, useState} from "react";
import instance from "@/hook/instance";
import useCustomToast from "@/hook/useCustomToast";

const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: false,
    authLogin: async () => {},
    authLogout: async () => {},
    checkAuth: async () => {}
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const showToast = useCustomToast();

    useEffect(() => {
        checkAuth();
    }, [])

    const checkAuth = async () => {
        try {
            setIsLoading(true);
            const response = await instance.get('/user');
            setUser(response.data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    const authLogin = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            const response = await instance.post('/auth/login', {email: email, password: password});
            setUser(response.data);
            showToast({title: "Authentification Success", status: "success", description: `Welcome ${response.data.email}` || "Welcome"});

        } catch (err) {
            console.error(err);
            showToast({title: "Authentification Error", status: "error", description: err.message || "Unable to log in"});
            throw err;

        } finally {
            setIsLoading(false);
        }
    }

    const authLogout = async () => {
        try {
            setIsLoading(true);
            await instance.post('/auth/logout');
            setUser(null);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, authLogin, authLogout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => useContext(AuthContext);
