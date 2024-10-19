'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function OrderTracking() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingInfo, setTrackingInfo] = useState(null)

  const trackOrder = async () => {
    // This would typically be an API call to your backend, which would then use EasyPost's API
    const response = await fetch(`/api/track-order?tracking_number=${trackingNumber}`)
    const data = await response.json()
    setTrackingInfo(data)
  }

  return (
    <div>
      <Input 
        type="text" 
        value={trackingNumber} 
        onChange={(e) => setTrackingNumber(e.target.value)} 
        placeholder="Enter tracking number" 
      />
      <Button onClick={trackOrder}>Track Order</Button>
      {trackingInfo && (
        <div>
          <h2>Tracking Information</h2>
          <p>Status: {trackingInfo.status}</p>
          <p>Estimated Delivery: {trackingInfo.est_delivery_date}</p>
        </div>
      )}
    </div>
  )
}