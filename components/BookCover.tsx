"use client";

import React from "react";
import { cn } from "@/lib/utils";
import BookCoverSvg from "@/components/BookCoverSvg";
import { IKImage } from "imagekitio-next";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor?: string;
  coverUrl?: string; 
}
export default function BookCover({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverUrl, 
}: Props) {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;
  const isAbsolute = !!coverUrl && /^https?:\/\//i.test(coverUrl);


  return (
    <div className={cn("relative transition-all duration-300", variantStyles[variant], className)}>
      <BookCoverSvg coverColor={coverColor} />
      

      {/* Image layer */}
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        {coverUrl ? (
          isAbsolute ? (
            <IKImage
              urlEndpoint={urlEndpoint}
              src={coverUrl}           
              alt="Book cover"
              fill
              className="rounded-sm object-cover"
              loading="lazy"
              lqip={{ active: true }}
              
            />
          ) : (
            <IKImage
              urlEndpoint={urlEndpoint}
              path={coverUrl}         
              alt="Book cover"
              fill
              className="rounded-sm object-cover"
              loading="lazy"
              lqip={{ active: true }}
            />
          )
        ) : null}
      </div>
    </div>
  );
}
