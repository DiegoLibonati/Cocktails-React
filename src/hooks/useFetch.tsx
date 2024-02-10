import { useEffect, useState } from "react";
import { CockTail, UseFetch } from "../entities/entities";

export const useFetch = (url: string): UseFetch => {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<CockTail[]>([]);

  const getApiInformation = async (): Promise<void> => {
    setLoading(true);
    const request = await fetch(url);
    const data = await request.json();

    const drinks = data.drinks as CockTail[];

    if (drinks?.length > 0) {
      setItems(drinks);
    }

    setLoading(false);
  };

  useEffect(() => {
    getApiInformation();
  }, [url]);

  return {
    loading,
    items,
  };
};
