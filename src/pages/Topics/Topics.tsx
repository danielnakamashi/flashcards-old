import React, { useState, useCallback } from 'react';
import { Box } from 'grommet/components/Box';
import { FormField } from 'grommet/components/FormField';
import { TextInput } from 'grommet/components/TextInput';

const TopicTitleInput: React.NamedExoticComponent<{
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = React.memo(props => <TextInput {...props} />);

const Topic: React.FC = () => {
  const [topicTitle, setTopicTitle] = useState('');
  const handleTopicChange = useCallback(e => {
    setTopicTitle(e.target.value);
  }, []);
  const [words, setWords] = useState(['']);
  const handleWordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = event.currentTarget;
    setWords(words => {
      const copyWords = [...words];
      const index = parseInt(dataset.index || '0', 10);
      copyWords[index] = value;
      return copyWords;
    });
  }, []);
  return (
    <Box direction="column">
      <FormField label="Topics Title">
        <TopicTitleInput value={topicTitle} onChange={handleTopicChange} />
      </FormField>
      <Box direction="row">
        {words.map((word: string, index: number) => {
          return (
            <TextInput placeholder="Word" key={index} value={word} data-index={index} onChange={handleWordChange} />
          );
        })}
      </Box>
    </Box>
  );
};

export default Topic;
