import type { ListType } from "../../types/List";


const List = ({list}: {list: ListType}) => {

    return <div>
        <span>{list.title}</span>
        <span>{list.description}</span>
        {list.items && list.items.map((item) =>(
        <div key={item.id}>
            <span>{item.title}</span>
            <span>{item.description}</span>
        </div>
        ))}

    </div>
}

export default List;