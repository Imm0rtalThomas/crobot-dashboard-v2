const DISCORD_CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;

export default function AuthPage() {
  const authorizeUrl = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    "https://crobot.space/api/auth/callback"
  )}&response_type=code&scope=identify%20guilds`;

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Login with Discord</h1>
        <p className="text-slate-300">Access your CROBOT Dashboard</p>

        <a
          href={authorizeUrl}
          className="inline-flex items-center rounded-full px-6 py-3 bg-indigo-500 hover:bg-indigo-400 transition text-white font-semibold shadow-lg"
        >
          Login with Discord
        </a>
      </div>
    </main>
  );
}
