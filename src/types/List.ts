export interface ListType {
    id: number,
    title: string,
    description: string,
    listItems: ListItemType[],
    childLists: ListType[],
    importance: number,
}

export interface ListItemType{
    id: number,
    title: string,
    description: string,
    importance: number,
}