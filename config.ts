import type { Config } from "./types/index.d.ts";

const config: Config = {
    leancloud: {
        leanAppId: Deno.env.get("LEAN_APP_ID") || '',
        leanAppKey: Deno.env.get("LEAN_APP_KEY") || '',
        leanMasterKey: Deno.env.get("LEAN_APP_MASTER_KEY") || '',
        leanServer: Deno.env.get("LEAN_APP_SERVER") || ''
    }
}

export default config