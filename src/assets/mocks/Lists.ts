import type { ListType } from "../../types/List";
 
export const mockLists: ListType[] = [
  {
    id: 1,
    title: "Life Management System",
    description: "Master control center for all life organization",
    listItems: [
      {
        id: 1,
        title: "Weekly Review Process",
        description: "Complete review every Sunday evening",
        importance: 5
      },
      {
        id: 2,
        title: "Monthly Goal Setting",
        description: "Set and review monthly objectives",
        importance: 4
      },
      {
        id: 3,
        title: "Quarterly Planning",
        description: "Major life and career planning",
        importance: 3
      }
    ],
    childLists: [
      {
        id: 2,
        title: "Professional Development",
        description: "Career growth and skill enhancement",
        listItems: [
          {
            id: 4,
            title: "Update Resume",
            description: "Keep resume current with recent achievements",
            importance: 3
          },
          {
            id: 5,
            title: "LinkedIn Profile",
            description: "Maintain professional online presence",
            importance: 3
          },
          {
            id: 6,
            title: "Network Building",
            description: "Attend industry events and connect with peers",
            importance: 4
          }
        ],
        childLists: [
          {
            id: 7,
            title: "Technical Skills",
            description: "Programming and technology expertise",
            listItems: [
              {
                id: 19,
                title: "Learn TypeScript Advanced",
                description: "Master advanced TypeScript patterns",
                importance: 4
              },
              {
                id: 20,
                title: "React Performance Optimization",
                description: "Study React optimization techniques",
                importance: 4
              },
              {
                id: 21,
                title: "System Design Fundamentals",
                description: "Learn scalable system architecture",
                importance: 5
              },
              {
                id: 22,
                title: "Cloud Computing",
                description: "AWS/Azure certification preparation",
                importance: 4
              }
            ],
            childLists: [
              {
                id: 22,
                title: "Frontend Technologies",
                description: "Modern frontend development stack",
                listItems: [
                  {
                    id: 100,
                    title: "React 18 Features",
                    description: "Master new React 18 concurrent features",
                    importance: 5
                  },
                  {
                    id: 101,
                    title: "Next.js Advanced",
                    description: "Server-side rendering and optimization",
                    importance: 4
                  },
                  {
                    id: 102,
                    title: "State Management",
                    description: "Redux, Zustand, and other state solutions",
                    importance: 4
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 23,
                title: "Backend Technologies",
                description: "Server-side development and databases",
                listItems: [
                  {
                    id: 103,
                    title: "Node.js Performance",
                    description: "Optimize Node.js applications",
                    importance: 4
                  },
                  {
                    id: 104,
                    title: "Database Design",
                    description: "SQL and NoSQL database patterns",
                    importance: 5
                  },
                  {
                    id: 105,
                    title: "API Design",
                    description: "RESTful and GraphQL API best practices",
                    importance: 4
                  }
                ],
                childLists: [],
                importance: 4
              }
            ],
            importance: 5
          },
          {
            id: 8,
            title: "Soft Skills",
            description: "Interpersonal and communication abilities",
            listItems: [
              {
                id: 23,
                title: "Public Speaking Practice",
                description: "Join Toastmasters or similar group",
                importance: 3
              },
              {
                id: 24,
                title: "Negotiation Skills",
                description: "Practice negotiation techniques",
                importance: 4
              },
              {
                id: 25,
                title: "Time Management",
                description: "Implement productivity systems",
                importance: 5
              }
            ],
            childLists: [
              {
                id: 24,
                title: "Communication Skills",
                description: "Written and verbal communication",
                listItems: [
                  {
                    id: 106,
                    title: "Technical Writing",
                    description: "Improve documentation and technical articles",
                    importance: 4
                  },
                  {
                    id: 107,
                    title: "Presentation Skills",
                    description: "Create and deliver effective presentations",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 25,
                title: "Leadership Skills",
                description: "Team management and leadership",
                listItems: [
                  {
                    id: 108,
                    title: "Team Building",
                    description: "Foster team collaboration and morale",
                    importance: 4
                  },
                  {
                    id: 109,
                    title: "Project Management",
                    description: "Lead projects from conception to completion",
                    importance: 5
                  }
                ],
                childLists: [],
                importance: 4
              }
            ],
            importance: 4
          },
          {
            id: 9,
            title: "Certifications",
            description: "Professional certifications to pursue",
            listItems: [
              {
                id: 26,
                title: "AWS Solutions Architect",
                description: "Study for AWS certification exam",
                importance: 4
              },
              {
                id: 27,
                title: "Google Cloud Professional",
                description: "GCP certification preparation",
                importance: 3
              },
              {
                id: 28,
                title: "Scrum Master",
                description: "Agile methodology certification",
                importance: 3
              }
            ],
            childLists: [
              {
                id: 26,
                title: "Cloud Certifications",
                description: "Cloud platform certifications",
                listItems: [
                  {
                    id: 110,
                    title: "AWS Certified Developer",
                    description: "Focus on development aspects of AWS",
                    importance: 4
                  },
                  {
                    id: 111,
                    title: "Azure Administrator",
                    description: "Microsoft Azure administration certification",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 3
              },
              {
                id: 27,
                title: "Development Certifications",
                description: "Programming and development certifications",
                listItems: [
                  {
                    id: 112,
                    title: "Certified Kubernetes Administrator",
                    description: "Kubernetes cluster management",
                    importance: 4
                  },
                  {
                    id: 113,
                    title: "Terraform Certification",
                    description: "Infrastructure as Code certification",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 3
              }
            ],
            importance: 3
          }
        ],
        importance: 5
      },
      {
        id: 3,
        title: "Personal Finance",
        description: "Complete financial management system",
        listItems: [
          {
            id: 7,
            title: "Monthly Budget Review",
            description: "Review and adjust budget categories",
            importance: 5
          },
          {
            id: 8,
            title: "Investment Portfolio Check",
            description: "Quarterly investment performance review",
            importance: 4
          },
          {
            id: 9,
            title: "Tax Document Organization",
            description: "Maintain tax records throughout the year",
            importance: 4
          }
        ],
        childLists: [
          {
            id: 10,
            title: "Budget Management",
            description: "Monthly budget tracking and optimization",
            listItems: [
              {
                id: 29,
                title: "Expense Tracking",
                description: "Log all expenses daily",
                importance: 5
              },
              {
                id: 30,
                title: "Category Analysis",
                description: "Analyze spending by category monthly",
                importance: 4
              },
              {
                id: 31,
                title: "Savings Goals",
                description: "Track progress toward savings targets",
                importance: 5
              }
            ],
            childLists: [
              {
                id: 28,
                title: "Fixed Expenses",
                description: "Regular monthly bills and subscriptions",
                listItems: [
                  {
                    id: 114,
                    title: "Rent/Mortgage",
                    description: "Housing payment tracking",
                    importance: 5
                  },
                  {
                    id: 115,
                    title: "Utilities",
                    description: "Electric, water, gas, internet",
                    importance: 4
                  },
                  {
                    id: 116,
                    title: "Insurance Premiums",
                    description: "Health, auto, home insurance",
                    importance: 4
                  }
                ],
                childLists: [],
                importance: 5
              },
              {
                id: 29,
                title: "Variable Expenses",
                description: "Flexible spending categories",
                listItems: [
                  {
                    id: 117,
                    title: "Groceries",
                    description: "Food and household items",
                    importance: 4
                  },
                  {
                    id: 118,
                    title: "Entertainment",
                    description: "Movies, dining out, hobbies",
                    importance: 2
                  },
                  {
                    id: 119,
                    title: "Shopping",
                    description: "Clothing, electronics, miscellaneous",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 3
              }
            ],
            importance: 5
          },
          {
            id: 11,
            title: "Investment Strategy",
            description: "Long-term investment planning and management",
            listItems: [
              {
                id: 32,
                title: "Portfolio Rebalancing",
                description: "Quarterly portfolio adjustment",
                importance: 4
              },
              {
                id: 33,
                title: "Market Research",
                description: "Weekly market analysis and research",
                importance: 3
              },
              {
                id: 34,
                title: "Risk Assessment",
                description: "Monthly risk tolerance review",
                importance: 4
              }
            ],
            childLists: [
              {
                id: 30,
                title: "Stock Market",
                description: "Equity investments and trading",
                listItems: [
                  {
                    id: 120,
                    title: "Dividend Stocks",
                    description: "Build dividend income portfolio",
                    importance: 4
                  },
                  {
                    id: 121,
                    title: "Growth Stocks",
                    description: "High-growth potential investments",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 31,
                title: "Real Estate",
                description: "Property investment strategies",
                listItems: [
                  {
                    id: 122,
                    title: "Rental Properties",
                    description: "Generate passive income through rentals",
                    importance: 3
                  },
                  {
                    id: 123,
                    title: "REITs",
                    description: "Real estate investment trusts",
                    importance: 2
                  }
                ],
                childLists: [],
                importance: 3
              }
            ],
            importance: 4
          },
          {
            id: 12,
            title: "Tax Planning",
            description: "Tax optimization and compliance",
            listItems: [
              {
                id: 35,
                title: "Document Collection",
                description: "Gather tax documents throughout year",
                importance: 5
              },
              {
                id: 36,
                title: "Deduction Tracking",
                description: "Track all potential deductions",
                importance: 4
              },
              {
                id: 37,
                title: "Quarterly Estimates",
                description: "Pay quarterly estimated taxes",
                importance: 5
              }
            ],
            childLists: [
              {
                id: 32,
                title: "Business Deductions",
                description: "Self-employment and business expenses",
                listItems: [
                  {
                    id: 124,
                    title: "Home Office",
                    description: "Home office expense calculation",
                    importance: 4
                  },
                  {
                    id: 125,
                    title: "Business Travel",
                    description: "Work-related travel expenses",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 33,
                title: "Personal Deductions",
                description: "Individual tax deductions",
                listItems: [
                  {
                    id: 126,
                    title: "Charitable Donations",
                    description: "Track and document charitable giving",
                    importance: 3
                  },
                  {
                    id: 127,
                    title: "Medical Expenses",
                    description: "Medical cost tracking for deductions",
                    importance: 2
                  }
                ],
                childLists: [],
                importance: 3
              }
            ],
            importance: 4
          }
        ],
        importance: 5
      },
      {
        id: 4,
        title: "Health & Wellness",
        description: "Physical and mental health management",
        listItems: [
          {
            id: 10,
            title: "Annual Health Checkup",
            description: "Complete physical examination",
            importance: 5
          },
          {
            id: 11,
            title: "Dental Cleaning",
            description: "Bi-annual dental appointments",
            importance: 4
          },
          {
            id: 12,
            title: "Eye Examination",
            description: "Annual vision check",
            importance: 3
          }
        ],
        childLists: [
          {
            id: 13,
            title: "Physical Fitness",
            description: "Exercise and physical health routines",
            listItems: [
              {
                id: 38,
                title: "Cardio Workouts",
                description: "30 minutes cardio, 3x per week",
                importance: 5
              },
              {
                id: 39,
                title: "Strength Training",
                description: "Resistance training, 2x per week",
                importance: 4
              },
              {
                id: 40,
                title: "Flexibility Training",
                description: "Stretching and yoga, daily",
                importance: 3
              }
            ],
            childLists: [
              {
                id: 34,
                title: "Cardio Programs",
                description: "Different cardiovascular exercise routines",
                listItems: [
                  {
                    id: 128,
                    title: "Running Program",
                    description: "Progressive running plan for beginners",
                    importance: 4
                  },
                  {
                    id: 129,
                    title: "HIIT Workouts",
                    description: "High-intensity interval training sessions",
                    importance: 4
                  },
                  {
                    id: 130,
                    title: "Swimming Routine",
                    description: "Full-body swimming workouts",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 35,
                title: "Strength Programs",
                description: "Resistance training routines",
                listItems: [
                  {
                    id: 131,
                    title: "Bodyweight Exercises",
                    description: "No-equipment strength training",
                    importance: 4
                  },
                  {
                    id: 132,
                    title: "Weight Lifting",
                    description: "Progressive overload weight training",
                    importance: 4
                  },
                  {
                    id: 133,
                    title: "Functional Fitness",
                    description: "Real-world movement patterns",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 4
              }
            ],
            importance: 5
          },
          {
            id: 14,
            title: "Mental Health",
            description: "Psychological wellness and stress management",
            listItems: [
              {
                id: 41,
                title: "Meditation Practice",
                description: "Daily meditation, 10 minutes",
                importance: 5
              },
              {
                id: 42,
                title: "Journaling",
                description: "Daily reflection and gratitude journal",
                importance: 4
              },
              {
                id: 43,
                title: "Therapy Sessions",
                description: "Bi-weekly mental health check-ins",
                importance: 4
              }
            ],
            childLists: [
              {
                id: 36,
                title: "Stress Management",
                description: "Techniques for managing stress",
                listItems: [
                  {
                    id: 134,
                    title: "Breathing Exercises",
                    description: "Deep breathing techniques for relaxation",
                    importance: 4
                  },
                  {
                    id: 135,
                    title: "Progressive Muscle Relaxation",
                    description: "Systematic muscle tension and release",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 37,
                title: "Mindfulness Practices",
                description: "Present-moment awareness techniques",
                listItems: [
                  {
                    id: 136,
                    title: "Mindful Walking",
                    description: "Walking meditation practice",
                    importance: 3
                  },
                  {
                    id: 137,
                    title: "Body Scan Meditation",
                    description: "Systematic body awareness practice",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 3
              }
            ],
            importance: 5
          },
          {
            id: 15,
            title: "Nutrition",
            description: "Diet and meal planning",
            listItems: [
              {
                id: 44,
                title: "Meal Prep",
                description: "Prepare weekly meals on Sunday",
                importance: 4
              },
              {
                id: 45,
                title: "Nutrition Education",
                description: "Learn about nutritional science",
                importance: 3
              },
              {
                id: 46,
                title: "Hydration Tracking",
                description: "Monitor daily water intake",
                importance: 3
              }
            ],
            childLists: [
              {
                id: 38,
                title: "Meal Planning",
                description: "Weekly meal preparation and planning",
                listItems: [
                  {
                    id: 138,
                    title: "Breakfast Recipes",
                    description: "Healthy breakfast meal prep ideas",
                    importance: 4
                  },
                  {
                    id: 139,
                    title: "Lunch Preparation",
                    description: "Packable lunch options for work",
                    importance: 4
                  },
                  {
                    id: 140,
                    title: "Dinner Planning",
                    description: "Weekly dinner menu and prep",
                    importance: 4
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 39,
                title: "Dietary Goals",
                description: "Specific nutrition objectives",
                listItems: [
                  {
                    id: 141,
                    title: "Protein Intake",
                    description: "Track daily protein consumption",
                    importance: 3
                  },
                  {
                    id: 142,
                    title: "Vegetable Servings",
                    description: "Ensure 5+ servings of vegetables daily",
                    importance: 4
                  },
                  {
                    id: 143,
                    title: "Sugar Reduction",
                    description: "Minimize added sugar intake",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 4
              }
            ],
            importance: 4
          }
        ],
        importance: 5
      },
      {
        id: 5,
        title: "Home Management",
        description: "Household maintenance and organization",
        listItems: [
          {
            id: 13,
            title: "Deep Cleaning Schedule",
            description: "Monthly deep cleaning of all rooms",
            importance: 3
          },
          {
            id: 14,
            title: "Maintenance Calendar",
            description: "Schedule regular home maintenance",
            importance: 4
          },
          {
            id: 15,
            title: "Utility Bill Management",
            description: "Track and optimize utility expenses",
            importance: 4
          }
        ],
        childLists: [
          {
            id: 16,
            title: "Home Maintenance",
            description: "Regular home upkeep and repairs",
            listItems: [
              {
                id: 47,
                title: "HVAC Service",
                description: "Bi-annual HVAC maintenance",
                importance: 5
              },
              {
                id: 48,
                title: "Gutter Cleaning",
                description: "Clean gutters seasonally",
                importance: 3
              },
              {
                id: 49,
                title: "Pest Control",
                description: "Quarterly pest inspection",
                importance: 4
              }
            ],
            childLists: [
              {
                id: 40,
                title: "Seasonal Maintenance",
                description: "Season-specific home care tasks",
                listItems: [
                  {
                    id: 144,
                    title: "Spring Cleaning",
                    description: "Comprehensive spring home refresh",
                    importance: 3
                  },
                  {
                    id: 145,
                    title: "Winter Preparation",
                    description: "Home winterization tasks",
                    importance: 4
                  },
                  {
                    id: 146,
                    title: "Summer Maintenance",
                    description: "AC and outdoor maintenance",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 41,
                title: "Regular Maintenance",
                description: "Ongoing home care tasks",
                listItems: [
                  {
                    id: 147,
                    title: "Filter Changes",
                    description: "HVAC and water filter replacements",
                    importance: 4
                  },
                  {
                    id: 148,
                    title: "Safety Checks",
                    description: "Smoke detectors and fire extinguishers",
                    importance: 5
                  }
                ],
                childLists: [],
                importance: 5
              }
            ],
            importance: 4
          },
          {
            id: 17,
            title: "Home Organization",
            description: "Decluttering and organizational systems",
            listItems: [
              {
                id: 50,
                title: "Closet Organization",
                description: "Seasonal closet decluttering",
                importance: 3
              },
              {
                id: 51,
                title: "Kitchen Optimization",
                description: "Organize kitchen for efficiency",
                importance: 3
              },
              {
                id: 52,
                title: "Digital Organization",
                description: "Organize digital files and photos",
                importance: 4
              }
            ],
            childLists: [
              {
                id: 42,
                title: "Room Organization",
                description: "Individual room organization projects",
                listItems: [
                  {
                    id: 149,
                    title: "Bedroom Organization",
                    description: "Create peaceful sleeping environment",
                    importance: 3
                  },
                  {
                    id: 150,
                    title: "Office Setup",
                    description: "Optimize home office for productivity",
                    importance: 4
                  },
                  {
                    id: 151,
                    title: "Garage Organization",
                    description: "Organize tools and storage",
                    importance: 2
                  }
                ],
                childLists: [],
                importance: 3
              },
              {
                id: 43,
                title: "Digital Organization",
                description: "File and data management",
                listItems: [
                  {
                    id: 152,
                    title: "File Backup System",
                    description: "Automated backup of important files",
                    importance: 5
                  },
                  {
                    id: 153,
                    title: "Photo Organization",
                    description: "Sort and tag digital photos",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 4
              }
            ],
            importance: 3
          },
          {
            id: 18,
            title: "Home Improvement",
            description: "Renovation and upgrade projects",
            listItems: [
              {
                id: 53,
                title: "Kitchen Remodel",
                description: "Complete kitchen renovation project",
                importance: 2
              },
              {
                id: 54,
                title: "Bathroom Updates",
                description: "Modernize bathroom fixtures",
                importance: 3
              },
              {
                id: 55,
                title: "Landscaping",
                description: "Improve outdoor spaces",
                importance: 2
              }
            ],
            childLists: [
              {
                id: 44,
                title: "DIY Projects",
                description: "Do-it-yourself home improvements",
                listItems: [
                  {
                    id: 154,
                    title: "Painting Projects",
                    description: "Interior and exterior painting",
                    importance: 3
                  },
                  {
                    id: 155,
                    title: "Furniture Building",
                    description: "Build custom furniture pieces",
                    importance: 2
                  }
                ],
                childLists: [],
                importance: 2
              },
              {
                id: 45,
                title: "Professional Projects",
                description: "Contractor-required improvements",
                listItems: [
                  {
                    id: 156,
                    title: "Electrical Updates",
                    description: "Modernize electrical systems",
                    importance: 4
                  },
                  {
                    id: 157,
                    title: "Plumbing Upgrades",
                    description: "Update plumbing fixtures and pipes",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 3
              }
            ],
            importance: 3
          }
        ],
        importance: 4
      },
      {
        id: 6,
        title: "Learning & Education",
        description: "Continuous learning and skill development",
        listItems: [
          {
            id: 16,
            title: "Daily Reading",
            description: "Read for at least 30 minutes daily",
            importance: 4
          },
          {
            id: 17,
            title: "Online Course Progress",
            description: "Complete one module per week",
            importance: 3
          },
          {
            id: 18,
            title: "Skill Practice",
            description: "Practice new skills for 1 hour daily",
            importance: 3
          }
        ],
        childLists: [
          {
            id: 19,
            title: "Programming Languages",
            description: "Learn and master programming languages",
            listItems: [
              {
                id: 56,
                title: "Rust Fundamentals",
                description: "Learn systems programming with Rust",
                importance: 4
              },
              {
                id: 57,
                title: "Go Programming",
                description: "Master Go for backend development",
                importance: 4
              },
              {
                id: 58,
                title: "Python Advanced",
                description: "Advanced Python patterns and libraries",
                importance: 3
              }
            ],
            childLists: [
              {
                id: 46,
                title: "Systems Programming",
                description: "Low-level programming languages",
                listItems: [
                  {
                    id: 158,
                    title: "Memory Management",
                    description: "Understanding manual memory management",
                    importance: 4
                  },
                  {
                    id: 159,
                    title: "Concurrency Patterns",
                    description: "Multi-threading and async programming",
                    importance: 4
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 47,
                title: "Web Development",
                description: "Modern web programming languages",
                listItems: [
                  {
                    id: 160,
                    title: "TypeScript Mastery",
                    description: "Advanced TypeScript features and patterns",
                    importance: 5
                  },
                  {
                    id: 161,
                    title: "WebAssembly",
                    description: "High-performance web applications",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 4
              }
            ],
            importance: 4
          },
          {
            id: 20,
            title: "Online Courses",
            description: "Structured online learning programs",
            listItems: [
              {
                id: 59,
                title: "Machine Learning Course",
                description: "Complete ML specialization on Coursera",
                importance: 4
              },
              {
                id: 60,
                title: "Data Science Bootcamp",
                description: "Intensive data science program",
                importance: 3
              },
              {
                id: 61,
                title: "Web Development Mastery",
                description: "Full-stack web development course",
                importance: 4
              }
            ],
            childLists: [
              {
                id: 48,
                title: "University Courses",
                description: "Academic-level online courses",
                listItems: [
                  {
                    id: 162,
                    title: "MIT OpenCourseWare",
                    description: "Free MIT courses and materials",
                    importance: 4
                  },
                  {
                    id: 163,
                    title: "Stanford Online",
                    description: "Stanford University online programs",
                    importance: 4
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 49,
                title: "Platform Courses",
                description: "Commercial learning platforms",
                listItems: [
                  {
                    id: 164,
                    title: "Coursera Specializations",
                    description: "Multi-course professional programs",
                    importance: 4
                  },
                  {
                    id: 165,
                    title: "Udemy Bootcamps",
                    description: "Intensive skill-based programs",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 3
              }
            ],
            importance: 4
          },
          {
            id: 21,
            title: "Reading List",
            description: "Books and educational materials",
            listItems: [
              {
                id: 62,
                title: "Technical Books",
                description: "Read one technical book per month",
                importance: 4
              },
              {
                id: 63,
                title: "Business Literature",
                description: "Business and leadership books",
                importance: 3
              },
              {
                id: 64,
                title: "Philosophy Classics",
                description: "Read philosophical works",
                importance: 2
              }
            ],
            childLists: [
              {
                id: 50,
                title: "Technical Reading",
                description: "Programming and technology books",
                listItems: [
                  {
                    id: 166,
                    title: "Design Patterns",
                    description: "Gang of Four design patterns book",
                    importance: 5
                  },
                  {
                    id: 167,
                    title: "Clean Architecture",
                    description: "Robert Martin's architecture guide",
                    importance: 4
                  }
                ],
                childLists: [],
                importance: 4
              },
              {
                id: 51,
                title: "Non-Technical Reading",
                description: "General knowledge and literature",
                listItems: [
                  {
                    id: 168,
                    title: "Biographies",
                    description: "Life stories of influential people",
                    importance: 3
                  },
                  {
                    id: 169,
                    title: "History Books",
                    description: "Historical events and periods",
                    importance: 3
                  }
                ],
                childLists: [],
                importance: 3
              }
            ],
            importance: 3
          }
        ],
        importance: 4
      }
    ],
    importance: 5
  }
];