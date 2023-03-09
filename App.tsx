import { Dispatch, SetStateAction, useState } from "react";
import { ScreenSlider1 } from "./src/screens"
export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  switch (page) {
    case 1:
      return <ScreenSlider1 setPageI={setPage}/>
      break;
  }
}