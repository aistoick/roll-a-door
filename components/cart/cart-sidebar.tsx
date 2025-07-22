"use client"

import type React from "react"

import { X, Plus, Minus, ShoppingBag, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

export default function CartSidebar() {
  const { state, closeCart, removeItem, updateQuantity, clearCart } = useCart()
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Clear cart and close after success
    setTimeout(() => {
      clearCart()
      closeCart()
      setIsSubmitted(false)
      setCustomerInfo({ name: "", email: "", phone: "", address: "", notes: "" })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    })
  }

  if (!state.isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={closeCart} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-orange-600" />
              <h2 className="text-xl font-bold text-slate-900">Your Quote Request</h2>
            </div>
            <button onClick={closeCart} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <X className="h-5 w-5 text-slate-600" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Send className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Sent!</h3>
                <p className="text-slate-600">
                  Thank you for your interest. We'll contact you within 24 hours with a detailed quote.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 p-6">
                {state.items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Your cart is empty</h3>
                    <p className="text-slate-600">Add products to request a quote</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="bg-slate-50 rounded-lg p-4">
                        <div className="flex gap-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-slate-900 mb-1">{item.name}</h4>
                            <p className="text-sm text-slate-600 mb-2">{item.category}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 hover:bg-slate-200 rounded"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-8 text-center font-medium">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 hover:bg-slate-200 rounded"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-600 hover:text-red-700 text-sm font-medium"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quote Form */}
              {state.items.length > 0 && (
                <div className="border-t border-slate-200 p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Request Your Quote</h3>
                  <form onSubmit={handleSubmitOrder} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Full Name*"
                        value={customerInfo.name}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        name="phone"
                        placeholder="Phone*"
                        value={customerInfo.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email*"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="address"
                      placeholder="Installation Address*"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      required
                    />
                    <Textarea
                      name="notes"
                      placeholder="Additional requirements or questions..."
                      value={customerInfo.notes}
                      onChange={handleInputChange}
                      rows={3}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Request Quote ({state.items.reduce((total, item) => total + item.quantity, 0)} items)
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
