import { Button } from "@/src/cp/Button";
import { ThemedText } from "@/src/cp/ThemedText";
import { ThemedView } from "@/src/cp/ThemedView";
import { backupDatabase, restoreDatabase } from "@/src/db/dbtools";
import { DATABASE_NAME } from "@/src/db/schema";

export default function Settings() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText type='title'>Settings</ThemedText>
      <Button theme="primary" iconame="upload" label="Export" onPress={()=>backupDatabase(DATABASE_NAME,"DB_backup1.db")} />
      <Button theme="primary" iconame="download" label="Import" onPress={()=>restoreDatabase(DATABASE_NAME)} />
    </ThemedView>
  );
}
