export interface Feature {
    title: string;
    description: string;
    iconPaths: string[];
    gradientFrom: string;
    gradientTo: string;
    borderColor: string;
    hoverBorderColor: string;
    benefits: string[];
}

export const featuresData: Feature[] = [
    {
        title: "Real-Time Inventory Tracking",
        description: "Track every cylinder's location, status, and movement in real-time. Know exactly where your assets are at any moment with GPS integration and automatic status updates.",
        iconPaths: [
            "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
            "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        ],
        gradientFrom: "from-blue-900",
        gradientTo: "to-blue-700",
        borderColor: "border-blue-100",
        hoverBorderColor: "hover:border-blue-300",
        benefits: [
            "Live GPS tracking",
            "Automated status updates",
            "Multi-location support"
        ]
    },
    {
        title: "Automated Distribution",
        description: "Streamline delivery operations with intelligent route planning, automated scheduling, and driver assignments. Reduce fuel costs and delivery times.",
        iconPaths: [
            "M13 10V3L4 14h7v7l9-11h-7z"
        ],
        gradientFrom: "from-teal-600",
        gradientTo: "to-teal-500",
        borderColor: "border-teal-100",
        hoverBorderColor: "hover:border-teal-300",
        benefits: [
            "Smart route optimization",
            "Delivery scheduling",
            "Driver mobile app"
        ]
    },
    {
        title: "Analytics & Insights",
        description: "Make data-driven decisions with comprehensive dashboards and customizable reports. Track KPIs, identify trends, and optimize your operations.",
        iconPaths: [
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        ],
        gradientFrom: "from-blue-900",
        gradientTo: "to-blue-700",
        borderColor: "border-blue-100",
        hoverBorderColor: "hover:border-blue-300",
        benefits: [
            "Real-time dashboards",
            "Custom reports",
            "Export to Excel/PDF"
        ]
    },
    {
        title: "Mobile-First Platform",
        description: "Empower your field team with native mobile apps for iOS and Android. Update inventory, capture signatures, and sync data offline.",
        iconPaths: [
            "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        ],
        gradientFrom: "from-teal-600",
        gradientTo: "to-teal-500",
        borderColor: "border-teal-100",
        hoverBorderColor: "hover:border-teal-300",
        benefits: [
            "iOS & Android apps",
            "Offline mode support",
            "Digital signatures"
        ]
    },
    {
        title: "Seamless Integrations",
        description: "Connect with your existing ERP, accounting, and CRM systems. API access for custom integrations and automated workflows.",
        iconPaths: [
            "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ],
        gradientFrom: "from-blue-900",
        gradientTo: "to-blue-700",
        borderColor: "border-blue-100",
        hoverBorderColor: "hover:border-blue-300",
        benefits: [
            "RESTful API",
            "ERP/accounting sync",
            "Webhook support"
        ]
    },
    {
        title: "Safety & Compliance",
        description: "Stay compliant with automated tracking of certifications, inspections, and safety protocols. Complete audit trails for regulatory requirements.",
        iconPaths: [
            "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        ],
        gradientFrom: "from-teal-600",
        gradientTo: "to-teal-500",
        borderColor: "border-teal-100",
        hoverBorderColor: "hover:border-teal-300",
        benefits: [
            "Certification tracking",
            "Inspection schedules",
            "Complete audit trails"
        ]
    }
];
