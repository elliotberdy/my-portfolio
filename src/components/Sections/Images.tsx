import 'react-image-lightbox/style.css';

import {FC, memo, useCallback, useState} from 'react';
import {Gallery} from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';

import {imageItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Images: FC = memo(() => {
  const [index, setIndex] = useState(-1);
  const handleClick = useCallback((index: number) => {
    setIndex(index);
  }, []);
  const currentImage = imageItems[index];
  const nextIndex = (index + 1) % imageItems.length;
  const nextImage = imageItems[nextIndex] || currentImage;
  const prevIndex = (index + imageItems.length - 1) % imageItems.length;
  const prevImage = imageItems[prevIndex] || currentImage;

  const handleClose = useCallback(() => {
    setIndex(-1);
  }, []);

  const handleMovePrev = useCallback(() => {
    setIndex(prevIndex);
  }, [prevIndex]);

  const handleMoveNext = useCallback(() => {
    setIndex(nextIndex);
  }, [nextIndex]);
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Images}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-2xl font-bold">Check out some of what I do!</h2>
        {/* <div className=" w-full columns-2 md:columns-2 lg:columns-2"> */}
        <div>
          <Gallery enableImageSelection={false} images={imageItems} onClick={handleClick} rowHeight={360} />
          {!!currentImage && (
            <Lightbox
              imageTitle={currentImage.caption}
              mainSrc={currentImage.original}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              onCloseRequest={handleClose}
              onMoveNextRequest={handleMoveNext}
              onMovePrevRequest={handleMovePrev}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
            />
          )}
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
});

Images.displayName = 'Images';
export default Images;
