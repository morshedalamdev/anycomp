"use server";

import { MethodType } from "./types";

export default async function fetcher(
  url: string,
  method: MethodType,
  data?: unknown
) {
  const response = await fetch(`https://anycomp-3je1.onrender.com/api/${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify({ data }) : undefined,
  });

  return response.json();
}
