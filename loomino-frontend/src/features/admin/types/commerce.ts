export interface AdminProduct {
  id: number;
  name: string;
  slug: string;
  category: string | null;
  thumbnail: string | null;
  regular_price: string;
  discount_price: string | null;
  is_active: boolean;
  total_stock: number;
  primary_category: string | null;
}

export interface VariantImages {
  front: string | null;
  back: string | null;
}
export interface AdminVariant {
  id: number;
  product: { id: number; name: string; thumbnail: string | null };
  color: { id: number; name: string; hex_code?: string };
  size: { id: number; name: string };
  price: string;
  unit_price: string;
  regular_price: string;
  stock: number;
  sku: string;
  images: VariantImages;
  is_active: boolean;
}

export interface AdminReview {
  id: number;
  product: { id?: number; name: string; thumbnail?: string | null };
  reviewer: { name?: string; email?: string };
  rating: number;
  title: string;
  review_text: string;
  status: string;
  created_at: string;
}

export interface AdminOrder {
  order_number: string;
  customer: { name?: string; email?: string; phone?: string };
  total: string;
  payment_method: string;
  payment_status: string;
  order_status: string;
  cancel_refund_status: string;
  courier_status: string;
  placed_date: string;
}

export interface AdminCoupon {
  id: number;
  code: string;
  description: string | null;
  type: string;
  value: string;
  cart_min_value: string | null;
  maximum_discount_amount: string | null;
  usage_limit: number | null;
  used_count: number;
  is_active: boolean;
}

export interface AdminMail {
  id: number;
  sender: { name?: string; email?: string; phone?: string } | string;
  subject: string;
  message_snippet: string;
  created_at: string;
}

export interface AdminSubscriber {
  id: number;
  email: string;
  subscribed_at: string;
}
