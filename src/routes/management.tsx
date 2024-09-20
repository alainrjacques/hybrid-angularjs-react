import { Book, Book2 } from "@/components/Book";
import { Routes } from "@/routes/type";

export const routeRecords: Array<Routes> = [
  {
    path: "React/Scarlet",
    element: <Book />,
    searchName: "books",
  },
  {
    path: "React/Scarlet2",
    element: <Book2 />,
    searchName: "books",
    angularjsOptions: {
      name: "bookTest",
      Component: Book2,
    },
  },
];
