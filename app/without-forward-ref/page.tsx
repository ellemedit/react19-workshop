"use client";

import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ComponentRef,
  ForwardedRef,
  forwardRef,
  useRef,
} from "react";

export default function WithoutForwardRef() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="m-4 p-4 border-2 border-gray-300 rounded-md inline-flex gap-2">
      <LegacyInput
        ref={inputRef}
        className="border-2 border-gray-300 rounded-md"
      />
      <button
        onClick={() => inputRef.current?.focus()}
        className="border-2 border-gray-300 rounded-md px-2 bg-gray-200"
      >
        focus
      </button>
    </div>
  );
}

const LegacyInput = forwardRef(LegacyInputImpl);

function LegacyInputImpl(
  props: ComponentPropsWithoutRef<"input">,
  forwardedRef: ForwardedRef<ComponentRef<"input">>,
) {
  return <input {...props} ref={forwardedRef} />;
}

function InputComponent(props: ComponentPropsWithRef<"input">) {
  return <input {...props} />;
}
