# Royalwood - Premium E-commerce Platform

A scalable, production-ready e-commerce platform for handcrafted wooden furniture built with Next.js 13, TypeScript, and modern web technologies.

## 🏗️ Architecture Overview

### Frontend Architecture
- **Next.js 13 (App Router)**: Modern React framework with server-side rendering
- **TypeScript**: Type-safe development with excellent developer experience  
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Smooth animations and micro-interactions
- **Zustand**: Lightweight state management for cart and user preferences
- **Headless UI**: Accessible, unstyled UI components

### Backend Architecture
- **MongoDB**: NoSQL database with optimized schemas and indexes
- **Mongoose**: Object modeling for Node.js with built-in validation
- **JWT Authentication**: Secure user authentication and authorization
- **Stripe**: Payment processing integration
- **Next.js API Routes**: Serverless API endpoints

### Performance & Scalability
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **SSR/SSG**: Server-side rendering and static generation where appropriate
- **CDN Ready**: Optimized for content delivery networks
- **Database Indexing**: Strategic database indexes for query performance

## 🚀 Features

### Customer Features
- **Product Catalog**: Rich product browsing with filtering and sorting
- **3D Product Views**: Interactive 3D model viewer for products
- **Shopping Cart**: Persistent cart with quantity management
- **Wishlist**: Save favorite products for later
- **User Authentication**: Secure login/registration system
- **Order Management**: Track orders from purchase to delivery
- **Reviews & Ratings**: Customer feedback system with photo uploads
- **Responsive Design**: Mobile-first, fully responsive interface

### Admin Features
- **Dashboard**: Analytics and key metrics overview
- **Product Management**: Full CRUD operations for products
- **Inventory Tracking**: Real-time stock management
- **Order Processing**: Workflow management for order fulfillment
- **Customer Management**: User account and communication tools
- **Pricing Updates**: Dynamic wood and labor cost management

### Technical Features
- **Type Safety**: Full TypeScript implementation
- **Performance Monitoring**: Built-in analytics and error tracking
- **SEO Optimized**: Meta tags, structured data, and sitemap generation
- **Accessibility**: WCAG AA compliance
- **Security**: Input validation, rate limiting, and secure authentication

## 📦 Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
│   ├── cart/              # Shopping cart components
│   ├── home/              # Homepage sections
│   ├── layout/            # Layout components (Header, Footer)
│   └── products/          # Product-related components
├── lib/                   # Utility functions and configurations
│   ├── data/              # Sample data and constants
│   ├── models/            # MongoDB/Mongoose models
│   ├── store/             # Zustand state management
│   └── utils.ts           # Helper utilities
└── public/                # Static assets
```

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - NoSQL database
- **Tailwind CSS** - Utility-first CSS framework

### UI & Animations
- **Framer Motion** - Animation library
- **Headless UI** - Accessible UI components
- **Heroicons** - Beautiful icons
- **React Hook Form** - Form management

### State & Data Management
- **Zustand** - State management
- **Mongoose** - MongoDB object modeling
- **SWR/TanStack Query** - Data fetching and caching

### Payments & Authentication
- **Stripe** - Payment processing
- **NextAuth.js** - Authentication
- **JWT** - Token-based authentication

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB (local or MongoDB Atlas)
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd royalwood
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/royalwood
   
   # Authentication
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   
   # Stripe
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   
   # Email
   EMAIL_SERVER=smtp://username:password@smtp.example.com:587
   EMAIL_FROM=noreply@royalwood.com
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Access the Application**
   - Frontend: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin

## 📊 Database Schema

### Products Collection
```javascript
{
  name: String,
  description: String,
  price: Number,
  category: String,
  woodType: String,
  dimensions: Object,
  images: [String],
  inventory: Object,
  ratings: Object,
  seo: Object
}
```

### Users Collection
```javascript
{
  name: String,
  email: String,
  password: String (hashed),
  role: String,
  profile: Object,
  addresses: [Object],
  orders: [ObjectId],
  wishlist: [ObjectId]
}
```

### Orders Collection
```javascript
{
  orderNumber: String,
  user: ObjectId,
  items: [Object],
  pricing: Object,
  shipping: Object,
  payment: Object,
  status: String
}
```

## 🔧 Deployment

### Vercel Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on git push

### Alternative Deployments
- **AWS**: Using AWS Amplify or EC2
- **Docker**: Container-based deployment
- **Railway**: Simple cloud deployment

## 📈 Performance Optimizations

### Frontend Optimizations
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Bundle size optimization
- CDN integration for static assets

### Backend Optimizations
- Database indexing strategy
- Query optimization
- Caching with Redis
- Rate limiting and security

### SEO & Accessibility
- Server-side rendering for critical pages
- Structured data markup
- Meta tag optimization
- WCAG AA compliance

## 🔒 Security Features

- Input validation and sanitization
- SQL injection protection
- XSS prevention
- CSRF protection
- Rate limiting
- Secure password hashing
- JWT token security

## 📝 API Documentation

### Product Endpoints
- `GET /api/products` - Get all products with filtering
- `GET /api/products/[id]` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/[id]` - Update product (admin)
- `DELETE /api/products/[id]` - Delete product (admin)

### Order Endpoints
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/[id]` - Get order details
- `PUT /api/orders/[id]/status` - Update order status (admin)

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Load Testing
```bash
npm run test:load
```

## 📋 Roadmap

### Phase 1 (MVP) ✅
- Product catalog and browsing
- Shopping cart functionality  
- Basic admin dashboard
- User authentication
- Order management

### Phase 2 (Enhanced Features)
- 3D product viewer integration
- Advanced filtering and search
- Customer reviews system
- Email notifications
- Payment processing

### Phase 3 (Scale & Optimize)
- Performance optimizations
- Advanced analytics
- Multi-language support
- Mobile app development
- AI-powered recommendations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🆘 Support

For support and questions:
- Documentation: [docs.royalwood.com](https://docs.royalwood.com)
- Issues: [GitHub Issues](https://github.com/royalwood/issues)
- Email: support@royalwood.com

---

Built with ❤️ by the Royalwood Team