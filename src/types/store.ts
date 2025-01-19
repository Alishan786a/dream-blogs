
export interface User {
    image: any;
    stats: any;
    id: string;
    email: string;
    name:string;
    role:string
    isEmailVerified:boolean;
    createdAt:string;
    updatedAt:string;
  }
  
  
  
  export interface AuthState {
    isAuthenticated: boolean;
    isProfileLoading: boolean;
  
    user: User | null; // You can replace `any` with your user type or interface
    setUser: (user: User | null ,success:boolean) => void;
    setLoading: (state:boolean) => void;
  }
  export interface ConnectUserSlice {
    isAuthenticated: boolean;
    isProfileLoading: boolean;
    user: User | null; // You can replace `any` with your user type or interface
    setUser: (user: User | null ,success:boolean) => void;
    setLoading: (state:boolean) => void;
  
  
  }
  