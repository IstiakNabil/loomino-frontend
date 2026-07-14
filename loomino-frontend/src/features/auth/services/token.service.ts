import { refreshToken } from "./auth.service";
import { authStorage } from "../utils/authStorage";

/**
 * Exchanges the stored refresh token for a new access
 * token.
 *
 * IMPORTANT: the backend uses ROTATE_REFRESH_TOKENS +
 * BLACKLIST_AFTER_ROTATION, so every refresh response
 * also contains a NEW refresh token that must be stored
 * (the old one is blacklisted immediately).
 */
export async function getNewAccessToken(): Promise<string> {
  const refresh = authStorage.getRefreshToken();

  if (!refresh) {
    throw new Error("No refresh token");
  }

  const response = await refreshToken({ refresh });

  authStorage.setAccessToken(response.access);

  if (response.refresh) {
    authStorage.setRefreshToken(response.refresh);
  }

  return response.access;
}
