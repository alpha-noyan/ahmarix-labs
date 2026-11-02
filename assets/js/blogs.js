
const blogs = [
  {
    id: 1,
    slug: "future-of-mobile-applications",
    title: "The Future of Mobile Applications",
    category: "Technology",
    date: "November 1, 2026",
    readTime: "4 min read",
    emoji: "📱",
    color: "bg-blue-100",
    excerpt: "Discover how mobile applications are changing the way we communicate, work and interact with technology.",
    content: `
      <p>Mobile applications have become an important part of our everyday lives. From communication and education to entertainment and productivity, mobile apps help people complete tasks more efficiently.</p>

      <h2>Technology Is Evolving</h2>
      <p>Modern mobile applications are becoming smarter, faster and more accessible. Developers are continuously exploring new technologies to improve the user experience.</p>

      <h2>The Role of Artificial Intelligence</h2>
      <p>Artificial intelligence is creating new opportunities for mobile app development. AI-powered features can help users receive personalized recommendations, automate repetitive tasks and interact with applications more naturally.</p>

      <h2>Better User Experiences</h2>
      <p>Successful applications are not only about advanced technology. They also need simple interfaces, reliable performance and features that solve real problems.</p>

      <h2>Looking Ahead</h2>
      <p>The future of mobile applications will depend on innovation, accessibility and understanding what users actually need. Developers who focus on these principles can create products that make a meaningful difference.</p>
    `
  },

  {
    id: 2,
    slug: "why-simple-app-design-matters",
    title: "Why Simple App Design Matters",
    category: "Mobile Apps",
    date: "October 25, 2026",
    readTime: "3 min read",
    emoji: "🎨",
    color: "bg-purple-100",
    excerpt: "Learn why clean interfaces and simple navigation are essential for creating successful mobile applications.",
    content: `
      <p>When someone opens an application for the first time, the experience should feel natural. Users should be able to understand the interface without spending time learning how everything works.</p>

      <h2>First Impressions Matter</h2>
      <p>The design of an application creates the first impression. A clean layout, readable text and consistent colors help users feel comfortable while exploring the product.</p>

      <h2>Reduce Unnecessary Complexity</h2>
      <p>Adding too many buttons, menus and features can make an application confusing. Good design focuses on the most important actions and makes them easy to find.</p>

      <h2>Focus on User Needs</h2>
      <p>Every design decision should have a purpose. Developers and designers should understand their audience and build interfaces around real user requirements.</p>

      <h2>Conclusion</h2>
      <p>Simple design does not mean limited functionality. It means presenting useful features in a clear and understandable way. The best experiences often come from removing unnecessary complexity.</p>
    `
  },

  {
    id: 3,
    slug: "technology-solving-everyday-problems",
    title: "How Technology Solves Everyday Problems",
    category: "Innovation",
    date: "October 18, 2026",
    readTime: "4 min read",
    emoji: "💡",
    color: "bg-yellow-100",
    excerpt: "Explore how small digital solutions can make everyday activities easier and more convenient.",
    content: `
      <p>Technology is most valuable when it solves problems that people face in their everyday lives. Sometimes, a small application or a simple digital feature can save time and make an ordinary task much easier.</p>

      <h2>Understanding Real Problems</h2>
      <p>Good digital products begin with identifying a problem. Developers should understand what users struggle with before deciding which technologies to use.</p>

      <h2>Practical Digital Solutions</h2>
      <p>Mobile applications can help with communication, language accessibility, location awareness, education and entertainment. These solutions make useful services available directly from smartphones.</p>

      <h2>Innovation Starts With Ideas</h2>
      <p>Innovation does not always require complicated technology. A simple idea, when developed thoughtfully, can provide significant value to its users.</p>

      <h2>The Importance of Accessibility</h2>
      <p>Digital products should be designed for different types of users. Clear interfaces, understandable language and reliable performance help more people benefit from technology.</p>

      <h2>Final Thoughts</h2>
      <p>Technology should make life easier rather than more complicated. Understanding people and their problems is the foundation of meaningful innovation.</p>
    `
  },

  {
    id: 4,
    slug: "importance-of-digital-communication",
    title: "The Importance of Digital Communication",
    category: "Technology",
    date: "October 10, 2026",
    readTime: "3 min read",
    emoji: "🌐",
    color: "bg-green-100",
    excerpt: "Understand how digital tools are transforming communication and connecting people around the world.",
    content: `
      <p>Digital communication has changed how people interact with one another. Today, people can share information, exchange ideas and stay connected regardless of geographical distance.</p>

      <h2>A Connected World</h2>
      <p>Smartphones and internet-based applications have made communication faster and more convenient. Families, friends and professionals can communicate through messaging, voice and video services.</p>

      <h2>Communication Through Applications</h2>
      <p>Mobile applications provide different ways to share information. They support text messages, multimedia content, voice communication and real-time collaboration.</p>

      <h2>Technology and Accessibility</h2>
      <p>Digital tools can help overcome language and accessibility barriers. Features such as multilingual typing and voice input allow more people to communicate comfortably.</p>

      <h2>What Comes Next?</h2>
      <p>As technology continues to develop, digital communication will become even more integrated into everyday activities. Creating reliable and user-friendly tools will remain important.</p>
    `
  }
];


// Generate blog cards
function renderBlogs(filter = "All") {
  const container = document.getElementById("blogContainer");
  const emptyMessage = document.getElementById("emptyMessage");

  if (!container) return;

  const filteredBlogs = filter === "All"
    ? blogs
    : blogs.filter(blog => blog.category === filter);

  container.innerHTML = filteredBlogs.map(blog => `
    <article class="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">

      <div class="${blog.color} h-48 flex items-center justify-center text-7xl">
        ${blog.emoji}
      </div>

      <div class="p-6">
        <div class="flex items-center justify-between gap-2">
          <span class="text-brand text-xs font-bold uppercase">
            ${blog.category}
          </span>
          <span class="text-xs text-slate-400">${blog.readTime}</span>
        </div>

        <h2 class="text-xl font-bold mt-4 leading-snug">
          ${blog.title}
        </h2>

        <p class="text-slate-500 text-sm mt-3 leading-6">
          ${blog.excerpt}
        </p>

        <div class="border-t mt-6 pt-5 flex justify-between items-center">
          <span class="text-xs text-slate-400">${blog.date}</span>

          <a href="blog.html?slug=${encodeURIComponent(blog.slug)}"
             class="text-brand text-sm font-semibold hover:underline">
            Read More →
          </a>
        </div>
      </div>
    </article>
  `).join("");

  if (emptyMessage) {
    emptyMessage.classList.toggle("hidden", filteredBlogs.length !== 0);
  }
}


// Category filters
function setupFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(btn => {
        btn.classList.remove("bg-brand", "text-white");
        btn.classList.add("bg-slate-100");
      });

      button.classList.add("bg-brand", "text-white");
      button.classList.remove("bg-slate-100");

      renderBlogs(filter);
    });
  });
}


// Render individual blog
function renderSingleBlog() {
  const articleContainer = document.getElementById("articleContent");

  if (!articleContainer) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const blog = blogs.find(item => item.slug === slug);

  if (!blog) {
    articleContainer.innerHTML = `
      <div class="text-center py-20">
        <h1 class="text-3xl font-bold">Article Not Found</h1>
        <p class="text-slate-500 mt-4">
          Sorry, the article you are looking for does not exist.
        </p>
        <a href="blogs.html"
           class="inline-block mt-6 bg-brand text-white px-6 py-3 rounded-xl">
          Back to Blogs
        </a>
      </div>
    `;
    return;
  }

  document.title = `${blog.title} | Ahmarix Labs`;

  articleContainer.innerHTML = `
    <div class="${blog.color} rounded-3xl h-64 flex items-center justify-center text-8xl mb-10">
      ${blog.emoji}
    </div>

    <div class="flex flex-wrap items-center gap-4 text-sm mb-6">
      <span class="text-brand font-bold uppercase">${blog.category}</span>
      <span class="text-slate-400">${blog.date}</span>
      <span class="text-slate-400">${blog.readTime}</span>
    </div>

    <h1 class="text-3xl md:text-5xl font-extrabold leading-tight">
      ${blog.title}
    </h1>

    <p class="text-lg text-slate-500 mt-6 leading-8">
      ${blog.excerpt}
    </p>

    <div class="border-t border-slate-200 my-10"></div>

    <div class="article-body text-slate-600 leading-8 space-y-6">
      ${blog.content}
    </div>

    <div class="border-t border-slate-200 mt-12 pt-8">
      <a href="blogs.html"
         class="text-brand font-semibold hover:underline">
        ← Back to all articles
      </a>
    </div>
  `;
}


// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderBlogs();
  setupFilters();
  renderSingleBlog();
});
