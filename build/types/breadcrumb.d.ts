export interface BreadcrumbSchema {
    text: string;
    onClick?: () => void;
    link?: string;
    dataQa?: string | null;
}
