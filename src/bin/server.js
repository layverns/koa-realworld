const config = require("config");

const db = require("../lib/db");

const app = require("../lib/app")

async function main() {
    const host = config.get("server.host");
    const port = config.get("server.port");
    let server;

    try {
        // await db.select(db.raw("1"));

    } catch(err) {
        
    }
}

main();