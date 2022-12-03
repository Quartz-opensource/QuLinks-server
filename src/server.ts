import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import config from "../config.ts"

const app = new Application

app.use((ctx) => {
    ctx.response.body = config.leancloud.leanAppId
})

app.listen({port: 8080})

console.log("QuLinks is running at http://localhost:8080")