import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  type ReactNode,
} from 'react'

export type CartItem = {
  id: string
  name: string
  detail: string
  price: number
  qty: number
  glaze?: string
}

type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  add: (item: Omit<CartItem, 'qty'> & { qty?: number }) => void
  setQty: (id: string, qty: number) => void
  remove: (id: string) => void
  clear: () => void
  open: boolean
  setOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'urban-donut-co-cart'

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadCart())
  const [open, setOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((n, i) => n + i.qty, 0)
    const total = items.reduce((n, i) => n + i.price * i.qty, 0)

    return {
      items,
      count,
      total,
      open,
      setOpen,
      add: (item) => {
        setItems((prev) => {
          const existing = prev.find((p) => p.id === item.id)
          if (existing) {
            return prev.map((p) =>
              p.id === item.id ? { ...p, qty: p.qty + (item.qty ?? 1) } : p,
            )
          }
          return [...prev, { ...item, qty: item.qty ?? 1 }]
        })
        setOpen(true)
      },
      setQty: (id, qty) => {
        setItems((prev) =>
          qty <= 0
            ? prev.filter((p) => p.id !== id)
            : prev.map((p) => (p.id === id ? { ...p, qty } : p)),
        )
      },
      remove: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
      clear: () => setItems([]),
    }
  }, [items, open])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
