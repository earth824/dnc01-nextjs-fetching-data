import { simulateLoading } from '@/app/friend/page';

export default async function CreateBookPage() {
  await simulateLoading();
  return <div>CreateBookPage</div>;
}
