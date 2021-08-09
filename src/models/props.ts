export interface GenericModel {
  title: string;
  function: string;
}

export interface DetailsProps {
  content: any;
  details: GenericModel[];
}

export interface TitleProps extends React.HTMLAttributes<HTMLTitleElement> {
  name: string;
}

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  contents: Array<any>;
  columns: Array<GenericModel>;
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  column?: boolean;
  row?: boolean;
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLHtmlElement> {}

export interface LoaderProps extends React.HTMLAttributes<HTMLHtmlElement> {
  color?: string;
}

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  image: string;
  alt: string;
}
