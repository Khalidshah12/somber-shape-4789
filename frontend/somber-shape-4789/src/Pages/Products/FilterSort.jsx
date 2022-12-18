import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {Box} from "@chakra-ui/react"

/* Functionality
1. The user should be able to toggle the checkboxes
2. The user should be able to update that data in the URL Search Params
3. The checkbox should remain selected (if it was already selected), when the page refreshes.
*/

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortyBy] = useState(searchParams.get("sortBy") || "");
  const [category, setCategory] = useState(searchParams.getAll("genre") || []);

  const handleFilter = (e) => {
    const option = e.target.value;
    //if the option is present in the category array, remove it,
    // else add it to the category array.

    //['K-Pop', 'Heavy Metal', 'Country']

    let newCategory = [...category];
    if (newCategory.includes(option)) {
      //remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      //add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortyBy(e.target.value);
  };

  useEffect(() => {
    const params = {};
    category && (params.genre = category);
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);
  }, [category, setSearchParams, sortBy]);

  return (
    <Box>
      <h2>Filter</h2>
      <Box>
        <input
          type="checkbox"
          value="Shower Gel"
          defaultChecked={category.includes("Shower Gel")}
          onChange={handleFilter}
        />
        <label>Shower Gel</label>
      </Box>
      <Box>
        <input
          type="checkbox"
          value="Coziest Blanket"
          defaultChecked={category.includes("Coziest Blanket")}
          onChange={handleFilter}
        />
        <label>Coziest Blanket</label>
      </Box>
      <Box>
        <input
          type="checkbox"
          defaultChecked={category.includes("Pop")}
          value="Pop"
          onChange={handleFilter}
        />
        <label>Pop</label>
      </Box>
      <Box>
        <input
          type="checkbox"
          defaultChecked={category.includes("Body Wash")}
          value="Body Wash"
          onChange={handleFilter}
        />
        <label>Body Wash</label>
      </Box>

      <h2>Sort</h2>
      <Box onChange={handleSortBy}>
        <Box>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </Box>
        <Box>
          <input
            type="radio"
            value="desc"
            name="sortBy"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSort;