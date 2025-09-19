import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, Lock, Eye, Database, Users, Mail } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Your privacy is sacred to us. Learn how we collect, use, and protect your personal information in accordance with the highest standards of spiritual confidentiality.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollArea className="h-[600px] w-full">
            <div className="space-y-8">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <span>1. Introduction</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    At Conjuring Psychic Services, we understand that your spiritual journey is deeply personal and private. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our psychic services.
                  </p>
                  <p className="text-muted-foreground">
                    We are committed to protecting your privacy and maintaining the confidentiality of your personal information. By using our Service, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </CardContent>
              </Card>

              {/* Information We Collect */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-primary" />
                    <span>2. Information We Collect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us and information we obtain automatically when you use our Service:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Personal Information You Provide:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>Name, email address, and phone number</li>
                        <li>Birth date and time (for astrological readings)</li>
                        <li>Payment information (processed securely by third parties)</li>
                        <li>Questions and concerns you share during readings</li>
                        <li>Account preferences and settings</li>
                        <li>Communications with our psychics and support team</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Information We Collect Automatically:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>Device information (IP address, browser type, operating system)</li>
                        <li>Usage data (pages visited, time spent, features used)</li>
                        <li>Cookies and similar tracking technologies</li>
                        <li>Location data (if you choose to share it)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>3. How We Use Your Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide personalized psychic readings and spiritual guidance</li>
                    <li>Process payments and manage your account</li>
                    <li>Communicate with you about your readings and our services</li>
                    <li>Improve our website and service offerings</li>
                    <li>Send you newsletters and spiritual insights (with your consent)</li>
                    <li>Ensure the security and integrity of our platform</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Information Sharing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>4. Information Sharing and Disclosure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We respect the sacred nature of your spiritual journey and do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                    <li><strong>Service Providers:</strong> With trusted third parties who assist us in operating our platform (payment processors, hosting services)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Emergency Situations:</strong> To protect the safety of our users or the public</li>
                  </ul>
                  <p className="text-muted-foreground">
                    All third parties with whom we share information are bound by strict confidentiality agreements.
                  </p>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>5. Data Security and Protection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Encryption of sensitive data both in transit and at rest</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and authentication measures</li>
                    <li>Secure data centers with physical security measures</li>
                    <li>Employee training on data protection and confidentiality</li>
                    <li>Incident response procedures for data breaches</li>
                  </ul>
                  <p className="text-muted-foreground">
                    While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to using industry-standard practices.
                  </p>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card>
                <CardHeader>
                  <CardTitle>6. Your Privacy Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    You have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                    <li><strong>Restriction:</strong> Request limitation of processing of your information</li>
                    <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                  </ul>
                  <p className="text-muted-foreground">
                    To exercise these rights, please contact us using the information provided in the Contact section.
                  </p>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle>7. Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We use cookies and similar technologies to enhance your experience on our website:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
                  </ul>
                  <p className="text-muted-foreground">
                    You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.
                  </p>
                </CardContent>
              </Card>

              {/* Data Retention */}
              <Card>
                <CardHeader>
                  <CardTitle>8. Data Retention</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Account information: Until you delete your account or request deletion</li>
                    <li>Reading records: 7 years for spiritual and legal purposes</li>
                    <li>Payment information: As required by law and payment processors</li>
                    <li>Communication records: 3 years for customer service purposes</li>
                    <li>Analytics data: Anonymized after 2 years</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Children's Privacy */}
              <Card>
                <CardHeader>
                  <CardTitle>9. Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our Service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                  <p className="text-muted-foreground">
                    If we discover that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
                  </p>
                </CardContent>
              </Card>

              {/* International Transfers */}
              <Card>
                <CardHeader>
                  <CardTitle>10. International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                  </p>
                </CardContent>
              </Card>

              {/* Changes to Policy */}
              <Card>
                <CardHeader>
                  <CardTitle>11. Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                  <p className="text-muted-foreground">
                    We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>12. Contact Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Privacy Officer:</strong> privacy@conjuringpsychic.com<br />
                      <strong>General Inquiries:</strong> info@conjuringpsychic.com<br />
                      <strong>Phone:</strong> 1-800-CONJURE-1<br />
                      <strong>Address:</strong> Conjuring Psychic Services, 123 Spiritual Way, Mystic City, MC 12345
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We will respond to your privacy inquiries within 30 days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </div>

      <Footer />
    </main>
  )
}
