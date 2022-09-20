import { useState, useEffect } from "react";

export function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    cb(value);
  };

  useEffect(() => {
    handleSubmit();
  },[value]);

  return (
    <div className="row">
      <input
        className="search"
        type="text"
        id="search-field"
        placeholder="search..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}
