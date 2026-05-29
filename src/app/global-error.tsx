"use client";

import ErrorReporter from "@/components/ErrorReporter";

export default function GlobalError(props: { error: Error & { digest?: string }; reset: () => void }) {
  return <ErrorReporter error={props.error} reset={props.reset} />;
}
