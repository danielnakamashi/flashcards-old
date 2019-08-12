import React, { useState, useCallback } from 'react';
import { Box } from 'grommet/components/Box';
import { FormField } from 'grommet/components/FormField';
import { TextInput } from 'grommet/components/TextInput';
import { adjust } from 'ramda';

export interface Card {
  word: string;
  definition: string;
}

const useInputTopic = (initialValue: string) => {
  const [topicTitle, setTopicTitle] = useState('');
  const handleTopicChange = useCallback(e => {
    setTopicTitle(e.target.value);
  }, []);

  return { topicTitle, handleTopicChange };
};

const useInputCards = (initialValue: Card[]) => {
  const [cards, setCards] = useState(initialValue);
  const handleCardTextChange = useCallback(
    (cardPropertyToChange: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, dataset } = event.currentTarget;
      const index = parseInt(dataset.index || '0', 10);
      setCards(cards => {
        const setDefinition = (value: string) => (card: Card) => ({ ...card, [cardPropertyToChange]: value });
        return adjust(index, setDefinition(value), cards);
      });
    },
    [],
  );

  return { cards, handleCardTextChange };
};

const Topic: React.FC = () => {
  const { topicTitle, handleTopicChange } = useInputTopic('');
  const emptyCard: Card = { word: '', definition: '' };
  const { cards, handleCardTextChange } = useInputCards([emptyCard]);

  return (
    <Box direction="column">
      <FormField label="Topics Title">
        <TextInput value={topicTitle} onChange={handleTopicChange} />
      </FormField>
      {cards.map((card: Card, index: number) => {
        return (
          <Box direction="row" key={index}>
            <TextInput
              placeholder="Word"
              value={card.word}
              data-index={index}
              onChange={handleCardTextChange('word')}
            />
            <TextInput
              placeholder="Definition"
              value={card.definition}
              data-index={index}
              onChange={handleCardTextChange('definition')}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Topic;
