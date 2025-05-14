
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/BlogPostHeader";
import AuthorBio from "@/components/AuthorBio";
import { getBlogPostById, getLatestBlogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";
import { marked } from "marked";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? getBlogPostById(id) : undefined;
  const relatedPosts = getLatestBlogPosts(3).filter(p => p.id !== id);
  
  useEffect(() => {
    if (!post) {
      navigate("/not-found");
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <article className="py-8 md:py-12">
          <div className="blog-container">
            <BlogPostHeader post={post} />
            
            <div 
              className="blog-content prose prose-lg md:prose-xl max-w-none"
              dangerouslySetInnerHTML={{ __html: marked(post.content) }}
            />
            
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs font-medium px-3 py-1 rounded-full bg-blog-light text-blog-accent"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <AuthorBio author={post.author} />
          </div>
        </article>
        
        {/* Related posts section */}
        <section className="py-12 bg-blog-light">
          <div className="blog-container">
            <h2 className="text-2xl font-bold text-blog-primary mb-8">You might also like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
