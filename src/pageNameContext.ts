import { createContext } from "react";
interface ContextType {
  pageName: string;
  changeName: Function;
}
const defaultValue: ContextType = { pageName: "", changeName: () => {} };
export default createContext(defaultValue);
