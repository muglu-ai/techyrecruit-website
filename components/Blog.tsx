import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
    {
        title: "5 Essential Skills for Software Developers in 2025",
        excerpt:
            "Discover the most in-demand technical skills that will set you apart in the competitive software development landscape.",
        image: "/placeholder.svg?height=200&width=300",
        readTime: "5 min read",
    },
    {
        title: "How to Ace Your Technical Interview",
        excerpt:
            "Expert tips and strategies to help you prepare for and succeed in your next technical interview process.",
        image: "/placeholder.svg?height=200&width=300",
        readTime: "7 min read",
    },
    {
        title: "Remote Work Best Practices for IT Professionals",
        excerpt:
            "Navigate the world of remote work with proven strategies for productivity, communication, and career growth.",
        image: "/placeholder.svg?height=200&width=300",
        readTime: "6 min read",
    },
];

const Blog: React.FC = () => (
    <section id="blog" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Insights & Tips</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Stay updated with the latest trends, career advice, and industry insights.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <Card
                        key={index}
                        className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="aspect-video bg-slate-200">
                            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                        <CardContent className="p-6">
                            <div className="space-y-3">
                                <Badge variant="outline" className="text-xs border-slate-200 text-slate-600">
                                    {post.readTime}
                                </Badge>
                                <h3 className="text-xl font-semibold text-slate-800 leading-tight">{post.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{post.excerpt}</p>
                                <Button variant="link" className="text-yellow-600 hover:text-yellow-700 p-0 h-auto font-medium">
                                    Read More
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export default Blog;