# Cocktails-App-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with npm install
4. Use npm start to run the app page

## Description

I made a web application that allows you to see different types of drinks. If we don't use the search engine on the main page, all the available drinks will appear. If we click on any drink, it will take us to the special page of that drink where we can see different information such as the name, the name of the drink, more information and its ingredients, plus a button to return to home. Also this page has an About section and an Error 404 section in case the URL was not found.

## Technologies used

1. React JS
2. CSS3

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/26`](https://www.diegolibonati.com.ar/#/project/26)

## Video

https://user-images.githubusercontent.com/99032604/199622106-9471c1c4-8dad-4792-933a-fd6e3d87632e.mp4

## Documentation

### App.js

In this file we are going to handle all the routes of the application:

```
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/cocktail/:id"
            element={<CocktailDetail></CocktailDetail>}
          ></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
```

### pages/About.jsx | pages/CocktailDetail.jsx | pages/Error.jsx | pages/Home.jsx

The routes will be able to render these 4 pages, if the Home is accessed the component/page `pages/Home.jsx` will be rendered

### hooks/useFetch.js

The application only uses a single Custom Hook called `useFetch.js`, this CustomHook will allow us to obtain all the information about the Fetch API:

```
export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getApiInformation = async () => {
    setLoading(true);
    const request = await fetch(url);
    const data = await request.json();

    const { drinks } = data;

    if (drinks) {
      const newCocktails = drinks.map((item) => {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = item;

        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
          ingredients: [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ],
        };
      });

      setItems(newCocktails);
    } else {
      setItems([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    getApiInformation();
  }, [url]);

  return {
    loading,
    items,
  };
};
```

### helpers/context.js

From this file we will be able to manage the functions and states of the application. Here we find a state called `mobileNavbar` and a function called `manageNavbar()` that will be used to manage the navbar in its Mobile version. Then we have a last state called `inputSearch` that is used to load the information through an input:

```
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const manageNavbar = () => {
    setMobileNavbar(!mobileNavbar);
  };

  return (
    <AppContext.Provider
      value={{ mobileNavbar, manageNavbar, inputSearch, setInputSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};
```

### components/CocktailItem.jsx | IngredientItem.jsx | Loading.jsx | Navbar.jsx

In the `components` path we will find all the components that we use in our application.
