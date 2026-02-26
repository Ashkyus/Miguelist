import type { ListType, ListItemType } from "../types/List";
import { mockLists } from "../assets/mocks/ListsMock";

export const findListById = (id: number, lists: ListType[] = mockLists): ListType | null => {
    for (const list of lists) {
        if (list.id === id) {
            return list;
        }

        const foundInChild = findListById(id, list.childLists);
        if (foundInChild) {
            return foundInChild;
        }
    }
    return null;
};

export const findItemById = (id: number, lists: ListType[] = mockLists): ListItemType | null => {
    for (const list of lists) {
        const foundItem = list.listItems.find(item => item.id === id);
        if (foundItem) {
            return foundItem;
        }
        
        const foundInChild = findItemById(id, list.childLists);
        if (foundInChild) {
            return foundInChild;
        }
    }
    return null;
};