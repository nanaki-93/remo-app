import {ThemedText} from "@/components/ThemedText";
import ReminderCard from "@/components/ui/ReminderCard";
import {Button, FlatList, TextInput} from "react-native";
import {useState} from "react";

const Home = () => {
    const [textReminder, setTextReminder] = useState<string>("");
    // Get the todos from the state and subscribe to updates
    const RemindersList = () => {
            // Get the todos from the state and subscribe to updates
            const reminders: { [s: string]: any; } | ArrayLike<any> = [];
            const renderItem = ({item: reminder}: { item: {} }) => (
                <ReminderCard reminder={reminder}/>
            );
            if (reminders) {
                console.log(reminders);
                return <FlatList data={Object.values(reminders)} renderItem={renderItem}/>;
            }
            return <ThemedText>No reminders found</ThemedText>;
        };

    return (
        <>
            <ThemedText>Home</ThemedText>
            <RemindersList/>
            <TextInput value={textReminder} onChangeText={setTextReminder}/>
            <Button title="Add Reminder"/>
        </>
    );
};

export default Home;
