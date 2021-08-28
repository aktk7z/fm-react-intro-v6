import { useEffect, useState } from "react";
import { Animal, BreedAPIResponse } from "./APIResponseTypes";

const localCache: {[index: string]: string[]} = {};

type Status = "unloaded" | "loading" | "loaded";

export const useBreedList = (animal: Animal): [string[], Status] => {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);

  useEffect(() => {
    console.log(localCache);
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      void requestBreedList();
    }

    // can not use arrow functions here
    async function requestBreedList() {
      // make sure there are no wired interim states
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const json = await res.json() as BreedAPIResponse;
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
};
