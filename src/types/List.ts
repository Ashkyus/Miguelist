export interface BaseItem {
    id: number,
    title: string,
    description: string,
    importance: number,
}

export interface ListType extends BaseItem {
    listItems: ListItemType[],
    childLists: ListType[],
}

export interface ListItemType extends BaseItem{

}

export interface CardProps<T extends BaseItem> {
  item: T;
  isList?: boolean;
  onItemClick?: () => void;
}