
export const selectHandler = (item, previousItem, selectItem, unselectItem) => {
    if(previousItem === item) {
        unselectItem(item)
    }
    else {
        selectItem(item)
    }
}