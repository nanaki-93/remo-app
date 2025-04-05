import { Tables } from "@/supabase/query/database.types";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";

type ReminderCardProps = {
  reminder: Tables<"reminder">;
};

export default function ReminderCard({ reminder }: ReminderCardProps) {
  return (
    <View style={{ padding: 10, margin: 10, backgroundColor: "#00aaaa" }}>
      <ThemedText>{reminder.name || ""}</ThemedText>
      <ThemedText>{reminder.note || ""}</ThemedText>
    </View>
  );
}
