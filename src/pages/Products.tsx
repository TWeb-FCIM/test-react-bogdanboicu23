import React, { useState } from 'react'
import '../styles/pages.css'

interface Product {
  id: number
  name: string
  price: number
  description: string
}

export default function Products() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      description: 'Un produs de calitate'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      description: 'Un alt produs excelent'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 79.99,
      description: 'Produs premium'
    }
  ])

  return (
    <div className="page-content">
      <h1>Produse 🛍️</h1>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-price">${product.price}</div>
            <button className="btn-primary">Adaugă în coș</button>
          </div>
        ))}
      </div>
    </div>
  )
}
