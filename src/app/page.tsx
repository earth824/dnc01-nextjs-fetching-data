// 'use client';

// import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { simulateLoading } from './friend/page';

export default async function Home() {
  await simulateLoading();
  // const handleClick = () => {
  //   throw new Error('ERROR ON CLICK');
  // };

  return (
    <h1>Home Page</h1>
    // <button onClick={handleClick}>Click</button>
    // <ErrorBoundary errorComponent={ErrorCallback}>
    // <Count />
    // </ErrorBoundary>
  );
}

// function ErrorCallback() {
//   return <h1>Error...............</h1>;
// }

// function Count() {
//   throw new Error('BlaBlaBla');
//   return <h1>Count</h1>;
// }
