
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getAllBlogPosts } from "@/data/blogPosts";
import { useState } from "react";

const AllPosts = () => {
  const allPosts = getAllBlogPosts();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get unique categories
  const categories = [...new Set(allPosts.map(post => post.category))];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter posts based on search term and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="blog-container">
          <h1 className="blog-heading mb-8">All Blog Posts</h1>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3">
              <input
                type="search"
                placeholder="Search posts..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blog-accent focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-1/3">
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blog-accent focus:border-transparent bg-white"
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-blog-primary mb-2">No posts found</h2>
              <p className="text-blog-muted">Try changing your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllPosts;
