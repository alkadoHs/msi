import { Config } from 'ziggy-js';


export interface Branch {
    id: number;
    name: string;
    phones: string;
    created_at: string;
    updated_at: string;
}

export interface Company {
    id: number;
    name: string;
    phones: string;
    created_at: string;
    updated_at: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
    isActive: boolean;
    company_id: number;
    branch_id: number;
    company: Company;
    branch: Branch;
    avatar?: string;
    gender: string;
    created_at: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
