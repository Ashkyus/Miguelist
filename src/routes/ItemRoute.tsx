import { useNavigate, useParams } from "react-router-dom";
import { mockLists } from "../assets/mocks/ListsMock";
import Card from "../components/ui/Card";
import { findItemById } from "../utils/listHelpers";

type itemParams = {
    itemId: string;
}

const ItemRoute = () => {
    const { itemId } = useParams<itemParams>();
    const item = findItemById(Number(itemId));

    return <div className="flex flex-col text-black">
        <span>
            {item?.title}
        </span>
        <span>
            {item?.description}
        </span>
        <span>
            {item?.importance}
        </span>
    </div>
}

export default ItemRoute;