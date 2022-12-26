import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const USERNAME = 'conquera99';

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-light">Hi, I&apos;am Benny</h1>
        <div className="font-extralight flex gap-4 justify-center mt-2">
          <Link href="/developer" className="hover:transition-all hover:text-blue-500">
            Fullstack Developer
          </Link>
          <Link href="/photograph" className="hover:transition-all hover:text-blue-500">
            Photograph as Hobby
          </Link>
        </div>
        <div>Est. 1996</div>
        <div className="mt-10">
          <a target="_blank" rel="noreferrer" href={`https://facebook.com/${USERNAME}`}>
            <SocialIcon
              className="icon"
              network="facebook"
              bgColor="transparent"
              fgColor="currentColor"
            />
          </a>
          <a target="_blank" rel="noreferrer" href={`https://twitter.com/${USERNAME}`}>
            <SocialIcon
              className="icon"
              network="twitter"
              bgColor="transparent"
              fgColor="currentColor"
            />
          </a>
          <a target="_blank" rel="noreferrer" href={`https://instagram.com/${USERNAME}`}>
            <SocialIcon
              className="icon"
              network="instagram"
              bgColor="transparent"
              fgColor="currentColor"
            />
          </a>
          <a target="_blank" rel="noreferrer" href={`https://500px.com/${USERNAME}`}>
            <SocialIcon
              className="icon"
              network="fivehundredpix"
              bgColor="transparent"
              fgColor="currentColor"
            />
          </a>
          <a target="_blank" rel="noreferrer" href={`https://youtube.com/@${USERNAME}`}>
            <SocialIcon
              className="icon"
              network="youtube"
              bgColor="transparent"
              fgColor="currentColor"
            />
          </a>
          <a target="_blank" rel="noreferrer" href={`https://github.com/${USERNAME}`}>
            <SocialIcon
              className="icon"
              network="github"
              bgColor="transparent"
              fgColor="currentColor"
            />
          </a>
          <a target="_blank" rel="noreferrer" href={`https://linkedin.com/in/${USERNAME}`}>
            <SocialIcon
              className="icon"
              network="linkedin"
              bgColor="transparent"
              fgColor="currentColor"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
