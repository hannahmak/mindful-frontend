module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:8080/:path*", // Proxy to Backend
      },
    ];
  },
};
