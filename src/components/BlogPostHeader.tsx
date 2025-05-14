
import { format } from "date-fns";
import { BlogPost } from "@/data/blogPosts";

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  const { title, category, publishedAt, readTime, coverImage } = post;

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 mb-3">
        <span className="text-sm font-medium px-2 py-1 rounded bg-blog-light text-blog-accent">
          {category}
        </span>
        <span className="text-blog-muted text-sm">
          {format(new Date(publishedAt), "MMM d, yyyy")}
        </span>
        <span className="text-blog-muted text-sm">·</span>
        <span className="text-blog-muted text-sm">{readTime} min read</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blog-primary mb-6">
        {title}
      </h1>
      
      <div className="aspect-[21/9] overflow-hidden rounded-lg mb-8">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BlogPostHeader;
