import React from "react";

import { Section, ImageRecipe } from "./styles";

import ImageRecipes from "./../../../assets/info_recipe/recipes.png";
import ImageLike from "./../../../assets/info_recipe/like.png";

export default function GeneralAuthorInfo() {
  return (
    <Section>
      <ImageRecipe
        className="image_recipe"
        background={
          "https://s2.glbimg.com/C4_IUcr6slIbCUM_F4QP0VOcaOc=/0x0:749x500/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/38/15/65/estrogonofe_de_carne.jpg"
        }
      />
      <div className="info_author">
        <div className="profile">
          <div className="author">
            <img
              src="https://images.pexels.com/users/avatars/372897/max-andrey-744.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress"
              alt=""
            />
            <h4>Gabriel Santana</h4>
          </div>
          <div className="experience">
            <p>Cozinheiro desde 15 de Junho de 2015</p>
          </div>
        </div>
        <div className="author_recipes_info">
          <div className="created_recipes">
            <img src={ImageRecipes} alt="" />
            <p>16 receitas criadas</p>
          </div>
          <div className="total_views">
            <img src={ImageLike} alt="" />
            <p>153 acessos totais</p>
          </div>
        </div>
        <div className="visit_profile">
          <button>Visitar Perfil</button>
        </div>
      </div>
    </Section>
  );
}