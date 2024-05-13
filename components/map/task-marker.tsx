import { Rubik } from "next/font/google";
import { task, objective } from "@/lib/types";
import { cn } from "@/lib/utils";
import MapMarker from "./map-marker";
import { Map } from "leaflet";
import Image from "next/image";

const rubik = Rubik({ subsets: ["latin"] });

export default function TaskMarker({ map, task, objective }: { map: Map, task: task, objective: objective}) {
  const popupContent = (
    <div className={cn(
      rubik.className,
      "p-2 min-w-64"
    )}>
      <h2 className="text-lg font-bold text-primary">{task.name}</h2>
      <div className="flex flex-row gap-2">
        <p className="text-xs text-muted-foreground">{task.vendor.name}</p>
        <p className="text-xs text-muted-foreground">▪</p>
        <p className="text-xs text-muted-foreground">{objective.faction?.shorthand || "All Factions"}</p>
      </div>
      <p className="pt-4 text-sm text-primary text-pretty">{objective.name}</p>
      <p className="text-xs text-muted-foreground text-pretty">{objective.type}</p>
      <p className="pt-2 text-primary/85 text-pretty">{objective.description}</p>
    </div>
  );
  
  

  return (
    <MapMarker
      map={map}
      iconSize={[30, 30]}
      position={objective.position}
      popup={popupContent}
    >
      <div className='task-marker-pin'>
        <Image className='task-marker-icon' unoptimized={true} src='/task.png' width={30/2} height={30/2} alt={`${task.name} - ${objective.name}`}></Image>
        <span className={cn(
          rubik.className,
          'task-marker-text'
        )}>{`${task.name} - ${objective.name}`}</span>
      </div>
    </MapMarker>
  )
}