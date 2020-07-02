import styled from "styled-components";

import ImageRecipe from "./../../../assets/home/wallpapers/wallpaper_home.png";

import { theme } from "./../../../styles";

export const Opening = styled.section`
  height: 500px;
  text-align: center;
  grid-column: 1/25;
  display: flex;
  justify-content: center;
  /* background-image: url(${ImageRecipe}); */
  background-size: cover;
  background-position: center;
  /* padding: 0 60px; */

  div.container_slides {
    height: 100%;
    width: 100%;
    display: flex;

    div.slide {
      width: 20%;
      display: flex;
      align-items: flex-end;

      div.text {
        width: 100%;
        background: ${theme.colors.blackWithMediumOpacity};
        height: 100px;
        padding: 10px 15px 0;

        h3 {
          font-size: 1.125rem;
          font-family: Poppins;
          color: ${theme.colors.white};
          text-align: left;
          letter-spacing: 0.25px;
        }
      }
    }
    
    div.slide:nth-child(1) {
      height: 100%;
      border-right: solid 2px ${theme.colors.marsalaWithMediumOpacity};
    }
    div.slide:nth-child(2) {
      height: 100%;
      border-right: solid 2px ${theme.colors.marsalaWithMediumOpacity};
    }
    div.slide:nth-child(3) {
      height: 100%;
      border-right: solid 2px ${theme.colors.marsalaWithMediumOpacity};
    }
    div.slide:nth-child(4) {
      height: 100%;
      border-right: solid 2px ${theme.colors.marsalaWithMediumOpacity};
    }
    div.slide:nth-child(5) {
      height: 100%;
    }

    div.slide { transition: 0.3s };
    div.text { transition: padding 0.3s };

    div.current:hover {
      width: 50%;
      filter: brightness(100%);

      div.text {
        padding: 10px 40px 0;
      }
    }
  }


  /* div {
    width: 50%;
    height: 100%;
  }

  div.text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    p {
      margin-top: 200px;
      font-size: 1.75rem;
      font-family: ParisienneRegular;
      letter-spacing: 1px;
      color: ${theme.colors.black};
    }

    h1 {
      margin-top: 10px;
      font-size: 3.75rem;
      color: ${theme.colors.orange};
      font-family: PoppinsRegular;
    }

    button {
      margin-top: 120px;
      height: 50px;
      width: 200px;
      border-radius: 5px;
      border: none;
      color: white;
      background: ${theme.colors.orange};
      font-size: 1.25rem;
      font-family: Poppins;
      box-shadow: 0 0 5px ${theme.colors.blackWithMediumOpacity};
      transition: font-size 0.1s;

      &:hover {
        font-size: 1.375rem;
      }
    }
  }

  div.image_plateFood {
    display: flex;
    align-items: center;

    img {
      height: auto;
      width: 610px;
    }
  } */
`;

export const Search = styled.section`
  grid-column: 1/25;
  background: #4e4e4d;
  background: ${theme.colors.marsala};
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  align-items: center;

  div {
    display: flex;
  }

  div.title {
    grid-column: 4/12;

    p {
      color: white;
      font-family: PoppinsRegular;
      font-size: 1.375rem;
      display: flex;
      align-items: center;
      margin-left: 20px;
    }

    img {
      height: 40px;
      width: auto;
    }
  }

  div.search_recipes {
    grid-column: 12/22;
    justify-content: space-between;

    input {
      height: 40px;
      width: calc(100% - 160px);
      border-radius: 3px;
      box-shadow: 0 0 5px ${theme.colors.blackCharcoalWithMediumOpacity};
      font-size: 1rem;
      font-family: PoppinsRegular;
    }

    button {
      color: white;
      background: ${theme.colors.orange};
      width: 150px;
      height: 40px;
      border-radius: 3px;
      border: none;
      font-size: 1.0625rem;
      font-family: Poppins;
      box-shadow: 0 0 5px ${theme.colors.blackCharcoalWithMediumOpacity};
      transition: font-size 0.1s;

      &:hover {
        font-size: 1.125rem;
      }
    }
  }
`;

export const BackgroundRecipes = styled.div`
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  filter: brightness(60%);
`;