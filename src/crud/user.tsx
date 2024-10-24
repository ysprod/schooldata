import { db } from "@/firebase/firebase";
import { User } from "@/lib/interfaces";
import { doc, collection, setDoc, serverTimestamp, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";


export const createuser = async (theuser: User, uid: string): Promise<void> => {
  try {
    const formattedUser = {
      ...theuser,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }
    const userRef = doc(collection(db, "Users"), uid);
    await setDoc(userRef, formattedUser);
  } catch (error) {
    console.error("Error..", error);
  }
};

export const getUser = async (id: string): Promise<User | null> => {
  const docRef = doc(db, "Users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as User;
  } else {
    console.log("Introuvable");
    return null;
  }
};


export const getAllUsers = async (): Promise<User[]> => {
  const querySnapshot = await getDocs(collection(db, "persons"));
  const persons: User[] = [];

  querySnapshot.forEach((doc) => {
    persons.push({ id: doc.id, ...doc.data() } as User);
  });

  return persons;
};

export const updateUser= async (id: string, updatedUser: Partial<User>): Promise<void> => {
  const userRef = doc(db, "Users", id);

  try {
    await updateDoc(userRef, updatedUser);
    console.log("Person updated successfully!");
  } catch (error) {
    console.error("Error updating person: ", error);
  }
};

export const deletePerson = async (id: string): Promise<void> => {
  const personRef = doc(db, "Users", id);

  try {
    await deleteDoc(personRef);
    console.log("Person deleted successfully!");
  } catch (error) {
    console.error("Error deleting person: ", error);
  }
};