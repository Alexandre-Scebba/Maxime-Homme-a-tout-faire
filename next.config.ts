import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/achievements',
				destination: '/gallery',
				permanent: true,
			},
			{
				// Redirect any nested path under /achievements to /gallery preserving the rest of the path
				source: '/achievements/:path*',
				destination: '/gallery/:path*',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
