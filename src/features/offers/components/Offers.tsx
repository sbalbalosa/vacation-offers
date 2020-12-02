import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchOffers,
  selectOffers,
  selectIsLoading,
  selectError,
  selectCursor,
  nextSearch,
  previousSearch,
} from "../offersSlice";
import PhotosLayout from "../../../components/PhotosLayout";
import PhotoCard from "../../../components/PhotoCard";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";

export default function Offers(): React.ReactElement {
  const cursor = useSelector(selectCursor);
  const offers = useSelector(selectOffers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (error) {
    return (
      <Error
        message={error}
        onBack={() => {
          window.location.reload();
        }}
      />
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-screen items-center">
          <Loading />
        </div>
      ) : null}
      {(offers.length > 0 && (
        <PhotosLayout>
          {offers.map((x) => (
            <PhotoCard
              key={x.id}
              id={x.id}
              footerAvatarAltText={x.providerLogoLink}
              footerAvatarSrc={x.providerLogoLink}
              footerDescription={`Provided by ${x.providerName}`}
              imageAltText={x.name}
              imageDescription={x.name}
              imageTitle={x.apartmentType}
              imageSrc={x.photos[0].t}
              locationName={x.locationName}
              price={`${x.totalCost.toString()} ${x.currency}`}
              priceBreakdown={`${x.dailyCost} ${x.currency} per night`}
              priceDescription={`${x.totalCost / x.dailyCost} nights`}
              ratingCount={x.ratingCount.toString()}
              ratingValue={x.ratingValue.toString()}
              guestCount={x.guestCount.toString()}
              viewLink={`https://www.holidu.com/d/${x.id}`}
              locationLink={`https://maps.google.com/?q=${x.locationLat},${x.locationLng}`}
            />
          ))}
        </PhotosLayout>
      )) ||
        null}
      <hr className="mt-8 mb-4" />
      <div className="flex justify-between mb-20">
        <div>Total: {cursor.totalCount}</div>
        <div
          className={`w-52 flex ${
            cursor.previousPage ? "justify-between" : "justify-end"
          }`}
        >
          {(cursor.previousPage && (
            <button
              aria-label="previousPage"
              className="bg-gray-200 text-gray-700 text-base font-semibold px-6 py-2 rounded-lg"
              onClick={() => {
                dispatch(previousSearch());
                window.scrollTo(0, 0);
              }}
            >
              Previous
            </button>
          )) ||
            null}
          {(cursor.nextPage && (
            <button
              aria-label="nextPage"
              className="bg-gray-200 text-gray-700 text-base font-semibold px-6 py-2 rounded-lg"
              onClick={() => {
                dispatch(nextSearch());
                window.scrollTo(0, 0);
              }}
            >
              Next
            </button>
          )) ||
            null}
        </div>
      </div>
    </>
  );
}
