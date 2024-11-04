import React, { useRef } from "react";

const useDebounce = (orgValue: string, timeout: number) => {
  const [value, setValue] = React.useState<string>(orgValue);

  const timeoutRef = useRef<number>();

  React.useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setTimeout(() => {
      setValue(orgValue);
    }, timeout);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [orgValue, timeout]);
  return value;
};

export default useDebounce;
