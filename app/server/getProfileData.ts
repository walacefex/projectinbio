import "server-only";
import { db } from "../lib/firebase";

export type ProfileData = {
  userId: string;
  TotalVisits: number;
  createdAt: number;
};

export async function getProfileData(profileId: string): Promise<ProfileData> {
  const snapshot = await db.collection("profiles").doc(profileId).get();
  return snapshot.data() as ProfileData;
}
