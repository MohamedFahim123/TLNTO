import TaskListContainer from "@/app/components/Dashboard/TaskListContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Task List",
  description: "Your Task List.",
};

export default function TaskListPage() {
  return <TaskListContainer />;
}
