import type {BaseItem, CardProps} from "../../types/List";

const Card = <T extends BaseItem>({card}: {card: CardProps<T>}) =>{
    return <div className={ "rounded-lg border-2 border-gray-300 p-4 flex flex-col h-32 text-black cursor-pointer " + (card.isList ? "bg-gray-500" : "bg-purple-100")}  onClick={() => card.onItemClick && card.onItemClick()}>
        <span>{card.item?.title}</span>
        <span>{card.item?.description}</span>
    </div>;
}

export default Card;