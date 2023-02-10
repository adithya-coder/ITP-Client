import { ComponentType } from 'react';
import { createContext } from 'react';

interface AppContextInterface {
	setting?:string,
	path?: string,
	component: ComponentType
}

const ctxt = createContext<AppContextInterface[]>([]);

export default ctxt;
export const AppContextProvider = ctxt.Provider;
  
export const AppContextConsumer = ctxt.Consumer;