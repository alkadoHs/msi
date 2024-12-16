import { Branch, User } from "@/types";

export type PaginationLink = {
    url: string;
    label: string;
    active: boolean;
};

export interface Paginations {
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface Users {
    data: User[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}


export interface Branches {
    data: Branch[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface PaymentMethod {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export interface PaymentMethods {
    data: PaymentMethod[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface Account {
    id: number;
    payment_method_id: number;
    payment_method: PaymentMethod;
    amount: number;
    abbreviation: string;
    created_at: string;
    updated_at: string;
}

export interface Accounts {
    data: Account[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface Transaction {
    id: number;
    account_id: number;
    type: string;
    user_id: number;
    user: User;
    account: Account;
    amount: number;
    balance: number;
    description: string;
    created_at: string;
    updated_at: string;
}

export interface Transactions {
    data: Transaction[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface Product {
    id: number;
    name: string;
    unit: string;
    branch_id: number;
    branch: Branch;
    buy_price: number;
    sell_price: number;
    stock: number;
    stock_alert: number;
    expire_date: string;
    whole_price: number;
    whole_stock: number;
    created_at: string;
    updated_at: string;
}

export interface Products {
    data: Product[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string;
    next_page_url: string;
    from: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}
