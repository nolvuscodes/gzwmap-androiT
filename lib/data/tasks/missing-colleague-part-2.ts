import {ObjectiveType, objective, task} from "@/lib/types";
import {Artisan} from "@/lib/data/vendors";

const MissingColleaguePartTwo_Objective1: objective = {
    name: "Transcript",
    description: "Find the interrogation transcript",
    position: [0.6278272136589077, -0.9337043227677656],
    type: ObjectiveType.COLLECT,
    image: "/objectives/missing-colleague-part-2-transcript.webp"
}

export const MissingColleaguePartTwo: task = {
    name: "Missing Colleague - Part 2",
    briefing: "Merc, I want you to go back to Fort Narith and get me information on the arrested mechanic. I don't know what happened that led to his imprisonment, but I need to know as much as possible. Look for an interrogation document or similar file that will shed light on why he was taken into custody. The reward is in place, don't worry. You don't have to remind me that you only work for the right price, mercenary. I know our relationship. Now, don't waste any more time and go.",
    debriefing: "So he sabotaged the vehicles at Fort Narith? God,   you old fool! He was always opposing the government, but to be so reckless... it's not like him at all. I must make some calls and find him quickly.",
    note: "You can find the transcript on the third floor in the northern office on the desk",
    objectives: [
        MissingColleaguePartTwo_Objective1,
    ],
    vendor: Artisan,
    level: 0,
}