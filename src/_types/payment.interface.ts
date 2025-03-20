export interface IPaymentResponse {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [key: string]: any;
}

export interface IBuyTicketResponse {
  createPayment: object;
}

export interface ITicket {
  id: string;
  number: string;
  status: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [key: string]: any;
}

export interface ITicketValidityResponse {
  message: string;
}

export interface IPaymentMethod {
  name: string;
  url: string;
  _id: string;
}

// ticket data
interface User {
  _id: string;
  phoneNumber: string;
  publicUrl: string[];
  secureUrl: string[];
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Event {
  _id: string;
  title: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface PaymentMethod {
  _id: string;
  name: string;
  logoPublicUrl: string[];
  logoSecureUrl: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface PaymentHistory {
  _id: string;
  phoneNumber: string;
  paymentMethod: PaymentMethod;
  tx_ref: string;
  status: string;
  event: string;
  price: number;
  quantity: number;
  totalBought: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  cbeTxnRef: string;
  paidAmount: number;
}

interface Ticket {
  _id: string;
  user: User;
  isUsed: boolean;
  event: Event;
  paymentHistory: PaymentHistory;
  lotteryNumber: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type TTicketList = Ticket[];

export interface TTicketListResponse {
  data: {
    data: {
      tickets: Ticket[];
    };
  };
}
