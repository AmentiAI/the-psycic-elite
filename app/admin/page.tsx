"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import AdminHeader from "@/components/admin-header"
import { 
  Campaign, 
  CampaignVariant, 
  abTestingService, 
  TestResult 
} from "@/lib/ab-testing"
import { 
  Plus, 
  Play, 
  Pause, 
  Edit, 
  Trash2, 
  BarChart3, 
  Users, 
  MousePointer,
  TrendingUp,
  Target
} from "lucide-react"

export default function AdminPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null)
  const [variants, setVariants] = useState<CampaignVariant[]>([])
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [showCreateCampaign, setShowCreateCampaign] = useState(false)
  const [showCreateVariant, setShowCreateVariant] = useState(false)

  useEffect(() => {
    loadCampaigns()
  }, [])

  const loadCampaigns = () => {
    const allCampaigns = abTestingService.getCampaigns()
    setCampaigns(allCampaigns)
  }

  const loadVariants = (campaignId: string) => {
    const campaignVariants = abTestingService.getVariants(campaignId)
    setVariants(campaignVariants)
    
    const results = abTestingService.getCampaignMetrics(campaignId)
    setTestResults(results)
  }

  const handleCampaignSelect = (campaign: Campaign) => {
    setSelectedCampaign(campaign)
    loadVariants(campaign.id)
  }

  const handleCreateCampaign = (campaignData: Omit<Campaign, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newCampaign = abTestingService.createCampaign(campaignData)
    setCampaigns([...campaigns, newCampaign])
    setShowCreateCampaign(false)
  }

  const handleCreateVariant = (variantData: Omit<CampaignVariant, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (!selectedCampaign) return
    
    const newVariant = abTestingService.createVariant(variantData)
    loadVariants(selectedCampaign.id)
    setShowCreateVariant(false)
  }

  const getStatusColor = (status: Campaign['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'paused': return 'bg-yellow-100 text-yellow-800'
      case 'draft': return 'bg-gray-100 text-gray-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader 
        title="A/B Testing Dashboard"
        description="Manage your CTA campaigns and track performance"
        showStats={true}
        stats={{
          campaigns: campaigns.length,
          links: 0, // Will be updated when we add link counts
          conversions: variants.reduce((sum, v) => sum + v.metrics.conversions, 0),
          revenue: variants.reduce((sum, v) => sum + v.metrics.revenue, 0)
        }}
      />
      <div className="max-w-7xl mx-auto p-6">

        <Tabs defaultValue="campaigns" className="space-y-6">
          <TabsList>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="links">Links</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Campaigns</h2>
              <Button onClick={() => setShowCreateCampaign(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <Card 
                  key={campaign.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedCampaign?.id === campaign.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => handleCampaignSelect(campaign)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{campaign.name}</CardTitle>
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <CardDescription>{campaign.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Traffic:</span>
                        <span>{campaign.trafficAllocation}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Audience:</span>
                        <span>{campaign.targetAudience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Started:</span>
                        <span>{new Date(campaign.startDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedCampaign && (
              <div className="mt-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Variants for {selectedCampaign.name}</h3>
                  <Button onClick={() => setShowCreateVariant(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Variant
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {variants.map((variant) => (
                    <Card key={variant.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{variant.name}</CardTitle>
                          {variant.isControl && (
                            <Badge className="bg-blue-100 text-blue-800">Control</Badge>
                          )}
                        </div>
                        <CardDescription>{variant.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Weight:</span>
                            <span>{variant.weight}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Impressions:</span>
                            <span>{variant.metrics.impressions.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Clicks:</span>
                            <span>{variant.metrics.clicks.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>CTR:</span>
                            <span>{variant.metrics.clickThroughRate.toFixed(2)}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Conversions:</span>
                            <span>{variant.metrics.conversions.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm font-semibold">
                            <span>Conv. Rate:</span>
                            <span>{variant.metrics.conversionRate.toFixed(2)}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-semibold">Analytics</h2>
            
            {selectedCampaign && testResults.length > 0 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Test Results for {selectedCampaign.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {testResults.map((result) => (
                        <div key={result.variantId} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{result.variantName}</span>
                              {result.isWinner && (
                                <Badge className="bg-green-100 text-green-800">Winner</Badge>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">
                              Sample: {result.sampleSize.toLocaleString()}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600">Improvement</div>
                            <div className={`font-semibold ${result.improvement > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {result.improvement > 0 ? '+' : ''}{result.improvement.toFixed(1)}%
                            </div>
                            <div className="text-xs text-gray-500">
                              Confidence: {result.confidence.toFixed(1)}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="links" className="space-y-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">Link Management</h2>
              <p className="text-gray-600 mb-6">
                Manage referral links and outbound links for your affiliate campaigns
              </p>
              <Button asChild>
                <a href="/admin/links">Go to Link Management</a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-semibold">Settings</h2>
            <Card>
              <CardHeader>
                <CardTitle>Default CTA Configurations</CardTitle>
                <CardDescription>
                  Manage the default configurations for different CTA components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-gray-600">
                    Default configurations are automatically created for new campaigns.
                    You can customize these in the campaign creation process.
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Create Campaign Modal */}
        {showCreateCampaign && (
          <CreateCampaignModal
            onClose={() => setShowCreateCampaign(false)}
            onCreate={handleCreateCampaign}
          />
        )}

        {/* Create Variant Modal */}
        {showCreateVariant && selectedCampaign && (
          <CreateVariantModal
            campaignId={selectedCampaign.id}
            onClose={() => setShowCreateVariant(false)}
            onCreate={handleCreateVariant}
          />
        )}
      </div>
    </div>
  )
}

// Create Campaign Modal Component
function CreateCampaignModal({ 
  onClose, 
  onCreate 
}: { 
  onClose: () => void
  onCreate: (data: Omit<Campaign, 'id' | 'createdAt' | 'updatedAt'>) => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'draft' as Campaign['status'],
    targetAudience: 'all' as Campaign['targetAudience'],
    trafficAllocation: 100,
    startDate: new Date().toISOString().split('T')[0]
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreate(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle>Create New Campaign</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Campaign Name</Label>
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
                required
              />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData({ ...formData, status: value as Campaign['status'] })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Select
                value={formData.targetAudience}
                onValueChange={(value) => setFormData({ ...formData, targetAudience: value as Campaign['targetAudience'] })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Visitors</SelectItem>
                  <SelectItem value="new_visitors">New Visitors</SelectItem>
                  <SelectItem value="returning_visitors">Returning Visitors</SelectItem>
                  <SelectItem value="mobile">Mobile Users</SelectItem>
                  <SelectItem value="desktop">Desktop Users</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="trafficAllocation">Traffic Allocation (%)</Label>
              <Input
                id="trafficAllocation"
                type="number"
                min="1"
                max="100"
                value={formData.trafficAllocation}
                onChange={(e) => setFormData({ ...formData, trafficAllocation: parseInt(e.target.value) })}
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Create Campaign</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// Create Variant Modal Component
function CreateVariantModal({ 
  campaignId, 
  onClose, 
  onCreate 
}: { 
  campaignId: string
  onClose: () => void
  onCreate: (data: Omit<CampaignVariant, 'id' | 'createdAt' | 'updatedAt'>) => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    weight: 50,
    isControl: false,
    isActive: true,
    config: {
      type: 'button' as const,
      title: '',
      description: '',
      buttonText: '',
      buttonColor: '#8B5CF6',
      backgroundColor: 'transparent',
      textColor: '#FFFFFF',
      position: 'inline' as const,
      size: 'medium' as const,
      trackingId: '',
      affiliateUrl: '',
      utmParams: {}
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreate({
      ...formData,
      campaignId,
      metrics: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        conversionRate: 0,
        clickThroughRate: 0,
        revenue: 0,
        lastUpdated: new Date().toISOString()
      }
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Create New Variant</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Variant Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="weight">Weight (%)</Label>
                <Input
                  id="weight"
                  type="number"
                  min="1"
                  max="100"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: parseInt(e.target.value) })}
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
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="isControl"
                checked={formData.isControl}
                onCheckedChange={(checked) => setFormData({ ...formData, isControl: checked })}
              />
              <Label htmlFor="isControl">Is Control Variant</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
              />
              <Label htmlFor="isActive">Is Active</Label>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-4">CTA Configuration</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.config.title}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      config: { ...formData.config, title: e.target.value }
                    })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="buttonText">Button Text</Label>
                  <Input
                    id="buttonText"
                    value={formData.config.buttonText}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      config: { ...formData.config, buttonText: e.target.value }
                    })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="buttonColor">Button Color</Label>
                  <Input
                    id="buttonColor"
                    type="color"
                    value={formData.config.buttonColor}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      config: { ...formData.config, buttonColor: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="trackingId">Tracking ID</Label>
                  <Input
                    id="trackingId"
                    value={formData.config.trackingId}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      config: { ...formData.config, trackingId: e.target.value }
                    })}
                    required
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="affiliateUrl">Affiliate URL</Label>
                  <Input
                    id="affiliateUrl"
                    value={formData.config.affiliateUrl}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      config: { ...formData.config, affiliateUrl: e.target.value }
                    })}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Create Variant</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
