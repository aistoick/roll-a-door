"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

export default function CartButton() {
  const { toggleCart, getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <Button
      onClick={toggleCart}
      variant="outline"
      className="relative bg-transparent border-slate-300 hover:bg-slate-50"
    >
      <ShoppingBag className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {totalItems}
        </span>
      )}
    </Button>
  )
}
