import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

/**
 * https://github.com/GabrielNBDS/GitHub-Profiles/blob/master/src/utils/usePersistedState.ts
 * @param key
 * @param defaultState
 * @returns if it exists, the value of the localStorage key, else the defaultState
 */
function usePersistedState<T>(key: string, defaultState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    return !storageValue ? defaultState : JSON.parse(storageValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
