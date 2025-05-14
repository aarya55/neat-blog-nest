
export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  coverImage: string;
  category: string;
  author: Author;
  tags: string[];
}

// Sample authors
const authors: Author[] = [
  {
    id: "author-1",
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    bio: "Alex is a tech writer with over 5 years of experience in the software industry. He loves exploring new technologies and sharing his findings with others.",
  },
  {
    id: "author-2",
    name: "Maya Patel",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    bio: "Maya is a UX designer and writer passionate about creating intuitive and accessible digital experiences. She has worked with various startups and enterprises.",
  },
];

// Sample blog posts
const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "The Evolution of Web Design: From Static Pages to Interactive Experiences",
    excerpt: "Explore the journey of web design from the early days of static HTML pages to today's interactive and immersive digital experiences.",
    content: `
# The Evolution of Web Design: From Static Pages to Interactive Experiences

Web design has come a long way since the early days of the internet. In this article, we'll explore the fascinating evolution of web design from basic HTML pages to the rich, interactive experiences we enjoy today.

## The Early Days: Static HTML

In the early 1990s, websites were simple collections of static HTML pages. These pages featured basic text formatting, simple images, and hyperlinks. Design options were extremely limited, with no CSS to control layout and styling.

Key characteristics of early web design:
- Table-based layouts
- Limited typography
- Simple color schemes
- Basic navigation systems
- Minimal interactivity

## The Introduction of CSS

The introduction and adoption of Cascading Style Sheets (CSS) marked a significant turning point in web design. CSS allowed designers to separate content from presentation, enabling more sophisticated layouts and visual styles without cluttering the HTML.

CSS revolutionized web design by providing:
- Greater control over typography
- More flexible layouts
- Consistent styling across multiple pages
- Easier maintenance and updates

## The Rise of Flash

In the late 1990s and early 2000s, Adobe Flash became wildly popular for creating interactive and animated web experiences. Flash allowed designers to create highly engaging content with animations, audio, and interactive elements that weren't possible with HTML and CSS alone.

However, Flash had significant drawbacks:
- Poor accessibility
- High resource consumption
- SEO limitations
- Incompatibility with iOS devices

## Responsive Web Design

As mobile devices became increasingly popular, the need for websites to adapt to different screen sizes became apparent. Ethan Marcotte introduced the concept of responsive web design in 2010, fundamentally changing how websites are built.

Responsive web design principles include:
- Flexible grid-based layouts
- Responsive images and media
- CSS media queries to adapt to different viewport sizes
- Mobile-first approach to design

## Modern Web Design: Interactive and Immersive

Today's web design focuses on creating immersive, interactive experiences that engage users and provide intuitive interfaces. Modern websites utilize a combination of technologies to create dynamic, responsive, and accessible experiences.

Key aspects of modern web design include:
- Rich animations and transitions
- Microinteractions
- Personalized user experiences
- Accessibility considerations
- Performance optimization

## The Future of Web Design

As technology continues to evolve, web design will follow suit. Emerging technologies like augmented reality (AR), virtual reality (VR), and artificial intelligence (AI) are already beginning to influence how we design and interact with websites.

The future of web design may include:
- Voice and gesture interfaces
- AI-powered personalization
- Immersive 3D environments
- More sophisticated animations and interactions

## Conclusion

The evolution of web design from static HTML pages to rich, interactive experiences represents a fascinating journey of technological advancement and creative innovation. As designers and developers continue to push the boundaries of what's possible on the web, we can expect even more exciting developments in the years to come.
    `,
    publishedAt: "2023-06-15T10:30:00Z",
    readTime: 8,
    coverImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    category: "Web Design",
    author: authors[0],
    tags: ["Web Design", "HTML", "CSS", "JavaScript", "History"],
  },
  {
    id: "post-2",
    title: "Mastering User Experience: Principles for Designing Intuitive Interfaces",
    excerpt: "Learn the fundamental principles behind creating intuitive user interfaces that help users achieve their goals efficiently and enjoyably.",
    content: `
# Mastering User Experience: Principles for Designing Intuitive Interfaces

Creating intuitive user interfaces is both an art and a science. In this article, we'll explore the key principles that guide effective UX design and how you can apply them to create more user-friendly digital products.

## Understanding Your Users

The foundation of good UX design is a deep understanding of your users. This includes their goals, needs, behaviors, and pain points. User research through interviews, surveys, and usability testing provides valuable insights that guide the design process.

Key aspects of user research:
- Developing user personas
- Creating user journey maps
- Identifying pain points and opportunities
- Testing assumptions with real users

## Clarity and Simplicity

Users should instantly understand what actions are possible and how to accomplish their goals. Clear language, recognizable patterns, and simplified workflows reduce cognitive load and make interfaces more intuitive.

Ways to achieve clarity:
- Use plain, concise language
- Remove unnecessary elements
- Create clear visual hierarchies
- Follow established design patterns

## Consistency

Consistency in design creates familiarity and predictability, allowing users to transfer knowledge from one part of your interface to another. This reduces the learning curve and builds user confidence.

Areas where consistency matters:
- Visual design (colors, typography, spacing)
- Interaction patterns
- Terminology
- Layout structure

## Feedback and Responsiveness

Users need confirmation that their actions have been recognized and processed. Immediate feedback creates a sense of control and helps users understand what's happening in the system.

Effective feedback mechanisms include:
- Visual cues (color changes, animations)
- Progress indicators
- Success and error messages
- System status updates

## Accessibility

Good UX design is inclusive design. Creating interfaces that work well for people with disabilities often improves the experience for all users.

Accessibility considerations include:
- Sufficient color contrast
- Keyboard navigation
- Screen reader compatibility
- Alternative text for images
- Resizable text

## Error Prevention and Recovery

Even the most intuitive interfaces will occasionally lead to errors. Design should focus on preventing errors when possible and making recovery simple when they do occur.

Strategies for handling errors:
- Clear error messages
- Helpful suggestions for resolution
- Confirmation for irreversible actions
- Auto-saving and undo functionality

## Flexibility and Efficiency

Interfaces should accommodate both novice and expert users. Providing shortcuts and customization options allows experienced users to work more efficiently without overwhelming beginners.

Ways to build flexibility:
- Keyboard shortcuts
- Customizable dashboards
- Default settings that work for most users
- Progressive disclosure of advanced features

## Conclusion

Creating intuitive user interfaces is an ongoing process of design, testing, and refinement. By applying these fundamental principles and staying focused on user needs, you can create digital experiences that feel natural and effortless to use.

Remember that great UX design often goes unnoticed—it simply allows users to accomplish their goals without friction or confusion. And that invisibility is perhaps the greatest success a designer can achieve.
    `,
    publishedAt: "2023-07-22T14:45:00Z",
    readTime: 10,
    coverImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    category: "UX Design",
    author: authors[1],
    tags: ["UX Design", "UI Design", "Accessibility", "User Testing"],
  },
  {
    id: "post-3",
    title: "The Role of Typography in Modern Web Design",
    excerpt: "Discover how typography choices impact readability, brand identity, and overall user experience in modern web design.",
    content: `
# The Role of Typography in Modern Web Design

Typography is far more than just selecting fonts. It's a critical element that affects readability, establishes visual hierarchy, conveys personality, and contributes significantly to the overall user experience of a website.

## Typography as a Foundation for Good Design

Typography forms the foundation of web design. Even the most visually stunning website will fail if its text is difficult to read or poorly organized. Good typography establishes a strong visual hierarchy, guides users through content, and improves readability.

Key considerations include:
- Font choice
- Line height and line length
- Letter spacing
- Text alignment
- White space

## Selecting the Right Typefaces

Choosing appropriate typefaces is crucial for effective web typography. While there are countless options available, successful web designers understand how to select typefaces that align with brand identity and work well in digital environments.

Guidelines for font selection:
- Consider brand personality and tone
- Ensure readability at various sizes
- Select web-safe fonts or use reliable web font services
- Limit the number of typefaces (typically 2-3)
- Create contrast between heading and body fonts

## Establishing Visual Hierarchy

Typography plays a vital role in creating visual hierarchy, helping users understand the relative importance of different content elements and guiding them through the information.

Methods to establish hierarchy:
- Varying font sizes for different heading levels
- Using different weights (bold, semibold, regular)
- Implementing color strategically
- Creating contrast between different text elements
- Using spacing to group related content

## Responsive Typography

In today's multi-device world, typography must work across various screen sizes. Responsive typography ensures that text remains legible and properly proportioned regardless of the device.

Techniques for responsive typography:
- Fluid typography using viewport units
- Setting minimum and maximum font sizes
- Adjusting line height for different screen sizes
- Reducing heading sizes on mobile devices
- Testing readability across devices

## Typography and Brand Identity

Typography is a powerful tool for expressing brand identity and personality. The fonts you choose can communicate attributes like reliability, innovation, friendliness, or sophistication.

How typography reflects brand attributes:
- Serif fonts often convey tradition, reliability, and authority
- Sans-serif fonts typically suggest modernism, cleanliness, and simplicity
- Script fonts can express elegance, creativity, or personal touch
- Display fonts might convey uniqueness, playfulness, or specific themes

## Accessibility Considerations

Accessible typography ensures that all users, including those with visual impairments or reading disabilities, can consume your content effectively.

Typography accessibility guidelines:
- Maintain sufficient color contrast
- Use relative units for font sizing
- Avoid justified text alignment
- Ensure adequate line spacing
- Keep line lengths reasonable (around 50-75 characters)

## Conclusion

Typography is not merely a decorative element—it's a fundamental component of effective web design. By understanding the principles of good typography and implementing them thoughtfully, designers can significantly improve the usability, readability, and overall experience of their websites.

In an era where content remains king, how that content is presented through typography can make the difference between an engaging, memorable website and one that users quickly abandon.
    `,
    publishedAt: "2023-08-05T09:15:00Z",
    readTime: 7,
    coverImage: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    category: "Typography",
    author: authors[0],
    tags: ["Typography", "Web Design", "Fonts", "Readability"],
  },
  {
    id: "post-4",
    title: "Designing for Accessibility: Making the Web Work for Everyone",
    excerpt: "Learn how to create websites and applications that are accessible to all users, including those with disabilities.",
    content: `
# Designing for Accessibility: Making the Web Work for Everyone

Web accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with websites and tools. It's not just about compliance with regulations—it's about creating an inclusive web that works for everyone.

## Why Accessibility Matters

The web has become an essential resource in many aspects of life: education, employment, commerce, healthcare, and more. When websites are properly designed and coded, people with disabilities can use them effectively. However, when sites are inaccessible, they create barriers that exclude people from using the web.

Key benefits of accessible design:
- Reaches a wider audience (approximately 15% of the world's population has a disability)
- Improves user experience for all users
- Aligns with legal requirements in many jurisdictions
- Demonstrates social responsibility
- Often improves SEO and overall site quality

## Understanding Different Types of Disabilities

To design accessible websites, it's important to understand the diverse range of disabilities that can affect how people use the web.

Major categories include:
- Visual impairments (blindness, low vision, color blindness)
- Hearing impairments (deafness, hard of hearing)
- Motor disabilities (limited fine motor control, slower response time)
- Cognitive disabilities (learning disabilities, distractibility, inability to focus on large amounts of information)
- Seizure disorders (triggered by flashing effects)

## Core Principles of Accessible Design

The Web Content Accessibility Guidelines (WCAG) provide a framework for accessibility based on four principles. Content should be:

1. **Perceivable**: Information must be presentable to users in ways they can perceive.
2. **Operable**: User interface components and navigation must be operable.
3. **Understandable**: Information and operation of the user interface must be understandable.
4. **Robust**: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.

## Practical Accessibility Implementation

Implementing accessibility doesn't have to be overwhelming. Here are key practices organized by category:

### Visual Design
- Use sufficient color contrast (minimum 4.5:1 for normal text)
- Don't rely solely on color to convey information
- Ensure text can be resized up to 200% without loss of functionality
- Provide visible focus indicators for keyboard navigation

### Content Structure
- Use proper heading hierarchy (H1-H6)
- Structure content with semantic HTML elements
- Implement proper landmark regions (header, nav, main, etc.)
- Create descriptive link text that makes sense out of context

### Images and Media
- Add alternative text for all informative images
- Provide captions and transcripts for audio and video content
- Ensure media controls are keyboard accessible
- Avoid auto-playing content or provide clear controls to stop it

### Interactive Elements
- Ensure all functionality is keyboard accessible
- Create custom controls that work with assistive technologies
- Implement proper ARIA attributes when necessary
- Provide clear instructions for complex interactions

### Forms
- Associate labels with form controls
- Group related form elements with fieldset and legend
- Provide clear error messages and suggestions
- Allow sufficient time to complete forms

## Testing for Accessibility

Accessibility testing should be integrated throughout the design and development process.

Effective testing methods include:
- Automated testing tools (like Lighthouse, WAVE, or axe)
- Manual testing with accessibility checklists
- Keyboard-only navigation testing
- Testing with screen readers
- User testing with people with disabilities

## Conclusion

Designing for accessibility is not just a technical requirement or legal obligation—it's about creating a web that works for everyone. By implementing accessible design practices, we create better experiences for all users, regardless of their abilities.

Remember that accessibility is not a one-time effort but an ongoing commitment to inclusive design. By considering the diverse needs of all potential users from the beginning of the design process, we can build a more accessible and equitable web.
    `,
    publishedAt: "2023-09-12T16:20:00Z",
    readTime: 9,
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    category: "Accessibility",
    author: authors[1],
    tags: ["Accessibility", "Inclusive Design", "WCAG", "Usability"],
  },
  {
    id: "post-5",
    title: "The Principles of Effective Visual Hierarchy in Web Design",
    excerpt: "Explore how to use visual hierarchy to guide users through your content and create engaging, effective web experiences.",
    content: `
# The Principles of Effective Visual Hierarchy in Web Design

Visual hierarchy is one of the most fundamental principles in web design. It refers to the arrangement and presentation of elements in a way that implies importance, influencing the order in which the human eye perceives what it sees. When applied effectively, visual hierarchy guides users through the content in a meaningful and engaging way.

## Why Visual Hierarchy Matters

In an age of information overload, users typically scan web pages rather than reading them thoroughly. Effective visual hierarchy:

- Guides users to important content first
- Makes information easier to process and understand
- Creates a logical flow through the page
- Improves overall user experience and engagement
- Increases the likelihood of conversion

## Key Elements of Visual Hierarchy

Several design elements can be manipulated to establish visual hierarchy:

### Size and Scale

Larger elements naturally draw more attention than smaller ones. This is why headlines are typically larger than body text, and why important buttons are often bigger than secondary actions.

Tips for using size effectively:
- Use size proportionally to importance
- Create clear differences between different levels of information
- Consider how size relationships work across different viewport sizes

### Color and Contrast

Elements with high color contrast stand out more prominently than those with low contrast. Bright or unique colors can be used to highlight particularly important elements.

Effective use of color and contrast includes:
- Using accent colors strategically for calls-to-action
- Ensuring sufficient contrast for readability
- Limiting the color palette for maximum impact
- Using color psychology to evoke appropriate emotions

### Typography

Typography plays a crucial role in establishing visual hierarchy through variations in size, weight, style, and spacing.

Typography hierarchy techniques:
- Vary font weights (bold, regular, light)
- Use different fonts for headings and body text
- Adjust letter spacing and line height
- Apply italic or uppercase styles selectively

### Spacing and Whitespace

The space around elements affects how they're perceived. More whitespace around an element gives it more prominence and improves readability.

Effective use of spacing includes:
- Grouping related items closer together
- Using more space around important elements
- Creating breathing room between sections
- Maintaining consistent spacing patterns

### Position and Layout

Elements positioned at the top of the page or in the center typically receive more attention than those at the bottom or periphery.

Position considerations:
- Place most important information "above the fold"
- Use the F or Z pattern to align with natural eye movement
- Consider cultural reading patterns (left-to-right vs. right-to-left)
- Create focal points at key positions

### Visual Direction

Design elements can create directional cues that guide the user's eye through the content in a specific sequence.

Techniques for visual direction:
- Use arrows or pointing elements
- Implement lines or borders that lead the eye
- Create flow through alignment
- Use images of people looking toward important content

## Practical Application of Visual Hierarchy

Let's explore how these principles can be applied to common web page elements:

### Navigation

- Make current section visually distinct
- Use subtle variations for different navigation levels
- Consider using icons alongside text for important links
- Ensure sufficient contrast for clickable elements

### Content Pages

- Create clear heading hierarchies (H1, H2, H3, etc.)
- Use featured images to draw attention
- Highlight important quotes or statistics
- Implement scannable text with bullets and subheadings

### Landing Pages

- Make primary call-to-action visually dominant
- Create clear separation between different sections
- Use visual weight to emphasize benefits or features
- Direct attention to conversion elements

### Forms

- Clearly distinguish labels from input fields
- Make submit buttons stand out
- Group related form fields together
- Indicate required fields consistently

## Testing Visual Hierarchy

To ensure your visual hierarchy is effective, consider these testing methods:

- Five-second tests (what do users remember after viewing for five seconds?)
- Heat map analysis (where are users looking and clicking?)
- Squint tests (what stands out when you squint at the page?)
- User testing with specific tasks

## Conclusion

Effective visual hierarchy doesn't happen by accident—it requires thoughtful design decisions based on an understanding of human perception and your specific communication goals. By strategically applying the principles of size, color, typography, spacing, and positioning, you can create websites that not only look good but also guide users effortlessly through your content.

Remember that visual hierarchy should always serve the content and the user's needs. The most beautiful design will fail if it doesn't effectively communicate information in a way that users can easily understand and act upon.
    `,
    publishedAt: "2023-10-18T11:05:00Z",
    readTime: 8,
    coverImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    category: "Design Principles",
    author: authors[0],
    tags: ["Visual Design", "Web Design", "User Experience", "Layout"],
  },
  {
    id: "post-6",
    title: "Mobile-First Design: Best Practices for the Small Screen",
    excerpt: "Learn how to design effective mobile experiences that prioritize the constraints and opportunities of small-screen devices.",
    content: `
# Mobile-First Design: Best Practices for the Small Screen

Mobile-first design is an approach that prioritizes designing for mobile devices before desktop. This methodology has become increasingly important as mobile internet usage continues to surpass desktop usage globally. In this article, we'll explore the principles and best practices for effective mobile-first design.

## The Case for Mobile-First Design

The mobile-first approach offers several advantages:

- **Focuses on core content and functionality**: The constraints of mobile force designers to prioritize what's truly essential.
- **Ensures mobile compatibility**: Rather than retrofitting desktop designs, mobile-first ensures solid mobile experiences.
- **Improves performance**: Starting with the limitations of mobile often results in leaner, faster-loading websites.
- **Aligns with current usage trends**: For many websites, mobile traffic exceeds desktop traffic.
- **Future-proofs your design**: As new devices emerge, designs based on core principles adapt more easily.

## Core Principles of Mobile-First Design

### Progressive Enhancement

Start with a basic, functional experience for the most limited devices and progressively add features, content, and visual complexity as screen size and device capabilities increase.

Implementation strategies:
- Begin with essential content and functionality
- Add enhancements through CSS media queries
- Layer JavaScript functionality where appropriate
- Test across device capabilities

### Content Prioritization

With limited screen space, carefully determining what content deserves prominence becomes crucial.

Content prioritization techniques:
- Conduct user research to identify key user needs
- Create content hierarchies based on importance
- Consider the context of mobile usage
- Implement "progressive disclosure" of secondary information

### Touch-Friendly Interaction Design

Mobile interfaces need to accommodate fingers rather than mouse pointers, requiring different interaction patterns.

Touch design considerations:
- Use adequately sized touch targets (minimum 44×44 pixels)
- Provide sufficient spacing between interactive elements
- Position important actions within thumb reach
- Include visible and touch-friendly states (hover, active, focus)

### Performance Optimization

Mobile users often deal with slower connections and have less patience for loading times.

Performance best practices:
- Optimize images and media files
- Minimize HTTP requests
- Implement lazy loading for non-critical content
- Reduce JavaScript and CSS file sizes
- Consider using performance budgets

## Practical Implementation Guidelines

Let's look at specific elements of mobile design and best practices for each:

### Navigation

Mobile navigation requires special consideration due to limited space.

Effective approaches include:
- Hamburger menus for secondary navigation
- Bottom navigation bars for primary actions
- Clear back buttons and breadcrumbs
- Avoiding deep navigation hierarchies

### Typography and Readability

Reading on smaller screens presents unique challenges that good typography can address.

Mobile typography best practices:
- Use a minimum font size of 16px for body text
- Maintain sufficient line height (1.4-1.5)
- Keep line lengths short (30-40 characters per line is ideal)
- Ensure high contrast between text and background
- Choose fonts designed for screen readability

### Forms and Input

Forms can be particularly challenging on mobile devices. Streamlining the input process is essential.

Mobile form best practices:
- Minimize form fields to essential information only
- Use appropriate input types (email, tel, number, etc.)
- Implement input masks where helpful
- Provide clear error messages
- Consider single-column layouts for forms

### Images and Media

Visual content needs careful handling to be effective on small screens.

Best practices for mobile media:
- Use responsive images with appropriate resolutions
- Consider using the picture element for art direction
- Implement proper aspect ratios that work across devices
- Provide text alternatives for important images
- Be judicious with auto-playing media

### Layout and Grids

Mobile layouts need to maximize limited space while maintaining clarity and usability.

Mobile layout considerations:
- Use single-column layouts for straightforward content
- Implement card-based designs for collections of content
- Consider the impact of viewport height as well as width
- Allow content to breathe with sufficient whitespace
- Align elements to a consistent grid system

## Testing Mobile-First Designs

Thorough testing is essential for successful mobile experiences:

- Test on actual devices, not just emulators
- Consider various network conditions
- Test with different input methods (touch, voice, etc.)
- Gather feedback from real users in realistic contexts
- Use analytics to identify potential problem areas

## Conclusion

Mobile-first design is no longer optional—it's a necessity for creating effective digital experiences. By embracing the constraints of mobile devices and focusing on core content, performance, and usability, designers can create experiences that work well across all devices.

Remember that mobile-first doesn't mean mobile-only. The goal is to create websites and applications that adapt seamlessly across the entire spectrum of devices, starting with the most constrained environments and enhancing the experience as more screen space becomes available.
    `,
    publishedAt: "2023-11-03T13:40:00Z",
    readTime: 9,
    coverImage: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    category: "Mobile Design",
    author: authors[1],
    tags: ["Mobile Design", "Responsive Design", "UX Design", "Web Design"],
  },
];

// Helper function to get blog post by ID
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

// Helper function to get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

// Helper function to get latest blog posts
export const getLatestBlogPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};

// Helper function to get featured blog post (most recent one)
export const getFeaturedBlogPost = (): BlogPost => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0];
};
