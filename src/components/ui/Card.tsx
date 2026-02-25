import type {ListItemType} from "../../types/List";

const Card = ({card}: {card: ListItemType}) =>{

    return <div className="rounded-b-sm border-2 border-gray-300 p-4 flex flex-col" onClick={() => console.log("Congratz, you slicked" + card.title)}>
        <span>{card.title}</span>
        <span>{card.description}</span>
    </div>;
}

export default Card;