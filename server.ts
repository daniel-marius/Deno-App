import { Application, Router, RouterContext } from "./deps.ts";
import router from "./router.ts";
import { staticFile } from "./middlewares/staticFile.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(staticFile);

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(`Listening on ${secure ? 'https://' : 'http://'} ${hostname || "localhost"}:${port}`);
});

app.addEventListener('error', event => {
  console.log(event.error);
});

await app.listen({ port: 7000 });
