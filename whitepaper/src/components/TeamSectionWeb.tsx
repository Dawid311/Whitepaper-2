"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMusic,
  FaEthereum,
  FaChartLine,
  FaCode,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaEnvelope
} from 'react-icons/fa';
import Image from 'next/image';
import { teamSectionWebTranslations } from './TeamSectionWebTranslations';

interface TeamSectionWebProps {
  language: 'de' | 'en' | 'pl';
}

const TeamSectionWeb: React.FC<TeamSectionWebProps> = ({ language }) => {
  const t = teamSectionWebTranslations[language];

  const teamMember = {
    name: t.member.name,
    role: t.member.role, 
    description: t.member.description,
    image: "/dawid-faith-photo.jpg",
    skills: [
      { skill: t.member.skills[0], icon: <FaEthereum />, color: "from-blue-500 to-cyan-500" },
      { skill: t.member.skills[1], icon: <FaMusic />, color: "from-purple-500 to-pink-500" },
      { skill: t.member.skills[2], icon: <FaChartLine />, color: "from-green-500 to-emerald-500" },
      { skill: t.member.skills[3], icon: <FaCode />, color: "from-orange-500 to-red-500" }
    ],
    socialLinks: [
      { 
        platform: "Instagram", 
        icon: <FaInstagram />, 
        color: "text-pink-400", 
        handle: "@dawidfaith",
        url: "https://www.instagram.com/dawidfaith/"
      },
      { 
        platform: "TikTok", 
        icon: <FaTiktok />, 
        color: "text-gray-300", 
        handle: "@dawidfaith",
        url: "https://www.tiktok.com/@dawidfaith"
      },
      { 
        platform: "Facebook", 
        icon: <FaFacebook />, 
        color: "text-blue-400", 
        handle: "Dawid Faith",
        url: "https://www.facebook.com/profile.php?id=61572473614500"
      },
      { 
        platform: "Email", 
        icon: <FaEnvelope />, 
        color: "text-green-400", 
        handle: "dawid.faith@gmail.com",
        url: "mailto:dawid.faith@gmail.com"
      }
    ]
  };

  return (
  <section id="team" className="w-full py-20 px-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
            {t.title}
          </h2>
          <p className="text-gray-300 text-lg">
            {t.subtitle}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl p-10 mb-10 border border-amber-500/30 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="relative flex-shrink-0">
            <Image
              src={teamMember.image}
              alt={teamMember.name}
              width={140}
              height={140}
              className="rounded-full border-4 border-amber-500/50"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
              <FaMusic className="text-white text-xl" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">{teamMember.name}</h3>
            <p className="text-amber-300/80 text-lg mb-4">{teamMember.role}</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {teamMember.description}
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {teamMember.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg flex-shrink-0`}>
                    <span className="text-white text-sm">{skill.icon}</span>
                  </div>
                  <span className="text-white font-semibold text-xs leading-tight block break-words">{skill.skill}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {teamMember.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.platform === "Email" ? "_self" : "_blank"}
                  rel={social.platform === "Email" ? "" : "noopener noreferrer"}
                  className={`p-3 bg-white/5 rounded-xl border border-white/10 ${social.color} hover:bg-white/10 transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Vision & Mission Zitat integriert in die Profilbox */}
        <div className="mt-6">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20 text-center">
            <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center justify-center gap-2">
              💡 {t.visionQuote.title}
            </h4>
            <p className="text-gray-200 leading-relaxed italic text-base md:text-lg mb-2">
              &ldquo;{t.visionQuote.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" />
              <span className="text-purple-400 font-semibold text-sm">{t.visionQuote.author}</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionWeb;
