export interface BuildControlInterface {
    label: string;
    added(): void;
    removed(): void;
    disabled(): boolean;
}