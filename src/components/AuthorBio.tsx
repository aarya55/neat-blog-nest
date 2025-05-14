
import { Author } from "@/data/blogPosts";

interface AuthorBioProps {
  author: Author;
}

const AuthorBio = ({ author }: AuthorBioProps) => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center">
        <img 
          src={author.avatar} 
          alt={author.name}
          className="w-16 h-16 rounded-full object-cover mr-4"  
        />
        <div>
          <h3 className="text-lg font-bold text-blog-primary">{author.name}</h3>
          <p className="text-blog-muted">{author.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
