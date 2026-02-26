import type { ListType } from "../../types/List";

export const mockLists: ListType[] = [
  {
    id: 1,
    title: "Professional Development",
    description: "Career growth and skill enhancement",
    listItems: [
      {
        id: 1,
        title: "Update Resume",
        description: "Keep resume current with recent achievements",
        importance: 3
      },
      {
        id: 2,
        title: "LinkedIn Profile",
        description: "Maintain professional online presence",
        importance: 3
      },
      {
        id: 3,
        title: "Network Building",
        description: "Attend industry events and connect with peers",
        importance: 4
      }
    ],
    childLists: [
      {
        id: 11,
        title: "Technical Skills",
        description: "Programming and technology expertise",
        listItems: [
          {
            id: 11,
            title: "Learn TypeScript Advanced",
            description: "Master advanced TypeScript patterns",
            importance: 4
          },
          {
            id: 12,
            title: "React Performance Optimization",
            description: "Study React optimization techniques",
            importance: 4
          },
          {
            id: 13,
            title: "System Design Fundamentals",
            description: "Learn scalable system architecture",
            importance: 5
          }
        ],
        childLists: [
          {
            id: 21,
            title: "Frontend Technologies",
            description: "Modern frontend development stack",
            listItems: [
              {
                id: 21,
                title: "React 18 Features",
                description: "Master new React 18 concurrent features",
                importance: 5
              },
              {
                id: 22,
                title: "Next.js Advanced",
                description: "Server-side rendering and optimization",
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
        id: 12,
        title: "Soft Skills",
        description: "Interpersonal and communication abilities",
        listItems: [
          {
            id: 14,
            title: "Public Speaking Practice",
            description: "Join Toastmasters or similar group",
            importance: 3
          },
          {
            id: 15,
            title: "Negotiation Skills",
            description: "Practice negotiation techniques",
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
    id: 2,
    title: "Personal Finance",
    description: "Complete financial management system",
    listItems: [
      {
        id: 4,
        title: "Monthly Budget Review",
        description: "Review and adjust budget categories",
        importance: 5
      },
      {
        id: 5,
        title: "Investment Portfolio Check",
        description: "Quarterly investment performance review",
        importance: 4
      },
      {
        id: 6,
        title: "Tax Document Organization",
        description: "Maintain tax records throughout the year",
        importance: 4
      },
      {
        id: 7,
        title: "Credit Score Monitoring",
        description: "Check credit report monthly",
        importance: 4
      },
      {
        id: 8,
        title: "Insurance Review",
        description: "Annual insurance coverage assessment",
        importance: 3
      }
    ],
    childLists: [
      {
        id: 13,
        title: "Budget Management",
        description: "Monthly budget tracking and optimization",
        listItems: [
          {
            id: 16,
            title: "Expense Tracking",
            description: "Log all expenses daily",
            importance: 5
          },
          {
            id: 17,
            title: "Category Analysis",
            description: "Analyze spending by category monthly",
            importance: 4
          }
        ],
        childLists: [
          {
            id: 22,
            title: "Fixed Expenses",
            description: "Regular monthly bills and subscriptions",
            listItems: [
              {
                id: 23,
                title: "Rent/Mortgage",
                description: "Housing payment tracking",
                importance: 5
              },
              {
                id: 24,
                title: "Utilities",
                description: "Electric, water, gas, internet",
                importance: 4
              }
            ],
            childLists: [],
            importance: 5
          }
        ],
        importance: 5
      },
      {
        id: 14,
        title: "Investment Strategy",
        description: "Long-term investment planning and management",
        listItems: [
          {
            id: 18,
            title: "Portfolio Rebalancing",
            description: "Quarterly portfolio adjustment",
            importance: 4
          },
          {
            id: 19,
            title: "Market Research",
            description: "Weekly market analysis and research",
            importance: 3
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 15,
        title: "Tax Planning",
        description: "Tax optimization and compliance",
        listItems: [
          {
            id: 20,
            title: "Document Collection",
            description: "Gather tax documents throughout year",
            importance: 5
          },
          {
            id: 21,
            title: "Deduction Tracking",
            description: "Track all potential deductions",
            importance: 4
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 16,
        title: "Retirement Planning",
        description: "Long-term retirement savings strategy",
        listItems: [
          {
            id: 22,
            title: "401k Contributions",
            description: "Maximize employer match contributions",
            importance: 5
          },
          {
            id: 23,
            title: "IRA Management",
            description: "Manage individual retirement accounts",
            importance: 4
          }
        ],
        childLists: [],
        importance: 5
      }
    ],
    importance: 5
  },
  {
    id: 3,
    title: "Health & Wellness",
    description: "Physical and mental health management",
    listItems: [
      {
        id: 9,
        title: "Annual Health Checkup",
        description: "Complete physical examination",
        importance: 5
      },
      {
        id: 10,
        title: "Dental Cleaning",
        description: "Bi-annual dental appointments",
        importance: 4
      }
    ],
    childLists: [
      {
        id: 17,
        title: "Physical Fitness",
        description: "Exercise and physical health routines",
        listItems: [
          {
            id: 24,
            title: "Cardio Workouts",
            description: "30 minutes cardio, 3x per week",
            importance: 5
          },
          {
            id: 25,
            title: "Strength Training",
            description: "Resistance training, 2x per week",
            importance: 4
          }
        ],
        childLists: [
          {
            id: 23,
            title: "Cardio Programs",
            description: "Different cardiovascular exercise routines",
            listItems: [
              {
                id: 25,
                title: "Running Program",
                description: "Progressive running plan for beginners",
                importance: 4
              },
              {
                id: 26,
                title: "HIIT Workouts",
                description: "High-intensity interval training sessions",
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
        id: 18,
        title: "Mental Health",
        description: "Psychological wellness and stress management",
        listItems: [
          {
            id: 26,
            title: "Meditation Practice",
            description: "Daily meditation, 10 minutes",
            importance: 5
          },
          {
            id: 27,
            title: "Journaling",
            description: "Daily reflection and gratitude journal",
            importance: 4
          }
        ],
        childLists: [],
        importance: 5
      },
      {
        id: 19,
        title: "Nutrition",
        description: "Diet and meal planning",
        listItems: [
          {
            id: 28,
            title: "Meal Prep",
            description: "Prepare weekly meals on Sunday",
            importance: 4
          },
          {
            id: 29,
            title: "Nutrition Education",
            description: "Learn about nutritional science",
            importance: 3
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 20,
        title: "Preventive Care",
        description: "Preventive health measures and screenings",
        listItems: [
          {
            id: 30,
            title: "Vaccination Schedule",
            description: "Keep immunizations up to date",
            importance: 4
          },
          {
            id: 31,
            title: "Health Screenings",
            description: "Age-appropriate health screenings",
            importance: 5
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 21,
        title: "Emergency Preparedness",
        description: "Medical emergency planning and supplies",
        listItems: [
          {
            id: 32,
            title: "First Aid Kit",
            description: "Maintain complete first aid supplies",
            importance: 4
          },
          {
            id: 33,
            title: "Emergency Contacts",
            description: "Update emergency contact information",
            importance: 5
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 22,
        title: "Sleep Health",
        description: "Sleep quality and schedule management",
        listItems: [
          {
            id: 34,
            title: "Sleep Schedule",
            description: "Maintain consistent sleep times",
            importance: 4
          },
          {
            id: 35,
            title: "Sleep Environment",
            description: "Optimize bedroom for sleep quality",
            importance: 3
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 23,
        title: "Hydration Management",
        description: "Daily water intake and hydration tracking",
        listItems: [
          {
            id: 36,
            title: "Water Intake Goals",
            description: "Track daily water consumption",
            importance: 3
          },
          {
            id: 37,
            title: "Hydration Reminders",
            description: "Set regular hydration reminders",
            importance: 2
          }
        ],
        childLists: [],
        importance: 3
      }
    ],
    importance: 5
  },
  {
    id: 4,
    title: "Home Management",
    description: "Household maintenance and organization",
    listItems: [
      {
        id: 11,
        title: "Deep Cleaning Schedule",
        description: "Monthly deep cleaning of all rooms",
        importance: 3
      },
      {
        id: 12,
        title: "Maintenance Calendar",
        description: "Schedule regular home maintenance",
        importance: 4
      },
      {
        id: 13,
        title: "Utility Bill Management",
        description: "Track and optimize utility expenses",
        importance: 4
      },
      {
        id: 14,
        title: "Home Security Setup",
        description: "Install and maintain security systems",
        importance: 5
      },
      {
        id: 15,
        title: "Pest Control Schedule",
        description: "Regular pest prevention treatments",
        importance: 3
      },
      {
        id: 16,
        title: "Seasonal Preparation",
        description: "Prepare home for seasonal changes",
        importance: 4
      },
      {
        id: 17,
        title: "Smart Home Integration",
        description: "Manage smart home devices and automation",
        importance: 2
      },
      {
        id: 18,
        title: "Emergency Supplies",
        description: "Maintain emergency kit and supplies",
        importance: 4
      }
    ],
    childLists: [
      {
        id: 24,
        title: "Home Maintenance",
        description: "Regular home upkeep and repairs",
        listItems: [
          {
            id: 38,
            title: "HVAC Service",
            description: "Bi-annual HVAC maintenance",
            importance: 5
          },
          {
            id: 39,
            title: "Gutter Cleaning",
            description: "Clean gutters seasonally",
            importance: 3
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 25,
        title: "Home Organization",
        description: "Decluttering and organizational systems",
        listItems: [
          {
            id: 40,
            title: "Closet Organization",
            description: "Seasonal closet decluttering",
            importance: 3
          },
          {
            id: 41,
            title: "Kitchen Optimization",
            description: "Organize kitchen for efficiency",
            importance: 3
          }
        ],
        childLists: [],
        importance: 3
      },
      {
        id: 26,
        title: "Home Improvement",
        description: "Renovation and upgrade projects",
        listItems: [
          {
            id: 42,
            title: "Kitchen Remodel",
            description: "Complete kitchen renovation project",
            importance: 2
          },
          {
            id: 43,
            title: "Bathroom Updates",
            description: "Modernize bathroom fixtures",
            importance: 3
          }
        ],
        childLists: [],
        importance: 3
      },
      {
        id: 27,
        title: "Yard & Garden",
        description: "Outdoor space maintenance and landscaping",
        listItems: [
          {
            id: 44,
            title: "Lawn Care Schedule",
            description: "Weekly lawn mowing and maintenance",
            importance: 3
          },
          {
            id: 45,
            title: "Garden Planning",
            description: "Seasonal garden planting and care",
            importance: 2
          }
        ],
        childLists: [],
        importance: 3
      },
      {
        id: 28,
        title: "Security & Safety",
        description: "Home security and safety measures",
        listItems: [
          {
            id: 46,
            title: "Security System Check",
            description: "Monthly security system testing",
            importance: 5
          },
          {
            id: 47,
            title: "Smoke Detector Testing",
            description: "Test smoke detectors monthly",
            importance: 5
          }
        ],
        childLists: [],
        importance: 5
      },
      {
        id: 29,
        title: "Utilities Management",
        description: "Utility services and optimization",
        listItems: [
          {
            id: 48,
            title: "Energy Efficiency",
            description: "Implement energy-saving measures",
            importance: 4
          },
          {
            id: 49,
            title: "Water Conservation",
            description: "Reduce water usage and waste",
            importance: 3
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 30,
        title: "Smart Home Tech",
        description: "Smart home devices and automation",
        listItems: [
          {
            id: 50,
            title: "Lighting Automation",
            description: "Install smart lighting systems",
            importance: 2
          },
          {
            id: 51,
            title: "Thermostat Programming",
            description: "Optimize smart thermostat settings",
            importance: 3
          }
        ],
        childLists: [],
        importance: 3
      },
      {
        id: 31,
        title: "Seasonal Prep",
        description: "Seasonal home preparation tasks",
        listItems: [
          {
            id: 52,
            title: "Winterization",
            description: "Prepare home for winter weather",
            importance: 4
          },
          {
            id: 53,
            title: "Summer Cooling",
            description: "Optimize home for summer heat",
            importance: 3
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 32,
        title: "Cleaning Systems",
        description: "Home cleaning routines and systems",
        listItems: [
          {
            id: 54,
            title: "Daily Cleaning Tasks",
            description: "Quick daily cleaning routine",
            importance: 3
          },
          {
            id: 55,
            title: "Deep Cleaning Schedule",
            description: "Monthly deep cleaning tasks",
            importance: 3
          }
        ],
        childLists: [],
        importance: 3
      },
      {
        id: 33,
        title: "Storage Solutions",
        description: "Home storage and space optimization",
        listItems: [
          {
            id: 56,
            title: "Garage Organization",
            description: "Organize garage storage space",
            importance: 2
          },
          {
            id: 57,
            title: "Attic Storage",
            description: "Optimize attic storage solutions",
            importance: 2
          }
        ],
        childLists: [],
        importance: 2
      }
    ],
    importance: 4
  },
  {
    id: 5,
    title: "Learning & Education",
    description: "Continuous learning and skill development",
    listItems: [
      {
        id: 19,
        title: "Daily Reading",
        description: "Read for at least 30 minutes daily",
        importance: 4
      }
    ],
    childLists: [
      {
        id: 34,
        title: "Programming Languages",
        description: "Learn and master programming languages",
        listItems: [
          {
            id: 58,
            title: "Rust Fundamentals",
            description: "Learn systems programming with Rust",
            importance: 4
          },
          {
            id: 59,
            title: "Go Programming",
            description: "Master Go for backend development",
            importance: 4
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 35,
        title: "Online Courses",
        description: "Structured online learning programs",
        listItems: [
          {
            id: 60,
            title: "Machine Learning Course",
            description: "Complete ML specialization on Coursera",
            importance: 4
          },
          {
            id: 61,
            title: "Data Science Bootcamp",
            description: "Intensive data science program",
            importance: 3
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 36,
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
          }
        ],
        childLists: [],
        importance: 3
      }
    ],
    importance: 4
  },
  {
    id: 6,
    title: "Travel Planning",
    description: "Vacation and trip organization",
    listItems: [
      {
        id: 20,
        title: "Summer Vacation 2024",
        description: "Family trip to national parks",
        importance: 4
      },
      {
        id: 21,
        title: "Weekend Getaways",
        description: "Short trips within driving distance",
        importance: 3
      },
      {
        id: 22,
        title: "Business Travel",
        description: "Conference and meeting travel logistics",
        importance: 2
      },
      {
        id: 23,
        title: "Travel Budget Planning",
        description: "Set and track travel budgets",
        importance: 3
      }
    ],
    childLists: [
      {
        id: 37,
        title: "Domestic Travel",
        description: "Travel within the country",
        listItems: [
          {
            id: 64,
            title: "National Parks Tour",
            description: "Visit major national parks",
            importance: 4
          },
          {
            id: 65,
            title: "City Breaks",
            description: "Weekend trips to major cities",
            importance: 3
          }
        ],
        childLists: [],
        importance: 3
      }
    ],
    importance: 3
  },
  {
    id: 7,
    title: "Social & Relationships",
    description: "Friends, family, and community connections",
    listItems: [
      {
        id: 24,
        title: "Family Events",
        description: "Birthdays, holidays, and gatherings",
        importance: 4
      },
      {
        id: 25,
        title: "Friend Catch-ups",
        description: "Regular meetups and calls with friends",
        importance: 3
      },
      {
        id: 26,
        title: "Community Involvement",
        description: "Volunteer work and local events",
        importance: 2
      },
      {
        id: 27,
        title: "Social Media Management",
        description: "Maintain professional social media presence",
        importance: 2
      },
      {
        id: 28,
        title: "Networking Events",
        description: "Attend professional and social networking events",
        importance: 3
      },
      {
        id: 29,
        title: "Relationship Maintenance",
        description: "Regular check-ins with important contacts",
        importance: 4
      }
    ],
    childLists: [
      {
        id: 38,
        title: "Family Relationships",
        description: "Maintaining family connections",
        listItems: [
          {
            id: 66,
            title: "Weekly Family Calls",
            description: "Regular check-ins with family members",
            importance: 4
          },
          {
            id: 67,
            title: "Holiday Planning",
            description: "Coordinate family holiday gatherings",
            importance: 3
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 39,
        title: "Friend Network",
        description: "Building and maintaining friendships",
        listItems: [
          {
            id: 68,
            title: "Social Events",
            description: "Organize and attend social gatherings",
            importance: 3
          },
          {
            id: 69,
            title: "Hobby Groups",
            description: "Join groups with shared interests",
            importance: 2
          }
        ],
        childLists: [],
        importance: 3
      },
      {
        id: 40,
        title: "Professional Network",
        description: "Career and professional connections",
        listItems: [
          {
            id: 70,
            title: "Industry Conferences",
            description: "Attend relevant industry events",
            importance: 3
          },
          {
            id: 71,
            title: "Mentorship Programs",
            description: "Participate in mentorship opportunities",
            importance: 4
          }
        ],
        childLists: [],
        importance: 4
      },
      {
        id: 41,
        title: "Community Engagement",
        description: "Local community involvement and activities",
        listItems: [
          {
            id: 72,
            title: "Volunteer Work",
            description: "Regular volunteer activities",
            importance: 3
          },
          {
            id: 73,
            title: "Local Events",
            description: "Participate in community events",
            importance: 2
          }
        ],
        childLists: [],
        importance: 3
      },
      {
        id: 42,
        title: "Online Communities",
        description: "Digital and online social connections",
        listItems: [
          {
            id: 74,
            title: "Forum Participation",
            description: "Active participation in relevant forums",
            importance: 2
          },
          {
            id: 75,
            title: "Online Groups",
            description: "Join and participate in online communities",
            importance: 2
          }
        ],
        childLists: [],
        importance: 2
      }
    ],
    importance: 3
  },
  {
    id: 8,
    title: "Hobbies & Interests",
    description: "Personal interests and recreational activities",
    listItems: [
      {
        id: 30,
        title: "Gardening Projects",
        description: "Seasonal planting and garden maintenance",
        importance: 3
      },
      {
        id: 31,
        title: "Music Practice",
        description: "Instrument practice and music theory",
        importance: 2
      }
    ],
    childLists: [
      {
        id: 43,
        title: "Creative Hobbies",
        description: "Artistic and creative pursuits",
        listItems: [
          {
            id: 76,
            title: "Photography",
            description: "Digital and film photography projects",
            importance: 2
          },
          {
            id: 77,
            title: "Writing Projects",
            description: "Creative writing and blogging",
            importance: 2
          }
        ],
        childLists: [],
        importance: 2
      }
    ],
    importance: 2
  }
];