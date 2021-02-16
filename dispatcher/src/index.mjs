'use-strict';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import autoLoad from 'fastify-autoload';
import fastify from 'fastify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = fastify({ logger: true });

app.register(autoLoad, {
  dir: join(__dirname, 'routes'),
  dirNameRoutePrefix: true,
});

const start = async () => {
  try {
    await app.listen(3000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
