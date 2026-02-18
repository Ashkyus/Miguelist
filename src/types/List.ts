export interface ListType {
    id: number,
    title: string,
    description: string,
    items: ListItemType[]
}

export interface ListItemType{
    id: number,
    title: string,
    description: string
}