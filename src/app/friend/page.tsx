import prisma from '@/libs/prisma/prisma';

const simulateLoading = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 5000);
  });
};

const fetchFriend = async () => {
  // simulation long loading time
  await simulateLoading();
  const result = await prisma.friend.findMany();
  return result;
};

export default async function FriendPage() {
  const data = await fetchFriend();
  console.log(data);
  return (
    <div>
      {data.map((el) => (
        <p key={el.id}>
          {el.name}: {el.score}
        </p>
      ))}
    </div>
  );

  // return (
  //   <div className="flex gap-2 items-center animate-pulse">
  //     <div className="size-10 bg-gray-500 rounded-full"></div>
  //     <div className="h-6 w-20 bg-gray-500 rounded"></div>
  //   </div>
  // );
}
