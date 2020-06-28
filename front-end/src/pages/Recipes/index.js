import React, { lazy,  } from "react";
import { useLocation } from 'react-router-dom';

import InputSearchRecipe from "../../components/Recipes/Search";

import FiltersProvider from "./../../context/Recipes/Filters";

import { Main, ContainerCategory } from "./styles";

function Recipes() {
  const location = useLocation();
  console.log(location)

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
  

  return (
    <>
      <Main>
        <div className="blue_background"></div>

        <FiltersProvider>
          <FetchRecipes />

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
              <ListCategory selectedCategory={location.category} />
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
