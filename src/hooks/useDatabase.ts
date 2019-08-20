import { firebaseApp } from 'Utils/firebase';
import { Card } from 'Types/Card';
// import { Topic } from 'Types/Topic';
import useUser from './useUser';
import 'firebase/firestore';
import { Topic } from 'Types/Topic';

const saveTopicData = async (topic: Topic, cards: Card[], collection: firebase.firestore.CollectionReference) => {
  if (topic.id) {
    const docRef = collection.doc(topic.id);
    docRef.set({
      title: topic.title,
      cards,
    });
    return docRef;
  } else {
    return collection.add({
      title: topic.title,
      cards,
    });
  }
};

const useDatabase = () => {
  const topicsCollection = firebaseApp.firestore().collection('topics');
  const { user } = useUser();

  const saveTopic = async (topic: Topic, cards: Card[]) => {
    if (!user) {
      return;
    }

    return saveTopicData(topic, cards, topicsCollection)
      .then(topicDoc => topicDoc.id)
      .catch(error => {
        console.log('error', error);
      });
  };

  return { saveTopic };
};

export default useDatabase;
