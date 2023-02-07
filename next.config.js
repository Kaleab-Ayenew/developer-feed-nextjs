/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com",
        port: "",
        pathname: "/fit/c/96/96/2*2VNiy9rN5BcvIzACfCmSww.jpeg", //https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Vo69JL5M44MeHVLLfz1kpQ.jpeg
      },
    ],
  },
};

module.exports = nextConfig;
