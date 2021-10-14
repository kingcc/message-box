/**
 * Gets the zIndex of an element based on doc
 *
 * @param {Element} element
 * @param {Document} doc
 * @returns {number} zIndex
 */
function getZIndex(element, doc = document) {
    var _a;
    const zIndex = (_a = doc.defaultView) === null || _a === void 0 ? void 0 : _a.getComputedStyle(element).getPropertyValue('z-index');
    const zIndexNumber = Number(zIndex);
    if (isNaN(zIndexNumber)) {
        if (element.parentNode === doc) {
            return 0;
        }
        if (element.parentNode instanceof Element) {
            return getZIndex(element.parentNode, doc);
        }
    }
    return zIndexNumber;
}
/**
 * For quickly generate a message-box
 *
 * @param children        - children of `<message-box/>`
 * @param propertiesDict  - properties dictionary for initialize, optional
 * @param stylesDict      - stylesheet dictionary for initialize, optional
 * @param mountPoint      - reference to mount point element for computing style, optional
 * @param doc             - reference to document, optional
 * @returns {MessageBox} instance
 */
function generator(children, propertiesDict = {}, stylesDict = {}, mountPoint = null, doc = document) {
    var _a;
    const $messageBox = doc.createElement('message-box');
    if (children instanceof HTMLElement) {
        $messageBox.appendChild(children);
    }
    else if (Array.isArray(children)) {
        for (const element of children) {
            $messageBox.appendChild(element);
        }
    }
    else if (typeof children === 'string') {
        $messageBox.innerHTML = children;
    }
    Object.assign($messageBox, propertiesDict);
    for (const [name, value] of Object.entries(stylesDict)) {
        if (value === undefined)
            continue;
        if (name === 'z-index' && value === 'max') {
            const maxZIndex = Math.max(...Array.from(doc.querySelectorAll(`${(_a = mountPoint === null || mountPoint === void 0 ? void 0 : mountPoint.tagName) !== null && _a !== void 0 ? _a : 'BODY'} > *`)).map(($element) => getZIndex($element)));
            $messageBox.style.setProperty(name, String(maxZIndex));
            continue;
        }
        $messageBox.style.setProperty(name, value);
    }
    return $messageBox;
}
export default generator;
//# sourceMappingURL=message-box.generator.js.map