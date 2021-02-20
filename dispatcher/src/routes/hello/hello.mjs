'use sctrict';

const route = (app, _, done) => {
  app.get('/', async () => {
    return { hello: 'world!' };
  });
  done();
};
export default route;
