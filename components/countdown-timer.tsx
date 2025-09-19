"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 47
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          // Reset timer when it reaches 0
          return { hours: 23, minutes: 59, seconds: 47 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => value.toString().padStart(2, '0')

  return (
    <div className="bg-red-600 text-white p-4 rounded-lg">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock className="h-5 w-5" />
        <span className="font-bold">OFFER EXPIRES IN:</span>
      </div>
      <div className="text-2xl font-bold text-center">
        {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
      </div>
      <p className="text-sm text-center mt-2 opacity-90">
        Don't miss your chance to connect with Rhode Island's top psychics!
      </p>
    </div>
  )
}
