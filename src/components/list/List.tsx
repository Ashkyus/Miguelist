import type { ListType } from "../../types/List";
import Card from "../ui/Card";


const List = ({list}: {list: ListType}) => {

    return <div className="grid grid-cols-4">
        {list.listItems && list.listItems.map((item) =>(
            <Card card={item}/>
        ))}
    </div>;
}

export default List;