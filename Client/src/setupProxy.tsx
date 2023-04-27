import { createProxyMiddleware } from "http-proxy-middleware"

export default function (App) {
  App.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
