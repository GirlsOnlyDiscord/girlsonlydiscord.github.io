import RecruitingTheUndead from "../assets/EventBanners/RecruitingTheUndead.png";
import TheRift from "../assets/EventBanners/TheRift.png";
import FocusEncrypted from "../assets/EventBanners/FocusEncrypted.png";
import TOWAW from "../assets/EventBanners/TOWAW.png";

// Each event can optionally include a `banner` image import.
// Until real event artwork is ready, leave `banner` unset and a
// styled placeholder will render instead.
export const EVENTS = [
  {
    id: "recruiting-the-undead",
    title: "Recruiting the Undead - 2025",
    
    banner: RecruitingTheUndead,
    description:
      "Recruiting the Undead was our 2nd study tournament held during Halloween 2025, featuring three undead factions of zombies, ghosts, and vampires. Framed around a battle for control of the Ruthark Graveyard, this 12-day event brought together over 100 participants, who logged more than 10,600 hours of study and completed over 900 self-improvement quests, alongside interactive charms and curses, where teams could draw cards to influence the competition.",
  },
  {
    id: "the-rift",
    title: "The Rift - 2025",
    banner: TheRift,
    description:
      "The Rift, held in December 2025, was a 9-day study tournament set in a time-fractured reality where the past and the future competed to push the timeline in their favor. Across the event, over 100 participants logged more than 3,900 hours of study time and completed 668 self-improvement quests, while recurring swaps transferred participants between teams, and timebound gifts and coals were unlocked through performance, allowing teams to gain advantages or hinder their opponents.",
  },
  {
    id: "focus-encrypted",
    title: "Focus Encrypted - Nov 2025",
    banner: FocusEncrypted,
    description:
      "Focus Encrypted was a four-hour group study session, punctuated by puzzle-solving, cryptic challenges. Attendees faced off to solve riddles and study effectively together. ",
  },
  {
    id: "towaw",
    title: "Tournament of Witchcraft and Wands - 2025",
    banner: TOWAW,
    description:
      "In June 2025, the Tournament of Witchcraft and Wands introduced a house-based study competition featuring Memoria, Sapientia, Zenith, and Terra. Built around a magic-themed house rivalry, 54 participants recorded over 1800 hours of study while completing daily self-improvement quests over the course of 7 days."
  },
];