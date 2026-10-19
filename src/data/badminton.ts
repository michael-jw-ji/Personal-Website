import badmintonCanadaLogo from "@/assets/badminton_canada_logo.png";
import badmintonCanadaOnDark from "@/assets/badminton_canada_logo_ondark.png";
import bwfLogo from "@/assets/bwf_logo.png";
import panAmLogo from "@/assets/badminton_panam_logo.png";
import panAmOnDark from "@/assets/badminton_panam_logo_ondark.png";

export const MEDALS = {
  Gold: {
    "Men's Singles": [
      "2024 YONEX Québec Open",
      "2023 YONEX Québec U23 & Junior Elite",
      "2023 YONEX Manitoba U23 & Junior Elite",
      "2023 YONEX Atlantic Junior Elite",
      "2023 YONEX Québec Junior Elite",
      "2022 YONEX Québec U23 and Junior Elite",
      "2022 YONEX Prairie Junior Elite",
      "2022 YONEX Québec Junior Elite #2",
      "2021 YONEX Prairie Junior Elite #2",
      "2020 Yonex Ontario Junior Elite",
      "2020 Yonex BC Junior Elite",
    ],
    "Men's Doubles": [
      "2026 YONEX Canadian University College Championships - Individual Event",
      "2024 YONEX Canadian U23 & Junior Badminton Championships",
      "2023 YONEX Alberta Junior Elite",
      "2023 YONEX Québec U23 & Junior Elite",
      "2023 YONEX Manitoba U23 & Junior Elite",
      "2023 YONEX Québec Junior Elite",
      "2022 YONEX Canadian Junior U17/U19/U23 Badminton Championships",
      "2022 YONEX Québec Junior Elite #2",
      "2022 YONEX BC Junior Elite",
      "2021 YONEX Alberta Junior Elite",
      "2021 YONEX Prairie Junior Elite #1",
      "2020 Yonex Ontario Junior Elite",
      "2020 Yonex Quebec Junior Elite",
      "2019 Yonex Atlantic Junior Elite",
      "2019 YONEX Alberta Junior Elite",
      "2018 Yonex U11 & U13 Junior Development Team Qualifier",
    ],
    "Mixed Doubles": [
      "2024 YONEX Québec Open",
      "2023 YONEX Atlantic Junior Elite",
      "2022 YONEX Prairie Junior Elite",
      "2022 YONEX Québec Junior Elite #2",
      "2022 YONEX BC Junior Elite",
      "2021 YONEX Alberta Junior Elite",
      "2021 YONEX Prairie Junior Elite #1",
      "2020 Yonex Ontario Junior Elite",
      "2020 Yonex BC Junior Elite",
      "2020 Yonex Quebec Junior Elite",
    ],
  },
  Silver: {
    "Men's Singles": [
      "2025 YONEX Ontario Open",
      "2024 YONEX Canadian U23 & Junior Badminton Championships",
      "2024 YONEX Québec Junior Elite",
      "2023 YONEX Alberta Junior Elite",
      "2023 YONEX Canadian U23 & Junior Badminton Championships",
      "2022 YONEX Alberta U23 & Junior Elite",
      "2022 YONEX Canadian Junior U17/U19/U23 Badminton Championships",
      "2022 YONEX Ontario Junior Elite",
      "2021 YONEX Alberta Junior Elite",
      "2020 Yonex Quebec Junior Elite",
      "2019 Yonex Atlantic Junior Elite",
      "2019 YONEX Alberta Junior Elite",
      "2019 Yonex Prairie Junior Elite",
    ],
    "Men's Doubles": [
      "2025 YONEX Canadian Senior and Para Championships",
      "2023 YONEX Atlantic Junior Elite",
      "2023 YONEX BC Junior Elite",
      "2022 YONEX Alberta U23 & Junior Elite",
      "2022 YONEX Prairie Junior Elite",
      "2021 YONEX Quebec Junior Elite #1",
      "2020 Yonex BC Junior Elite",
      "2019 Yonex Prairie Junior Elite",
      "2019 Yonex Ontario Junior Elite",
      "2018 Yonex U11 & U13 Junior Development Team Qualifier",
    ],
    "Mixed Doubles": [
      "2022 YONEX Québec U23 and Junior Elite",
      "2022 YONEX Canadian Junior U17/U19/U23 Badminton Championships",
      "2021 YONEX Quebec Junior Elite #1",
      "2019 Yonex Atlantic Junior Elite",
      "2019 YONEX Alberta Junior Elite",
      "2018 Yonex U11 & U13 Junior Development Team Qualifier",
    ],
  },
} as const;

export const GOLD_COUNT = Object.values(MEDALS.Gold).reduce(
  (count, events) => count + events.length,
  0,
);

export const HONOURS = [
  {
    year: "2023/2024",
    label: "BWF World Junior Championships",
    detail: "Representative",
    logo: bwfLogo,
    alt: "Badminton World Federation",
  },
  {
    year: "2018-2024",
    label: `${GOLD_COUNT}x National Circuit Champion`,
    detail: "Singles · Doubles · Mixed",
    logo: badmintonCanadaLogo,
    logoOnDark: badmintonCanadaOnDark,
    alt: "Badminton Canada",
    results: true,
  },
  {
    year: "2018-2024",
    label: "Junior National Team",
    detail: "Canada",
    alt: "Canada",
  },
  {
    year: "2018, 2022, 2023, 2024",
    label: "Badminton Pan Am Championships",
    detail: "",
    logo: panAmLogo,
    logoOnDark: panAmOnDark,
    alt: "Badminton Pan America",
  },
] as const;
