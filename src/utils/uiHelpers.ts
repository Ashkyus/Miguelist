import type { ListType, ListItemType } from "../types/List";
import { mockLists } from "../assets/mocks/ListsMock";

export interface BreadcrumbItem {
    id: number;
    title: string;
    type: 'list' | 'item';
    path: string;
}

// Build a parent-child relationship map for quick lookups
const buildParentMap = (lists: ListType[], parentMap: Map<number, number> = new Map(), currentParentId: number | null = null): Map<number, number> => {
    for (const list of lists) {
        if (currentParentId !== null) {
            parentMap.set(list.id, currentParentId);
        }
        
        // Recursively process child lists
        buildParentMap(list.childLists, parentMap, list.id);
    }
    return parentMap;
};

// Find the breadcrumb path to a specific list or item
export const findBreadcrumb = (id: number, isList: boolean = true): BreadcrumbItem[] => {
    const parentMap = buildParentMap(mockLists);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    // Find the target item/list
    const target = isList 
        ? findListById(id)
        : findItemById(id);
    
    if (!target) return breadcrumbs;
    
    // Build the path backwards
    let currentId: number | null = id;
    let currentType = isList ? 'list' : 'item';
    
    while (currentId !== null) {
        const current = currentType === 'list' 
            ? findListById(currentId)
            : findItemById(currentId);
            
        if (!current) break;
        
        breadcrumbs.unshift({
            id: current.id,
            title: current.title,
            type: 'list',
            path: currentType === 'list' ? `/childList/${current.id}` : `/item/${current.id}`
        });
        
        // Move to parent
        const parentId = parentMap.get(currentId);
        currentId = parentId !== undefined ? parentId : null;
        currentType = 'list'; // Parents are always lists
    }
    
    // Add root
    breadcrumbs.unshift({
        id: 0,
        title: 'Home',
        type: 'list',
        path: '/'
    });
    
    return breadcrumbs;
};

// Helper function to find list by ID (import from listHelpers or redefine)
const findListById = (id: number, lists: ListType[] = mockLists): ListType | null => {
    for (const list of lists) {
        if (list.id === id) return list;
        const foundInChild = findListById(id, list.childLists);
        if (foundInChild) return foundInChild;
    }
    return null;
};

// Helper function to find item by ID (import from listHelpers or redefine)
const findItemById = (id: number, lists: ListType[] = mockLists): ListItemType | null => {
    for (const list of lists) {
        const foundItem = list.listItems.find(item => item.id === id);
        if (foundItem) return foundItem;
        const foundInChild = findItemById(id, list.childLists);
        if (foundInChild) return foundInChild;
    }
    return null;
};