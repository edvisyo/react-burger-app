export interface ModalInterface {
    children?: JSX.Element;
    show?: boolean;
    modalClose(): void;
}