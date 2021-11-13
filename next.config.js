module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/posts",
        destination: "http://localhost:8080/posts",
      },
      {
        source: "/images/:file*",
        destination: "http://localhost:8080/images/:file*",
      },
    ];
  },
};
