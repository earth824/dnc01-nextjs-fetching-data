import { simulateLoading } from '../friend/page';

export default async function DashboardPage(props: PageProps<'/dashboard'>) {
  const { test } = await props.searchParams;
  await simulateLoading();
  return <div>DashboardPage</div>;
}
