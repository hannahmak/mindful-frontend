module.exports = {
  reactStrictMode: true,
  future: { webpack5: true},
  async rewrites() {
    return [
      {
        source: "/mypost",
        destination: "http://mindful-idsp3380.herokuapp.com/mypost",
        //destination: "http://localhost:8080/mypost"
      },
      {
        source: "/myfeed",
        destination: "http://mindful-idsp3380.herokuapp.com/myfeed",
        //destination: "http://localhost:8080/myfeed"
      },
        {
        source: "/myfriend",
        destination: "http://mindful-idsp3380.herokuapp.com/users",
        //destination: "http://localhost:8080/myfriend"
      },
      {
        source: "/images/:file*",
        destination: "http://mindful-idsp3380.herokuapp.com/:file*",
        // destination: "http://localhost:8080/:file"
      },
    ];
  },
  images: {
    domains: ['s.gravatar.com', 'lh3.googleusercontent.com'],
  },
};

// module.exports = {
//   reactStrictMode: true,
//   future: { webpack5: true},
//   async rewrites() {
//     return [
//       {
//         source: "/mypost",
//         // destination: "http://mindful-idsp3380.herokuapp.com/mypost",
//         destination: "http://localhost:8080/mypost"
//       },
//       {
//         source: "/myfeed",
//         //destination: "http://mindful-idsp3380.herokuapp.com/feed",
//         destination: "http://localhost:8080/myfeed"
//       },
//        {
//          source: "/myfriend",
//          //destination: "http://mindful-idsp3380.herokuapp.com/users",
//          destination: "http://localhost:8080/myfriend"
//       },
//       {
//         source: "/images/:file*",
//         destination: "http://mindful-idsp3380.herokuapp.com/:file*",
//         // destination: "http://localhost:8080/:file"
//       },
//     ];
//   },
//   images: {
//     domains: ['s.gravatar.com'],
//   },
// };