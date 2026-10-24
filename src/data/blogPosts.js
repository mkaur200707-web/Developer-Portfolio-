
export const blogPosts = [
  {
    id: 1,
    slug: "web-development-journey",
    title: "Getting Started with Web Development",
    category: "Web Development",
    date: "2026-09-05",
    readTime: "5 min read",
    excerpt:
      "Explore how HTML, CSS, and JavaScript work together to build modern websites.",
    content: [
      {
        heading: "Introduction",
        text: "Web development is the process of creating websites and web applications. It combines design, programming, and problem-solving to build experiences that people use every day."
      },
      {
        heading: "Understanding HTML",
        text: "HTML provides the structure of a webpage. Developers use elements such as headings, paragraphs, images, links, and forms to organize content. Semantic HTML also helps make websites more accessible."
      },
      {
        heading: "Styling with CSS",
        text: "CSS controls the appearance of a website, including colors, typography, spacing, and layout. Features such as Flexbox, Grid, and media queries help developers create responsive interfaces."
      },
      {
        heading: "Adding JavaScript",
        text: "JavaScript makes websites interactive. It can respond to button clicks, validate forms, update content, and communicate with external services."
      },
      {
        heading: "Building Complete Applications",
        text: "Modern web development often uses component-based libraries such as React. By combining HTML concepts, CSS, JavaScript, and reusable components, developers can build maintainable applications."
      },
      {
        heading: "Key Takeaway",
        text: "Learning web development becomes easier when each technology is practiced through small projects. Building and improving real applications is an effective way to strengthen programming skills."
      }
    ]
  },
  {
    id: 2,
    slug: "react-components-hooks",
    title: "Understanding React Components and Hooks",
    category: "React",
    date: "2026-09-10",
    readTime: "7 min read",
    excerpt:
      "Learn how components, props, state, and React Hooks help developers build interactive applications.",
    content: [
      {
        heading: "What Is React?",
        text: "React is a JavaScript library used to build user interfaces. It allows developers to divide an application into smaller, reusable components."
      },
      {
        heading: "Reusable Components",
        text: "A component represents a part of the interface, such as a navigation bar, project card, or contact form. Reusing components reduces repeated code and makes applications easier to maintain."
      },
      {
        heading: "Working with Props",
        text: "Props allow data to be passed from one component to another. For example, a project card component can receive a project title, description, and technology list through props."
      },
      {
        heading: "Understanding useState",
        text: "The useState Hook allows a component to remember information between renders. It is commonly used for search inputs, selected filters, counters, and interactive menus."
      },
      {
        heading: "Understanding useEffect",
        text: "The useEffect Hook helps synchronize a component with external systems. Common examples include setting up event listeners and fetching information from an external service."
      },
      {
        heading: "React in Real Projects",
        text: "A developer portfolio can use React components for its navigation, projects, skills, certificates, and blog. React Router can also provide navigation between different pages."
      },
      {
        heading: "Key Takeaway",
        text: "Understanding components, props, state, and effects provides a strong foundation for building interactive React applications."
      }
    ]
  },
  {
    id: 3,
    slug: "git-github-developer-tools",
    title: "Git and GitHub: Essential Developer Tools",
    category: "Developer Tools",
    date: "2026-09-15",
    readTime: "6 min read",
    excerpt:
      "Understand version control, commits, branches, pull requests, and collaborative development.",
    content: [
      {
        heading: "Introduction to Version Control",
        text: "Version control helps developers track changes to their code. It makes it possible to review previous versions, experiment safely, and collaborate with other developers."
      },
      {
        heading: "What Is Git?",
        text: "Git is a distributed version control system. It records changes in a repository and allows developers to work on separate branches without immediately affecting the main codebase."
      },
      {
        heading: "What Is GitHub?",
        text: "GitHub is a platform for hosting Git repositories and collaborating on software projects. It provides features such as pull requests, issues, and code reviews."
      },
      {
        heading: "Understanding Commits",
        text: "A commit records a snapshot of selected changes. Clear commit messages help explain what was changed and why."
      },
      {
        heading: "Branches and Pull Requests",
        text: "Branches allow developers to work on new features independently. Once a feature is ready, a pull request can be opened so that changes can be reviewed before merging."
      },
      {
        heading: "A Common Development Workflow",
        text: "A typical workflow involves updating the main branch, creating a feature branch, editing files, testing changes, committing the work, and opening a pull request."
      },
      {
        heading: "Key Takeaway",
        text: "Git and GitHub are valuable tools for organizing development work, maintaining code history, and collaborating effectively."
      }
    ]
  },
  {
    id: 4,
    slug: "sql-database-design",
    title: "SQL and Database Design for Beginners",
    category: "Databases",
    date: "2026-09-20",
    readTime: "6 min read",
    excerpt:
      "Learn about relational databases, tables, keys, relationships, and essential SQL queries.",
    content: [
      {
        heading: "Understanding Databases",
        text: "A database stores and organizes information so that it can be accessed and managed efficiently. Relational databases organize data into tables consisting of rows and columns."
      },
      {
        heading: "Tables and Records",
        text: "A table represents a collection of related information. For example, a Students table might contain student IDs, names, departments, and email addresses."
      },
      {
        heading: "Primary Keys",
        text: "A primary key uniquely identifies each record in a table. It prevents duplicate identifiers and helps maintain data integrity."
      },
      {
        heading: "Foreign Keys and Relationships",
        text: "A foreign key connects records in one table to records in another. These relationships help developers organize data without unnecessary duplication."
      },
      {
        heading: "Essential SQL Commands",
        text: "SELECT retrieves data, INSERT adds records, UPDATE modifies existing records, and DELETE removes records. SQL also supports filtering, sorting, grouping, and joining information from multiple tables."
      },
      {
        heading: "Database Normalization",
        text: "Normalization is a database design process that reduces unnecessary duplication and helps prevent inconsistencies when data is inserted, updated, or deleted."
      },
      {
        heading: "Key Takeaway",
        text: "Understanding relational database concepts and SQL is useful for building applications that store and manage structured information."
      }
    ]
  },
  {
    id: 5,
    slug: "data-structures-programming",
    title: "Why Data Structures Matter in Programming",
    category: "Programming",
    date: "2026-09-25",
    readTime: "8 min read",
    excerpt:
      "Discover how arrays, linked lists, stacks, queues, and other data structures help solve programming problems.",
    content: [
      {
        heading: "Introduction",
        text: "Data structures are ways of organizing and storing information in a program. Choosing an appropriate data structure can make code easier to understand and improve performance."
      },
      {
        heading: "Arrays",
        text: "An array stores multiple elements in an ordered collection. Arrays are useful when developers need indexed access to information, such as marks, prices, or a list of values."
      },
      {
        heading: "Linked Lists",
        text: "A linked list consists of nodes connected through references. Linked lists can support efficient insertion and deletion when the relevant node position is already known."
      },
      {
        heading: "Stacks",
        text: "A stack follows the Last In, First Out principle. Common applications include undo operations, expression evaluation, and managing function calls."
      },
      {
        heading: "Queues",
        text: "A queue follows the First In, First Out principle. Queues are useful for handling tasks in arrival order, such as print jobs or background processing."
      },
      {
        heading: "Maps and Sets",
        text: "Maps store key-value pairs, while sets store unique values. These structures are useful for counting occurrences, finding duplicates, and organizing information."
      },
      {
        heading: "Choosing the Right Structure",
        text: "Different data structures have different performance characteristics. Developers consider operations such as searching, insertion, deletion, and traversal before choosing one."
      },
      {
        heading: "Key Takeaway",
        text: "Learning data structures strengthens problem-solving skills and helps developers write efficient, maintainable programs."
      }
    ]
  },
  {
    id: 6,
    slug: "responsive-accessible-websites",
    title: "Building Responsive and Accessible Websites",
    category: "Frontend Design",
    date: "2026-10-01",
    readTime: "5 min read",
    excerpt:
      "Explore responsive layouts, mobile-first design, accessibility, and user-friendly web interfaces.",
    content: [
      {
        heading: "Introduction",
        text: "A good website should be usable across different screen sizes and accessible to people with different needs. Responsive design and accessibility are important parts of modern frontend development."
      },
      {
        heading: "Responsive Design",
        text: "Responsive design allows a website to adapt to desktops, tablets, and mobile phones. Flexible layouts, relative units, and CSS media queries help content fit different screens."
      },
      {
        heading: "Mobile-First Development",
        text: "Mobile-first development begins with layouts designed for smaller screens. Additional styles are then introduced for larger screens as needed."
      },
      {
        heading: "Using Flexbox and Grid",
        text: "CSS Flexbox is useful for arranging items in one direction, while CSS Grid supports two-dimensional layouts. Both help developers create flexible and organized interfaces."
      },
      {
        heading: "Accessibility Basics",
        text: "Accessible websites use semantic HTML, meaningful labels, keyboard-friendly controls, readable text, and sufficient color contrast."
      },
      {
        heading: "Testing User Experience",
        text: "Developers should test websites using different screen sizes, keyboard navigation, and browser accessibility tools. Testing helps identify issues that may not be obvious during development."
      },
      {
        heading: "Key Takeaway",
        text: "Responsive design and accessibility improve the experience for a wider range of users and should be considered throughout the development process."
      }
    ]
  }
];
