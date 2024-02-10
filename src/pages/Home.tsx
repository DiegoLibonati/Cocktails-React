import { useGlobalContext } from "../context/context";
import { useFetch } from "../hooks/useFetch";
import { CocktailItem } from "../components/CocktailItem";
import { Loading } from "../components/Loading";
import { useRef } from "react";
import "../styles/Search.css";
import "../styles/CocktailList.css";

export const Home = (): JSX.Element => {
  const { inputSearch, setInputSearch } = useGlobalContext();

  const { loading, items } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearch}`
  );

  const cocktailList = useRef<HTMLElement | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <main className="main_container">
      <section className="search_container">
        <form
          className="search_container_form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>Search your favorite cocktail: </label>
          <input
            type="text"
            placeholder="Cocktail name"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          ></input>
        </form>
      </section>

      {loading ? (
        <Loading></Loading>
      ) : items.length === 0 ? (
        <h2 className="h2_notext">
          There is not exists a cocktail with the name of {inputSearch}
        </h2>
      ) : (
        <section ref={cocktailList} className="cocktail_list">
          {items.map((item) => {
            return (
              <CocktailItem key={item.idDrink} cocktail={item}></CocktailItem>
            );
          })}
        </section>
      )}
    </main>
  );
};
