export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped";

export interface OrderProductSpecs {
  cpu?: string;
  ram?: string;
  storage?: string;
  gpu?: string;
}

export interface OrderProduct {
  productId: string;           
  name: string;                   
  thumbnail?: string;
  price: number;                  
  discount?: number;             
  quantity: number;
  specs?: OrderProductSpecs;
}

export interface ShippingAddress {
  name: string;
  phone: string;
  address: string;
}

export interface OrderItem {
  _id?: string;
  userId: string;              
  products: OrderProduct[];
  shippingAddress: ShippingAddress;
  totalPrice: number;
  status: OrderStatus;           
  note?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const ColorStatus = [
  {
    label: "pending",
    color: "#c2b610",
    bgColor: "#f5f0a6"
  },
  {
    label: "processing",
    color: "#5907a6",
    bgColor: "#be84f5"
  },
  {
    label: "shipped",
    color: "#1dad44",
    bgColor: "#8bf7a8"
  }
]