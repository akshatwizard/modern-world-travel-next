/** @type {import('next').NextConfig} */
const nextConfig = {
  htmlLimitedBots: /.*/,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.modernworldtravel.com",
      },
    ],
  },
  async redirects() {
    return [
      // SEO: permanent (308) redirects from the old, non-friendly slugs
      // (stray/double/leading/trailing dashes) to the cleaned slugs.
      // Deploy together with the matching Drupal field_city_url /
      // field_destination_url updates (api_front_module update 7003).

      // City pages
      { source: "/city/-krabi--packages", destination: "/city/krabi-packages", permanent: true },
      { source: "/city/phuket--packages", destination: "/city/phuket-packages", permanent: true },

      // Destination pages
      { source: "/destination/-krabi--packages/ao-nang", destination: "/destination/krabi-packages/ao-nang", permanent: true },
      { source: "/destination/-krabi--packages/chicken-island", destination: "/destination/krabi-packages/chicken-island", permanent: true },
      { source: "/destination/-krabi--packages/krabi-town-", destination: "/destination/krabi-packages/krabi-town", permanent: true },
      { source: "/destination/phuket--packages/big-buddha-viewpoint", destination: "/destination/phuket-packages/big-buddha-viewpoint", permanent: true },
      { source: "/destination/phuket--packages/maya-bay", destination: "/destination/phuket-packages/maya-bay", permanent: true },
      { source: "/destination/deira-old-dubai-packages/-naif", destination: "/destination/deira-old-dubai-packages/naif", permanent: true },
      { source: "/destination/barsana-packages/prem-sarovar-", destination: "/destination/barsana-packages/prem-sarovar", permanent: true },
      { source: "/destination/govardhan-packages/govardhan-parikrama-", destination: "/destination/govardhan-packages/govardhan-parikrama", permanent: true },
      { source: "/destination/govardhan-packages/kusum-sarovar-", destination: "/destination/govardhan-packages/kusum-sarovar", permanent: true },
      { source: "/destination/mathura-packages/vishram-ghat-mathura-", destination: "/destination/mathura-packages/vishram-ghat-mathura", permanent: true },
      { source: "/destination/mount-abu-packages/dilwara-temples-", destination: "/destination/mount-abu-packages/dilwara-temples", permanent: true },
      { source: "/destination/vrindavan-packages/banke-bihari-temple-", destination: "/destination/vrindavan-packages/banke-bihari-temple", permanent: true },
    ];
  },
};

export default nextConfig;
