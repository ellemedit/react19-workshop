"use client";

import { useTransition } from "react";
import { serverAction } from "./actions";

export default function AsyncAction() {
  const [isPending, startTransition] = useTransition();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    console.log(name);
    startTransition(() => serverAction());
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
      {isPending && <div>Loading...</div>}
    </form>
  );
}
