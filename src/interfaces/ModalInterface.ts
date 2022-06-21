export interface ModalInterface {
    children?: JSX.Element;
    show?: boolean | null;
    modalClose(): void;
}