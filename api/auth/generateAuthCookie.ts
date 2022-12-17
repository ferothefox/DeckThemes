export function generateAuthCookie(token: string) {
  if (token) {
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 - 1) * 60 * 60 * 1000);
    document.cookie = `authToken=${token}; expires=${d.toUTCString()}; SameSite=none; path=/; ${
      process.env.NEXT_PUBLIC_DEV_MODE === "true"
        ? ""
        : `domain=${process.env.NEXT_PUBLIC_COOKIE_DOMAIN};`
    }`;
    localStorage.tokenExpiryDate = new Date().valueOf() + 60 * 10 * 1000;
  } else {
    console.log("NO TOKEN TO CREATE COOKIE WITH");
  }

  return true;
}
