import { RiArticleFill, RiFilePaper2Fill } from "react-icons/ri";
import { MdDiamond } from "react-icons/md";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { RiChatSmile2Fill } from "react-icons/ri";

import {
  BsLayoutTextSidebarReverse,
  BsArrowsExpand,
  BsStars,
} from "react-icons/bs";
import { TbArticle, TbTargetArrow } from "react-icons/tb";
import { IoListOutline, IoDiamond, IoLogoFacebook } from "react-icons/io5";
import { ImParagraphJustify, ImCalendar } from "react-icons/im";
import { TfiLayoutListPost } from "react-icons/tfi";
import { CgTranscript } from "react-icons/cg";
import { PiListNumbersDuotone, PiSubtitles } from "react-icons/pi";
import { FaListCheck, FaRetweet } from "react-icons/fa6";
import { ImParagraphLeft } from "react-icons/im";
import {
  FaHashtag,
  FaTwitter,
  FaTwitterSquare,
  FaDiscourse,
  FaRegStar,
  FaFlask,
  FaQuestionCircle,
} from "react-icons/fa";
import { RiArticleLine, RiKeyboardFill, RiPriceTagLine } from "react-icons/ri";
import { PiChatCenteredTextDuotone, PiDeviceMobileBold } from "react-icons/pi";
import {
  LuSubtitles,
  LuFileSpreadsheet,
  LuQuote,
  LuHash,
} from "react-icons/lu";
import { AiFillContacts } from "react-icons/ai";
import { IconType } from "react-icons";
import { BiDockLeft, BiBulb } from "react-icons/bi";
import {
  MdQuiz,
  MdOutlineMarkEmailUnread,
  MdOutlineNewspaper,
  MdOutlineFeaturedPlayList,
  MdOutlineCallToAction,
  MdRocket,
  MdOutlineReviews,
  MdOutlineThumbsUpDown,
} from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdBriefcase, IoMdContacts } from "react-icons/io";
import { SiGoogleads } from "react-icons/si";
import { Doughnut } from "react-chartjs-2";

// HOME PAGE


export const BasicCardData = [
  {
    id: 1,
    icon: MdDiamond,
    title: "Current Plan",
    plan: "Basic",
    remaining: null,
  },
  {
    id: 2,
    icon: TiSortAlphabeticallyOutline,
    title: "Remaining Words",
    plan: " ",
    remaining: 3000,
  },
  {
    id: 3,
    icon: RiChatSmile2Fill,
    title: "Total Chats Remaining",
    plan: " ",
    remaining: 0,
  },
];



export const templateData = [
  {
    id: 1,
    icon: RiArticleFill,
    title: " Article",
    url: "modules/blog-content/article",
    bgcolor: "#dcfce7",
    color: "#16a34a",
  },
  {
    id: 2,
    icon: LuSubtitles,
    title: " Headline",
    url: "modules/website/headline",
    bgcolor: "#fee2e2",
    color: "#ef4444",
  },
  {
    id: 3,
    icon: TbTargetArrow,
    title: " Advertisement",
    url: "modules/marketing/advertisement",
    bgcolor: "#cffafe",
    color: "#06b6d4",
  },
  {
    id: 4,
    icon: MdOutlineFeaturedPlayList,
    title: "Meta Description ",
    url: "modules/website/meta-description",
    bgcolor: "#fee2e2",
    color: "#ef4444",
  },
  {
    id: 5,
    icon: TbArticle,
    title: " Blog Post",
    url: "modules/blog-content/blog-post",
    bgcolor: "#dcfce7",
    color: "#16a34a",
  },
  {
    id: 6,
    icon: TbArticle,
    title: " Newsletter",
    url: "modules/marketing/newsletter",
    bgcolor: "#cffafe",
    color: "#06b6d4",
  },
];

// BLOG CONTENT

export const content = [
  {
    id: 1,
    icon: RiArticleFill,
    title: "Article",
    description: "Generate articles based on title, keywords, and subheading.",
    url: "/user/modules/blog-content/article",
  },
  {
    id: 2,
    icon: BsLayoutTextSidebarReverse,
    title: "Blog Intro",
    description:
      "Generate blog intros based on the blog post title and content.",
    url: "/user/modules/blog-content/blog-intro",
  },
  {
    id: 3,
    icon: TfiLayoutListPost,
    title: "Blog Listicle",
    description:
      "Generate blog listicle based on the blog post title and content.",
    url: "/user/modules/blog-content/blog-listicle",
  },
  {
    id: 4,
    icon: IoListOutline,
    title: "Blog Outline",
    description:
      "Generate blog outline based on the blog post title and content.",
    url: "/user/modules/blog-content/blog-outline",
  },
  {
    id: 5,
    icon: RiArticleFill,
    title: "Blog Outro",
    description:
      "Generate blog outro based on the blog post title and content.",
    url: "/user/modules/blog-content/blog-outro",
  },
  {
    id: 6,
    icon: ImParagraphJustify,
    title: "Blog Paragraph",
    description:
      "Generate blog paragraph based on the blog post title and subheading.",
    url: "/user/modules/blog-content/blog-paragraph",
  },
  {
    id: 7,
    icon: TbArticle,
    title: "Blog Post",
    description: "Generate blog posts, focused on keywords, about any topic.",
    url: "/user/modules/blog-content/blog-post",
  },
  {
    id: 8,
    icon: RiArticleFill,
    title: "Blog Section",
    description:
      "Generate blog section based on the blog post title and subheading.",
    url: "/user/modules/blog-content/blog-section",
  },
  {
    id: 9,
    icon: CgTranscript,
    title: "Blog Tags",
    description: "Generate blog tags based on the blog post title and content",
    url: "/user/modules/blog-content/blog-tags",
  },
  {
    id: 10,
    icon: PiListNumbersDuotone,
    title: "Blog Talking Points",
    description:
      "Generate blog talkings points based on the blog post title and content",
    url: "/user/modules/blog-content/blog-talking-points",
  },
  {
    id: 11,
    icon: PiSubtitles,
    title: "Blog Title",
    description: "Generate blog title based on the blog post title and content",
    url: "/user/modules/blog-content/blog-title",
  },
  {
    id: 12,
    icon: FaListCheck,
    title: "Content Grammar",
    description: "Correct the grammatical errors for any text in seconds.",
    url: "/user/modules/blog-content/content-grammer",
  },
  {
    id: 13,
    icon: FaRetweet,
    title: "Content Rewriter",
    description: "Rewrite any kind of content in seconds, in an enhanced way.",
    url: "/user/modules/blog-content/content-rewriter",
  },
  {
    id: 14,
    icon: BsArrowsExpand,
    title: "Content Summary",
    description:
      "Summarize any kind of content in seconds, in an enhanced way.",
    url: "/user/modules/blog-content/content-summary",
  },
  {
    id: 15,
    icon: ImParagraphLeft,
    title: "Paragraph",
    description: "Generate paragraphs, focused on keywords, about any topic.",
    url: "/user/modules/blog-content/paragraph",
  },
];

// SOCIAL MEDIA


export const social= [
  {
    icon: FaHashtag,
    title: "Hashtags",
    description: "Generate #hashtags for social network content.",
    url: "/user/modules/social-media/hashtags",
  },
  {
    icon: RiArticleLine,
    title: "Social Post",
    description:
      "Generate social posts ready to be published on social platforms.",
    url: "/user/modules/social-media/social-post",
  },
  {
    icon: FaDiscourse,
    title: "Social Post Caption",
    description: "Generate social posts caption ready to grab attention.",
    url: "/user/modules/social-media/social-post-caption",
  },
  {
    icon: FaTwitter,
    title: "Tweet",
    description: "Generate engaging tweets based on a description.",
    url: "/user/modules/social-media/tweet",
  },
  {
    icon: FaTwitterSquare,
    title: "Tweet Thread",
    description: "Generate engaging twitter threads based on a description.",
    url: "/user/modules/social-media/tweet-thread",
  },
  {
    icon: PiChatCenteredTextDuotone,
    title: "Video Description",
    description:
      "Generate compelling video descriptions based on a description.",
    url: "/user/modules/social-media/video-description",
  },
  {
    icon: CgTranscript,
    title: "Video Script",
    description: "Generate compelling video scripts based on a description.",
    url: "/user/modules/social-media/video-script",
  },
  {
    icon: RiKeyboardFill,
    title: "Video Tags",
    description: "Generate compelling video tags based on a video title.",
    url: "/user/modules/social-media/video-tags",
  },
  {
    icon: LuSubtitles,
    title: "Video Title",
    description:
      "Generate compelling video titles based on a video description.",
    url: "/user/modules/social-media/video-title",
  },
];

// MARKETING



export const Marketing= [
  {
    id: 1,
    icon: TbTargetArrow,
    title: "Advertisement",
    description: "Generate creative ad descriptions for a product or service.",
    url: "/user/modules/marketing/advertisement",
  },
  {
    id: 2,
    icon: IoLogoFacebook,
    title: "Facebook Advertisement",
    description:
      "Generate optimized Facebook advertisements for a product or service.",
    url: "/user/modules/marketing/facebook-advertisement",
  },
  {
    id: 3,
    icon: SiGoogleads,
    title: "Google Advertisement",
    description:
      "Generate optimized Google advertisements for a product or service.",
    url: "/user/modules/marketing/google-advertisement",
  },
  {
    id: 4,

    icon: IoMdBriefcase,
    title: "Job Description",
    description:
      "Generate professional job descriptions to attract top talents.",
    url: "/user/modules/marketing/job-description",
  },
  {
    id: 5,

    icon: MdRocket,
    title: "Mission Statement",
    description: "Generate comprehensive and informative mission statements.",
    url: "/user/modules/marketing/mission-statement",
  },
  {
    id: 6,

    icon: TbArticle,
    title: "Newsletter",
    description: "Generate engaging and comprehensive newsletters.",
    url: "/user/modules/marketing/newsletter",
  },
  {
    id: 7,
    icon: FaFlask,
    title: "Pain-Agitate-Solution",
    description: "Generate high-converting sales copy using the PAS formula.",
    url: "/user/modules/marketing/pain-agitate-solution",
  },
  {
    id: 8,
    icon: MdOutlineNewspaper,
    title: "Press Release",
    description: "Generate comprehensive and informative press releases.",
    url: "/user/modules/marketing/press-release",
  },
  {
    id: 9,
    icon: LuFileSpreadsheet,
    title: "Product Sheet",
    description: "Generate compelling product sheets for a product or service.",
    url: "/user/modules/marketing/product-sheet",
  },
  {
    id: 10,
    icon: PiDeviceMobileBold,
    title: "Push Notification",
    description:
      "Generate push notifications based on the description of a product or service.",
    url: "/user/modules/marketing/push-notification",
  },
  {
    id: 11,

    icon: HiOutlineLightBulb,
    title: "Startup Ideas",
    description: "Generate innovative startup ideas based on domains.",
    url: "/user/modules/marketing/startup-ideas",
  },
  {
    id: 12,
    icon: BiBulb,
    title: "Startup Names",
    description:
      "Generate creative startup names based on the description and keywords.",
    url: "/user/modules/marketing/startup-names",
  },
  {
    id: 13,
    icon: IoDiamond,
    title: "Value Proposition",
    description: "Generate value propositions for a product or service.",
    url: "/user/modules/marketing/value-proposition",
  },
  {
    id: 14,
    icon: FaRegStar,
    title: "Vision Statement",
    description: "Generate comprehensive and informative vision statements.",
    url: "/user/modules/marketing/vision-statement",
  },
  {
    id: 15,
    icon: MdOutlineMarkEmailUnread,
    title: "Welcome Email",
    description: "Generate engaging welcome emails for a product or service.",
    url: "/user/modules/marketing/welcome-email",
  },
  {
    id: 16,
    icon: AiFillContacts,
    title: "Help Wanted Ad",
    description: "Generate job hiring ads for your business.",
    url: "/user/modules/marketing/help-wanted",
  },
  {
    id: 17,
    icon: RiPriceTagLine,
    title: "Business Tagline",
    description: "Generate slogans for your business.",
    url: "/user/modules/marketing/business-tagline",
  },
];

// WEBSITE BUILDER

export const Website= [
  {
    id: 1,
    icon: IoMdContacts,
    title: "About Us",
    description:
      "Generate about us text on the title and description of a page.",
    url: "/user/modules/website/about-us",
  },
  {
    id: 2,
    icon: MdOutlineCallToAction,
    title: "Call To Action",
    description:
      "Generate CTA lines based on the name and description of a product or service.",
    url: "/user/modules/website/call-to-action",
  },
  {
    id: 3,
    icon: FaQuestionCircle,
    title: "FAQ",
    description:
      "Generate frequently asked questions for a product or service.",
    url: "/user/modules/website/faq",
  },
  {
    id: 4,
    icon: BsStars,
    title: "Feature Section",
    description: "Generate feature sections to highlight a product or service.",
    url: "/user/modules/website/feature-section",
  },
  {
    id: 5,
    icon: LuSubtitles,
    title: "Headline",
    description: "Generate engaging headlines for products and services.",
    url: "/user/modules/website/headline",
  },
  {
    id: 6,
    icon: MdOutlineFeaturedPlayList,
    title: "Meta Description",
    description:
      "Generate meta descriptions based on the title and description of a page.",
    url: "/user/modules/website/meta-description",
  },
  {
    id: 7,
    icon: LuHash,
    title: "Meta Keywords",
    description:
      "Generate meta dkeywords based on the title and description of a page.",
    url: "/user/modules/website/meta-keywords",
  },
  {
    id: 8,
    icon: MdOutlineThumbsUpDown,
    title: "Pros and Cons",
    description: "Generate pros and cons for a product or service.",
    url: "/user/modules/website/pros-and-cons",
  },
  {
    id: 9,
    icon: MdOutlineReviews,
    title: "Review",
    description:
      "Generate reviews based on the name and description of a product or service.",
    url: "/user/modules/website/review",
  },
  {
    id: 10,
    icon: PiSubtitles,
    title: "Subheadline",
    description: "Generate engaging subheadlines for products and services.",
    url: "/user/modules/website/subheadline",
  },
  {
    id: 11,
    icon: LuQuote,
    title: "Testimonial",
    description:
      "Generate testimonials based on the name and description of a product or service.",
    url: "/user/modules/website/testimonial",
  },
];

//   COURSE BUILDER



export const Course= [
  {
    id: 1,
    icon: RiFilePaper2Fill,
    title: "Course Content",
    description: "Generate course outline, quiz and its assignment.",
    url: "/user/modules/course-builder/course-content",
  },
  {
    id: 2,
    icon: RiFilePaper2Fill,
    title: "Course Outline",
    description: "Generate couse outline for your subject.",
    url: "/user/modules/course-builder/course-outline",
  },
  {
    id: 3,
    icon: MdQuiz,
    title: "Quiz Generator",
    description: "Generate quiz questions for your subject topic.",
    url: "/user/modules/course-builder/quiz-generator",
  },
  {
    id: 4,
    icon: ImCalendar,
    title: "Time Table",
    description: "Generate Time table schedule for your work!",
    url: "/user/modules/course-builder/time-table",
  },
  {
    id: 5,

    icon: BiDockLeft,
    title: "Assignment Generator",
    description: "Generate assignment questions for your work!",
    url: "/user/modules/course-builder/assignment",
  },
];
