import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "understanding-tarot-cards",
    title: "Understanding Tarot Cards: A Beginner's Guide",
    excerpt:
      "Discover the mystical world of tarot cards and learn how to interpret their meanings for guidance and insight.",
    image: "/mystical-woman-with-long-flowing-hair-and-crystal-.jpg",
    author: "Luna Starweaver",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Tarot",
  },
  {
    id: "mercury-retrograde-guide",
    title: "Mercury Retrograde: What It Really Means",
    excerpt:
      "Uncover the truth about Mercury retrograde and how to navigate its energy for personal growth and clarity.",
    image: "/ethereal-woman-with-golden-hair-and-angelic-presen.jpg",
    author: "Sage Moonwhisper",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Astrology",
  },
  {
    id: "developing-psychic-abilities",
    title: "Developing Your Natural Psychic Abilities",
    excerpt: "Learn practical techniques to enhance your intuitive gifts and connect with your inner wisdom.",
    image: "/young-woman-with-bright-eyes-holding-crystals.jpg",
    author: "Crystal Visionheart",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Psychic Development",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Spiritual Insights & Wisdom
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our collection of articles on spirituality, divination, and personal growth. Deepen your
            understanding of the mystical arts and discover new ways to connect with your inner wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
