'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';

export default function Search() {
  const pathname = usePathname();
  console.log(pathname);
  const searchParams = useSearchParams();
  console.log(searchParams);
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null); // { current: null }

  return (
    <>
      <input
        type="text"
        placeholder="Type something ..."
        className="px-3 py-1.5 w-full border outline-none"
        ref={inputRef} // { current: <input /> }
      />
      <button
        className="border bg-cyan-400 p-3"
        onClick={() => {
          // const params = new URLSearchParams({ a: '10', b: '20' }); // ?a=10&b=20
          // params.append('c', 'hello'); // ?a=10&b=20&c=hello
          // params.append('a', '5'); // ?a=10&b=20&c=hello&a=5
          // params.set('b', '50'); // ?a=10&b=50&c=hello&a=5
          // params.delete('a'); // ?b=50&c=hello
          // console.log(params.toString());

          const params = new URLSearchParams(searchParams);
          if (inputRef.current?.value)
            params.set('search', inputRef.current?.value);

          router.push(`${pathname}?${params.toString()}`);
        }}
      >
        Search
      </button>
    </>
  );
}
