export default {
	projectName: "Move Along",
	description: "Just another 11ty starter kit",
	shortName: "Move Go Enjoy Life",
	domain:
		process.env.ELEVENTY_RUN_MODE == "serve" ? "http://localhost:8080" : "https://movealong.paulapplegate.com",
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
			url: "https://movealong.paulapplegate.com",
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
