import React from "react";
import PhotoCard from "./PhotoCard";

export default function PhotosLayout(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
    </div>
  );
}
