import { v4 as guid } from 'uuid';

export type ContragentType = 'PERSON' | 'INCORPORATION';
export type ContragentSubType =
  | 'PERSON'
  | 'SELF_EMPLOYED'
  | 'PROFIT_ORGANIZATION'
  | 'NONPROFIT_ORGANIZATION'
  | 'STATE_ORGANIZATION';
export const ContragentTypeForSubtype: {
  [key in ContragentSubType]: ContragentType;
} = {
  PERSON: 'PERSON',
  SELF_EMPLOYED: 'PERSON',
  PROFIT_ORGANIZATION: 'INCORPORATION',
  NONPROFIT_ORGANIZATION: 'INCORPORATION',
  STATE_ORGANIZATION: 'INCORPORATION',
};

export type ContragentData = {
  id: string;
  createdDate: Date;
  name?: string;
  taxPayerId?: string;
  taxPayerReasonCode?: string;
  kpp?: string;
  type?: ContragentSubType;
};

const initialCustomer = {
  id: guid(),
  createdDate: new Date(),
};

export const Contragent = (data: ContragentData = initialCustomer) => {
  const withName = (name: string) => Contragent({ ...data, name });
  const withTaxPayerId = (id: string) =>
    Contragent({ ...data, taxPayerId: id });
  const withTaxReasonCode = (code: string) =>
    Contragent({ ...data, taxPayerReasonCode: code });
  return Object.freeze({
    ...data,
    withName,
    withTaxPayerId,
    withTaxReasonCode,
  });
};

export type Contragent = ReturnType<typeof Contragent>;
