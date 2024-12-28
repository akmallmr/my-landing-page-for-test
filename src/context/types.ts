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
  name: string;
}

export interface ImagesProps {
  id: string[];
  image: string;
}

export interface ProductsProps {
  id: string;
  name: string;
  image: string;
}

export interface ProductsContextProps {
  product?: ProductProps[];
}
