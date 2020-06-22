import React, { useState, useEffect, lazy } from "react";
import { useSelector } from "react-redux";

import InputSearchRecipe from "../../components/Recipes/SearchRecipes";

import FiltersProvider from "./../../context/Recipes/Filters";

import { Main, ContainerCategory } from "./styles";

function Recipes() {
  const ListCategory = lazy(() =>
    import("../../components/Recipes/FilterByCategory")
  );
  const ListRecipes = lazy(() =>
    import("./../../components/Recipes/ListRecipes")
  );
  const FilterByIngredients = lazy(() =>
    import("../../components/Recipes/FilterByIngredients")
  );
  const OrderRecipesBy = lazy(() =>
    import("../../components/Recipes/OrderRecipesBy")
  );
  const FetchRecipes = lazy(() =>
    import("./../../components/Recipes/FetchRecipes")
  );
  const UltimatePaginationMaterialUi = lazy(() => import('./../../components/Recipes/Pagination'));
  const Footer = lazy(() => import("./../../components/Footer"));

  const recipes = useSelector((state) => state.recipes);

  return (
    <>
      <Main>
        <div className="blue_background"></div>

        <FiltersProvider>
          <FetchRecipes totalElements={recipes.data.totalElements} />

          <section className="section-data-classification">
            <div className="content-wrap">
              <FilterByIngredients />
              <OrderRecipesBy />
              <InputSearchRecipe
                width={100}
                height={45}
                type={"text"}
                placeholder={"Pesquisar..."}
              />
            </div>
          </section>

          <ContainerCategory className="section-category">
            <div className="category-container">
              <ListCategory />
            </div>
          </ContainerCategory>
        </FiltersProvider>

        <section className="section_recipes">
          <ListRecipes
            recipes={recipes.data.content}
            loading={recipes.loading}
            error={recipes.error}
          />
          <UltimatePaginationMaterialUi totalPages={20} currentPage={1} />
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Recipes;
