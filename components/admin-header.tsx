"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  Link as LinkIcon, 
  Settings, 
  Home,
  Target,
  Users,
  MousePointer,
  TrendingUp
} from "lucide-react"

interface AdminHeaderProps {
  title: string
  description: string
  showStats?: boolean
  stats?: {
    campaigns?: number
    links?: number
    conversions?: number
    revenue?: number
  }
}

export default function AdminHeader({ 
  title, 
  description, 
  showStats = false, 
  stats 
}: AdminHeaderProps) {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/admin",
      label: "Dashboard",
      icon: BarChart3,
      description: "A/B Testing Overview"
    },
    {
      href: "/admin/links",
      label: "Link Management",
      icon: LinkIcon,
      description: "Referral & Outbound Links"
    }
  ]

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin"
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Home className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Site</span>
            </Link>
            <div className="h-4 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          
          {/* Quick Stats */}
          {showStats && stats && (
            <div className="flex items-center space-x-6">
              {stats.campaigns !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{stats.campaigns}</div>
                  <div className="text-xs text-gray-500">Campaigns</div>
                </div>
              )}
              {stats.links !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.links}</div>
                  <div className="text-xs text-gray-500">Links</div>
                </div>
              )}
              {stats.conversions !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{stats.conversions}</div>
                  <div className="text-xs text-gray-500">Conversions</div>
                </div>
              )}
              {stats.revenue !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">${stats.revenue.toFixed(0)}</div>
                  <div className="text-xs text-gray-500">Revenue</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Page Title */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={active ? "default" : "ghost"}
                  className={`h-12 px-6 flex items-center space-x-3 ${
                    active 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs opacity-75">{item.description}</div>
                  </div>
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}




