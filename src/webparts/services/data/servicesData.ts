import { IServiceData } from '../models/IServiceModels';

export const servicesData: IServiceData = {
    "metadata": {
        "source": "mock-services",
        "generatedAt": "2025-09-01T06:18:46Z",
        "schemaVersion": "1.0"
    },
    "categories": [
        {
            "id": "CAT-HEALTH",
            "name": "Health & Wellness",
            "count": 5
        },
        {
            "id": "CAT-TRAVEL",
            "name": "Travel & Transport",
            "count": 5
        },
        {
            "id": "CAT-EDU",
            "name": "Education",
            "count": 5
        },
        {
            "id": "CAT-FIN",
            "name": "Finance",
            "count": 5
        },
        {
            "id": "CAT-GOV",
            "name": "Government Support",
            "count": 5
        }
    ],
    "items": [
        {
            "id": "SVC-6644",
            "title": "Book Doctor Appointment",
            "categoryId": "CAT-HEALTH",
            "categoryName": "Health & Wellness",
            "ownerDept": "IT",
            "slaTargetDays": 3,
            "feeAED": 100,
            "channel": "Hybrid",
            "status": "beta",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "doctor",
                "appointment"
            ],
            "links": {
                "applyUrl": "https://example.com/services/book-doctor-appointment",
                "guideUrl": "https://example.com/services/book-doctor-appointment/guide"
            }
        },
        {
            "id": "SVC-9887",
            "title": "Renew Health Insurance",
            "categoryId": "CAT-HEALTH",
            "categoryName": "Health & Wellness",
            "ownerDept": "Operations",
            "slaTargetDays": 7,
            "feeAED": 500,
            "channel": "Hybrid",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "health",
                "insurance"
            ],
            "links": {
                "applyUrl": "https://example.com/services/renew-health-insurance",
                "guideUrl": "https://example.com/services/renew-health-insurance/guide"
            }
        },
        {
            "id": "SVC-8436",
            "title": "Request Vaccination Record",
            "categoryId": "CAT-HEALTH",
            "categoryName": "Health & Wellness",
            "ownerDept": "Customer Services",
            "slaTargetDays": 15,
            "feeAED": 500,
            "channel": "Hybrid",
            "status": "beta",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "request",
                "vaccination"
            ],
            "links": {
                "applyUrl": "https://example.com/services/request-vaccination-record",
                "guideUrl": "https://example.com/services/request-vaccination-record/guide"
            }
        },
        {
            "id": "SVC-2796",
            "title": "Fitness Program Enrollment",
            "categoryId": "CAT-HEALTH",
            "categoryName": "Health & Wellness",
            "ownerDept": "Support",
            "slaTargetDays": 15,
            "feeAED": 200,
            "channel": "Hybrid",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "fitness",
                "program"
            ],
            "links": {
                "applyUrl": "https://example.com/services/fitness-program-enrollment",
                "guideUrl": "https://example.com/services/fitness-program-enrollment/guide"
            }
        },
        {
            "id": "SVC-1658",
            "title": "Mental Health Consultation",
            "categoryId": "CAT-HEALTH",
            "categoryName": "Health & Wellness",
            "ownerDept": "Operations",
            "slaTargetDays": 3,
            "feeAED": 500,
            "channel": "Digital",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "mental",
                "health"
            ],
            "links": {
                "applyUrl": "https://example.com/services/mental-health-consultation",
                "guideUrl": "https://example.com/services/mental-health-consultation/guide"
            }
        },
        {
            "id": "SVC-9131",
            "title": "Apply for Driving License",
            "categoryId": "CAT-TRAVEL",
            "categoryName": "Travel & Transport",
            "ownerDept": "Operations",
            "slaTargetDays": 3,
            "feeAED": 50,
            "channel": "Counter",
            "status": "beta",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "driving",
                "license"
            ],
            "links": {
                "applyUrl": "https://example.com/services/apply-for-driving-license",
                "guideUrl": "https://example.com/services/apply-for-driving-license/guide"
            }
        },
        {
            "id": "SVC-2165",
            "title": "Renew Passport",
            "categoryId": "CAT-TRAVEL",
            "categoryName": "Travel & Transport",
            "ownerDept": "Support",
            "slaTargetDays": 10,
            "feeAED": 500,
            "channel": "Counter",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "passport"
            ],
            "links": {
                "applyUrl": "https://example.com/services/renew-passport",
                "guideUrl": "https://example.com/services/renew-passport/guide"
            }
        },
        {
            "id": "SVC-1185",
            "title": "Public Transport Card Recharge",
            "categoryId": "CAT-TRAVEL",
            "categoryName": "Travel & Transport",
            "ownerDept": "Operations",
            "slaTargetDays": 3,
            "feeAED": 200,
            "channel": "Counter",
            "status": "retired",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "public",
                "transport"
            ],
            "links": {
                "applyUrl": "https://example.com/services/public-transport-card-recharge",
                "guideUrl": "https://example.com/services/public-transport-card-recharge/guide"
            }
        },
        {
            "id": "SVC-8900",
            "title": "Request Travel Permit",
            "categoryId": "CAT-TRAVEL",
            "categoryName": "Travel & Transport",
            "ownerDept": "Customer Services",
            "slaTargetDays": 1,
            "feeAED": 500,
            "channel": "Counter",
            "status": "retired",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "request",
                "travel"
            ],
            "links": {
                "applyUrl": "https://example.com/services/request-travel-permit",
                "guideUrl": "https://example.com/services/request-travel-permit/guide"
            }
        },
        {
            "id": "SVC-7476",
            "title": "Airport Fast-Track Service",
            "categoryId": "CAT-TRAVEL",
            "categoryName": "Travel & Transport",
            "ownerDept": "IT",
            "slaTargetDays": 1,
            "feeAED": 100,
            "channel": "Digital",
            "status": "beta",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "airport",
                "fast-track"
            ],
            "links": {
                "applyUrl": "https://example.com/services/airport-fast-track-service",
                "guideUrl": "https://example.com/services/airport-fast-track-service/guide"
            }
        },
        {
            "id": "SVC-1379",
            "title": "Apply for University Admission",
            "categoryId": "CAT-EDU",
            "categoryName": "Education",
            "ownerDept": "IT",
            "slaTargetDays": 15,
            "feeAED": 0,
            "channel": "Digital",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "university",
                "admission"
            ],
            "links": {
                "applyUrl": "https://example.com/services/apply-for-university-admission",
                "guideUrl": "https://example.com/services/apply-for-university-admission/guide"
            }
        },
        {
            "id": "SVC-2029",
            "title": "Request Transcript",
            "categoryId": "CAT-EDU",
            "categoryName": "Education",
            "ownerDept": "Customer Services",
            "slaTargetDays": 10,
            "feeAED": 0,
            "channel": "Hybrid",
            "status": "beta",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "request",
                "transcript"
            ],
            "links": {
                "applyUrl": "https://example.com/services/request-transcript",
                "guideUrl": "https://example.com/services/request-transcript/guide"
            }
        },
        {
            "id": "SVC-4768",
            "title": "Enroll in Online Course",
            "categoryId": "CAT-EDU",
            "categoryName": "Education",
            "ownerDept": "Customer Services",
            "slaTargetDays": 1,
            "feeAED": 200,
            "channel": "Digital",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "enroll",
                "online"
            ],
            "links": {
                "applyUrl": "https://example.com/services/enroll-in-online-course",
                "guideUrl": "https://example.com/services/enroll-in-online-course/guide"
            }
        },
        {
            "id": "SVC-3126",
            "title": "Library Membership",
            "categoryId": "CAT-EDU",
            "categoryName": "Education",
            "ownerDept": "IT",
            "slaTargetDays": 3,
            "feeAED": 100,
            "channel": "Digital",
            "status": "beta",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "library",
                "membership"
            ],
            "links": {
                "applyUrl": "https://example.com/services/library-membership",
                "guideUrl": "https://example.com/services/library-membership/guide"
            }
        },
        {
            "id": "SVC-3655",
            "title": "Scholarship Application",
            "categoryId": "CAT-EDU",
            "categoryName": "Education",
            "ownerDept": "Customer Services",
            "slaTargetDays": 5,
            "feeAED": 500,
            "channel": "Counter",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "scholarship",
                "application"
            ],
            "links": {
                "applyUrl": "https://example.com/services/scholarship-application",
                "guideUrl": "https://example.com/services/scholarship-application/guide"
            }
        },
        {
            "id": "SVC-7696",
            "title": "Open Bank Account",
            "categoryId": "CAT-FIN",
            "categoryName": "Finance",
            "ownerDept": "Support",
            "slaTargetDays": 10,
            "feeAED": 500,
            "channel": "Digital",
            "status": "beta",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "account"
            ],
            "links": {
                "applyUrl": "https://example.com/services/open-bank-account",
                "guideUrl": "https://example.com/services/open-bank-account/guide"
            }
        },
        {
            "id": "SVC-1223",
            "title": "Apply for Personal Loan",
            "categoryId": "CAT-FIN",
            "categoryName": "Finance",
            "ownerDept": "Support",
            "slaTargetDays": 1,
            "feeAED": 200,
            "channel": "Digital",
            "status": "retired",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "personal"
            ],
            "links": {
                "applyUrl": "https://example.com/services/apply-for-personal-loan",
                "guideUrl": "https://example.com/services/apply-for-personal-loan/guide"
            }
        },
        {
            "id": "SVC-6693",
            "title": "Tax Filing Service",
            "categoryId": "CAT-FIN",
            "categoryName": "Finance",
            "ownerDept": "IT",
            "slaTargetDays": 1,
            "feeAED": 0,
            "channel": "Counter",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "filing",
                "service"
            ],
            "links": {
                "applyUrl": "https://example.com/services/tax-filing-service",
                "guideUrl": "https://example.com/services/tax-filing-service/guide"
            }
        },
        {
            "id": "SVC-9046",
            "title": "Digital Wallet Top-up",
            "categoryId": "CAT-FIN",
            "categoryName": "Finance",
            "ownerDept": "Support",
            "slaTargetDays": 5,
            "feeAED": 100,
            "channel": "Counter",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "digital",
                "wallet"
            ],
            "links": {
                "applyUrl": "https://example.com/services/digital-wallet-top-up",
                "guideUrl": "https://example.com/services/digital-wallet-top-up/guide"
            }
        },
        {
            "id": "SVC-9336",
            "title": "Investment Advisory",
            "categoryId": "CAT-FIN",
            "categoryName": "Finance",
            "ownerDept": "Customer Services",
            "slaTargetDays": 2,
            "feeAED": 100,
            "channel": "Hybrid",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "investment",
                "advisory"
            ],
            "links": {
                "applyUrl": "https://example.com/services/investment-advisory",
                "guideUrl": "https://example.com/services/investment-advisory/guide"
            }
        },
        {
            "id": "SVC-5654",
            "title": "Apply for Residency Permit",
            "categoryId": "CAT-GOV",
            "categoryName": "Government Support",
            "ownerDept": "Operations",
            "slaTargetDays": 2,
            "feeAED": 0,
            "channel": "Hybrid",
            "status": "retired",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "residency",
                "permit"
            ],
            "links": {
                "applyUrl": "https://example.com/services/apply-for-residency-permit",
                "guideUrl": "https://example.com/services/apply-for-residency-permit/guide"
            }
        },
        {
            "id": "SVC-7632",
            "title": "Renew Vehicle Registration",
            "categoryId": "CAT-GOV",
            "categoryName": "Government Support",
            "ownerDept": "Support",
            "slaTargetDays": 2,
            "feeAED": 500,
            "channel": "Counter",
            "status": "beta",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "vehicle",
                "registration"
            ],
            "links": {
                "applyUrl": "https://example.com/services/renew-vehicle-registration",
                "guideUrl": "https://example.com/services/renew-vehicle-registration/guide"
            }
        },
        {
            "id": "SVC-6318",
            "title": "Request Birth Certificate",
            "categoryId": "CAT-GOV",
            "categoryName": "Government Support",
            "ownerDept": "Support",
            "slaTargetDays": 10,
            "feeAED": 500,
            "channel": "Counter",
            "status": "beta",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "request",
                "certificate"
            ],
            "links": {
                "applyUrl": "https://example.com/services/request-birth-certificate",
                "guideUrl": "https://example.com/services/request-birth-certificate/guide"
            }
        },
        {
            "id": "SVC-9015",
            "title": "Submit Complaint",
            "categoryId": "CAT-GOV",
            "categoryName": "Government Support",
            "ownerDept": "Operations",
            "slaTargetDays": 15,
            "feeAED": 50,
            "channel": "Digital",
            "status": "beta",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "submit",
                "Complaint"
            ],
            "links": {
                "applyUrl": "https://example.com/services/submit-Complaint",
                "guideUrl": "https://example.com/services/submit-Complaint/guide"
            }
        },
        {
            "id": "SVC-5836",
            "title": "Book Public Service Appointment",
            "categoryId": "CAT-GOV",
            "categoryName": "Government Support",
            "ownerDept": "Customer Services",
            "slaTargetDays": 7,
            "feeAED": 150,
            "channel": "Digital",
            "status": "active",
            "updated": "2025-09-01T06:18:46Z",
            "tags": [
                "public",
                "service"
            ],
            "links": {
                "applyUrl": "https://example.com/services/book-public-service-appointment",
                "guideUrl": "https://example.com/services/book-public-service-appointment/guide"
            }
        }
    ]
}