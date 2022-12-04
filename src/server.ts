import { Application } from "oak";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import logger from "https://deno.land/x/oak_logger@1.0.0/mod.ts";
import router from "./router.ts";

const app = new Application();

app.use(oakCors());

app.use(router.routes());

app.use(router.allowedMethods());

app.use(logger.logger);

app.use(logger.responseTime);

app.listen({ port: 8080 });

console.info("QuLinks Server is running at http://localhost:8080");
