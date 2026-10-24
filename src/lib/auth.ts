import crypto from "crypto";
import { cookies } from "next/headers";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const AUTH_SECRET = process.env.AUTH_SECRET || "dr-omar-secret-cms-key-2026";
const COOKIE_NAME = "dr_omar_admin_session";

export function checkCredentials(user: string, pass: string): boolean {
  return user === ADMIN_USERNAME && pass === ADMIN_PASSWORD;
}

export function signToken(username: string): string {
  const timestamp = Date.now();
  const payload = `${username}:${timestamp}`;
  const hmac = crypto.createHmac("sha256", AUTH_SECRET);
  hmac.update(payload);
  const signature = hmac.digest("hex");
  return `${Buffer.from(payload).toString("base64")}.${signature}`;
}

export function verifyToken(token: string): boolean {
  try {
    const [encodedPayload, signature] = token.split(".");
    if (!encodedPayload || !signature) return false;

    const payload = Buffer.from(encodedPayload, "base64").toString("utf-8");
    const [username, timestampStr] = payload.split(":");
    if (!username || !timestampStr) return false;

    // Check expiration (7 days)
    const timestamp = parseInt(timestampStr, 10);
    const maxAge = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - timestamp > maxAge) return false;

    // Verify signature
    const hmac = crypto.createHmac("sha256", AUTH_SECRET);
    hmac.update(payload);
    const expectedSig = hmac.digest("hex");
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig));
  } catch {
    return false;
  }
}

export async function getAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token);
}

export { COOKIE_NAME, ADMIN_USERNAME, ADMIN_PASSWORD };
