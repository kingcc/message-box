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
declare function generator(propertiesDict?: PropertiesDict, stylesDict?: StylesDict, mountPoint?: HTMLElement, doc?: Document): void;
export default generator;
//# sourceMappingURL=message-box.generator.d.ts.map