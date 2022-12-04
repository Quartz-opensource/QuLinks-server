import type { Config } from "./src/types/mod.d.ts";

const config: Config = {
  password: Deno.env.get("QL_PASSWORD") || "admin",
  leancloud: {
    leanAppId: Deno.env.get("LEAN_APP_ID") || "",
    leanAppKey: Deno.env.get("LEAN_APP_KEY") || "",
    leanMasterKey: Deno.env.get("LEAN_APP_MASTER_KEY") || "",
    leanServer: Deno.env.get("LEAN_APP_SERVER") || "",
  },
};

export default config;
