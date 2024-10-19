import Link from 'next/link'
import { Button } from "@/components/ui/button"

// This would typically come from an API or database
const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
]

export default function Products() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mb-2">${product.price.toFixed(2)}</p>
            <Button>Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  )
}