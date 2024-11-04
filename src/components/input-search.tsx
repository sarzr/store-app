import React from "react";
import useDebounce from "../hooks/useDebounce";
import { useAppDispatch } from "../redux/hook";
import { filterActions } from "../redux/features/filter.slice";

const InputSearch: React.FC = () => {
  const [value, setValue] = React.useState<string>("");

  const debounceValue = useDebounce(value, 1000);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  React.useEffect(() => {
    dispatch(filterActions.setSearch(debounceValue));
  }, [debounceValue, dispatch]);

  return (
    <input
      type="text"
      className="rounded w-96 h-9 outline-none px-3"
      placeholder="Search a product..."
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default InputSearch;
