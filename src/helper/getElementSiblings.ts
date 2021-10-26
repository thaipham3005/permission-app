/**
 * Get array of sibling Nodes from a provided element
 * @param  {HTMLElement} element
 */
export const getElementSiblings= (element : HTMLElement) : Node[] => {
    let siblings: Node[] = []

    // Get list of child nodes from direct parent of element
    let _childNodes = (element.parentNode as ParentNode).childNodes

    // Loop through all element and
    // add to final result if it's not the element
    _childNodes.forEach(node => {
        if (node.nodeType === 3) return // text node
        if (node.nodeType === 1 && node !== element) {
            siblings.push(node);
        }
    })     

    return siblings

}