export const contact = {
  phones: ["01330002333", "01330002555"],
  location: "Godagari, Rajshahi, Bangladesh",
  parkHours: "8:30 AM to 6:30 PM daily",
  resortHours: "Open 24/7",
  facebook: "https://www.facebook.com/SafinaParkResort/",
  youtube: "https://www.youtube.com/@safinaparkresort",
  mapsUrl: "https://maps.google.com/?q=Safina+Park+%26+Resort+Godagari+Rajshahi",
  whatsappPhone: "8801330002333",
};

export const navigation = [
  { label: "Rides", href: "/rides" },
  { label: "Stay", href: "/stay" },
  { label: "Picnic & Events", href: "/picnic-events" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const rides = [
  {
    slug: "nagordola",
    name: "Nagordola",
    description: "Take in a lovely view of the park from the big wheel.",
    detail: "A gentle spin and a different view of the park make Nagordola a favourite stop for a family day out.",
    image: "/park-illustration.svg",
    alt: "Illustration of a Ferris wheel and green park",
  },
  {
    slug: "train",
    name: "Train",
    description: "Settle in for a relaxed ride around the park.",
    detail: "The little park train is an easy way to enjoy the greenery together. Ask our team about ride availability on the day.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    alt: "A green tree-lined path through a peaceful park",
  },
  {
    slug: "paddle-boat",
    name: "Paddle Boat",
    description: "Enjoy a gentle paddle with friends or family.",
    detail: "Take a breather from the rides and enjoy time together on the water. Please follow the team's safety instructions.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunlight glistening on calm water",
  },
  {
    slug: "swimming-pool",
    name: "Swimming Pool",
    description: "Cool off and make a splash on a warm day.",
    detail: "Bring your swimwear and check pool access and safety guidance with the park team before your visit.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    alt: "Blue swimming pool ready for a sunny day",
  },
  {
    slug: "horror-house",
    name: "Horror House",
    description: "A spooky little stop for the brave in your group.",
    detail: "Step inside for a playful scare. Ask staff about age guidance and current opening before joining the queue.",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=1200&q=80",
    alt: "Atmospheric spooky decorations at a nighttime event",
  },
  {
    slug: "plane-ride",
    name: "Plane Ride",
    description: "Take a spin in a ride that little flyers love.",
    detail: "A cheerful spinning ride for young visitors. Please check height and safety requirements with our ride operators.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    alt: "A festive park attraction lit up at night",
  },
];

export const packages = [
  {
    id: "student-package",
    name: "Student",
    for: "School trips and student groups",
    description: "Plan a shared day of rides, food and time outdoors.",
    items: ["Group visit planning", "Picnic arrangements", "Ride schedule"],
  },
  {
    id: "couple-package",
    name: "Couple",
    for: "A relaxed day out for two",
    description: "Make room for a little time together at the park.",
    items: ["Park visit planning", "Restaurant arrangements", "Stay options on request"],
  },
  {
    id: "family-package",
    name: "Family",
    for: "A day out with the whole family",
    description: "Bring everyone together for rides, food and fresh air.",
    items: ["Family visit planning", "Picnic arrangements", "Stay options on request"],
  },
  {
    id: "corporate-package",
    name: "Corporate",
    for: "Office picnics, seminars and team events",
    description: "Tell us what your team needs and we will help plan the day.",
    items: ["Event space enquiry", "Food and picnic arrangements", "Group activity planning"],
  },
];

export const galleryItems = [
  { title: "A day at the park", category: "Park", image: "/park-illustration.svg", alt: "Illustration of a Ferris wheel and green park" },
  { title: "A little time by the water", category: "Water", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80", alt: "Sunlight glistening on calm water" },
  { title: "Green corners", category: "Park", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80", alt: "A quiet green woodland path" },
  { title: "A sunny swim", category: "Resort", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80", alt: "Clear swimming pool in bright sunshine" },
  { title: "Picnic together", category: "Picnic", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80", alt: "Friends sharing a meal outdoors" },
  { title: "Evening at the fair", category: "Park", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80", alt: "Bright lights at a lively park event" },
];

export const articles = [
  {
    slug: "plan-a-family-day-at-safina-park",
    title: "Planning a family day at Safina Park",
    excerpt: "A few simple tips to make your next family visit comfortable and easy.",
    date: "Visitor guide",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    alt: "Family enjoying a day together outdoors",
    paragraphs: [
      "A little planning can make a family visit feel much easier. Check the park opening hours, choose a date that works for everyone and call ahead if you have questions about rides or facilities.",
      "For larger groups, picnic arrangements and resort stays, contact the team before you travel. They can talk through current availability and help you plan around your group's needs.",
      "Safina Park is in Godagari, Rajshahi. Save the location before you set off and keep the team's phone numbers handy for visit-day questions.",
    ],
  },
  {
    slug: "planning-a-group-picnic",
    title: "Planning a group picnic",
    excerpt: "What to share with our team when arranging a school or office picnic.",
    date: "Group visits",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    alt: "A group gathering around an outdoor meal",
    paragraphs: [
      "When you enquire, let us know your preferred date, approximate group size and what you have in mind for the day.",
      "If you need food, picnic space, a seminar hall or help planning activities, include that in your message. The team can confirm current availability and provide a quote.",
      "No prices are listed here because group arrangements can vary. Call or WhatsApp Safina Park to discuss your plans.",
    ],
  },
];

export const faqs = [
  { question: "When is the park open?", answer: "The park is open daily from 8:30 AM to 6:30 PM. Please call before travelling if you need to confirm a particular facility or ride." },
  { question: "Is the resort open overnight?", answer: "The resort operates 24/7. Please contact the team to ask about room availability and booking details." },
  { question: "Can I arrange a school or office picnic?", answer: "Yes. Contact us with your preferred date, group size and requirements so we can discuss arrangements and a quote." },
  { question: "Where can I find ticket and package prices?", answer: "Prices are not listed online. Call or WhatsApp us for current ticket information and a quote for your group." },
];
