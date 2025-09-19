"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import AdminHeader from "@/components/admin-header"
import { 
  Plus, 
  Edit, 
  Trash2, 
  ExternalLink, 
  BarChart3, 
  Copy,
  Eye,
  MousePointer,
  DollarSign
} from "lucide-react"
import { ReferralLink, OutboundLink } from "@/lib/referral-links"

export default function LinksAdminPage() {
  const [referralLinks, setReferralLinks] = useState<ReferralLink[]>([])
  const [outboundLinks, setOutboundLinks] = useState<OutboundLink[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateReferral, setShowCreateReferral] = useState(false)
  const [showCreateOutbound, setShowCreateOutbound] = useState(false)
  const [editingLink, setEditingLink] = useState<ReferralLink | OutboundLink | null>(null)

  useEffect(() => {
    loadLinks()
  }, [])

  const loadLinks = async () => {
    try {
      setLoading(true)
      const [referralResponse, outboundResponse] = await Promise.all([
        fetch('/api/referral-links'),
        fetch('/api/outbound-links')
      ])
      
      const referralData = await referralResponse.json()
      const outboundData = await outboundResponse.json()
      
      setReferralLinks(referralData.links || [])
      setOutboundLinks(outboundData.links || [])
    } catch (error) {
      console.error('Error loading links:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateReferralLink = async (linkData: Partial<ReferralLink>) => {
    try {
      const response = await fetch('/api/referral-links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(linkData)
      })
      
      if (response.ok) {
        await loadLinks()
        setShowCreateReferral(false)
      }
    } catch (error) {
      console.error('Error creating referral link:', error)
    }
  }

  const handleCreateOutboundLink = async (linkData: Partial<OutboundLink>) => {
    try {
      const response = await fetch('/api/outbound-links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(linkData)
      })
      
      if (response.ok) {
        await loadLinks()
        setShowCreateOutbound(false)
      }
    } catch (error) {
      console.error('Error creating outbound link:', error)
    }
  }

  const handleDeleteLink = async (id: number, type: 'referral' | 'outbound') => {
    try {
      const response = await fetch(`/api/${type}-links/${id}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        await loadLinks()
      }
    } catch (error) {
      console.error('Error deleting link:', error)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  if (loading) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader 
        title="Link Management"
        description="Manage referral links and outbound links for your affiliate campaigns"
        showStats={true}
        stats={{
          links: referralLinks.length + outboundLinks.length,
          conversions: referralLinks.reduce((sum, link) => sum + link.conversionCount, 0) + 
                     outboundLinks.reduce((sum, link) => sum + link.conversionCount, 0),
          revenue: referralLinks.reduce((sum, link) => sum + link.revenue, 0) + 
                  outboundLinks.reduce((sum, link) => sum + link.revenue, 0)
        }}
      />
      <div className="max-w-7xl mx-auto p-6">

        <Tabs defaultValue="referral" className="space-y-6">
          <TabsList>
            <TabsTrigger value="referral">Referral Links</TabsTrigger>
            <TabsTrigger value="outbound">Outbound Links</TabsTrigger>
          </TabsList>

          <TabsContent value="referral" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Referral Links</h2>
              <Button onClick={() => setShowCreateReferral(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Referral Link
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {referralLinks.map((link) => (
                <Card key={link.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{link.name}</CardTitle>
                      <Badge className={link.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {link.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Affiliate ID:</span>
                        <span className="font-mono text-xs">{link.affiliateId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Clicks:</span>
                        <span>{link.clickCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Conversions:</span>
                        <span>{link.conversionCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Revenue:</span>
                        <span className="font-semibold text-green-600">${link.revenue.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => copyToClipboard(link.baseUrl)}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy URL
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setEditingLink(link)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleDeleteLink(link.id, 'referral')}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="outbound" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Outbound Links</h2>
              <Button onClick={() => setShowCreateOutbound(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Outbound Link
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outboundLinks.map((link) => (
                <Card key={link.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{link.name}</CardTitle>
                      <Badge className={link.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {link.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Component:</span>
                        <span className="font-mono text-xs">{link.componentId || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Clicks:</span>
                        <span>{link.clickCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Conversions:</span>
                        <span>{link.conversionCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Revenue:</span>
                        <span className="font-semibold text-green-600">${link.revenue.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => copyToClipboard(link.url)}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy URL
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setEditingLink(link)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleDeleteLink(link.id, 'outbound')}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Create Referral Link Modal */}
        {showCreateReferral && (
          <CreateReferralLinkModal
            onClose={() => setShowCreateReferral(false)}
            onCreate={handleCreateReferralLink}
          />
        )}

        {/* Create Outbound Link Modal */}
        {showCreateOutbound && (
          <CreateOutboundLinkModal
            onClose={() => setShowCreateOutbound(false)}
            onCreate={handleCreateOutboundLink}
          />
        )}

        {/* Edit Link Modal */}
        {editingLink && (
          <EditLinkModal
            link={editingLink}
            onClose={() => setEditingLink(null)}
            onSave={async (updates) => {
              const type = 'affiliateId' in editingLink ? 'referral' : 'outbound'
              const response = await fetch(`/api/${type}-links/${editingLink.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates)
              })
              if (response.ok) {
                await loadLinks()
                setEditingLink(null)
              }
            }}
          />
        )}
      </div>
    </div>
  )
}

// Create Referral Link Modal Component
function CreateReferralLinkModal({ 
  onClose, 
  onCreate 
}: { 
  onClose: () => void
  onCreate: (data: Partial<ReferralLink>) => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    baseUrl: '',
    affiliateId: '',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    utmContent: '',
    utmTerm: '',
    isActive: true
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreate(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Create Referral Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="affiliateId">Affiliate ID</Label>
                <Input
                  id="affiliateId"
                  value={formData.affiliateId}
                  onChange={(e) => setFormData({ ...formData, affiliateId: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="baseUrl">Base URL</Label>
              <Input
                id="baseUrl"
                value={formData.baseUrl}
                onChange={(e) => setFormData({ ...formData, baseUrl: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="utmSource">UTM Source</Label>
                <Input
                  id="utmSource"
                  value={formData.utmSource}
                  onChange={(e) => setFormData({ ...formData, utmSource: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="utmMedium">UTM Medium</Label>
                <Input
                  id="utmMedium"
                  value={formData.utmMedium}
                  onChange={(e) => setFormData({ ...formData, utmMedium: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="utmCampaign">UTM Campaign</Label>
                <Input
                  id="utmCampaign"
                  value={formData.utmCampaign}
                  onChange={(e) => setFormData({ ...formData, utmCampaign: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="utmContent">UTM Content</Label>
                <Input
                  id="utmContent"
                  value={formData.utmContent}
                  onChange={(e) => setFormData({ ...formData, utmContent: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
              />
              <Label htmlFor="isActive">Active</Label>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Create Link</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// Create Outbound Link Modal Component
function CreateOutboundLinkModal({ 
  onClose, 
  onCreate 
}: { 
  onClose: () => void
  onCreate: (data: Partial<OutboundLink>) => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    componentId: '',
    trackingId: '',
    category: '',
    action: '',
    relAttributes: 'noopener noreferrer sponsored',
    isActive: true
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreate(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Create Outbound Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="componentId">Component ID</Label>
                <Input
                  id="componentId"
                  value={formData.componentId}
                  onChange={(e) => setFormData({ ...formData, componentId: e.target.value })}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="trackingId">Tracking ID</Label>
                <Input
                  id="trackingId"
                  value={formData.trackingId}
                  onChange={(e) => setFormData({ ...formData, trackingId: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="action">Action</Label>
                <Input
                  id="action"
                  value={formData.action}
                  onChange={(e) => setFormData({ ...formData, action: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="relAttributes">Rel Attributes</Label>
                <Input
                  id="relAttributes"
                  value={formData.relAttributes}
                  onChange={(e) => setFormData({ ...formData, relAttributes: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
              />
              <Label htmlFor="isActive">Active</Label>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Create Link</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// Edit Link Modal Component
function EditLinkModal({ 
  link, 
  onClose, 
  onSave 
}: { 
  link: ReferralLink | OutboundLink
  onClose: () => void
  onSave: (updates: Partial<ReferralLink> | Partial<OutboundLink>) => void
}) {
  const [formData, setFormData] = useState({
    name: link.name,
    description: link.description || '',
    isActive: link.isActive
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle>Edit Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
              />
              <Label htmlFor="isActive">Active</Label>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
