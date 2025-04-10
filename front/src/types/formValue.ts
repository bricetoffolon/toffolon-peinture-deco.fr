export interface FormValue {
    [key: string]: string;
}

export interface FormState {
    username?: string | null;
    email?: string | null;
    message?: string | null;
}
