const CONFIG = {
  // profile setting (required)
  profile: {
    name: "LasFar",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Make it happen",
    bio: "I am an analyst and a fast learner.",
    email: "lasfarprofessional@gmail.com",
    instagram: "LasFar.cs",
    twitter: "OhLasFar",
    youtube: "LasFar",
    twitch: "LasFar",
    reddit: "OhLasFar",
    kick: "LasFar"
  },
  // blog setting (required)
  blog: {
    title: "LasFar Wisdom",
    description: "Welcome to LasFar Wisdom! Here, I share all the cool things I learn – from gaming setups and streaming tips to networking guides and more. If you love to learn and explore, you're in the right place!",
  },

  // CONFIG configration (required)
  link: "https://wisdom.lasfar.net",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "OhLasFar/LasFar-Wisdom",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
