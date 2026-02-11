import { simulateLoading } from '../friend/page';

const getSaleSummary = async () => {
  await simulateLoading(8);
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

export default async function DashboardPage(props: PageProps<'/dashboard'>) {
  const saleSummary = await getSaleSummary();
  const graph = await getGraph();
  const latestOrder = await getLatestOrder();
  return (
    <div>
      <div>{saleSummary}</div>
      <div>{graph}</div>
      <div>{latestOrder}</div>
    </div>
  );
}
