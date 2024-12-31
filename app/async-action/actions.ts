"use server";

import { redirect } from "next/navigation";

export async function serverAction() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  redirect("/next-page");
}
