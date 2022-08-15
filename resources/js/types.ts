export type HeaderTuple = [
    "Hauptartikelnr",
    "Artikelname",
    "Hersteller",
    "Beschreibung",
    "Materialangaben",
    "Geschlecht",
    "Produktart",
    "Ärmel",
    "Bein",
    "Kragen",
    "Herstellung",
    "Taschenart",
    "Grammatur",
    "Material",
    "Ursprungsland",
    "Bildname"
];
export interface IArticle {
    Hauptartikelnr: string;
    Artikelname: string;
    Hersteller: string;
    Beschreibung: string;
    Materialangaben: string;
    Geschlecht: string;
    Produktart: string;
    Ärmel: string;
    Bein: string;
    Kragen: string;
    Herstellung: string;
    Taschenart: string;
    Grammatur: string;
    Material: string;
    Ursprungsland: string;
    Bildname: string;
}

export type TFormError = Omit<
    IArticle,
    | "Ärmel"
    | "Bein"
    | "Kragen"
    | "Herstellung"
    | "Taschenart"
    | "Grammatur"
    | "Ursprungsland"
    | "Bildname"
>;

export interface AxiosReponse {
    header: HeaderTuple;
    body: IArticle[];
    error?: string;
}

export type TToggleMenu = "table" | "chart" | "add" | "upload";

export interface IUpdateValueEmit {
    rowIndex: number;
    columnName: keyof IArticle;
    columnData: string;
}

export interface IDataRowIndex {
    index: number;
    data: IArticle;
}

export type TFilterChart =
    | "Geschlecht"
    | "Hersteller"
    | "Herstellung"
    | "Material"
    | "Ursprungsland";

export interface TEmbedAddDataSFCProps {
    open: boolean;
    index: number;
    data: IArticle | undefined;
}

export type TVueEmit = (event: string, ...args: unknown[]) => void;
