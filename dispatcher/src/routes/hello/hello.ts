import { FastifyPluginCallback } from 'fastify';

const route: FastifyPluginCallback = (app, opts, done) => {
  app.get('/', async () => {
    return { hello: 'world!' };
  });
  done();
};
export default route;
