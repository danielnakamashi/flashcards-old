import { firebaseApp } from 'Utils/firebase';
import { Card } from 'Types/Card';
import { Topic } from 'Types/Topic';
import useUser from './useUser';

const useDatabase = () => {
  const topicsCollection = firebaseApp.firestore().collection('topics');
  const { user } = useUser();

  const saveTopic = async (name: string, cards: Card[], topicId?: string) => {
    if (!user) {
      return;
    }

    const topic = topicsCollection.doc(topicId);
    const doc = await topic.get();

    if (!doc.exists) {
      return;
    }

    const data = doc.data() as Topic | undefined;
    if (!data || data.owner !== user.uid) {
      return;
    }

    topic.set({
      owner: user.uid,
      name,
    });
  };

  return { saveTopic };
};

export default useDatabase;
