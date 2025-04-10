interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    authLogin: (email: string, password: string) => Promise<void>;
    authLogout: () => void;
    checkAuth: () => Promise<void>;
}