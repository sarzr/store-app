export interface IProducts {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: [
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    },
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    },
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images?: string[];
  thumbnail?: string;
  quantity?: number;
  checked?: boolean;
}
export interface IProductParams {
  total?: number;
  skip: number;
  limit: number;
}

export interface IProductsRes extends IProducts {
  addToCart?: () => void;
  onChange?: (checked: boolean) => void;
  priceLabel?: string;
}
