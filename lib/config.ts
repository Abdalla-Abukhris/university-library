const config = {
  env: {
    imagekit: {
      publicKey: process.env.NEXT_IMAGE_KIT_PUBLIC_KEY,
      urlEndpoint: process.env.NEXT_IMAGE_KIT_URL_ENDPOINT,
      privateKey: process.env.NEXT_IMAGE_KIT_PRIVATE_KEY,
    },
  },
};

export default config;
