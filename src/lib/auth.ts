export const getUser = (authHeader = ""): string | null => {
  if (authHeader.startsWith("JWT ")) {
    return authHeader.split("JWT")[1];
  }

  return null;
};
