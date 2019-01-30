import React from "react";
import FilterButton from "./filterButton";
import VisibilityFilters from "../redux/constants/visibilityFilters";

let Filter = () => (
  <div>
    <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_NORMAL}>Normal</FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_IMPORTANT}>
      Important
    </FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_VERY_IMPORTANT}>
      Very Important
    </FilterButton>
  </div>
);

export default Filter;
