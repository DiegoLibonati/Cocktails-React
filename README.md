# TheCocktailDB

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with yarn install
4. Use yarn dev or start (depends package.json) to run the app page

## Description

I made a web application that allows you to see different types of drinks. If we don't use the search engine on the main page, all the available drinks will appear. If we click on any drink, it will take us to the special page of that drink where we can see different information such as the name, the name of the drink, more information and its ingredients, plus a button to return to home. Also this page has an About section and an Error 404 section in case the URL was not found.

## Technologies used

1. React JS
2. Typescript
3. CSS3

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/TheCocktailDB`](https://www.diegolibonati.com.ar/#/project/TheCocktailDB)

## Video

https://user-images.githubusercontent.com/99032604/199622106-9471c1c4-8dad-4792-933a-fd6e3d87632e.mp4

## Documentation

### App.tsx

In this file we are going to handle all the routes of the application:

```
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { CocktailDetail } from "./pages/CocktailDetail";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import "./General.css";

function App(): JSX.Element {
  return (
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
  );
}

export default App;
```

### pages/About.tsx | pages/CocktailDetail.tsx | pages/Error.tsx | pages/Home.tsx

The routes will be able to render these 4 pages, if the Home is accessed the component/page `pages/Home.jsx` will be rendered

### hooks/useFetch.tsx

The application only uses a single Custom Hook called `useFetch.js`, this CustomHook will allow us to obtain all the information about the Fetch API:

```
import { useEffect, useState } from "react";
import { CockTail, UseFetch } from "../entities/entities";

export const useFetch = (url: string): UseFetch => {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<CockTail[]>([]);

  const getApiInformation = async (): Promise<void> => {
    setLoading(true);
    const request = await fetch(url);
    const data = await request.json();

    const drinks = data.drinks as CockTail[];

    if (drinks?.length > 0) {
      setItems(drinks);
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

### context/context.tsx

From this file we will be able to manage the functions and states of the application. Here we find a state called `mobileNavbar` and a function called `manageNavbar()` that will be used to manage the navbar in its Mobile version. Then we have a last state called `inputSearch` that is used to load the information through an input:

```
import React, { useContext, useState } from "react";
import { AppContextT } from "../entities/entities";

export const AppContext = React.createContext<AppContextT | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const [inputSearch, setInputSearch] = useState<string>("");

  const manageNavbar = (): void => {
    setMobileNavbar(!mobileNavbar);
  };

  return (
    <AppContext.Provider
      value={{ mobileNavbar, inputSearch, manageNavbar, setInputSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextT => {
  return useContext(AppContext)!;
};
```

### components/CocktailItem.tsx | IngredientItem.tsx | Loading.tsx | Navbar.tsx

In the `components` path we will find all the components that we use in our application.
