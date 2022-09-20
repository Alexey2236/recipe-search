import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Spiner } from "../components/Spiner";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

export function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    );
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, []);

 

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Spiner />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}
