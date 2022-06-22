export interface BuildControlInterface {
    label: string;
    added(): void;
    removed(): void;
    disabledButton(): boolean;
}