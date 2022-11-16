/** @type {import("next").NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				destination: process.env.CHANNEL_LIST_DESTINATION_URL,
				source: process.env.CHANNEL_LIST_SOURCE_PATH
			}
		];
	},
	reactStrictMode: true
};
module.exports = nextConfig;
