import React from "react";

export interface Props {
  children: React.ReactNode;
}

export default function PhotosLayout(props: Props): React.ReactElement {
  return (
    <div className="grid grid-cols-1 gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {props.children}
    </div>
  );
}
