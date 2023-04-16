import React, { useState } from "react";
import Search from "./Search";

const ParentSearch = () => {
  const [formData, setFormData] = useState({
    name: "fdds",
    email: "",
    message: "",
  });

  const handleOnChange = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <Search name={formData.name} changeHandler={handleOnChange} />
      <p>Name: {formData.name}</p>
    </div>
  );
};

export default ParentSearch;
