import { simulateLoading } from '../friend/page';

export default async function BookPage() {
  await simulateLoading();
  return <div>BookPage</div>;
}
