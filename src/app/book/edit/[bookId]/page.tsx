import { notFound } from 'next/navigation';

export default function EditPage(props: PageProps<'/book/edit/[bookId]'>) {
  // find book with id(params)
  // const book = await prisma.book.findUnique({where: {id: bookId}})
  // if book with bookId not exist
  notFound();
  return <div>EditPage</div>;
}
