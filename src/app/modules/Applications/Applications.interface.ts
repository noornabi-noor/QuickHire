export interface IApplication {
    name: string;
    email: string;
    phone: string;
    resume: string | null;
}

export interface IUpdateApplication {
    name?: string;
    email?: string;
    phone?: string;
    resume?: string | null;
}