export interface MenuProps {
  key: string;
  label: string;
  path: string;
}

export interface MenuHeaderProps {
  menuHeader: MenuProps[];
}

export interface ProductProps {
  id: string;
  name?: string | null;
}

export interface ImagesProps {
  id: string[];
  image?: string | null;
}

export interface ProductsProps {
  id: string;
  name?: string | null;
  image?: string | null;
}

export interface ProductsContextProps {
  product?: ProductProps[];
}
