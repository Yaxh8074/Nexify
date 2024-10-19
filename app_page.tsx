import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <header className="py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">MyShop</Link>
          <div className="space-x-4">
            <Link href="/products">Products</Link>
            <Link href="/cart">Cart</Link>
            <Button>Login with Facebook</Button>
          </div>
        </nav>
      </header>
      <main>
        <h1 className="text-4xl font-bold mb-6">Welcome to MyShop</h1>
        <p className="mb-4">Browse our latest products and find great deals!</p>
        <Button asChild>
          <Link href="/products">Shop Now</Link>
        </Button>
      </main>
    </div>
  )
}