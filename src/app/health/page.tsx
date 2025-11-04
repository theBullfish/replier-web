export default async function HealthPage() {
  const res = await fetch(`${process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""}/api/health`, { cache: "no-store" });
  const data = await res.json().catch(() => ({ ok: false, error: "invalid json" }));
  return (
    <pre style={{ padding: 16 }}>{JSON.stringify({ env: "production", ...data }, null, 2)}</pre>
  );
}
