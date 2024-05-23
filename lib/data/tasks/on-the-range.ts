import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Gunny } from "@/lib/data/vendors";

const OnTheRange_Objective1: objective = {
    id: "",
    name: "Shooting Lanes",
    description: "Scout the shooting lanes at Hunter’s Paradise",
    position: [0.9543010740570032, -0.7927751541137695],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.HUNTERSPARADISE]
}

const OnTheRange_Objective2: objective = {
    id: "",
    name: "Motel",
    description: "Scout the motel at Hunter’s Paradise",
    position: [0.9493317441587608, -0.7855864257597391],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.HUNTERSPARADISE]
}

const OnTheRange_Objective3: objective = {
    id: "",
    name: "Dumping Ground",
    description: "Scout the dumping ground at Hunter’s Paradise",
    position: [0.9480804844903913, -0.8003282546997071],
    type: ObjectiveType.LOCATE,
    types: [MarkerType.TASK, MarkerType.LOCATE, MarkerType.GUNNY, MarkerType.HUNTERSPARADISE]
}

export const OnTheRange: task = {
    id: "",
    name: "On The Range",
    briefing: "Okay, here’s the thing. Our supply situation still isn’t great, and that’s a big understatement, believe me. Since the entire place is under international quarantine, sending anything our way is proving very difficult. Simply put, if we don’t make use of anything that can help us, we’re done for. There’s some kind of luxury resort to the north of our AO. You know, the kind that definitely wasn’t meant for the locals unless they were scrubbing the toilets there. It sticks out like a sore thumb, so you can’t miss it. However, it’s the building just west of it that interests me. It looks like the top 1% staying at the resort wasn’t satisfied with just laying by the pool and tanning their rich asses, but they also wanted some action. Naturally, the locals couldn’t say no and built them a shooting range where they could play soldiers. A shooting range means weapons and ammo, so things that are in short supply around here. I need you to go there and put eyes on it. Scout around the place and check if it’s clear.",
    debriefing: "Good work. I guess we aren’t the only ones that need more weapons and ammo, but now it’ll be much easier to take it over from whoever is occupying it.",
    objectives: [
        OnTheRange_Objective1,
        OnTheRange_Objective2,
        OnTheRange_Objective3,
    ],
    vendor: Gunny,
    level: 0,
}
