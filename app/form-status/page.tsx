"use client";

import { ComponentPropsWithRef } from "react";
import { useFormStatus } from "react-dom";

export default function FormStatus() {
  return (
    <form
      action={async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }}
      className="m-4 p-4 border-2 border-gray-300 rounded-md inline-flex gap-2"
    >
      <Button className="border-2 border-black rounded-md px-2 text-white bg-black disabled:bg-gray-300">
        Submit
      </Button>
    </form>
  );
}

function Button(props: ComponentPropsWithRef<"button">) {
  const { pending } = useFormStatus();
  return <button disabled={pending} {...props} />;
}
