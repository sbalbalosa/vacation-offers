import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffers, selectOffers } from "./offersSlice";
import styles from "./Counter.module.css";

export function Counter(): React.ReactElement {
  const offers = useSelector(selectOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return <pre>{JSON.stringify(offers)}</pre>;
}
