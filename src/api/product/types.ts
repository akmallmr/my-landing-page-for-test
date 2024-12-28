interface ProductProps {
  id: string;
  name: string;
}

interface ImagesProps {
  id: string[];
  image: string;
}

export interface ProductPromiseProps {
  data: ProductProps[];
}

export interface ImagePromiseProps {
  data: ImagesProps[];
}
