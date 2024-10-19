'use client'

import { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const API_KEY = 'YOUR_API_KEY'

export default function CurrencyConverter({ amount, baseCurrency = 'USD' }) {
  const [currencies, setCurrencies] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState(baseCurrency)
  const [convertedAmount, setConvertedAmount] = useState(amount)

  useEffect(() => {
    fetch(`https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setCurrencies(Object.keys(data.rates))
        convertCurrency(selectedCurrency, data.rates)
      })
  }, [])

  const convertCurrency = (currency, rates) => {
    const rate = rates[currency]
    setConvertedAmount((amount * rate).toFixed(2))
  }

  return (
    <div>
      <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select currency" />
        </SelectTrigger>
        <SelectContent>
          {currencies.map(currency => (
            <SelectItem key={currency} value={currency}>{currency}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p>{convertedAmount} {selectedCurrency}</p>
    </div>
  )
}