import { Loader, Loader2, LoaderPinwheel } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="animate-spin size-20 text-blue-500" />
    </div>
  );
}
