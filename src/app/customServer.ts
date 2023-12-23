import { IncomingMessage, ServerResponse } from "http";
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Custom routing logic
    if (pathname === "/user/home") {
      app.render(req, res, "/user/blog-content", parsedUrl.query);
    } else if (pathname === "/user/blog-content/Article") {
      app.render(req, res, "/user/blog-content/Article", parsedUrl.query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err: string) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
