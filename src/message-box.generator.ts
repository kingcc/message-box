import { MessageBox } from './message-box'

/**
 * Gets the zIndex of an element based on doc
 *
 * @param {Element} element 
 * @param {Document} doc 
 * @returns {number} zIndex
 */
function getZIndex(element: Element, doc: Document = document): number {
  const zIndex = doc.defaultView
    ?.getComputedStyle(element)
    .getPropertyValue('z-index')
  const zIndexNumber = Number(zIndex)
  if (isNaN(zIndexNumber)) {
    if (element.parentNode === doc) {
      return 0
    }
    if (element.parentNode instanceof Element) {
      return getZIndex(element.parentNode, doc)
    }
  }
  return zIndexNumber
}

type Equals<TypeA, TypeB, EqualsReturn, NotEqualsReturn> =
    (<T>() => T extends TypeA ? 1 : 2) extends
    (<T>() => T extends TypeB ? 1 : 2)
      ? EqualsReturn
      : NotEqualsReturn

type WritableKeys<Type> = {
    [Key in keyof Type]: Equals<
      { [One in Key]: Type[Key] },
      { -readonly [One in Key]: Type[Key] },
      Key,
      never
    >
}[keyof Type]

type PropertiesDict = Partial<
  Pick<MessageBox, NonNullable<WritableKeys<MessageBox>>>
>

type SetPropertyParameters = Parameters<CSSStyleDeclaration["setProperty"]>

type StylesDict = Partial<
  Record<SetPropertyParameters["0"], SetPropertyParameters["1"]>
>

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
function generator(
  children: HTMLElement | HTMLElement[] | string,
  propertiesDict: PropertiesDict = {},
  stylesDict: StylesDict = {},
  mountPoint: HTMLElement | null = null,
  doc: Document = document,
) {
  const $messageBox = doc.createElement('message-box')

  if (children instanceof HTMLElement) {
    $messageBox.appendChild(children)
  } else if (Array.isArray(children)) {
    for (const element of children) {
      $messageBox.appendChild(element)
    }
  } else if (typeof children === 'string') {
    $messageBox.innerHTML = children
  }

  Object.assign($messageBox, propertiesDict)

  for (const [name, value] of Object.entries(stylesDict)) {
    if (value === undefined) continue
    if (name === 'z-index' && value === 'max') {
      const maxZIndex = Math.max(
        ...Array.from(
          doc.querySelectorAll(`${mountPoint?.tagName ?? 'BODY'} > *`)
        ).map(($element) => getZIndex($element))
      )
      $messageBox.style.setProperty(name, String(maxZIndex))
      continue
    }
    $messageBox.style.setProperty(name, value)
  }

  return $messageBox
}

export default generator
