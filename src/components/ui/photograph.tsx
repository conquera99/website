'use client';

import { Scroll, Keyframes } from 'scrollex';
import Image from 'next/image';

const keyframes: Record<string, Keyframes> = {
  imageContainer: ({ section }) => ({
    [section.topAt('container-bottom')]: {
      translateY: 125,
      translateX: -250,
      opacity: 0,
      rotateX: -25,
      rotateY: -50,
      scale: 0.4,
    },
    [section.topAt('container-top')]: {
      translateY: 0,
      translateX: 0,
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      scale: 1.4,
    },
    [section.bottomAt('container-top')]: {
      translateY: -125,
      translateX: 250,
      opacity: 0,
      rotateX: 25,
      rotateY: 50,
      scale: 0.4,
    },
  }),
  image: ({ section }) => ({
    [section.topAt('container-bottom')]: {
      translateY: -62.5,
      translateX: 125,
      scale: 1.8,
    },
    [section.topAt('container-top')]: {
      translateY: 0,
      translateX: 0,
      scale: 1.5,
    },
    [section.bottomAt('container-top')]: {
      translateY: 62.5,
      translateX: -125,
      scale: 2,
    },
  }),
};

const images = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'];

const Photograph = () => {
  return (
    <Scroll.Container
      scrollAxis="y"
      className="hide-scroll h-full w-full scroll-smooth overflow-x-hidden overflow-y-auto relative"
    >
      {images.map((image) => {
        return (
          <Scroll.Section
            key={image}
            className="snap-start w-full relative"
            style={{ height: 'calc(100vh - 124px)' }}
          >
            <div
              className="flex items-center justify-center fixed inset-0 pointer-events-none"
              style={{ perspective: 600, transformStyle: 'preserve-3d' }}
            >
              <Scroll.Item keyframes={keyframes.imageContainer} className="overflow-hidden">
                <Scroll.Item keyframes={keyframes.image}>
                  <Image
                    alt="images"
                    key={image}
                    src={image}
                    height={300}
                    width={150}
                    className="object-cover"
                  />
                </Scroll.Item>
              </Scroll.Item>
            </div>
          </Scroll.Section>
        );
      })}
    </Scroll.Container>
  );
};

export default Photograph;
