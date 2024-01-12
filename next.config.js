// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images:{
//     remotePatterns:[
//       {
//         protocol:"https",
//         hostname:"avatars.githubusercontent.com",
        // hostname:"lh3.googleusercontent.com",
//         pathname:'**',
//       }
//     ],
//   },
// }

// module.exports = nextConfig


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
    loader: "default",
  },
};

module.exports = nextConfig;

