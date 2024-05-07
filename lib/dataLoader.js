import data from '../data/content.json'
import { doc, getDoc } from "firebase/firestore"; 


export default async function dataLoader(db) {
  try {
    const querySnapshot = await getDoc(doc(db, "segments", "segmentsData"));
    return querySnapshot.data().newSegmentData;
  } catch (e) {
    console.error("Error reading document: ", e)
    return data;
  }
};
