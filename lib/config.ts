const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_IMAGE_KIT_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_IMAGE_KIT_URL_ENDPOINT!,
      privateKey: process.env.NEXT_IMAGE_KIT_PRIVATE_KEY!,
    },
  },
};

export default config;
