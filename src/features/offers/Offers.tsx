import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffers, selectOffers } from "./offersSlice";
import GalleryGridLayout from "../../components/PhotosLayout";

export default function Offers(): React.ReactElement {
  const offers = useSelector(selectOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return <GalleryGridLayout />;
}
