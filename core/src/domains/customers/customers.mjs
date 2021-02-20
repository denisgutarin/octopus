import { v4 as guid } from 'uuid';

const emptyLogger = { log: () => {} };

const useLogger = () =>
  process.env.NODE_ENV === 'production' ? emptyLogger : { log: console.log };

export const Customer = ({ id = guid(), name = '' }) => {
  const logger = useLogger();

  const getContracts = () => {
    return [1255, 123];
  };

  logger.log('Created');
  logger.log(id);
  logger.log(name);

  return {
    id,
    name,
    getContracts,
  };
};

const cust = Customer({ name: 'Denis' });
console.dir(cust);
