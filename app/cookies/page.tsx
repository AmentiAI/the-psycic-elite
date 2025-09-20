import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cookie, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy | The Conjuring House",
  description: "Learn about how we use cookies on our website to improve your experience and provide personalized content.",
  keywords: "cookie policy, privacy, data protection, website cookies",
  openGraph: {
    title: "Cookie Policy | The Conjuring House",
    description: "Learn about how we use cookies on our website to improve your experience and provide personalized content.",
    type: "website",
  },
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Cookie Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            This Cookie Policy explains how The Conjuring House uses cookies and similar technologies 
            when you visit our website and how you can control them.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-primary" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-muted-foreground">
                  Cookies allow a website to recognize a user's device and remember information about their visit, 
                  such as their preferred language and other settings. This can make your next visit easier and the site more useful to you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use cookies for several purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
                  <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                  <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.</li>
                  <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display relevant and engaging advertisements.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Strictly Necessary Cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      These cookies are essential for you to browse the website and use its features. Without these cookies, 
                      services you have asked for cannot be provided.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Performance Cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      These cookies collect information about how you use our website, such as which pages you visit most often. 
                      This data helps us optimize our website's performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Functionality Cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Targeting/Advertising Cookies</h4>
                    <p className="text-muted-foreground text-sm">
                      These cookies are used to deliver advertisements more relevant to you and your interests. 
                      They may also be used to limit the number of times you see an advertisement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer 
                  and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually 
                  adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>
                <p className="text-muted-foreground mb-4">
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, 
                  including how to see what cookies have been set and how to manage and delete them, visit:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutcookies.org</a></li>
                  <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Some cookies on our website are set by third-party services. These may include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing content</li>
                  <li>Advertising networks for targeted advertising</li>
                  <li>Our affiliate partners for tracking referrals</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We do not control these third-party cookies. Please check the relevant third-party website for more information 
                  about their cookies and how to manage them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website 
                  with a new "Last Updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: privacy@theconjuringhouse.net</p>
                  <p>Phone: (401) 555-PSYCH</p>
                  <p>Address: Providence, Rhode Island</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Experience Our Services?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Now that you understand how we use cookies, why not book a reading with one of our gifted psychics?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                Book Your Reading
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
