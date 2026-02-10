'use client';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>Message: {error.message}</h1>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
