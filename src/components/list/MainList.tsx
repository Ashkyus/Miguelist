import { useNavigate } from "react-router-dom";
import { mockLists } from "../../assets/mocks/ListsMock";
import Card from "../ui/Card";


const MainList = () => {
    const navigate = useNavigate();
    const lists = mockLists;

    return (
    <div className="grid grid-cols-4 gap-4">
        {lists && lists.map(list => ( 
            <Card card={{item: list, isList: list.childLists.length > 0, onItemClick: () => navigate("/childList/" + list.id)}} key={list.id}/>
        ))}
    </div>
    )
}

export default MainList;