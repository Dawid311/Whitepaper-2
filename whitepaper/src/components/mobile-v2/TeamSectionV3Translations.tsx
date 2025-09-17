export interface TeamSectionTexts {
  header: {
    title: string;
    subtitle: string;
  };
  teamMember: {
    name: string;
    role: string;
    description: string;
    skills: string[];
    socialLinks: Array<{
      platform: string;
      handle: string;
    }>;
  };
  visionStatement: {
    title: string;
    quote: string;
    author: string;
  };
}

export const teamSectionTexts: Record<string, TeamSectionTexts> = {
  de: {
    header: {
      title: "Das Team",
      subtitle: "Die Visionäre hinter der D.FAITH Revolution"
    },
    teamMember: {
      name: "Dawid Faith",
      role: "Gründer, Entwickler & Künstler",
      description: "Visionär und Vollzeit-Entwickler des D.FAITH Ökosystems",
      skills: [
        "Blockchain",
        "Musik & Kreativität",
        "Business Strategy",
        "Full-Stack"
      ],
      socialLinks: [
        {
          platform: "Instagram",
          handle: "@dawidfaith"
        },
        {
          platform: "TikTok",
          handle: "@dawidfaith"
        },
        {
          platform: "Facebook",
          handle: "Dawid Faith"
        },
        {
          platform: "Email",
          handle: "dawid.faith@gmail.com"
        }
      ]
    },
    visionStatement: {
      title: "💡 Vision & Mission",
      quote: "Ich glaube daran, dass Technologie die Creator Economy revolutionieren kann. Durch D.FAITH schaffen wir eine Welt, in der Fans direkt von ihrem Engagement profitieren und Künstler nachhaltig finanziert werden können. Das ist erst der Anfang einer größeren Bewegung.",
      author: "Dawid Faith"
    }
  },
  en: {
    header: {
      title: "The Team",
      subtitle: "The visionaries behind the D.FAITH revolution"
    },
    teamMember: {
      name: "Dawid Faith",
      role: "Founder, Developer & Artist",
      description: "Visionary and full-time developer of the D.FAITH ecosystem",
      skills: [
        "Blockchain",
        "Music & Creativity",
        "Business Strategy",
        "Full-Stack"
      ],
      socialLinks: [
        {
          platform: "Instagram",
          handle: "@dawidfaith"
        },
        {
          platform: "TikTok",
          handle: "@dawidfaith"
        },
        {
          platform: "Facebook",
          handle: "Dawid Faith"
        },
        {
          platform: "Email",
          handle: "dawid.faith@gmail.com"
        }
      ]
    },
    visionStatement: {
      title: "💡 Vision & Mission",
      quote: "I believe that technology can revolutionize the creator economy. Through D.FAITH, we're creating a world where fans directly benefit from their engagement and artists can be sustainably funded. This is just the beginning of a larger movement.",
      author: "Dawid Faith"
    }
  },
  pl: {
    header: {
      title: "Zespół",
      subtitle: "Wizjonerzy stojący za rewolucją D.FAITH"
    },
    teamMember: {
      name: "Dawid Faith",
      role: "Założyciel, Deweloper i Artysta",
      description: "Wizjoner i pełnoetatowy deweloper ekosystemu D.FAITH",
      skills: [
        "Blockchain",
        "Muzyka i Kreatywność",
        "Strategia Biznesowa",
        "Full-Stack"
      ],
      socialLinks: [
        {
          platform: "Instagram",
          handle: "@dawidfaith"
        },
        {
          platform: "TikTok",
          handle: "@dawidfaith"
        },
        {
          platform: "Facebook",
          handle: "Dawid Faith"
        },
        {
          platform: "Email",
          handle: "dawid.faith@gmail.com"
        }
      ]
    },
    visionStatement: {
      title: "💡 Wizja i Misja",
      quote: "Wierzę, że technologia może zrewolucjonizować ekonomię twórców. Poprzez D.FAITH tworzymy świat, w którym fani bezpośrednio czerpią korzyści ze swojego zaangażowania, a artyści mogą być zrównoważenie finansowani. To dopiero początek większego ruchu.",
      author: "Dawid Faith"
    }
  }
};