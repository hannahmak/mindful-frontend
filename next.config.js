module.exports = {
  reactStrictMode: true,
  future: { webpack5: true},
  async rewrites() {
    return [
      {
        source: "/posts",
        destination: "https://mindful-idsp3380.herokuapp.com/posts",
      },
      {
        source: "/images/:file*",
        destination: "https://mindful-idsp3380.herokuapp.com/:file*",
      },
    ];
  },
  images: {
    domains: ['s.gravatar.com'],
  },
};
