const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      { source: "/all-rides", destination: "/rides", permanent: true },
      { source: "/cottage-hotel", destination: "/stay", permanent: true },
      { source: "/picnic-facility", destination: "/picnic-events", permanent: true },
      { source: "/ticket", destination: "/#tickets", permanent: true },
    ];
  },
};

export default nextConfig;
