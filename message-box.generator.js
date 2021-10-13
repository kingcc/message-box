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
function generator(propertiesDict = {}, stylesDict = {}, mountPoint = document.body, doc = document) {
    const $messageBox = doc.createElement('message-box');
    Object.assign($messageBox, propertiesDict);
    for (const [name, value] of Object.entries(stylesDict)) {
        if (value === undefined)
            continue;
        if (name === 'z-index' && value === 'max') {
            const maxZIndex = Math.max(...Array.from(doc.querySelectorAll('body > *')).map(($element) => getZIndex($element)));
            $messageBox.style.setProperty(name, String(maxZIndex));
            continue;
        }
        $messageBox.style.setProperty(name, value);
    }
    mountPoint.appendChild($messageBox);
}
export default generator;
//# sourceMappingURL=message-box.generator.js.map