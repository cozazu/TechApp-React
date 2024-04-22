export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface IProductcart extends IProduct {
    quantity: number;
}

export interface LoginProps {
    email: string;
    password: string;
}
  
export interface LoginErrorProps {
    email?: string;
    password?: string;
}
  
export interface RegisterProps {
    email: string;
    password: string;
    confirmPassword?: string;
    name: string;
    address: string;
    phone: string;
}
  
export interface RegisterErrorProps {
    email?: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
    address?: string;
    phone?: string;
}

export interface IOrder {
    status: "approved" | "pending" | "rejected";
    date: string;
    products: IProduct[];
    id: number;
  }