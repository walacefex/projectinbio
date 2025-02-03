"use server";
import { db } from "../lib/firebase";

export type ProfileData = {
  userId: string;
  TotalVisits: number;
  createdAt: number;
};

export type ProjectData = {
  id: string;
  userId: string;
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  imagePath: string;
  createdAt: number;
  TotalVisits?: number;
};

export async function getProfileData(profileId: string): Promise<ProfileData> {
  const snapshot = await db.collection("profiles").doc(profileId).get();
  return snapshot.data() as ProfileData;
}

export async function getProfileProjects(profileId: string) {
  const snapshot = await db
    .collection("projects")
    .doc(profileId)
    .collection("projects")
    .get();
  return snapshot.docs.map((doc) => doc.data()) as ProjectData[];
}
