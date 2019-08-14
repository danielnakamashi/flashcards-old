import { firebaseApp } from 'Utils/firebase';
import { Card } from 'Types/Card';
// import { Topic } from 'Types/Topic';
import useUser from './useUser';
import 'firebase/firestore';
import { Topic } from 'Types/Topic';

const saveTopicDataFactory = (collection: firebase.firestore.CollectionReference) => async (topic: Topic) => {
  if (topic.id) {
    const docRef = collection.doc(topic.id);
    docRef.set({
      title: topic.title,
    });
    return docRef;
  } else {
    return collection.add({
      title: topic.title,
    });
  }
};

const saveCardDataFactory = (colRef: firebase.firestore.CollectionReference) => async (card: Card) => {
  if (card.id) {
    const docRef = colRef.doc(card.id);
    docRef.set({
      word: card.word,
      definition: card.definition,
    });
    return docRef;
  } else {
    return colRef.add({
      word: card.word,
      definition: card.definition,
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

    const saveTopicData = saveTopicDataFactory(topicsCollection);
    saveTopicData(topic)
      .then(async topicDoc => {
        const saveCardData = saveCardDataFactory(topicDoc.collection('cards'));
        cards.forEach(saveCardData);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return { saveTopic };
};

export default useDatabase;
