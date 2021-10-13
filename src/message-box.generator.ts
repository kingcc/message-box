import { MessageBox } from './message-box'

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

function generator(
  propertiesDict: PropertiesDict = {},
  stylesDict: StylesDict = {},
  mountPoint: HTMLElement = document.body,
  doc: Document = document,
) {
  const $messageBox = doc.createElement('message-box')
  Object.assign($messageBox, propertiesDict)
  for (const [name, value] of Object.entries(stylesDict)) {
    if (value === undefined) continue
    if (name === 'z-index' && value === 'max') {
      const maxZIndex = Math.max(
        ...Array.from(
          doc.querySelectorAll('body > *')
        ).map(($element) => getZIndex($element))
      )
      $messageBox.style.setProperty(name, String(maxZIndex))
      continue
    }
    $messageBox.style.setProperty(name, value)
  }
  mountPoint.appendChild($messageBox)
}

export default generator
