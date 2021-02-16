/**
 * Hello route
 * @param {import("fastify").FastifyInstance} app
 * @param opts
 * @param done
 */
const route = (app, opts, done) => {
  app.get('/', async () => {
    return { hello: 'world!' };
  });
  done();
};
export default route;
