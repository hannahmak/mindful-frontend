module.exports = {
  reactStrictMode: true,
  future: { webpack5: true},
  async rewrites() {
    return [
      {
        source: "/posts",
        destination: "http://mindful-idsp3380.herokuapp.com/posts",
        // destination: "http://localhost:8080/posts"
      },
      {
        source: "/images/:file*",
        destination: "http://mindful-idsp3380.herokuapp.com/:file*",
        // destination: "http://localhost:8080/:file"
      },
    ];
  },
  images: {
    domains: ['s.gravatar.com'],
  },
};
