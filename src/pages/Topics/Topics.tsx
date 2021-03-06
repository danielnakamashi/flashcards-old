import React, { useState, useCallback } from 'react';
import { Box } from 'grommet/components/Box';
import { FormField } from 'grommet/components/FormField';
import { TextInput } from 'grommet/components/TextInput';
import { Button } from 'grommet/components/Button';
import { Add, Subtract } from 'grommet-icons';
import { adjust, remove } from 'ramda';
import { Card } from 'Types/Card';
import { Topic as TopicInterface } from 'Types/Topic';
import useDatabase from 'Hooks/useDatabase';

const useInputTopic = (initialValue: TopicInterface) => {
  const [topic, setTopic] = useState(initialValue);
  const handleTopicChange = useCallback(e => {
    const topicTitle = e.target.value;
    setTopic(topic => ({ ...topic, title: topicTitle }));
  }, []);

  return { topic, handleTopicChange };
};

const useInputCards = (initialValue: Card[], blankCard: Card) => {
  const [cards, setCards] = useState(initialValue);
  const handleCardTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = event.target;

    if (!dataset.index || !dataset.name) {
      return;
    }

    const index = parseInt(dataset.index, 10);
    const name = dataset.name;
    setCards(cards => {
      const setDefinition = (value: string) => (card: Card) => ({ ...card, [name]: value });
      return adjust(index, setDefinition(value), cards);
    });
  }, []);
  const addNewCard = useCallback(() => {
    setCards(cards => [...cards, { ...blankCard }]);
  }, [blankCard]);
  const removeCard = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const { dataset } = event.target as HTMLButtonElement;

    if (!dataset.index) {
      return;
    }

    const index = parseInt(dataset.index, 10);
    setCards(cards => remove(index, 1, cards));
  }, []);

  return { cards, handleCardTextChange, addNewCard, removeCard };
};

const Topic: React.FC = () => {
  const blankTopic: TopicInterface = { id: '', title: '' };
  const { topic, handleTopicChange } = useInputTopic({ ...blankTopic });
  const blankCard: Card = { word: '', definition: '' };
  const { cards, handleCardTextChange, addNewCard, removeCard } = useInputCards([{ ...blankCard }], { ...blankCard });

  const { saveTopic } = useDatabase();
  const save = useCallback(async () => {
    const topicId = await saveTopic(topic, cards);

    console.log(topicId);
  }, [cards, saveTopic, topic]);

  return (
    <Box direction="column" margin={{ horizontal: 'small' }}>
      <FormField label="Topics Title" htmlFor="topics-title">
        <TextInput value={topic.title} onChange={handleTopicChange} id="topics-title" />
      </FormField>
      {cards.map((card, index) => {
        return (
          <Box direction="row" key={index} margin={{ vertical: 'small' }} gap="small">
            <input type="hidden" data-name="id" data-index={index} value="" />
            <TextInput
              placeholder="Word"
              value={card.word}
              data-index={index}
              data-name="word"
              onChange={handleCardTextChange}
            />
            <Button label={<Subtract />} alignSelf="center" gap="small" data-index={index} onClick={removeCard} />
            <TextInput
              placeholder="Definition"
              value={card.definition}
              data-index={index}
              data-name="definition"
              onChange={handleCardTextChange}
            />
          </Box>
        );
      })}
      <Button icon={<Add />} label="Add Card" alignSelf="center" margin={{ vertical: 'small' }} onClick={addNewCard} />
      <Button label="Save" alignSelf="center" margin={{ vertical: 'small' }} onClick={save} />
    </Box>
  );
};

export default Topic;
