import { MarkerType, ObjectiveType, objective, task } from "@/lib/types";
import { Handshake } from "@/lib/data/vendors";

const BusinessOrPleasure_Objective1: objective = {
    id: "",
    name: "Flash Drive",
    description: "Retrieve the intel and report back to Handshake",
    position: [0.8724821587198835, -0.601630210876465],
    type: ObjectiveType.COLLECT,
    types: [MarkerType.TASK, MarkerType.COLLECT, MarkerType.HANDSHAKE, MarkerType.PHALANGAIRFIELD]
}


export const BusinessOrPleasure: task = {
    id: "",
    name: "Business or Pleasure",
    briefing: "I suspect you had your fair share of encounters with the armed group currently occupying the airfield, eh, pal? Now that we have no more pressing matters at that place, I’d like to find out who they are. Search the airfield and try to find their little hidey-hole. Once you’ve located it, gather any intel that might shed light on their intentions here and bring it back. While it looks like their objectives don’t directly interject with ours, they are still a pain in the ass to deal with. I’d feel a lot calmer knowing exactly what we’re up against, alright?",
    debriefing: "Interesting. It seems our boys here are out of town. Thailand, to be more specific. Some Thai big shot hired them to infiltrate the Midnight Sapphire Resort and extract sensitive material. Probably him doing God knows what with a pig or some shit, judging from the stories I heard about that place. These boys thought that after the evacuation, it’s gonna be a simple snatch-and-grab, but they didn’t count on the LAF staying behind and guarding it. Looking at the comm logs here, they won’t receive any additional support until they complete their mission. Poor bastards, it sure sucks to be them. Hmm, maybe we should check out that resort as well. Looks like there could be a lot of juicy shit there that I’m sure some rich bastards would pay a pretty penny for; what do you think?",
    objectives: [
        BusinessOrPleasure_Objective1,
    ],
    vendor: Handshake,
    level: 0,
}