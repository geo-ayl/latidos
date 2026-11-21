const http = require("http");
const fs = require("fs");
const path = require("path");

const raiz = __dirname;
const tipos = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".glb": "model/gltf-binary",
};

const puerto = Number(process.argv[2] || 8765);

http.createServer((req, res) => {
  const pedido = decodeURIComponent(req.url.split("?")[0]);
  const relativo = pedido === "/" ? "index.html" : pedido.replace(/^\/+/, "");
  const archivo = path.join(raiz, relativo);
  if (!archivo.startsWith(raiz)) {
    res.writeHead(403);
    res.end("no");
    return;
  }
  fs.readFile(archivo, (error, datos) => {
    if (error) {
      res.writeHead(404);
      res.end("no");
      return;
    }
    res.writeHead(200, { "Content-Type": tipos[path.extname(archivo).toLowerCase()] || "application/octet-stream" });
    res.end(datos);
  });
}).listen(puerto, "127.0.0.1", () => {
  console.log(`Pulso en http://127.0.0.1:${puerto}/`);
});
