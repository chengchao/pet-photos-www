import { NextRequest, NextResponse } from "next/server";
import STSClient from "./get_sts";

export async function GET(request: Request) {
  console.log(`GET: ${request.url}`);
  const credentials = await STSClient.generateCredentials(
    process.env.ALIBABA_CLOUD_STS_TOKEN_DURATION_SECONDS,
    process.env.ALIBABA_CLOUD_STS_TOKEN_ROLE_ARN,
    process.env.ALIBABA_CLOUD_STS_TOKEN_ROLE_SESSION_NAME
  );

  return NextResponse.json({
    accessKeyId: credentials.accessKeyId,
    accessKeySecret: credentials.accessKeySecret,
    securityToken: credentials.securityToken,
    expiration: credentials.expiration,
    bucket: process.env.ALIBABA_CLOUD_OSS_BUCKET,
    region: process.env.ALIBABA_CLOUD_OSS_REGION,
  });
}

// export async function HEAD(request: Request) {}

export async function POST(request: NextRequest) {
  console.log(`POST: ${request.url}`);
  const credentials = await STSClient.generateCredentials(
    process.env.ALIBABA_CLOUD_STS_TOKEN_DURATION_SECONDS,
    process.env.ALIBABA_CLOUD_STS_TOKEN_ROLE_ARN,
    process.env.ALIBABA_CLOUD_STS_TOKEN_ROLE_SESSION_NAME
  );

  return NextResponse.json({
    accessKeyId: credentials.accessKeyId,
    accessKeySecret: credentials.accessKeySecret,
    securityToken: credentials.securityToken,
    expiration: credentials.expiration,
    bucket: process.env.ALIBABA_CLOUD_OSS_BUCKET,
    region: process.env.ALIBABA_CLOUD_OSS_REGION,
  });
}

// export async function PUT(request: Request) {}

// export async function DELETE(request: Request) {}

// export async function PATCH(request: Request) {}

// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request: Request) {}
