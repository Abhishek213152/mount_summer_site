// src/data/galleryData.js
// Curated collection of school life, events, awards, and campus photos

// New photos from src/assets/new pics
import pic01 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.27 AM.jpeg";
import pic02 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.29 AM.jpeg";
import pic03 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.30 AM.jpeg";
import pic04 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.31 AM.jpeg";
import pic05 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.32 AM (1).jpeg";
import pic06 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.32 AM (2).jpeg";
import pic07 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.32 AM.jpeg";
import pic08 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.33 AM.jpeg";
import pic09 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.34 AM (1).jpeg";
import pic10 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.34 AM.jpeg";
import pic11 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.35 AM (1).jpeg";
import pic12 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.35 AM (2).jpeg";
import pic13 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.35 AM.jpeg";
import pic14 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.36 AM.jpeg";
import pic15 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.37 AM.jpeg";
import pic16 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.38 AM (1).jpeg";
import pic17 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.38 AM (2).jpeg";
import pic18 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.38 AM.jpeg";
import pic19 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.39 AM (1).jpeg";
import pic20 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.39 AM.jpeg";
import pic21 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.40 AM (1).jpeg";
import pic22 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.40 AM (2).jpeg";
import pic23 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.40 AM.jpeg";
import pic24 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.41 AM (1).jpeg";
import pic25 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.41 AM (2).jpeg";
import pic26 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.41 AM (3).jpeg";
import pic27 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.41 AM.jpeg";
import pic28 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.42 AM (1).jpeg";
import pic29 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.42 AM (2).jpeg";
import pic30 from "../assets/new pics/WhatsApp Image 2026-10-19 at 2.21.42 AM.jpeg";

// Existing campus photos
import ms0 from "../assets/ms0.jpg";
import ms1 from "../assets/ms1.jpg";
import ms2 from "../assets/ms2.jpg";
import ms3 from "../assets/ms3.jpg";
import ms4 from "../assets/ms4.jpg";
import ms5 from "../assets/ms5.jpg";
import ms6 from "../assets/ms6.jpg";
import ms7 from "../assets/ms7.jpg";
import ms8 from "../assets/ms8.jpg";

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "events", label: "Cultural Events & Celebrations" },
  { id: "awards", label: "Academic Awards & Felicitation" },
  { id: "life", label: "Special Moments & Campus Life" },
  { id: "campus", label: "Campus & Infrastructure" },
];

export const NEW_PICS_LIST = [
  {
    id: "np-01",
    src: pic01,
    title: "Student Birthday Celebration",
    category: "life",
    tag: "Celebration",
    description: "Blessings and birthday joy shared with school leadership under the Mount Summer banner.",
  },
  {
    id: "np-02",
    src: pic02,
    title: "Gandhi Jayanti — Three Wise Monkeys Enactment",
    category: "events",
    tag: "Gandhi Jayanti",
    description: "Young learners demonstrating Bapu's timeless ideals of 'See no evil, hear no evil, speak no evil'.",
  },
  {
    id: "np-03",
    src: pic03,
    title: "Tribute to Mahatma Gandhi & Lal Bahadur Shastri",
    category: "events",
    tag: "Celebration",
    description: "Special assembly gathering honoring our national icons with pride and reverence.",
  },
  {
    id: "np-04",
    src: pic04,
    title: "Presidential Address on Gandhi Jayanti",
    category: "events",
    tag: "Stage Event",
    description: "Guiding young minds toward truth, non-violence, and righteous character during special prayers.",
  },
  {
    id: "np-05",
    src: pic05,
    title: "Patriotic Skit Performance",
    category: "events",
    tag: "Cultural",
    description: "Students enthusiastically bringing historical moments alive on stage in traditional attire.",
  },
  {
    id: "np-06",
    src: pic06,
    title: "Bapu's Young Ambassadors",
    category: "events",
    tag: "Drama",
    description: "Children dressed in khadi celebrating the heritage and vision of Mahatma Gandhi.",
  },
  {
    id: "np-07",
    src: pic07,
    title: "Gandhi Jayanti Commemoration Group",
    category: "events",
    tag: "Group Photo",
    description: "Students, teachers, and school heads together celebrating unity and peace.",
  },
  {
    id: "np-08",
    src: pic08,
    title: "Cultural Harmony & Patriotic Reflections",
    category: "events",
    tag: "Assembly",
    description: "Inspiring messages and performances by our bright primary wing students.",
  },
  {
    id: "np-09",
    src: pic09,
    title: "Academic Achievers with Principal",
    category: "awards",
    tag: "Recognition",
    description: "Recognizing outstanding academic discipline and classroom participation.",
  },
  {
    id: "np-10",
    src: pic10,
    title: "First Rank Merit Award Presentation",
    category: "awards",
    tag: "1st Rank",
    description: "Celebrating 1st place excellence with special honors from the Director.",
  },
  {
    id: "np-11",
    src: pic11,
    title: "Certificate & Award Felicitation",
    category: "awards",
    tag: "Felicitation",
    description: "Commending consistent scholarly effort, creativity, and good conduct.",
  },
  {
    id: "np-12",
    src: pic12,
    title: "Student Recognition Ceremony",
    category: "awards",
    tag: "Achievement",
    description: "A proud moment as young achievers receive their honor certificates and prizes.",
  },
  {
    id: "np-13",
    src: pic13,
    title: "Mentorship & Warm Encouragement",
    category: "life",
    tag: "Mentorship",
    description: "Personal mentorship and warm guidance creating a trusting atmosphere for our pupils.",
  },
  {
    id: "np-14",
    src: pic14,
    title: "Faculty Presenting Academic Prizes",
    category: "awards",
    tag: "Awards",
    description: "Senior faculty members presenting learning toolkits and merit gifts to talented students.",
  },
  {
    id: "np-15",
    src: pic15,
    title: "Exemplary Academic Progress Award",
    category: "awards",
    tag: "Progress",
    description: "Honoring students who demonstrated exceptional growth and dedication.",
  },
  {
    id: "np-16",
    src: pic16,
    title: "Annual Merit Certificates Distribution",
    category: "awards",
    tag: "Ceremony",
    description: "A celebration of hard work and intellectual curiosity across all primary classes.",
  },
  {
    id: "np-17",
    src: pic17,
    title: "Subject Topper Felicitation",
    category: "awards",
    tag: "Merit",
    description: "Honoring excellence in core subjects and co-curricular domains.",
  },
  {
    id: "np-18",
    src: pic18,
    title: "Honoring Student & Proud Parents",
    category: "life",
    tag: "Community",
    description: "Sharing the joy of achievement alongside proud parents and school mentors.",
  },
  {
    id: "np-19",
    src: pic19,
    title: "Family Celebration of Academic Merit",
    category: "awards",
    tag: "Felicitation",
    description: "Parents and teachers uniting to celebrate the success of our bright student.",
  },
  {
    id: "np-20",
    src: pic20,
    title: "Praise & Encouragement for Star Performer",
    category: "awards",
    tag: "Star Student",
    description: "Rewarding disciplined learning habits and active leadership in class.",
  },
  {
    id: "np-21",
    src: pic21,
    title: "Mother & Teacher Commending Young Talent",
    category: "life",
    tag: "Partnership",
    description: "A wonderful celebration of partnership between parents and educators.",
  },
  {
    id: "np-22",
    src: pic22,
    title: "Special Stationery Gift & Report Recognition",
    category: "awards",
    tag: "Gift",
    description: "Rewarding academic diligence with educational resources and tokens of appreciation.",
  },
  {
    id: "np-23",
    src: pic23,
    title: "Consistent Hard Work Recognition",
    category: "awards",
    tag: "Effort",
    description: "Acknowledging dedication, regular attendance, and enthusiastic learning.",
  },
  {
    id: "np-24",
    src: pic24,
    title: "Proud Milestone in Primary Education",
    category: "awards",
    tag: "Milestone",
    description: "Students shining bright as they cross academic milestones with confidence.",
  },
  {
    id: "np-25",
    src: pic25,
    title: "Felicitation by Director of Mount Summer",
    category: "awards",
    tag: "Director's Award",
    description: "Director conferring special recognition on promising young minds.",
  },
  {
    id: "np-26",
    src: pic26,
    title: "Building Bright Futures",
    category: "life",
    tag: "Inspiration",
    description: "Inspiring each learner to aim high, act righteously, and pursue dreams.",
  },
  {
    id: "np-27",
    src: pic27,
    title: "Celebration of Academic Excellence",
    category: "awards",
    tag: "Excellence",
    description: "Recognizing standout scholars whose passion for knowledge shines bright.",
  },
  {
    id: "np-28",
    src: pic28,
    title: "Future Leaders with School Leadership",
    category: "life",
    tag: "Leadership",
    description: "Bright young leaders standing proud alongside their mentors and teachers.",
  },
  {
    id: "np-29",
    src: pic29,
    title: "Rewarding Commitment to Learning",
    category: "awards",
    tag: "Commitment",
    description: "Every effort counts: honoring perseverance, teamwork, and good sportsmanship.",
  },
  {
    id: "np-30",
    src: pic30,
    title: "Joy of Academic Success",
    category: "life",
    tag: "Success",
    description: "Beaming smiles that capture the warm and encouraging spirit of Mount Summer.",
  },
];

export const CAMPUS_PICS_LIST = [
  {
    id: "cp-00",
    src: ms0,
    title: "Mount Summer Campus Frontage",
    category: "campus",
    tag: "Campus",
    description: "Safe, welcoming, and modern campus environment situated in Darbhanga.",
  },
  {
    id: "cp-01",
    src: ms1,
    title: "Outdoor Activities & Assembly Ground",
    category: "campus",
    tag: "Facilities",
    description: "Spacious assembly grounds for physical education, yoga, and morning prayers.",
  },
  {
    id: "cp-02",
    src: ms2,
    title: "Vibrant School Building & Classrooms",
    category: "campus",
    tag: "Infrastructure",
    description: "Well-ventilated, well-lit smart classrooms promoting active interactive learning.",
  },
  {
    id: "cp-03",
    src: ms3,
    title: "Campus Grounds & Play Areas",
    category: "campus",
    tag: "Playground",
    description: "Dedicated spaces where students explore sports, teamwork, and healthy play.",
  },
  {
    id: "cp-04",
    src: ms4,
    title: "Safe & Nurturing Learning Environment",
    category: "campus",
    tag: "Campus Life",
    description: "Secure, CCTV-monitored campus supporting all-round child development.",
  },
  {
    id: "cp-05",
    src: ms5,
    title: "Co-curricular Activity Spaces",
    category: "campus",
    tag: "Activities",
    description: "Dedicated zones for arts, crafts, science exhibits, and music practice.",
  },
  {
    id: "cp-06",
    src: ms6,
    title: "Modern Educational Facilities",
    category: "campus",
    tag: "Facilities",
    description: "Equipped with state-of-the-art educational aids and library resources.",
  },
  {
    id: "cp-07",
    src: ms7,
    title: "Student Community in Action",
    category: "campus",
    tag: "Community",
    description: "A vibrant community where curiosity is ignited and friendships flourish.",
  },
  {
    id: "cp-08",
    src: ms8,
    title: "Panoramic Campus Overview",
    category: "campus",
    tag: "Campus",
    description: "Comprehensive view of the Mount Summer Convent School campus.",
  },
];

// Combined full gallery array
export const ALL_GALLERY_PHOTOS = [...NEW_PICS_LIST, ...CAMPUS_PICS_LIST];

// Curated highlights for Home Page carousel
export const CAROUSEL_HIGHLIGHT_PHOTOS = [
  { src: pic02, cacheKey: "carousel_np02", caption: "Gandhi Jayanti Celebrations on Stage" },
  { src: pic10, cacheKey: "carousel_np10", caption: "Academic Excellence & 1st Rank Felicitation" },
  { src: pic01, cacheKey: "carousel_np01", caption: "Celebrating Student Milestones with Leadership" },
  { src: pic14, cacheKey: "carousel_np14", caption: "Merit Awards & Teacher Guidance" },
  { src: pic07, cacheKey: "carousel_np07", caption: "Unity and Harmony at Mount Summer Convent" },
  { src: pic28, cacheKey: "carousel_np28", caption: "Future Leaders Nurtured with Care" },
  { src: ms2, cacheKey: "carousel_ms2", caption: "Modern Campus & Tech-Enabled Classrooms" },
  { src: ms1, cacheKey: "carousel_ms1", caption: "Vibrant Outdoor Activities & Sports" },
  { src: ms0, cacheKey: "carousel_ms0", caption: "Welcome to Mount Summer Convent School" },
];
