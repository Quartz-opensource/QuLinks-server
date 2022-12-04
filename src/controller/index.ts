import { RouterMiddleware } from "oak";

export const index: RouterMiddleware<"/"> = (ctx) => {
  ctx.response.body = {
    s: "s",
  };
};
