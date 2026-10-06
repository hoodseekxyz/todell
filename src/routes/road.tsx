import { createFileRoute } from "@tanstack/react-router";
import { TheRoad } from "@/components/the-road";

export const Route = createFileRoute("/road")({ component: TheRoad });
