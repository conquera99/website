import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-light">Photography Gallery</h1>
        <div className="font-extralight flex gap-4 justify-center mt-2">
          <Link href="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
