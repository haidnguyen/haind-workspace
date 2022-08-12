import { createContext, PropsWithChildren, useContext } from 'react';

interface TitleProviderProps {
  title: string;
  description: string;
  siteUrl: string;
  author: string;
  keywords: string[];
}

const TitleContext = createContext<TitleProviderProps | undefined>(undefined);

export function TitleProvider({ children, ...rest }: PropsWithChildren<TitleProviderProps>) {
  return <TitleContext.Provider value={rest}>{children}</TitleContext.Provider>;
}

export function useTitle() {
  const context = useContext(TitleContext);

  if (context === undefined) {
    throw new Error('useTitle must be used withina TitleProvider');
  }
  return context;
}
