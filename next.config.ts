// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/az_portfolio',
	assetPrefix: '/az_portfolio/',
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
