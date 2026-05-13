import { BookOpen, Library, Stethoscope, Microscope, UtensilsCrossed, Monitor, Building, Home } from "lucide-react";

export const facilities = [
    {
        slug: "class-room",
        name: "Classrooms",
        icon: "BookOpen",
        shortDescription: "Spacious, well-ventilated classrooms equipped with modern audio-visual teaching aids.",
        fullDescription: "Our classrooms are designed to foster an optimal learning environment. Each room is equipped with digital projectors, interactive whiteboards, and high-speed Wi-Fi. Ergonomic seating and excellent acoustics ensure that every student has a comfortable and engaging learning experience. The classrooms accommodate various teaching formats including lectures, group discussions, and presentations.",
        features: ["Digital Projectors & Smart Boards", "Ergonomic Seating for 60+ Students", "High-Speed Wi-Fi", "Climate-Controlled Environment", "Audio-Visual Presentation Systems", "Natural Lighting & Ventilation"]
    },
    {
        slug: "library",
        name: "Library",
        icon: "Library",
        shortDescription: "A comprehensive library with thousands of textbooks, journals, and digital resources.",
        fullDescription: "The FIMS Library is a hub of academic resources, housing over 10,000 textbooks, reference books, and bound journals across healthcare, hospitality, and management disciplines. Students have access to online databases, e-journals, and digital learning platforms. The library features dedicated reading zones, a periodical section, a digital corner with internet-connected workstations, and a quiet study area for focused research.",
        features: ["10,000+ Books & Reference Materials", "Online Database & E-Journal Access", "Dedicated Reading Zones", "Digital Corner with Workstations", "Periodical & Newspaper Section", "Extended Library Hours"]
    },
    {
        slug: "opd",
        name: "OPD (Out-Patient Department)",
        icon: "Stethoscope",
        shortDescription: "A functional OPD providing clinical exposure and hands-on patient care experience.",
        fullDescription: "The Out-Patient Department at FIMS serves as a critical training ground for healthcare students. Under the supervision of experienced faculty and clinicians, students gain direct patient interaction experience, learn clinical assessment techniques, and develop diagnostic reasoning skills. The OPD handles a range of cases including musculoskeletal, neurological, and cardiopulmonary conditions, providing diverse clinical exposure essential for professional competence.",
        features: ["Supervised Clinical Training", "Diverse Patient Case Exposure", "Modern Diagnostic Equipment", "Physiotherapy Treatment Stations", "Patient Counseling Rooms", "Electronic Health Records System"]
    },
    {
        slug: "anatomy-physiology-lab",
        name: "Anatomy & Physiology Lab",
        icon: "Microscope",
        shortDescription: "State-of-the-art laboratory for studying human anatomy and physiological processes.",
        fullDescription: "The Anatomy and Physiology Laboratory at FIMS is equipped with anatomical models, dissection kits, microscopes, and physiological recording instruments. Students study the structure and function of the human body through hands-on practical sessions, cadaveric models, and computer-assisted learning modules. The lab provides a rigorous foundation in human biology that underpins all clinical education programs at the institute.",
        features: ["Anatomical Models & Specimens", "High-Power Microscopes", "Physiological Recording Instruments", "Dissection Demonstration Area", "Computer-Assisted Learning Modules", "Dedicated Lab Technician Support"]
    },
    {
        slug: "canteen",
        name: "Canteen",
        icon: "UtensilsCrossed",
        shortDescription: "A hygienic, spacious canteen serving nutritious meals and refreshments at subsidized rates.",
        fullDescription: "The FIMS Canteen is a vibrant campus space where students, faculty, and staff come together. The canteen serves a variety of nutritious vegetarian and non-vegetarian meals, snacks, and beverages at affordable prices. The kitchen follows strict hygiene protocols and the dining area is spacious, well-ventilated, and comfortably furnished. It also serves as an informal meeting space and social hub for the campus community.",
        features: ["Hygienic Kitchen & Food Preparation", "Vegetarian & Non-Vegetarian Options", "Subsidized Meal Pricing", "Spacious Seating for 150+", "Clean Drinking Water Stations", "Extended Service Hours"]
    },
    {
        slug: "computer-lab",
        name: "Computer Lab",
        icon: "Monitor",
        shortDescription: "Modern computer lab with high-speed internet and the latest software for academic and research use.",
        fullDescription: "The Computer Laboratory at FIMS features modern workstations loaded with academic, statistical, and research software. High-speed broadband connectivity supports online learning, literature searches, and data analysis. The lab is used for practical sessions in health informatics, hospitality management systems, and business computing. Dedicated lab assistants are available to support students during scheduled and open-access hours.",
        features: ["40+ Modern Workstations", "High-Speed Broadband Internet", "Academic & Research Software", "Dedicated Lab Assistants", "Printing & Scanning Facilities", "Open Access During Extended Hours"]
    },
    {
        slug: "ladies-hostel",
        name: "Ladies Hostel",
        icon: "Building",
        shortDescription: "Safe, comfortable residential facility for female students with 24/7 security and essential amenities.",
        fullDescription: "The Ladies Hostel at FIMS provides a secure and comfortable living environment for female students. Rooms are well-furnished with beds, study tables, and storage. The hostel has a common room with TV, a reading room, and an indoor recreation area. Round-the-clock security, CCTV surveillance, and a resident warden ensure the safety and well-being of all residents. Nutritious meals are provided in the hostel mess.",
        features: ["Furnished Double & Triple Occupancy Rooms", "24/7 Security & CCTV Surveillance", "Resident Warden", "Common Room & Recreation Area", "Hostel Mess with Nutritious Meals", "Wi-Fi Connectivity", "Laundry Facilities"]
    },
    {
        slug: "boys-hostel",
        name: "Boys Hostel",
        icon: "Home",
        shortDescription: "Well-maintained residential facility for male students with round-the-clock security and modern amenities.",
        fullDescription: "The Boys Hostel at FIMS offers a supportive residential environment for male students. Each room is furnished with beds, desks, and wardrobes. The hostel features a common room with TV and indoor games, a reading room, and outdoor sports facilities nearby. Security is maintained 24/7 with CCTV monitoring and a resident warden. The hostel mess serves wholesome breakfast, lunch, and dinner daily.",
        features: ["Furnished Double & Triple Occupancy Rooms", "24/7 Security & CCTV Surveillance", "Resident Warden", "Common Room with Indoor Games", "Hostel Mess with Daily Meals", "Wi-Fi Connectivity", "Proximity to Sports Grounds"]
    }
];

export const getFacilityBySlug = (slug) => facilities.find(f => f.slug === slug);