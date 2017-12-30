export module ObjectHelper {

  /** @Description:
   * Replace a list with a specified element that included in that list
   * and assign to new pointer
   * @param index: index of the element in list that was specified
   * @param replaceItem: data of the element
   * @param list: previous list
   * @returns {any[]}: new list with specified element
   */
  export function immutableReplace(index, replaceItem, list): any[] {
    if (index > -1) {
      return [
        ...list.slice(0, index),
        replaceItem,
        ...list.slice(index + 1)
      ];
    } else {
      throw(new Error('Object Helper: Index should > -1'));
    }
  }

  /** @Description:
   * Delete an element out of list and assign to new pointer
   * @param index: index of the element in list
   * @param list: previous list
   * @returns {any[]} new list
   */
  export function immutableDelete(index, list): any[] {
    return [
      ...list.slice(0, index),
      ...list.slice(index + 1)
    ];
  }

  /** @Description:
   * Add new item to list and asssign to new pointer
   * @param item: new element data
   * @param list: previous list
   * @returns {any[]} new list
   */
  export function immutableAdd(item, list): any[] {
    return [
      ...list, item
    ];
  }

  /**@description:
   * Use to update 2 similar objects
   * @param currentObject
   * @param updateData
   * @constructor
   */
  export function UpdateObjectData(currentObject: any, updateData: any): any {
    for (const field in updateData) {
      if (updateData[field] && updateData[field] !== '') {
        currentObject[field] = updateData[field];
      }
    }
    return currentObject;
  }
}
