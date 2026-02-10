'use client';

import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

export default function Home() {
  const handleClick = () => {
    throw new Error('ERROR ON CLICK');
  };

  return (
    <button onClick={handleClick}>Click</button>
    // <ErrorBoundary errorComponent={ErrorCallback}>
    // <Count />
    // </ErrorBoundary>
  );
}

function ErrorCallback() {
  return <h1>Error...............</h1>;
}

function Count() {
  throw new Error('BlaBlaBla');
  return <h1>Count</h1>;
}
