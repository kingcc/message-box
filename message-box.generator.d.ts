import { MessageBox } from './message-box';
declare type Equals<TypeA, TypeB, EqualsReturn, NotEqualsReturn> = (<T>() => T extends TypeA ? 1 : 2) extends (<T>() => T extends TypeB ? 1 : 2) ? EqualsReturn : NotEqualsReturn;
declare type WritableKeys<Type> = {
    [Key in keyof Type]: Equals<{
        [One in Key]: Type[Key];
    }, {
        -readonly [One in Key]: Type[Key];
    }, Key, never>;
}[keyof Type];
declare type PropertiesDict = Partial<Pick<MessageBox, NonNullable<WritableKeys<MessageBox>>>>;
declare type SetPropertyParameters = Parameters<CSSStyleDeclaration["setProperty"]>;
declare type StylesDict = Partial<Record<SetPropertyParameters["0"], SetPropertyParameters["1"]>>;
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
declare function generator(children: HTMLElement | HTMLElement[] | string, propertiesDict?: PropertiesDict, stylesDict?: StylesDict, mountPoint?: HTMLElement | null, doc?: Document): MessageBox;
export default generator;
//# sourceMappingURL=message-box.generator.d.ts.map