import Balancer from 'react-wrap-balancer';
import Link from 'next/link';
import Photograph from 'components/ui/photograph';

const Page = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen p-8 gap-4">
      <div className="text-center">
        <h1 className="text-6xl font-light">
          <Balancer>Photography Gallery</Balancer>
        </h1>
        <div className="font-extralight flex gap-4 justify-center mt-2">
          <Link href="/">Back</Link>
        </div>
      </div>
      <Photograph />
    </div>
  );
};

export default Page;
