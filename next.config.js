module.exports = {
  reactStrictMode: true,
  future: { webpack5: true},

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
  images: {
    domains: ['s.gravatar.com', 'lh3.googleusercontent.com'],
  },
};
