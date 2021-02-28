import { v4 as guid } from 'uuid';
import { createConstructor } from 'entity-constructor';
import { Template } from 'entity-constructor/dist/entity-constructor';
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

type ContragentData = {
  id: string;
  createdDate: Date;
  name?: string;
  taxPayerId?: string;
  taxPayerReasonCode?: string;
  type?: ContragentSubType;
};

const template: Template<ContragentData> = {
  id: {
    defaultValue: guid(),
  },
  createdDate: {
    defaultValue: new Date(),
  },
  taxPayerId: {
    defaultValue: '',
  },
  taxPayerReasonCode: {
    defaultValue: '',
  },
  name: {
    defaultValue: '',
  },
  type: {
    defaultValue: 'PERSON',
  },
};

export const newContragent = createConstructor(template);
export type Contragent = ReturnType<typeof newContragent>;
