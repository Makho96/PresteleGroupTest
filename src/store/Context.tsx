import { createContext, useContext, useCallback, useState, ReactNode } from "react";
import { GridData, GridItemData } from "../components/Grid/gridData";

type ContextTypes = {
  addItem: () => void;
  removeItem: (id: string) => void;
  data: GridItemData[];
};

const Context = createContext<ContextTypes>({
  data: [],
  removeItem: (id: string) => {},
  addItem: () => {}
});

export const ContextProvider = ({children}: {children: ReactNode}) => {
  const [data, setData] = useState(GridData);

  const removeItem = useCallback((itemId: string) => {
    setData((prevState) => [...prevState.filter(item => item.id !== itemId)]);
  }, []);

  const addItem = useCallback(() => {
    setData((prevState) => [...prevState, 
      {
        id: prevState.length.toString(),
        title: 'New Collection',
        subTitle: 'August Articles'
      }
    ]);
  }, []);

  return (
    <Context.Provider value={{
      data,
      removeItem,
      addItem,
    }}>
      {children}
    </Context.Provider>
  );
};

const useGridContext = () => useContext(Context);

export default useGridContext;