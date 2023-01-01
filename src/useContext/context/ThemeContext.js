import { createContext } from "react";

// createContext의 초기값을 null 값을 주는 이유
// : 나중에 value로 값을 넘겨줄 예정이기 때문에
export const ThemeContext = createContext(null);
