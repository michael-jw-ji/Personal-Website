import awsLogo from "@/assets/aws_logo.jpg";
import deeplearningAiLogo from "@/assets/deeplearning.ai_logo.png";

/* Matches the resume's Education block. Activities sit under the degree
   rather than on Extras, because they belong to the time at Waterloo. */
export const EDUCATION = {
  school: "University of Waterloo",
  degree: "Bachelor of Computing and Financial Management (Honours, Co-op)",
  period: "Expected Apr 2028",
  location: "Waterloo, ON",
  activities: ["Waterloo Warriors Varsity Badminton", "Poker Club, Waterloo Quant Club"],
};

export const CERTIFICATIONS = [
  {
    issuer: "AWS",
    logo: awsLogo,
    courses: [
      "AWS Cloud Technical Essentials",
      "Architecting Solutions on AWS",
      "Building Data Lakes on AWS",
    ],
  },
  {
    issuer: "DeepLearning.AI",
    logo: deeplearningAiLogo,
    courses: [
      "Supervised Machine Learning: Regression and Classification",
      "Advanced Learning Algorithms",
      "Unsupervised Learning, Recommenders, Reinforcement Learning",
    ],
  },
];
