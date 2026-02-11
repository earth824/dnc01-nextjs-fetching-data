import { LoaderPinwheel } from 'lucide-react';

export default function BookLoading() {
  return (
    <div>
      BookLoading Please wait
      <LoaderPinwheel className="animate-spin" />
    </div>
  );
}
