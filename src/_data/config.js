export default {
	projectName: "Life.Live It.",
	description: "Just another 11ty starter kit",
	shortName: "11ty GG",
	domain:
		process.env.ELEVENTY_RUN_MODE == "serve" ? "http://localhost:8080" : "https://move-along.paulapplegate.com",
	robots: "index, follow",
	themeColor: "#FFFFFF",
	backgroundColor: "#FFFFFF",
	author: {
		name: "Paul Applegate",
		email: "me@paulapplegate.com",
	},
	identity: [
		{
			rel: "me",
			url: "https://move-along.paulapplegate.com",
		},
	],
	og: {
		locale: "en_US",
		type: "website",
		image: {
			rel: "/og-default.jpg",
			alt: "Default OG image displayed here",
		},
	},
};
