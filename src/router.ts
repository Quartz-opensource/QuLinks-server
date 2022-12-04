import { Router } from "oak";
import { index } from "./controller/mod.ts";

const router = new Router();

router.get("/", index);

export default router;
