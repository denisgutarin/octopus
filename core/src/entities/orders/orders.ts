import { v4 as guid } from 'uuid';
import { Contragent } from '../contragents/contragent';

export type OrderData = {
  id: string;
  createdDate: Date;
  author?: string;
  publicId?: string;
  customer?: Contragent;
  customerPoint?: undefined;
  customerDecisionMaker?: undefined;
  customerPaymentManager?: undefined;
  customerContract?: undefined;
  participationAgent?: undefined;
  participationContract?: undefined;
  consignee?: Contragent;
  marketId?: undefined;
  dealerUnit?: undefined;
  copiedFromOrderId?: string;
};

const initialOrder = {
  id: guid(),
  createdDate: new Date(),
};

export const Order = (data: OrderData = initialOrder) => {
  const withCustomer = (customer: Contragent) => Order({ ...data, customer });
  const withCustomerContract = (contract: undefined) =>
    Order({ ...data, customerContract: contract });

  return Object.freeze({
    ...data,
    withCustomerContract,
    withCustomer,
  });
};

export type Order = ReturnType<typeof Order>;
