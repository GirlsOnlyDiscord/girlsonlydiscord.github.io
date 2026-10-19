import TheWorldAfterDark from "../assets/EventBanners/TheWorldAfterDark.png";
import UnderTheSurface from "../assets/EventBanners/UnderTheSurface.png";
import TaskSprints from "../assets/EventBanners/TaskSprints.png";
import RecruitingTheUndead from "../assets/EventBanners/RecruitingTheUndead.png";
import TheRift from "../assets/EventBanners/TheRift.png";
import TOWAW from "../assets/EventBanners/TOWAW.png";

// Each event can optionally include a `banner` image import.
// Until real event artwork is ready, leave `banner` unset and a
// styled placeholder will render instead.
export const EVENTS = [
    {
    id: "the-world-after-dark",
    title: "The World After Dark - 2026",
    banner: TheWorldAfterDark,
    description:
      "The story of The World After Dark, our 5th study tournament taking place in October 2026, continues where Recruiting the Undead left off. Following their victory, the Gleaming Ghosts set out across the world to recruit new undead souls to their cause, encountering legends from different cultures along the way. With three unique teams, each bringing their own abilities and strategies, over 90 participants are currently competing in this ongoing battle for supremacy.",
  },
    {
    id: "under-the-surface",
    title: "Under the Surface - 2026",
    banner: UnderTheSurface,
    description:
      "What began as an April Fools' prank became a full-blown underground society in Under the Surface, a 12-day GOSS study tournament held in April 2026. With over 90 participants settling into the GOSS Cave, four factions emerged with competing ideas about how their new home should develop. As members logged more than 5,700 study hours and completed over 950 self-improvement quests, daily interactive events gave factions opportunities to secure advantages, disrupt their rivals, and bring an extra layer of competition to studying together.",
  },
  {
    id: "task-sprints",
    title: "Task Sprints - Every Sunday",
    banner: TaskSprints,
    description:
      "Two years in and counting, we meet every Sunday for 3 hours of focused studying, with regular check-ins, a shared timer, and a goal of getting as much of our to-do lists done as possible. With two sessions to accommodate Western and Eastern hemispheres, Task Sprints help members wrap up the week and start the new one on the right foot.",
  },  
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
    id: "towaw",
    title: "Tournament of Witchcraft and Wands - 2025",
    banner: TOWAW,
    description:
      "In June 2025, the Tournament of Witchcraft and Wands introduced a house-based study competition featuring Memoria, Sapientia, Zenith, and Terra. Built around a magic-themed house rivalry, 54 participants recorded over 1800 hours of study while completing daily self-improvement quests over the course of 7 days."
  },
];