import List from "./List";
import { mockLists } from "../../assets/mocks/Lists";

const Lists = () => {
    const lists =mockLists;

    return <div>
    {lists && lists.map(list => ( 
        <List key={list.id} list={list}/>
    ))}
    </div>
}

export default Lists;