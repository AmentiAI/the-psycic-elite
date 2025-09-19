import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, FileText, Scale, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Terms and Conditions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Please read these terms and conditions carefully before using our psychic services. By accessing our website and services, you agree to be bound by these terms.
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
                    <Shield className="h-5 w-5 text-primary" />
                    <span>1. Introduction and Acceptance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Welcome to Conjuring Psychic Services, a platform providing spiritual guidance and psychic services. These Terms and Conditions ("Terms") govern your use of our website, mobile applications, and services (collectively, the "Service") operated by Conjuring Psychic Services ("us", "we", or "our").
                  </p>
                  <p className="text-muted-foreground">
                    By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                  </p>
                </CardContent>
              </Card>

              {/* Service Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-primary" />
                    <span>2. Service Description</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Conjuring Psychic Services provides spiritual guidance services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Tarot card readings and interpretations</li>
                    <li>Astrological consultations and birth chart analysis</li>
                    <li>Psychic readings and intuitive guidance</li>
                    <li>Energy healing and chakra balancing sessions</li>
                    <li>Dream interpretation and spiritual counseling</li>
                    <li>Love and relationship guidance</li>
                    <li>Mediumship and spirit communication</li>
                  </ul>
                  <p className="text-muted-foreground">
                    All services are provided for entertainment and guidance purposes only. We do not guarantee the accuracy of any reading or prediction.
                  </p>
                </CardContent>
              </Card>

              {/* User Responsibilities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <span>3. User Responsibilities and Conduct</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    By using our Service, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide accurate and truthful information when creating an account</li>
                    <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                    <li>Respect our psychics and staff members at all times</li>
                    <li>Not use the Service for any fraudulent or deceptive purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not share your account credentials with others</li>
                    <li>Be at least 18 years old to use our services</li>
                  </ul>
                  <p className="text-muted-foreground">
                    We reserve the right to terminate or suspend your account if you violate these terms.
                  </p>
                </CardContent>
              </Card>

              {/* Payment and Refunds */}
              <Card>
                <CardHeader>
                  <CardTitle>4. Payment Terms and Refund Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    All payments are processed securely through our third-party payment processors. By making a payment, you agree to the following:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>All sales are final unless otherwise specified</li>
                    <li>Refunds may be considered on a case-by-case basis within 24 hours of service completion</li>
                    <li>No refunds will be provided for completed readings or services</li>
                    <li>We reserve the right to refuse service to anyone</li>
                    <li>Prices are subject to change without notice</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Disclaimers */}
              <Card>
                <CardHeader>
                  <CardTitle>5. Disclaimers and Limitations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Important Disclaimers:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Our services are for entertainment and guidance purposes only</li>
                    <li>We do not guarantee the accuracy of any reading, prediction, or spiritual guidance</li>
                    <li>Our services are not a substitute for professional medical, legal, or financial advice</li>
                    <li>You should always consult with qualified professionals for serious life decisions</li>
                    <li>We are not responsible for any decisions you make based on our services</li>
                    <li>Results may vary and are not guaranteed</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Privacy */}
              <Card>
                <CardHeader>
                  <CardTitle>6. Privacy and Data Protection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                  </p>
                  <p className="text-muted-foreground">
                    We collect and process personal information in accordance with applicable data protection laws and our Privacy Policy.
                  </p>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card>
                <CardHeader>
                  <CardTitle>7. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    To the fullest extent permitted by law, Conjuring Psychic Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                  </p>
                  <p className="text-muted-foreground">
                    Our total liability to you for any damages arising from or related to these Terms or the Service shall not exceed the amount you paid us for the specific service giving rise to the claim.
                  </p>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card>
                <CardHeader>
                  <CardTitle>8. Governing Law and Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions.
                  </p>
                  <p className="text-muted-foreground">
                    Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </CardContent>
              </Card>

              {/* Changes to Terms */}
              <Card>
                <CardHeader>
                  <CardTitle>9. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p className="text-muted-foreground">
                    By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>10. Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Email:</strong> legal@conjuringpsychic.com<br />
                      <strong>Phone:</strong> 1-800-CONJURE-1<br />
                      <strong>Address:</strong> Conjuring Psychic Services, 123 Spiritual Way, Mystic City, MC 12345
                    </p>
                  </div>
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
