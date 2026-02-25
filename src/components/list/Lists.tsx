import type { ListType } from "../../types/List";
import List from "./List";

const mockLists: ListType[] = [
  {
    id: 1,
    title: "Grocery Shopping",
    description: "Items to buy for the week",
    items: [
      {
        id: 1,
        title: "Milk",
        description: "2% organic milk"
      },
      {
        id: 2,
        title: "Bread",
        description: "Whole wheat loaf"
      },
      {
        id: 3,
        title: "Eggs",
        description: "One dozen free-range eggs"
      }
    ]
  },
  {
    id: 2,
    title: "Weekend Projects",
    description: "Home improvement tasks",
    items: [
      {
        id: 4,
        title: "Paint bedroom",
        description: "Buy paint and supplies first"
      },
      {
        id: 5,
        title: "Fix leaky faucet",
        description: "Kitchen sink needs new washers"
      }
    ]
  },
  {
    id: 3,
    title: "Books to Read",
    description: "Reading list for this month",
    items: [
      {
        id: 6,
        title: "Clean Code",
        description: "Robert Martin - programming practices"
      },
      {
        id: 7,
        title: "The Pragmatic Programmer",
        description: "David Thomas - software development"
      }
    ]
  }
];

const Lists = () => {

    return <>
    {mockLists && mockLists.map(list => (
        <List key={list.id} list={list}/>
    ))}
    </>
}

export default Lists;