"use server";

import { MethodType } from "./types";

export default async function fetcher(
  url: string,
  method: MethodType,
  data?: unknown
) {
  const response = await fetch(`http://localhost:5500/api/${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify({ data }) : undefined,
  });

  return response.json();
}
