import { debounce } from "../utils/debounce";

const Input = ({ handleChange }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={debounce((e) => handleChange(e.target.value), 300)}
    />
  );
};

export default Input;
