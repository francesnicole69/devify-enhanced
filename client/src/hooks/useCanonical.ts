import { useEffect } from "react";

const BASE_URL = "https://www.arionworks.com";

export function useCanonical(path: string = "/") {
  useEffect(() => {
    // Remove trailing slash except for root
    const cleanPath = path === "/" ? "/" : path.replace(/\/$/, "");
    const canonicalUrl = `${BASE_URL}${cleanPath}`;

    // Update or create canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
  }, [path]);
}
