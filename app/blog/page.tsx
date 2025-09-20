import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spiritual Blog | Psychic Insights & Spiritual Guidance | The Conjuring House",
  description: "Discover spiritual insights, psychic guidance, and mystical wisdom in our comprehensive blog. Learn about tarot, astrology, energy healing, and spiritual development.",
  keywords: "spiritual blog, psychic insights, tarot guide, astrology, energy healing, spiritual development, mystical wisdom, psychic advice",
  openGraph: {
    title: "Spiritual Blog | Psychic Insights & Spiritual Guidance",
    description: "Discover spiritual insights, psychic guidance, and mystical wisdom in our comprehensive blog.",
    type: "website",
  },
}

const allBlogPosts = [
  {
    id: "understanding-tarot-cards",
    title: "Understanding Tarot Cards: A Beginner's Guide",
    excerpt:
      "Discover the mystical world of tarot cards and learn how to interpret their meanings for guidance and insight into your life's journey.",
    image: "/mystical-woman-with-long-flowing-hair-and-crystal-.jpg",
    author: "Luna Starweaver",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Tarot",
    featured: true,
  },
  {
    id: "mercury-retrograde-guide",
    title: "Mercury Retrograde: What It Really Means",
    excerpt:
      "Uncover the truth about Mercury retrograde and how to navigate its energy for personal growth, communication, and clarity during these cosmic events.",
    image: "/mystical-forest-with-ethereal-light-rays-and-spiri.jpg",
    author: "Sage Moonwhisper",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Astrology",
    featured: true,
  },
  {
    id: "developing-psychic-abilities",
    title: "Developing Your Natural Psychic Abilities",
    excerpt:
      "Learn practical techniques to enhance your intuitive gifts and connect with your inner wisdom through meditation, energy work, and spiritual practices.",
    image: "/young-woman-with-bright-eyes-holding-crystals.jpg",
    author: "Crystal Visionheart",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Psychic Development",
    featured: false,
  },
  {
    id: "chakra-balancing-guide",
    title: "The Complete Guide to Chakra Balancing",
    excerpt:
      "Explore the seven main chakras and discover powerful techniques to balance your energy centers for optimal physical, emotional, and spiritual well-being.",
    image: "/ethereal-woman-with-golden-hair-and-angelic-presen.jpg",
    author: "Phoenix Soulfire",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "Energy Healing",
    featured: false,
  },
  {
    id: "dream-interpretation-symbols",
    title: "Common Dream Symbols and Their Meanings",
    excerpt:
      "Decode the mysterious language of your dreams by understanding the most common symbols and their spiritual significance in your subconscious mind.",
    image: "/mystical-forest-with-ethereal-light-rays-and-spiri.jpg",
    author: "Crystal Visionheart",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Dream Interpretation",
    featured: false,
  },
  {
    id: "full-moon-rituals",
    title: "Powerful Full Moon Rituals for Manifestation",
    excerpt:
      "Harness the potent energy of the full moon with these sacred rituals designed to amplify your intentions and manifest your deepest desires.",
    image: "/mystical-woman-with-long-flowing-hair-and-crystal-.jpg",
    author: "Luna Starweaver",
    date: "2024-01-03",
    readTime: "5 min read",
    category: "Moon Magic",
    featured: false,
  },
  {
    id: "angel-numbers-guide",
    title: "Angel Numbers: Messages from the Divine",
    excerpt:
      "Discover the spiritual significance of repeating number sequences and learn how your guardian angels communicate through these divine messages.",
    image: "/ethereal-woman-with-golden-hair-and-angelic-presen.jpg",
    author: "Aurora Lightbringer",
    date: "2024-01-01",
    readTime: "7 min read",
    category: "Angel Communication",
    featured: false,
  },
  {
    id: "crystal-healing-beginners",
    title: "Crystal Healing for Beginners: Getting Started",
    excerpt:
      "Enter the world of crystal healing with this comprehensive guide covering the most essential crystals and how to use them for healing and protection.",
    image: "/young-woman-with-bright-eyes-holding-crystals.jpg",
    author: "Crystal Visionheart",
    date: "2023-12-28",
    readTime: "9 min read",
    category: "Crystal Healing",
    featured: false,
  },
]

const categories = [
  "All",
  "Tarot",
  "Astrology",
  "Psychic Development",
  "Energy Healing",
  "Dream Interpretation",
  "Moon Magic",
  "Angel Communication",
  "Crystal Healing",
]

export default function BlogPage() {
  const featuredPosts = allBlogPosts.filter((post) => post.featured)
  const regularPosts = allBlogPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Sacred Spiritual Insights & Divine Wisdom
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            Immerse yourself in our profound collection of spiritual articles, mystical teachings, and divine wisdom that illuminate the ancient arts of divination, spiritual growth, and soul evolution. Discover transformative insights, sacred knowledge, and powerful practices that will deepen your connection to the divine and awaken your inner spiritual gifts.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90 text-foreground">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={`/blog/${post.id}`}>
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button asChild variant="ghost" className="w-full justify-between group/btn">
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Connected to Your Spiritual Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for weekly spiritual insights, exclusive content, and special offers on
            readings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email address" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
