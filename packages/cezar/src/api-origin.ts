const DEFAULT_API_HOST = '127.0.0.1';
// A wildcard bind is reachable on loopback, but the wildcard itself is not a portable connect target (#1000).
const WILDCARD_CONNECT_HOST: Record<string, string> = { '0.0.0.0': '127.0.0.1', '::': '::1', '[::]': '::1' };

/** Build the URL inherited by agents from the interface the cockpit serves on. */
export function apiOrigin(host: string | undefined, port: number): string {
  const value = host ? (WILDCARD_CONNECT_HOST[host] ?? host) : DEFAULT_API_HOST;
  const urlHost = value.includes(':') && !value.startsWith('[') ? `[${value}]` : value;
  return `http://${urlHost}:${port}`;
}
