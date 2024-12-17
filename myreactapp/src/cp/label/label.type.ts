type FontAttr = {
    size: string;
    family: string;
    color: string;
    opaque: boolean;
}    

type LabelProps = {
    children: React.ReactNode;
    opaque?: boolean;
    fontsize?: string;
    fontfamily?: string;
    fontcolor? :string;
}

export type {LabelProps,FontAttr}