export function getStudioAuthCredentials() {
  const username = process.env.SANITY_STUDIO_USERNAME;
  const password = process.env.SANITY_STUDIO_PASSWORD;

  if (!username || !password) {
    return null;
  }

  return { username, password };
}
