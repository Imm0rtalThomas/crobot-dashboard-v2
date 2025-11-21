import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing ?code parameter" }, { status: 400 });
  }

  // Exchange code for access token
  const params = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID!,
    client_secret: process.env.DISCORD_CLIENT_SECRET!,
    grant_type: "authorization_code",
    code,
    redirect_uri: "https://crobot.space/api/auth/callback",
  });

  const response = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    body: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const data = await response.json();

  if (data.error) {
    return NextResponse.json({ error: data.error_description || data.error }, { status: 400 });
  }

  // Save access token in a cookie
  const res = NextResponse.redirect("https://crobot.space/guilds");
  res.cookies.set("discord_access_token", data.access_token, {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return res;
}
