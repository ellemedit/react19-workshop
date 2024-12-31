"use client";

import { useState } from "react";
import { serverAction } from "./actions";
import { useRouter } from "next/navigation";

export default function AsyncAction() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    console.log(name);
    setTimeout(() => {
      impl();
    }, 100);
    async function impl() {
      setIsLoading(true);
      await serverAction();
      router.push("/next-page");
      setIsLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
      {isLoading && <div>Loading...</div>}
    </form>
  );
}
