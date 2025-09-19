"use client"

import { useState, useEffect } from "react"
import { Star, Quote, Zap } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Providence, RI",
    rating: 5,
    text: "I was skeptical but WOW! The reading was incredibly accurate. She knew things about my life that no one else could have known. This changed everything for me!",
    time: "2 minutes ago",
    highlight: "Changed my life!"
  },
  {
    name: "Michael R.",
    location: "Newport, RI", 
    rating: 5,
    text: "The psychic was spot on about my career change. I'm booking another session immediately!",
    time: "5 minutes ago",
    highlight: "Spot on!"
  },
  {
    name: "Jennifer L.",
    location: "Warwick, RI",
    rating: 5,
    text: "The accuracy was mind-blowing! She predicted my promotion before I even knew about it. This service is absolutely incredible.",
    time: "8 minutes ago", 
    highlight: "Mind-blowing!"
  },
  {
    name: "David K.",
    location: "Cranston, RI",
    rating: 5,
    text: "I've tried other psychics but nothing compares. The reading was so detailed and accurate. I'm telling all my friends!",
    time: "12 minutes ago",
    highlight: "Nothing compares!"
  }
]

export function UrgentTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const testimonial = testimonials[currentTestimonial]

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="h-5 w-5 text-green-600" />
        <span className="font-bold text-green-800">LIVE: Recent Readings</span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-gray-900">{testimonial.name}</span>
              <span className="text-sm text-gray-500">from {testimonial.location}</span>
              <span className="text-xs text-gray-400">{testimonial.time}</span>
            </div>
            
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-600 ml-2">{testimonial.rating}/5</span>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gray-300" />
              <p className="text-gray-700 italic pl-4">
                "{testimonial.text}"
              </p>
            </div>
            
            <div className="mt-3">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                {testimonial.highlight}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-green-600">2,847+</span> people got their reading this month!
        </p>
      </div>
    </div>
  )
}
