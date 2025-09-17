import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  woodType: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
    weight: number;
  };
  images: string[];
  threeDModel?: string;
  specifications: {
    material: string;
    finish: string;
    style: string;
    color: string;
  };
  inventory: {
    stock: number;
    lowStockThreshold: number;
    inStock: boolean;
  };
  ratings: {
    average: number;
    total: number;
  };
  pricing: {
    woodCost: number;
    laborCost: number;
    profit: number;
  };
  estimatedDelivery: number;
  featured: boolean;
  tags: string[];
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    slug: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true, maxLength: 200 },
  price: { type: Number, required: true, min: 0 },
  originalPrice: { type: Number, min: 0 },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  woodType: { type: String, required: true },
  dimensions: {
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true }
  },
  images: [{ type: String, required: true }],
  threeDModel: { type: String },
  specifications: {
    material: { type: String, required: true },
    finish: { type: String, required: true },
    style: { type: String, required: true },
    color: { type: String, required: true }
  },
  inventory: {
    stock: { type: Number, required: true, min: 0 },
    lowStockThreshold: { type: Number, default: 5 },
    inStock: { type: Boolean, default: true }
  },
  ratings: {
    average: { type: Number, default: 0, min: 0, max: 5 },
    total: { type: Number, default: 0 }
  },
  pricing: {
    woodCost: { type: Number, required: true },
    laborCost: { type: Number, required: true },
    profit: { type: Number, required: true }
  },
  estimatedDelivery: { type: Number, default: 14 },
  featured: { type: Boolean, default: false },
  tags: [{ type: String }],
  seo: {
    metaTitle: { type: String },
    metaDescription: { type: String },
    slug: { type: String, required: true, unique: true }
  }
}, {
  timestamps: true
});

// Indexes for performance
ProductSchema.index({ category: 1, subcategory: 1 });
ProductSchema.index({ price: 1 });
ProductSchema.index({ 'ratings.average': -1 });
ProductSchema.index({ featured: -1, createdAt: -1 });
ProductSchema.index({ 'seo.slug': 1 });
ProductSchema.index({ tags: 1 });

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);