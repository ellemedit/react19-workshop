"use server";

export async function serverAction() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}
