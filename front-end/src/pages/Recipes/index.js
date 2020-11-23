import React, { lazy } from "react";

import InputSearchRecipe from "../../components/Recipes/Search";
import { ModalIngredients } from "../../components/Elements/Modal";

import FiltersProvider from "./../../context/Recipes/Filters.js";
import ModalRecipesProvider from "./../../context/Modal/ModalRecipes";

import { Main, ContainerCategory } from "./styles";

function Recipes() {
  const ListCategory = lazy(() => 
    import("../../components/Recipes/Category")
  );
  const ListRecipes = lazy(() =>
    import("./../../components/Recipes/ListRecipes")
  );
  const FilterByIngredients = lazy(() =>
    import("../../components/Recipes/Ingredients")
  );
  const OrderRecipesBy = lazy(() =>
    import("../../components/Recipes/Ordenation")
  );
  const FetchRecipes = lazy(() =>
    import("../../components/Recipes/TotalRecipes")
  );
  const Pagination = lazy(() =>
    import("./../../components/Recipes/Pagination")
  );
  const Footer = lazy(() => import("./../../components/Footer"));
  const Header = lazy(() => import("../../components/Header"));

  return (
    <>
      <Main>
        <Header gridColumns={"1/6"} />

        <FiltersProvider>
          <FetchRecipes />

          <section className="section-data-classification">
            <div className="content-wrap">
              <ModalRecipesProvider>
                <ModalIngredients />
                <FilterByIngredients />
              </ModalRecipesProvider>

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

          <section className="section_recipes">
            <ListRecipes />

            <Pagination />
          </section>
        </FiltersProvider>
      </Main>
      <Footer />
    </>
  );
}

export default Recipes;
