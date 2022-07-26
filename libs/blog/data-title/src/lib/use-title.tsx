import { createContext, PropsWithChildren, useContext } from 'react';

const TitleContext = createContext<string | undefined>(undefined);

interface TitleProviderProps {
  title: string;
}

export function TitleProvider({ children, title }: PropsWithChildren<TitleProviderProps>) {
  return <TitleContext.Provider value={title}>{children}</TitleContext.Provider>;
}

export function useTitle() {
  const context = useContext(TitleContext);

  if (context === undefined) {
    throw new Error('useTitle must be used withina TitleProvider');
  }
  return { title: context };
}
