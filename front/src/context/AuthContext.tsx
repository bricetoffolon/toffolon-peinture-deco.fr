import {createContext, useContext, ReactNode} from "react";
import {useEffect, useState} from "react";
import instance from "@/hook/instance";

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
    const [error, setError] = useState<string | null>(null);

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
        console.log("coucou")
        try {
            setIsLoading(true);
            const response = await instance.post('/auth/login', {email: email, password: password});
            setUser(response.data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    const authLogout = async () => {
        try {
            setIsLoading(true);
            await instance.get('/auth/logout');
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
