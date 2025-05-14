
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getFeaturedBlogPost, getLatestBlogPosts } from "@/data/blogPosts";
import { BookOpen } from "lucide-react";

const Index = () => {
  const featuredPost = getFeaturedBlogPost();
  const latestPosts = getLatestBlogPosts(4).filter(post => post.id !== featuredPost.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-blog-light py-12 md:py-20">
          <div className="blog-container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blog-primary mb-4">
                  BlogNest
                </h1>
                <p className="text-xl text-blog-muted mb-6">
                  Thoughtful articles on design, development, and digital experiences.
                </p>
                <Link 
                  to="/all-posts" 
                  className="inline-flex items-center bg-blog-accent text-white px-6 py-3 rounded-lg hover:bg-blog-accent/90 transition-colors"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore All Posts
                </Link>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={featuredPost.coverImage}
                    alt="Featured post" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-white/20 text-white mb-2 inline-block">
                        {featuredPost.category}
                      </span>
                      <Link to={`/post/${featuredPost.id}`} className="block group">
                        <h2 className="text-2xl font-bold text-white group-hover:text-blog-accent/90 transition-colors">
                          {featuredPost.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest posts section */}
        <section className="py-16">
          <div className="blog-container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-blog-primary">Latest Posts</h2>
              <Link to="/all-posts" className="text-blog-accent hover:text-blog-accent/80 font-medium">
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter section */}
        <section className="bg-blog-light py-16">
          <div className="blog-container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-blog-primary mb-4">Stay Updated</h2>
              <p className="text-blog-muted mb-8">
                Subscribe to our newsletter to receive the latest posts and updates directly in your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blog-accent focus:border-transparent"
                  required
                />
                <button 
                  type="submit"
                  className="bg-blog-accent text-white px-6 py-3 rounded-lg hover:bg-blog-accent/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
