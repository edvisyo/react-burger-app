export interface ModalInterface {
    children?: JSX.Element;
    show?: boolean | null;
    // show?(): void;
    modalClose(): void;
}