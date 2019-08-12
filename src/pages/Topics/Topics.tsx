import React, { useState, useCallback } from 'react';
import { Box } from 'grommet/components/Box';
import { FormField } from 'grommet/components/FormField';
import { TextInput } from 'grommet/components/TextInput';
import { Button } from 'grommet/components/Button';
import { Add, Subtract } from 'grommet-icons';
import { adjust, remove } from 'ramda';

export interface Card {
  word: string;
  definition: string;
}

const useInputTopic = (initialValue: string) => {
  const [topicTitle, setTopicTitle] = useState(initialValue);
  const handleTopicChange = useCallback(e => {
    setTopicTitle(e.target.value);
  }, []);

  return { topicTitle, handleTopicChange };
};

const useInputCards = (initialValue: Card[], blankCard: Card) => {
  const [cards, setCards] = useState(initialValue);
  const handleCardTextChange = useCallback(
    (cardPropertyToChange: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, dataset } = event.target;

      if (!dataset.index) {
        return;
      }

      const index = parseInt(dataset.index, 10);
      setCards(cards => {
        const setDefinition = (value: string) => (card: Card) => ({ ...card, [cardPropertyToChange]: value });
        return adjust(index, setDefinition(value), cards);
      });
    },
    [],
  );
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
  const { topicTitle, handleTopicChange } = useInputTopic('');
  const blankCard: Card = { word: '', definition: '' };
  const { cards, handleCardTextChange, addNewCard, removeCard } = useInputCards([{ ...blankCard }], { ...blankCard });

  return (
    <Box direction="column" margin={{ horizontal: 'small' }}>
      <FormField label="Topics Title">
        <TextInput value={topicTitle} onChange={handleTopicChange} />
      </FormField>
      {cards.map((card: Card, index: number) => {
        return (
          <Box direction="row" key={index} margin={{ vertical: 'small' }} gap="small">
            <TextInput
              placeholder="Word"
              value={card.word}
              data-index={index}
              onChange={handleCardTextChange('word')}
            />
            <Button label={<Subtract />} alignSelf="center" gap="small" data-index={index} onClick={removeCard} />
            <TextInput
              placeholder="Definition"
              value={card.definition}
              data-index={index}
              onChange={handleCardTextChange('definition')}
            />
          </Box>
        );
      })}
      <Button icon={<Add />} label="Add Card" alignSelf="center" margin={{ vertical: 'small' }} onClick={addNewCard} />
    </Box>
  );
};

export default Topic;
