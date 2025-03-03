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
