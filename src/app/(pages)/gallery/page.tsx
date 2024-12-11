import GalleryContent from "@/components/core/gallery/GalleryContent";
import Container from "@/components/shared/Container";
import Cover from "@/components/shared/Cover";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <Cover
        heading="Our Gallery"
        title="Our Gallery"
        mainTitle="home"
        titleLink="/"
      />
      <Container>
        <div className="flex items-center flex-wrap gap-5 py-10">
          <div className="group rounded border p-2">
            <div className="overflow-hidden rounded">
              <Image
                src="/gallery/four.jpeg"
                alt="image"
                width={500}
                height={300}
                className="transform rounded transition duration-300 group-hover:scale-110"
              />
            </div>
            <h1 className="pt-1 text-center text-[20px] font-medium">
              BUBT 5th Convocation at BCCI
            </h1>
          </div>
          <div className="group rounded border p-2">
            <div className="overflow-hidden rounded">
              <Image
                src="/gallery/six.jpeg"
                alt="image"
                width={500}
                height={300}
                className="transform rounded transition duration-300 group-hover:scale-110"
              />
            </div>
            <h1 className="pt-1 text-center text-[20px] font-medium">
              Our Beauty Campus
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
}
