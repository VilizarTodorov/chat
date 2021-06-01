import { debounce } from "@material-ui/core";
import { useCallback } from "react";

const useDebounce = (fn) => {
  return useCallback(
    debounce((...rest) => fn(...rest), 150),
    [] // will be created only once initially
  );
};

export default useDebounce;
