// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Enable static export
	output: "export",

	// If you're deploying to https://username.github.io/repo-name/
	// set the basePath and assetPrefix to your repo name
	basePath: "/your-repo-name",
	assetPrefix: "/your-repo-name/",

	// Optional: If you're using images
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
