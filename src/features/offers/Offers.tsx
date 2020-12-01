import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffers, selectOffers } from "./offersSlice";
import PhotosLayout from "../../components/PhotosLayout";
import PhotoCard from "../../components/PhotoCard";

export default function Offers(): React.ReactElement {
  const offers = useSelector(selectOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <>
      <PhotosLayout>
        {offers.map((x) => (
          <PhotoCard
            key={x.id}
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
          />
        ))}
      </PhotosLayout>
      <hr className="mt-8 mb-4" />
      <div className="flex justify-between mb-20">
        <div>Showing: 100</div>
        <div className="w-52 flex justify-between">
          <button className="bg-gray-200 text-gray-700 text-base font-semibold px-6 py-2 rounded-lg">
            Previous
          </button>
          <button className="bg-gray-200 text-gray-700 text-base font-semibold px-6 py-2 rounded-lg">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
