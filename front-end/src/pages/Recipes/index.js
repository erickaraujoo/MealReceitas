import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import Header from './../../components/Header'

import ImageCategory from './../../assets/category.png';
import ImageForKnife from './../../assets/fork_knife.png';
import ImageFast from './../../assets/fast.png';
import ImagePhotograph from './../../assets/photograph.png';
import ImageVideo from './../../assets/video.png';
import ImageNovelty from './../../assets/novidade2.png';
import ImageSearch from './../../assets/search.png';
import ImageHeart from './../../assets/heart_blue.png';
import ImageReport from './../../assets/recipe_icon.png';
  
import { InputSearch } from './../../styles';
import { Main, FilterByIngredient, OrderBy, ContainerCards, Category, ImageRecipe } from './styles';

function Recipes() {

    const [ heightCategory, setHeightCategory ] = useState(0);
    let [ textSearch, setTextSearch ] = useState('');

    // Consumindo os parâmetros da URL
    let query = new URLSearchParams(useLocation().search);

    const history = useHistory();

    function handleSearchRecipes() {
        history.push(`?search=${textSearch}`);
        setTextSearch('');
    }

    useEffect(() => {
        const cardCategory = document.getElementById('card-category');
        const title = cardCategory.querySelector('div');
        const ol = cardCategory.querySelector('ol');

        const bestRecipe = document.getElementsByClassName('best-recipe')[0];
        bestRecipe.parentNode.style.border = "solid 2px #254B6E";

        setHeightCategory(title.offsetHeight + ol.offsetHeight); 
    }, []);

    return(
        <>
            <Header customHeader={true} />
            <Main>
                {/* Pegando da URL apenas a QUERY 'search' */}
                <h1>Você pesquisou por: {query.get('search')} </h1>
                <p className="pTotal-recipes">Foram encontrados 1.152 receitas</p>

                    <section className="section-data-classification">
                        <div className="content-wrap">
                            <FilterByIngredient className="filter-ingredients">
                                <img src="https://cdn.dogsplanet.com/wp-content/plugins/dogsplanet/public/img/filter-icon.png" alt="Filtro" />
                                <p>Filtrar por ingrediente</p>
                            </FilterByIngredient>

                            <OrderBy className="order-by">
                                <p>Ordenar por:</p>
                                <select>
                                    <option>Selecionar</option>
                                </select>
                            </OrderBy>

                            <InputSearch width={100} className="input-search" style={ { height: '45px' } }>
                                <input 
                                    placeholder="Search..." 
                                    value={textSearch} 
                                    onChange={ e => setTextSearch(e.target.value) }
                                    // O mesmo serve para a tecla 'enter'
                                    onKeyPress={e => e.which === 13 ? handleSearchRecipes() : ''} 
                                />
                                <button onClick={handleSearchRecipes}>
                                    <img src={ImageSearch} alt="Pesquisar"/>
                                </button>
                            </InputSearch>
                        </div>
                    </section>
                        
                    <ContainerCards className="section-category-cards">
                        <div className="content-wrap">
                            <Category id="card-category" height={heightCategory}>
                                <div id="titleCategory">
                                    <img src={ ImageCategory } alt="Categoria" />
                                    <p>Categorias</p>
                                </div>

                                <ol className="list-category">
                                    <li>
                                        <img src={ ImageForKnife } alt="All" />
                                        Todas as Receitas
                                    </li>
                                    <li>
                                        <img src={ ImageFast } alt="Fast" />
                                        Rápidas
                                    </li>
                                    <li>
                                        <img src={ ImagePhotograph } alt="Photograpy" />
                                        Com Foto
                                    </li>
                                    <li>
                                        <img src={ ImageVideo } alt="Video"/>
                                        Com Vídeo
                                    </li>
                                    <li>
                                        <img src={ImageNovelty} alt="Novelty" />
                                        Novidades
                                    </li>
                                </ol>
                            </Category>

                            <div className="card-container">
                                <ol className="list-recipes">
                                    <li>
                                        <div className="best-recipe">
                                            <img src={ImageReport} alt="Best"/>
                                            <p>Esta é a receita que você esta procurando!</p>
                                        </div>
                                        <div className="image-recipe">
                                            <ImageRecipe background={'https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg'} />
                                        </div>

                                        <div className="data-recipe">
                                            <strong>Bolo de fubá</strong>
                                            <p className="author">Por: Erick Araujo</p>

                                            <p className="description">
                                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                            </p>
                                        </div>

                                        <div className="info-recipe">

                                            <div className="favorite-info">
                                                <img src={ImageHeart} alt="Favoritos"/>
                                                <p><span> 213 </span> pessoas</p>
                                            </div>

                                            <div className="access-info">
                                                <strong>1.152</strong> acessos
                                            </div>

                                            <div className="date-info">
                                                <p>Data de Publicação:</p>
                                                <p> 25/03/2020 </p>
                                            </div>

                                            <div className="avaliation-info">
                                                Avaliação: 
                                                <p className="note-avaliation"> 8,9 </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-recipe">
                                            <ImageRecipe background={'https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg'} />
                                        </div>

                                        <div className="data-recipe">
                                            <strong>Bolo de fubá</strong>
                                            <p className="author">Por: Erick Araujo</p>

                                            <p className="description">
                                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                            </p>
                                        </div>

                                        <div className="info-recipe">

                                            <div className="favorite-info">
                                                <img src={ImageHeart} alt="Favoritos"/>
                                                <p><span> 213 </span> pessoas</p>
                                            </div>

                                            <div className="access-info">
                                                <strong>1.152</strong> acessos
                                            </div>

                                            <div className="date-info">
                                                <p>Data de Publicação:</p>
                                                <p> 25/03/2020 </p>
                                            </div>

                                            <div className="avaliation-info">
                                                <p>Avaliação:</p>
                                                <p className="note-avaliation"> 8,9 </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-recipe">
                                            <ImageRecipe background={'https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg'} />
                                        </div>

                                        <div className="data-recipe">
                                            <strong>Bolo de fubá</strong>
                                            <p className="author">Por: Erick Araujo</p>

                                            <p className="description">
                                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                            </p>
                                        </div>

                                        <div className="info-recipe">

                                            <div className="favorite-info">
                                                <img src={ImageHeart} alt="Favoritos"/>
                                                <p><span> 213 </span> pessoas</p>
                                            </div>

                                            <div className="access-info">
                                                <strong>1.152</strong> acessos
                                            </div>

                                            <div className="date-info">
                                                <p>Data de Publicação:</p>
                                                <p> 25/03/2020 </p>
                                            </div>

                                            <div className="avaliation-info">
                                                <p>Avaliação:</p>
                                                <p className="note-avaliation"> 8,9 </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-recipe">
                                            <ImageRecipe background={'https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg'} />
                                        </div>

                                        <div className="data-recipe">
                                            <strong>Bolo de fubá</strong>
                                            <p className="author">Por: Erick Araujo</p>

                                            <p className="description">
                                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                            </p>
                                        </div>

                                        <div className="info-recipe">

                                            <div className="favorite-info">
                                                <img src={ImageHeart} alt="Favoritos"/>
                                                <p><span> 213 </span> pessoas</p>
                                            </div>

                                            <div className="access-info">
                                                <strong>1.152</strong> acessos
                                            </div>

                                            <div className="date-info">
                                                <p>Data de Publicação:</p>
                                                <p> 25/03/2020 </p>
                                            </div>

                                            <div className="avaliation-info">
                                                <p>Avaliação:</p>
                                                <p className="note-avaliation"> 8,9 </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-recipe">
                                            <ImageRecipe background={'https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg'} />
                                        </div>

                                        <div className="data-recipe">
                                            <strong>Bolo de fubá</strong>
                                            <p className="author">Por: Erick Araujo</p>

                                            <p className="description">
                                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                            </p>
                                        </div>

                                        <div className="info-recipe">

                                            <div className="favorite-info">
                                                <img src={ImageHeart} alt="Favoritos"/>
                                                <p><span> 213 </span> pessoas</p>
                                            </div>

                                            <div className="access-info">
                                                <strong>1.152</strong> acessos
                                            </div>

                                            <div className="date-info">
                                                <p>Data de Publicação:</p>
                                                <p> 25/03/2020 </p>
                                            </div>

                                            <div className="avaliation-info">
                                                <p>Avaliação:</p>
                                                <p className="note-avaliation"> 8,9 </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-recipe">
                                            <ImageRecipe background={'https://img.cybercook.com.br/receitas/677/bolo-de-fuba-22-623x350.jpeg'} />
                                        </div>

                                        <div className="data-recipe">
                                            <strong>Bolo de fubá</strong>
                                            <p className="author">Por: Erick Araujo</p>

                                            <p className="description">
                                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                            </p>
                                        </div>

                                        <div className="info-recipe">

                                            <div className="favorite-info">
                                                <img src={ImageHeart} alt="Favoritos"/>
                                                <p><span> 213 </span> pessoas</p>
                                            </div>

                                            <div className="access-info">
                                                <strong>1.152</strong> acessos
                                            </div>

                                            <div className="date-info">
                                                <p>Data de Publicação:</p>
                                                <p> 25/03/2020 </p>
                                            </div>

                                            <div className="avaliation-info">
                                                <p>Avaliação:</p>
                                                <p className="note-avaliation"> 8,9 </p>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </ContainerCards>
            </Main>
        </>
    )
}

export default Recipes;