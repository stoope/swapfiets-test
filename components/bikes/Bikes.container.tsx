import { useEffect, useState } from "react";
import { getBikes, getBikesCount } from "../../api";
import { Bike, RequestStatus } from "../../types";
import { Error } from "../Error";
import { Loader } from "../Loader";
import { Bikes } from "./Bikes";

interface IBikesContainer {
  city: string;
}

const PER_PAGE = 25;

const BikesContainer = ({ city }: IBikesContainer) => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.Idle);

  useEffect(() => {
    setPage(0);
    setStatus(RequestStatus.Idle);
  }, [city]);

  useEffect(() => {
    if (!city) {
      return;
    }

    const controller = new AbortController();
    async function search() {
      setStatus(RequestStatus.Fetching);
      try {
        const stolenness = "proximity";
        const [{ bikes }, count] = await Promise.all([
          getBikes(
            {
              location: city,
              page,
              perPage: PER_PAGE,
              stolenness,
            },
            {
              signal: controller.signal,
            }
          ),
          getBikesCount(
            {
              location: city,
              stolenness,
            },
            {
              signal: controller.signal,
            }
          ),
        ]);

        setBikes(bikes);
        setCount(count[stolenness]);

        setStatus(RequestStatus.Resolved);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          setStatus(RequestStatus.Rejected);
        }
      }
    }
    search();
    return () => {
      controller.abort();
    };
  }, [page, city]);

  function prevPage() {
    setPage((prev) => prev - 1);
  }
  function nextPage() {
    setPage((prev) => prev + 1);
  }

  if (status === RequestStatus.Fetching) {
    return <Loader />;
  }
  if (status === RequestStatus.Rejected) {
    return <Error>An error occurred</Error>;
  }
  if (status === RequestStatus.Resolved) {
    return (
      <Bikes
        bikes={bikes}
        hasPrevPage={page > 0}
        hasNextPage={page * PER_PAGE < count}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    );
  }

  return null;
};

export { BikesContainer };
