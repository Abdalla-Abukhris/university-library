import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://university-library-kmcii1ltt-abdullaabukresr-gmailcoms-projects.vercel.app', 
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: CORS_HEADERS });
}

export async function GET() {
  const authParameters = imagekit.getAuthenticationParameters();
  
  return NextResponse.json(authParameters, { 
    status: 200, 
    headers: CORS_HEADERS 
  });
}