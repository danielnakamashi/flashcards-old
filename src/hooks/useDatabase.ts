import { firebaseApp } from 'Utils/firebase';
import { Card } from 'Types/Card';
// import { Topic } from 'Types/Topic';
import useUser from './useUser';
import 'firebase/firestore';

const useDatabase = () => {
  console.log(firebaseApp);
  const topicsCollection = firebaseApp.firestore().collection('topics');
  const { user } = useUser();

  const saveTopic = async (name: string, cards: Card[], topicId?: string) => {
    if (!user) {
      return;
    }

    const topic = topicId ? topicsCollection.doc(topicId) : topicsCollection.doc();
    topic
      .set({
        owner: user.uid,
        name,
      })
      .then(async () => {
        const doc = await topic.get();
        const data = await doc.get('cards');

        if (!data) {
          const cardsCollection = topic.collection('cards');
          cards.forEach(card => {
            cardsCollection.doc().set(card);
          });
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return { saveTopic };
};

export default useDatabase;
