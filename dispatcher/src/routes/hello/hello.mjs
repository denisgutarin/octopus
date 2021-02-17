'use-strict';

/**
 * Hello route
 * @param {import("fastify").FastifyInstance} app
 * @param {() => void} done
 */
const route = (app, _, done) => {
  app.get('/', async () => {
    return { hello: 'world!' };
  });
  done();
};
export default route;
