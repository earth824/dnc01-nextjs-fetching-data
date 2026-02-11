import { Suspense } from 'react';
import { simulateLoading } from '../friend/page';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import ErrorFallback from './error-fallback';

const getSaleSummary = async () => {
  await simulateLoading(8);
  throw new Error('ERROR');
  return 'SALE SUMMARY';
};

const getGraph = async () => {
  await simulateLoading(5);
  return 'GRAPH DATA';
};

const getLatestOrder = async () => {
  await simulateLoading(3);
  return 'LATEST ORDER';
};

export default async function DashboardPage() {
  // const saleSummary = await getSaleSummary(); // wait 8 second
  // const graph = await getGraph(); // wait 5 second
  // const latestOrder = await getLatestOrder(); // wait 3 second
  // total 16 second (waterfall)

  // PROMISE ALL
  // const [promise1Result, promise2result, ...] = await  Promise.all([promise1, promise2, promise3, ...])
  // const [saleSummary, graph, latestOrder] = await Promise.all([
  //   getSaleSummary(), // 8 second ==> longest

  //   getGraph(), // 5 second
  //   getLatestOrder() // 3 second
  // ]);
  // total 8 second (lognest promise)
  return (
    <div className="space-y-4">
      <ErrorBoundary errorComponent={ErrorFallback}>
        <Suspense fallback={<Skeleton />}>
          <SaleSummary />
        </Suspense>
      </ErrorBoundary>
      <Suspense fallback={<Skeleton />}>
        <Graph />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <LatestOrder />
      </Suspense>
    </div>
  );
}

function Skeleton() {
  return <div className="w-40 h-6 bg-gray-500 animate-pulse"></div>;
}

async function SaleSummary() {
  const saleSummary = await getSaleSummary();
  return <div>{saleSummary}</div>;
}
async function Graph() {
  const graph = await getGraph();
  return <div>{graph}</div>;
}
async function LatestOrder() {
  const latestOrder = await getLatestOrder();
  return <div>{latestOrder}</div>;
}

{
  /* <DashboardPage>
  <Suspense>
    <SaleSummary />
  </Suspense>
  <Suspense>
    <Graph />
  </Suspense>
  <Suspense>
    <LatestOrder />
  </Suspense>
</DashboardPage> */
}
