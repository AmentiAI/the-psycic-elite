"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { useSearchParams } from "next/navigation"
import { format } from "date-fns"
import { Clock, Star, CreditCard, Shield, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { id: "tarot", name: "Tarot Card Reading", duration: "30-60 min" },
  { id: "astrology", name: "Astrology Reading", duration: "45-90 min" },
  { id: "psychic", name: "Psychic Reading", duration: "30-60 min" },
  { id: "love", name: "Love & Relationships", duration: "30-45 min" },
  { id: "energy", name: "Energy Healing", duration: "60-90 min" },
  { id: "dream", name: "Dream Interpretation", duration: "30-45 min" },
]

const psychics = [
  { id: "luna-starweaver", name: "Luna Starweaver", rating: 4.9, status: "online" },
  { id: "sage-moonwhisper", name: "Sage Moonwhisper", rating: 4.8, status: "busy" },
  { id: "crystal-visionheart", name: "Crystal Visionheart", rating: 4.7, status: "online" },
  { id: "phoenix-soulfire", name: "Phoenix Soulfire", rating: 4.9, status: "online" },
]

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedPsychic, setSelectedPsychic] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    question: "",
  })

  useEffect(() => {
    const serviceParam = searchParams.get("service")
    const psychicParam = searchParams.get("psychic")

    if (serviceParam) {
      setSelectedService(serviceParam)
    }
    if (psychicParam) {
      setSelectedPsychic(psychicParam)
    }
  }, [searchParams])

  const selectedServiceData = services.find((s) => s.id === selectedService)
  const selectedPsychicData = psychics.find((p) => p.id === selectedPsychic)

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Handle booking submission
    console.log("Booking submitted:", {
      service: selectedService,
      psychic: selectedPsychic,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    })
    setStep(5) // Success step
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                      step >= stepNumber ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                    )}
                  >
                    {step > stepNumber ? <CheckCircle className="h-4 w-4" /> : stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div className={cn("w-12 h-0.5 mx-2", step > stepNumber ? "bg-primary" : "bg-muted")} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2">
              <div className="text-sm text-muted-foreground">
                Step {step} of 4:{" "}
                {step === 1
                  ? "Select Service"
                  : step === 2
                    ? "Choose Psychic"
                    : step === 3
                      ? "Pick Date & Time"
                      : "Your Information"}
              </div>
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Your Sacred Service</CardTitle>
                <CardDescription>Choose the divine reading that calls to your soul and aligns with your spiritual needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={cn(
                        "p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md",
                        selectedService === service.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50",
                      )}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-foreground">{service.name}</h3>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end pt-4">
                  <Button onClick={handleNext} disabled={!selectedService}>
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Spiritual Guide</CardTitle>
                <CardDescription>Select from our gifted spiritual masters who will guide you on your sacred journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {psychics.map((psychic) => (
                    <div
                      key={psychic.id}
                      className={cn(
                        "p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md",
                        selectedPsychic === psychic.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50",
                      )}
                      onClick={() => setSelectedPsychic(psychic.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-foreground">{psychic.name}</h3>
                            <Badge
                              variant={psychic.status === "online" ? "default" : "secondary"}
                              className={psychic.status === "online" ? "bg-green-500" : "bg-yellow-500"}
                            >
                              {psychic.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                              {psychic.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button onClick={handleNext} disabled={!selectedPsychic}>
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Your Sacred Time</CardTitle>
                <CardDescription>Choose the perfect moment for your divine reading when the cosmic energies align with your soul</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-base font-medium mb-3 block">Select Date</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      className="rounded-md border"
                    />
                  </div>
                  <div>
                    <Label className="text-base font-medium mb-3 block">Available Times</Label>
                    <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="justify-start"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button onClick={handleNext} disabled={!selectedDate || !selectedTime}>
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Your Spiritual Profile</CardTitle>
                <CardDescription>Please share your details so we can personalize your divine reading experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Birth Date (Optional)</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="question">Your Question or Focus Area</Label>
                  <Textarea
                    id="question"
                    placeholder="What would you like guidance on? (Optional but helpful for your psychic)"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    rows={4}
                  />
                </div>

                {/* Booking Summary */}
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span>{selectedServiceData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Psychic:</span>
                      <span>{selectedPsychicData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{selectedDate ? format(selectedDate, "PPP") : ""}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{selectedTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.firstName || !formData.lastName || !formData.email}
                    className="min-w-32"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Complete Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 5 && (
            <Card>
              <CardContent className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h2>
                <p className="text-muted-foreground mb-6">
                  Your reading has been successfully booked. You'll receive a confirmation email shortly.
                </p>
                <div className="bg-secondary/20 p-4 rounded-lg mb-6 text-left max-w-md mx-auto">
                  <h3 className="font-semibold text-foreground mb-3">Your Booking Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span>{selectedServiceData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Psychic:</span>
                      <span>{selectedPsychicData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{selectedDate ? format(selectedDate, "PPP") : ""}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{selectedTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => (window.location.href = "/")}>Return Home</Button>
                  <Button variant="outline" onClick={() => (window.location.href = "/account")}>
                    View My Bookings
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              <span>Certified Psychics</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
