const posData = {
  "products": [
    {
      "software": {
        "name": "Erudite Parlour",
        "tagline": "Complete Salon & Spa Management Solution",
        "overview": "Erudite Parlour is an all-in-one management system designed specifically for salons and spas, offering appointment scheduling, client management, and point-of-sale functionality.",
        "platforms": ["Android", "Web"],
        "features": [
          "Appointment Scheduling",
          "Client Management",
          "Service Tracking",
          "Inventory Management",
          "Staff Performance Analytics",
          "Mobile Payments Integration",
          "Multi-branch Support",
          "Real-time Reports & Analytics",
          "Cloud Backup & Offline Mode"
        ],
        "pricing": [
          {
            "plan": "Basic",
            "price": "KES 1,500 / Month",
            "targetUser": "Solo Stylists, Small Salons",
            "coreFunctionality": [
              "Appointment Scheduling",
              "Client Management"
            ],
            "keyFeaturesIncluded": {
              "Appointment Scheduling": "✓ (Basic)",
              "Client Management": "✓",
              "Staff Task Management": "X",
              "Sales Tracking & Reporting": "X",
              "Inventory Management": "X",
              "Multi-User/Staff Accounts": "1-2 Users"
            },
            "dedicatedSupport": "Standard Email Support",
            "paymentAndSubscriptionManagementPortal": "Basic Client View",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          },
          {
            "plan": "Standard",
            "price": "KES 2,500 / Month",
            "targetUser": "Small to Medium Salons",
            "coreFunctionality": [
              "All Basic features",
              "Staff Task Management",
              "Sales Tracking & Reporting"
            ],
            "keyFeaturesIncluded": {
              "Appointment Scheduling": "✓ (Standard)",
              "Client Management": "✓",
              "Staff Task Management": "✓",
              "Sales Tracking & Reporting": "✓",
              "Inventory Management": "X",
              "Multi-User/Staff Accounts": "Up to 3 Users"
            },
            "dedicatedSupport": "Priority Email Support",
            "paymentAndSubscriptionManagementPortal": "Standard Client View",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          },
          {
            "plan": "Professional",
            "price": "KES 3,500 / Month",
            "targetUser": "Medium Salons & Spas",
            "coreFunctionality": [
              "All Standard features",
              "Inventory Management"
            ],
            "keyFeaturesIncluded": {
              "Appointment Scheduling": "✓ (Advanced)",
              "Client Management": "✓",
              "Staff Task Management": "✓",
              "Sales Tracking & Reporting": "✓",
              "Inventory Management": "✓",
              "Multi-User/Staff Accounts": "Up to 5 Users"
            },
            "dedicatedSupport": "Priority Email & Chat Support",
            "paymentAndSubscriptionManagementPortal": "Full Client Portal Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          }
        ],
        "faqs": [
          {
            "question": "Can Erudite Parlour handle multiple service providers?",
            "answer": "Yes, the system supports multiple staff members with individual calendars and performance tracking."
          },
          {
            "question": "Is there an offline mode?",
            "answer": "Yes, Erudite Parlour works offline and syncs data when connection is restored."
          }
        ],
        "testimonials": [
          {
            "customerName": "Sarah Kimani",
            "businessType": "Salon Owner",
            "feedback": "Erudite Parlour has streamlined my booking process and reduced no-shows by 40%.",
            "rating": 5
          }
        ],
        "images": [
          {
            "url": "https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "description": "Parlour Dashboard View"
          },
          {
            "url": "https://erudite.co.ke/images/parlour-dashboard.png",
            "description": "Parlour Dashboard View"
          }
        ],
        "videos": [
          {
            "url": "istockphoto-1493524066-640_adpp_is.mp4",
            "description": "Erudite Parlour Overview"
          }
        ],
        "webLink": "www.erudite.co.ke/parlour",
        "playstoreLink": "https://play.google.com/store/apps/details?id=ke.co.titus.parlour",
        "apkLink": "erudite.co.ke/appstore/parlour"
      }
    },
    {
      "software": {
        "name": "Erudite Minimart",
        "tagline": "Smart Retail Management Solution",
        "overview": "Erudite Minimart is a comprehensive POS system designed for retail businesses, offering inventory management, sales tracking, and customer relationship tools.",
        "platforms": ["Android", "Web"],
        "features": [
          "Barcode Scanning",
          "Inventory Tracking",
          "Sales Reporting",
          "Supplier Management",
          "Multi-branch Support",
          "Mobile Money Integration",
          "Customer Loyalty Programs",
          "Real-time Stock Alerts",
          "Role-based Access Control"
        ],
        "pricing": [
          {
            "plan": "Starter",
            "price": "KES 2,000 / Month",
            "targetUser": "Small Shops & Kiosks",
            "coreFunctionality": [
              "Basic Inventory",
              "Sales Tracking"
            ],
            "keyFeaturesIncluded": {
              "Barcode Scanning": "✓",
              "Inventory Management": "✓ (Basic)",
              "Sales Reports": "✓ (Basic)",
              "Supplier Management": "X",
              "Multi-branch": "X",
              "User Accounts": "1-2 Users"
            },
            "dedicatedSupport": "Email Support",
            "paymentAndSubscriptionManagementPortal": "Basic Access",
            "paymentOptions": ["Monthly", "Quarterly"]
          },
          {
            "plan": "Standard",
            "price": "KES 3,000 / Month",
            "targetUser": "Medium Shops & Retailers",
            "coreFunctionality": [
              "All Starter features",
              "Advanced Inventory",
              "Sales Reporting"
            ],
            "keyFeaturesIncluded": {
              "Barcode Scanning": "✓",
              "Inventory Management": "✓ (Standard)",
              "Sales Reports": "✓ (Standard)",
              "Supplier Management": "X",
              "Multi-branch": "X",
              "User Accounts": "Up to 3 Users"
            },
            "dedicatedSupport": "Priority Email Support",
            "paymentAndSubscriptionManagementPortal": "Standard Access",
            "paymentOptions": ["Monthly", "Quarterly"]
          },
          {
            "plan": "Business",
            "price": "KES 4,500 / Month",
            "targetUser": "Retail Stores",
            "coreFunctionality": [
              "All Standard features",
              "Supplier Management"
            ],
            "keyFeaturesIncluded": {
              "Barcode Scanning": "✓",
              "Inventory Management": "✓ (Advanced)",
              "Sales Reports": "✓ (Advanced)",
              "Supplier Management": "✓",
              "Multi-branch": "✓",
              "User Accounts": "Up to 5 Users"
            },
            "dedicatedSupport": "Email & Chat Support",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          }
        ],
        "faqs": [
          {
            "question": "Can Erudite Minimart integrate with mobile money?",
            "answer": "Yes, it supports M-Pesa and other mobile money integrations."
          }
        ],
        "testimonials": [
          {
            "customerName": "James Omondi",
            "businessType": "Shop Owner",
            "feedback": "The inventory management has saved me countless hours of manual stock-taking.",
            "rating": 4
          }
        ],
        "images": [
          {
            "url": "https://erudite.co.ke/images/minimart-pos.png",
            "description": "Minimart POS Interface"
          }
        ],
        "videos": [
          {
            "url": "https://www.youtube.com/watch?v=minimart123",
            "description": "Minimart Setup Guide"
          }
        ],
        "webLink": "www.erudite.co.ke/minimart",
        "playstoreLink": "https://play.google.com/store/apps/details?id=ke.co.titus.minimart",
        "apkLink": "erudite.co.ke/appstore/minimart"
      }
    },
    {
      "software": {
        "name": "Erudite eSMS",
        "tagline": "Powerful Business Communication Platform",
        "overview": "Erudite eSMS enables businesses to send bulk SMS messages, manage contacts, and automate customer communications.",
        "platforms": ["Android", "Web"],
        "features": [
          "Bulk SMS Campaigns",
          "Contact Group Management",
          "SMS Templates",
          "Delivery Reports",
          "API Integration",
          "Scheduled Messaging",
          "Two-way Messaging",
          "Sender ID Management"
        ],
        "pricing": [
          {
            "plan": "Pay-As-You-Go",
            "price": "KES 1.20/SMS",
            "targetUser": "Occasional Users",
            "coreFunctionality": [
              "Basic SMS Sending",
              "Contact Management"
            ],
            "keyFeaturesIncluded": {
              "Bulk SMS": "✓",
              "Contact Groups": "✓ (Basic)",
              "SMS Templates": "X",
              "Delivery Reports": "✓ (Basic)",
              "API Access": "X",
              "User Accounts": "1 User"
            },
            "dedicatedSupport": "Email Support",
            "paymentAndSubscriptionManagementPortal": "Basic Access",
            "paymentOptions": ["Prepaid Credits"]
          },
          {
            "plan": "Business",
            "price": "KES 999 / Month + KES 1.00/SMS",
            "targetUser": "Regular Business Users",
            "coreFunctionality": [
              "All Pay-As-You-Go features",
              "Advanced Reporting",
              "API Access"
            ],
            "keyFeaturesIncluded": {
              "Bulk SMS": "✓",
              "Contact Groups": "✓ (Advanced)",
              "SMS Templates": "✓",
              "Delivery Reports": "✓ (Detailed)",
              "API Access": "✓",
              "User Accounts": "Up to 3 Users"
            },
            "dedicatedSupport": "Priority Support",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Prepaid Credits"]
          }
        ],
        "faqs": [
          {
            "question": "Can I use my own sender ID?",
            "answer": "Yes, after completing the registration process with the telecom providers."
          }
        ],
        "testimonials": [
          {
            "customerName": "Grace Wambui",
            "businessType": "Marketing Manager",
            "feedback": "The bulk SMS feature has revolutionized our customer communication strategy.",
            "rating": 5
          }
        ],
        "images": [
          {
            "url": "https://erudite.co.ke/images/esms-dashboard.png",
            "description": "eSMS Dashboard"
          }
        ],
        "videos": [
          {
            "url": "https://www.youtube.com/watch?v=esms123",
            "description": "eSMS Campaign Setup"
          }
        ],
        "webLink": "www.erudite.co.ke/esms",
        "playstoreLink": "https://play.google.com/store/apps/details?id=ke.co.titus.esms",
        "apkLink": "erudite.co.ke/appstore/esms"
      }
    },
    {
      "software": {
        "name": "Erudite Payroll",
        "tagline": "Comprehensive Payroll Management System",
        "overview": "Erudite Payroll simplifies employee salary processing, tax calculations, and statutory compliance for businesses of all sizes.",
        "platforms": ["Windows", "Android", "Web"],
        "features": [
          "Employee Management",
          "Salary Processing",
          "Tax Calculations",
          "Payslip Generation",
          "Statutory Compliance",
          "Leave Management",
          "Multiple Payroll Cycles",
          "Bank Integration",
          "Custom Reporting"
        ],
        "pricing": [
          {
            "plan": "Small Business",
            "price": "KES 2,500 / Month",
            "targetUser": "SMEs with up to 10 employees",
            "coreFunctionality": [
              "Basic Payroll",
              "Employee Records"
            ],
            "keyFeaturesIncluded": {
              "Salary Processing": "✓",
              "Tax Calculations": "✓ (Basic)",
              "Payslip Generation": "✓",
              "Statutory Compliance": "✓ (Basic)",
              "Leave Management": "X",
              "User Accounts": "1-2 Users"
            },
            "dedicatedSupport": "Email Support",
            "paymentAndSubscriptionManagementPortal": "Basic Access",
            "paymentOptions": ["Monthly", "Quarterly"]
          },
          {
            "plan": "Standard",
            "price": "KES 4,000 / Month",
            "targetUser": "Growing Businesses",
            "coreFunctionality": [
              "All Small Business features",
              "Advanced Compliance",
              "Leave Management"
            ],
            "keyFeaturesIncluded": {
              "Salary Processing": "✓",
              "Tax Calculations": "✓ (Advanced)",
              "Payslip Generation": "✓",
              "Statutory Compliance": "✓ (Full)",
              "Leave Management": "✓",
              "User Accounts": "Up to 5 Users"
            },
            "dedicatedSupport": "Priority Support",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          },
          {
            "plan": "Enterprise",
            "price": "KES 5,000 / Month",
            "targetUser": "Medium to Large Organizations",
            "coreFunctionality": [
              "All Standard features",
              "Advanced Compliance",
              "Leave Management"
            ],
            "keyFeaturesIncluded": {
              "Salary Processing": "✓",
              "Tax Calculations": "✓ (Advanced)",
              "Payslip Generation": "✓",
              "Statutory Compliance": "✓ (Full)",
              "Leave Management": "✓",
              "User Accounts": "Up to 5 Users"
            },
            "dedicatedSupport": "Priority Support",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          }
        ],
        "faqs": [
          {
            "question": "Does it handle NHIF, NSSF, and PAYE?",
            "answer": "Yes, the system automatically calculates all statutory deductions."
          }
        ],
        "testimonials": [
          {
            "customerName": "Michael Otieno",
            "businessType": "HR Manager",
            "feedback": "Reduced our payroll processing time from 3 days to just 2 hours.",
            "rating": 5
          }
        ],
        "images": [
          {
            "url": "https://erudite.co.ke/images/payroll-screen.png",
            "description": "Payroll Processing Screen"
          }
        ],
        "videos": [
          {
            "url": "https://www.youtube.com/watch?v=payroll123",
            "description": "Payroll Setup Tutorial"
          }
        ],
        "webLink": "www.erudite.co.ke/payroll",
        "playstoreLink": "https://play.google.com/store/apps/details?id=ke.co.titus.eruditepayroll",
        "apkLink": "erudite.co.ke/appstore/payroll"
      }
    },
    {
      "software": {
        "name": "Erudite Finance",
        "tagline": "Complete Financial Management Solution",
        "overview": "Erudite Finance provides comprehensive accounting tools including invoicing, expense tracking, and financial reporting for businesses.",
        "platforms": ["Windows", "Web"],
        "features": [
          "Invoicing",
          "Expense Tracking",
          "Financial Reporting",
          "Bank Reconciliation",
          "Tax Management",
          "Multi-currency Support",
          "Budgeting",
          "Project Accounting",
          "Custom Financial Statements"
        ],
        "pricing": [
          {
            "plan": "Startup",
            "price": "KES 3,000 / Month",
            "targetUser": "Small Businesses & Startups",
            "coreFunctionality": [
              "Basic Accounting",
              "Invoicing"
            ],
            "keyFeaturesIncluded": {
              "Invoicing": "✓",
              "Expense Tracking": "✓",
              "Financial Reports": "✓ (Standard)",
              "Bank Reconciliation": "✓ (Basic)",
              "Multi-currency": "X",
              "User Accounts": "1-2 Users"
            },
            "dedicatedSupport": "Email Support",
            "paymentAndSubscriptionManagementPortal": "Basic Access",
            "paymentOptions": ["Monthly", "Quarterly"]
          },
          {
            "plan": "Standard",
            "price": "KES 4,500 / Month",
            "targetUser": "Growing Businesses",
            "coreFunctionality": [
              "All Startup features",
              "Advanced Accounting",
              "Multi-currency"
            ],
            "keyFeaturesIncluded": {
              "Invoicing": "✓",
              "Expense Tracking": "✓ (Advanced)",
              "Financial Reports": "✓ (Customizable)",
              "Bank Reconciliation": "✓ (Advanced)",
              "Multi-currency": "✓",
              "User Accounts": "Up to 5 Users"
            },
            "dedicatedSupport": "Priority Support",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          },
          {
            "plan": "Professional",
            "price": "KES 6,500 / Month",
            "targetUser": "Large Enterprises",
            "coreFunctionality": [
              "All Standard features",
              "Advanced Reporting",
              "Dedicated Account Manager"
            ],
            "keyFeaturesIncluded": {
              "Invoicing": "✓",
              "Expense Tracking": "✓ (Advanced)",
              "Financial Reports": "✓ (Customizable)",
              "Bank Reconciliation": "✓ (Advanced)",
              "Multi-currency": "✓",
              "User Accounts": "Up to 10 Users"
            },
            "dedicatedSupport": "Dedicated Account Manager",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          }
        ],
        "faqs": [
          {
            "question": "Can I import bank statements?",
            "answer": "Yes, the system supports CSV imports from most banks."
          }
        ],
        "testimonials": [
          {
            "customerName": "Linda Chebet",
            "businessType": "Accountant",
            "feedback": "The automated reconciliation has eliminated countless hours of manual work.",
            "rating": 5
          }
        ],
        "images": [
          {
            "url": "https://erudite.co.ke/images/finance-dashboard.png",
            "description": "Finance Dashboard"
          }
        ],
        "videos": [
          {
            "url": "https://www.youtube.com/watch?v=finance123",
            "description": "Getting Started with Erudite Finance"
          }
        ],
        "webLink": "www.erudite.co.ke/finance",
        "playstoreLink": "https://play.google.com/store/apps/details?id=ke.co.titus.eruditefinance",
        "apkLink": "erudite.co.ke/appstore/finance"
      }
    },
    {
      "software": {
        "name": "Erudite Sacco",
        "tagline": "Complete SACCO Management System",
        "overview": "Erudite Sacco provides end-to-end management solutions for savings and credit cooperatives, including member management, loan processing, and dividend calculations.",
        "platforms": ["Windows", "Web"],
        "features": [
          "Member Management",
          "Loan Processing",
          "Dividend Calculations",
          "Savings Tracking",
          "Multi-branch Support",
          "Regulatory Compliance",
          "Mobile Banking Integration",
          "Custom Reporting",
          "Automated Notifications"
        ],
        "pricing": [
          {
            "plan": "Basic",
            "price": "KES 7,500 / Month",
            "targetUser": "Small SACCOs",
            "coreFunctionality": [
              "Member Management",
              "Basic Loan Processing"
            ],
            "keyFeaturesIncluded": {
              "Member Management": "✓",
              "Loan Processing": "✓ (Basic)",
              "Dividend Calculations": "X",
              "Multi-branch": "X",
              "Mobile Banking": "X",
              "User Accounts": "Up to 3 Users"
            },
            "dedicatedSupport": "Email Support",
            "paymentAndSubscriptionManagementPortal": "Basic Access",
            "paymentOptions": ["Monthly", "Quarterly"]
          },
          {
            "plan": "Standard",
            "price": "KES 10,000 / Month",
            "targetUser": "Medium SACCOs",
            "coreFunctionality": [
              "All Basic features",
              "Advanced Loan Processing",
              "Dividend Calculations"
            ],
            "keyFeaturesIncluded": {
              "Member Management": "✓ (Advanced)",
              "Loan Processing": "✓ (Advanced)",
              "Dividend Calculations": "✓",
              "Multi-branch": "✓",
              "Mobile Banking": "✓",
              "User Accounts": "Up to 10 Users"
            },
            "dedicatedSupport": "Priority Support",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          },
          {
            "plan": "Enterprise",
            "price": "KES 15,000 / Month",
            "targetUser": "Large SACCOs",
            "coreFunctionality": [
              "All Standard features",
              "Advanced Loan Processing",
              "Dividend Calculations"
            ],
            "keyFeaturesIncluded": {
              "Member Management": "✓ (Advanced)",
              "Loan Processing": "✓ (Advanced)",
              "Dividend Calculations": "✓",
              "Multi-branch": "✓",
              "Mobile Banking": "✓",
              "User Accounts": "Unlimited"
            },
            "dedicatedSupport": "Dedicated Account Manager",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          }
        ],
        "faqs": [
          {
            "question": "Does it support Sacco regulatory reporting?",
            "answer": "Yes, including all required reports for SASRA compliance."
          }
        ],
        "testimonials": [
          {
            "customerName": "Peter Mwangi",
            "businessType": "Sacco Manager",
            "feedback": "The dividend calculation feature has made our annual processes so much easier.",
            "rating": 5
          }
        ],
        "images": [
          {
            "url": "https://erudite.co.ke/images/sacco-system.png",
            "description": "Sacco Management Interface"
          }
        ],
        "videos": [
          {
            "url": "https://www.youtube.com/watch?v=sacco123",
            "description": "Sacco System Walkthrough"
          }
        ],
        "webLink": "www.erudite.co.ke/sacco",
        "playstoreLink": "https://play.google.com/store/apps/details?id=ke.co.titus.sacco",
        "apkLink": "erudite.co.ke/appstore/sacco"
      }
    },
    {
      "software": {
        "name": "Erudite Mpesa Agent",
        "tagline": "Complete M-Pesa Agency Management Solution",
        "overview": "Erudite Mpesa Agent provides comprehensive tools for managing mobile money agency operations, including transaction tracking, float management, and agent performance analytics.",
        "platforms": ["Android"],
        "features": [
          "Transaction Tracking",
          "Float Management",
          "Commission Calculations",
          "Agent Performance Analytics",
          "Cash Flow Monitoring",
          "Security Features",
          "Automated Reconciliation",
          "Customer Management",
          "Real-time Alerts"
        ],
        "pricing": [
          {
            "plan": "Individual Agent",
            "price": "KES 1,000 / Month",
            "targetUser": "Single M-Pesa Agents",
            "coreFunctionality": [
              "Transaction Tracking",
              "Basic Reporting"
            ],
            "keyFeaturesIncluded": {
              "Transaction Tracking": "✓",
              "Float Management": "✓ (Basic)",
              "Commission Calculations": "✓",
              "Performance Analytics": "X",
              "Multi-agent": "X",
              "User Accounts": "1 User"
            },
            "dedicatedSupport": "Email Support",
            "paymentAndSubscriptionManagementPortal": "Basic Access",
            "paymentOptions": ["Monthly"]
          },
          {
            "plan": "Agency",
            "price": "KES 3,500 / Month",
            "targetUser": "M-Pesa Agencies with Multiple Agents",
            "coreFunctionality": [
              "All Individual features",
              "Multi-agent Support",
              "Advanced Analytics"
            ],
            "keyFeaturesIncluded": {
              "Transaction Tracking": "✓",
              "Float Management": "✓ (Advanced)",
              "Commission Calculations": "✓ (Detailed)",
              "Performance Analytics": "✓",
              "Multi-agent": "✓",
              "User Accounts": "Up to 5 Users"
            },
            "dedicatedSupport": "Phone & Email Support",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly"]
          }
        ],
        "faqs": [
          {
            "question": "Can I track multiple M-Pesa lines?",
            "answer": "Yes, the system supports tracking of multiple agent lines under one account."
          }
        ],
        "testimonials": [
          {
            "customerName": "Susan Akinyi",
            "businessType": "M-Pesa Agent",
            "feedback": "The float management alerts have helped me avoid running out of cash at critical times.",
            "rating": 4
          }
        ],
        "images": [
          {
            "url": "https://erudite.co.ke/images/mpesa-agent.png",
            "description": "Agent Dashboard"
          }
        ],
        "videos": [
          {
            "url": "https://www.youtube.com/watch?v=mpesa123",
            "description": "Mpesa Agent System Demo"
          }
        ],
        "webLink": "www.erudite.co.ke/mpesaagent",
        "playstoreLink": "https://play.google.com/store/apps/details?id=ke.co.titus.mpesaagent",
        "apkLink": "erudite.co.ke/appstore/mpesaagent"
      }
    },
    {
      "software": {
        "name": "Erudite Asset",
        "tagline": "Comprehensive Asset Tracking Solution",
        "overview": "Erudite Asset provides complete asset management capabilities including tracking, maintenance scheduling, and depreciation calculations for businesses of all sizes.",
        "platforms": ["Android", "Web"],
        "features": [
          "Asset Tracking",
          "Maintenance Scheduling",
          "Depreciation Calculations",
          "Barcode/QR Support",
          "Location Tracking",
          "Custom Reporting",
          "Disposal Management",
          "Insurance Tracking",
          "Audit Trail"
        ],
        "pricing": [
          {
            "plan": "Small Business",
            "price": "KES 2,800 / Month",
            "targetUser": "Businesses with Limited Assets",
            "coreFunctionality": [
              "Basic Asset Tracking",
              "Maintenance Reminders"
            ],
            "keyFeaturesIncluded": {
              "Asset Tracking": "✓",
              "Maintenance Scheduling": "✓ (Basic)",
              "Depreciation": "X",
              "Barcode Scanning": "✓",
              "Location Tracking": "X",
              "User Accounts": "1-2 Users"
            },
            "dedicatedSupport": "Email Support",
            "paymentAndSubscriptionManagementPortal": "Basic Access",
            "paymentOptions": ["Monthly", "Quarterly"]
          },
          {
            "plan": "Standard",
            "price": "KES 4,500 / Month",
            "targetUser": "Businesses with Moderate Assets",
            "coreFunctionality": [
              "All Small Business features",
              "Advanced Tracking",
              "Depreciation"
            ],
            "keyFeaturesIncluded": {
              "Asset Tracking": "✓ (Advanced)",
              "Maintenance Scheduling": "✓ (Advanced)",
              "Depreciation": "✓",
              "Barcode Scanning": "✓",
              "Location Tracking": "✓",
              "User Accounts": "Up to 10 Users"
            },
            "dedicatedSupport": "Priority Support",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          },
          {
            "plan": "Enterprise",
            "price": "KES 6,000 / Month",
            "targetUser": "Businesses with Extensive Assets",
            "coreFunctionality": [
              "All Standard features",
              "Advanced Tracking",
              "Depreciation"
            ],
            "keyFeaturesIncluded": {
              "Asset Tracking": "✓ (Advanced)",
              "Maintenance Scheduling": "✓ (Advanced)",
              "Depreciation": "✓",
              "Barcode Scanning": "✓",
              "Location Tracking": "✓",
              "User Accounts": "Up to 10 Users"
            },
            "dedicatedSupport": "Priority Support",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          }
        ],
        "faqs": [
          {
            "question": "Can I import existing asset data?",
            "answer": "Yes, the system supports CSV imports for easy migration."
          }
        ],
        "testimonials": [
          {
            "customerName": "Robert Kamau",
            "businessType": "Facilities Manager",
            "feedback": "The maintenance scheduling has helped us reduce equipment downtime by 30%.",
            "rating": 5
          }
        ],
        "images": [
          {
            "url": "https://erudite.co.ke/images/asset-tracking.png",
            "description": "Asset Tracking Interface"
          }
        ],
        "videos": [
          {
            "url": "https://www.youtube.com/watch?v=asset123",
            "description": "Asset Management Setup"
          }
        ],
        "webLink": "www.erudite.co.ke/asset",
        "playstoreLink": "https://play.google.com/store/apps/details?id=ke.co.titus.asset",
        "apkLink": "erudite.co.ke/appstore/asset"
      }
    },
    {
      "software": {
        "name": "Erudite Stock",
        "tagline": "Advanced Inventory Management System",
        "overview": "Erudite Stock provides powerful inventory management tools including stock tracking, reorder alerts, and multi-warehouse support for businesses with complex inventory needs.",
        "platforms": ["Windows", "Android", "Web"],
        "features": [
          "Stock Tracking",
          "Reorder Alerts",
          "Multi-Warehouse",
          "Barcode Scanning",
          "Batch/Lot Tracking",
          "Reporting",
          "Supplier Management",
          "Inventory Valuation",
          "Mobile Access"
        ],
        "pricing": [
          {
            "plan": "Basic",
            "price": "KES 3,200 / Month",
            "targetUser": "Small Businesses",
            "coreFunctionality": [
              "Basic Inventory",
              "Stock Alerts"
            ],
            "keyFeaturesIncluded": {
              "Stock Tracking": "✓",
              "Reorder Alerts": "✓",
              "Multi-Warehouse": "X",
              "Barcode Scanning": "✓",
              "Batch Tracking": "X",
              "User Accounts": "1-3 Users"
            },
            "dedicatedSupport": "Email Support",
            "paymentAndSubscriptionManagementPortal": "Basic Access",
            "paymentOptions": ["Monthly", "Quarterly"]
          },
          {
            "plan": "Standard",
            "price": "KES 5,500 / Month",
            "targetUser": "Medium Businesses",
            "coreFunctionality": [
              "All Basic features",
              "Multi-Warehouse",
              "Batch Tracking"
            ],
            "keyFeaturesIncluded": {
              "Stock Tracking": "✓ (Advanced)",
              "Reorder Alerts": "✓ (Customizable)",
              "Multi-Warehouse": "✓",
              "Barcode Scanning": "✓",
              "Batch Tracking": "✓",
              "User Accounts": "Up to 10 Users"
            },
            "dedicatedSupport": "Priority Support",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          },
          {
            "plan": "Advanced",
            "price": "KES 7,500 / Month",
            "targetUser": "Large Businesses",
            "coreFunctionality": [
              "All Standard features",
              "Advanced Reporting",
              "Dedicated Account Manager"
            ],
            "keyFeaturesIncluded": {
              "Stock Tracking": "✓ (Advanced)",
              "Reorder Alerts": "✓ (Customizable)",
              "Multi-Warehouse": "✓",
              "Barcode Scanning": "✓",
              "Batch Tracking": "✓",
              "User Accounts": "Unlimited"
            },
            "dedicatedSupport": "Dedicated Account Manager",
            "paymentAndSubscriptionManagementPortal": "Full Access",
            "paymentOptions": ["Monthly", "Quarterly", "Annually"]
          }
        ],
        "faqs": [
          {
            "question": "Can I track inventory across multiple locations?",
            "answer": "Yes, the Advanced plan supports unlimited warehouse/location tracking."
          }
        ],
        "testimonials": [
          {
            "customerName": "Elizabeth Wanjiru",
            "businessType": "Inventory Manager",
            "feedback": "The reorder alerts have helped us maintain optimal stock levels and reduce carrying costs.",
            "rating": 5
          }
        ],
        "images": [
          {
            "url": "https://erudite.co.ke/images/stock-system.png",
            "description": "Stock Management Dashboard"
          }
        ],
        "videos": [
          {
            "url": "https://www.youtube.com/watch?v=stock123",
            "description": "Inventory Management Demo"
          }
        ],
        "webLink": "www.erudite.co.ke/stock",
        "playstoreLink": "https://play.google.com/store/apps/details?id=ke.co.titus.stock",
        "apkLink": "erudite.co.ke/appstore/stock"
      }
    }
  ],
  "company": {
    "name": "Erudite Solutions",
    "website": "www.erudite.co.ke",
    "contact": {
      "email": "info@erudite.co.ke",
      "phone": "+254 700 123456",
      "address": "Nairobi, Kenya"
    },
    "about": "Providing innovative software solutions for businesses across Africa since 2015."
  }
};

export default posData;