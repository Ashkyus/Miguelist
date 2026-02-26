import { useNavigate, useParams } from "react-router-dom";
import Card from "../ui/Card";
import { findListById } from "../../utils/listHelpers";

type childListParams = {
    listId: string;
}

const ChildLists = () => {
    const navigate = useNavigate();
    const { listId } = useParams<childListParams>();
    const childList = findListById(Number(listId));
console.log(childList);
    return <div className="grid grid-cols-4 gap-4">
    {childList && childList.childLists.map(list => ( 
        <Card card={{item: list, isList: true,  onItemClick: () => navigate("/childList/" + list.id)}} key={list.id}/>
    ))}
    {childList && childList.listItems.map(item => ( 
        <Card card={{item: item, isList: false,  onItemClick: () => navigate("/item/" + item.id)}} key={item.id}/>
    ))}
    </div>
}

export default ChildLists;