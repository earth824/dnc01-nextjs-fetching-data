import Search from '@/app/product/search';

export default async function ProductPage(props: PageProps<'/product'>) {
  const { page, limit, category, search } = await props.searchParams;
  // getProduct({page, limit. category, search})
  // console.log(searchParams); // { search: 'fgfgfgfg' }
  // queyy something from database with searchparams
  return (
    <div className="flex flex-col gap-12 p-12">
      <h1>PRODUCT PAGE SEARCH PARAMS: </h1>
      <Search />
    </div>
  );
}
