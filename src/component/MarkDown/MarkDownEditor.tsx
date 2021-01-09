import React, { FC } from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import { Container } from '../pages/form';

interface IProps {
  value?: string;
  set_value: (value: string) => void;
}

export const MarkdownEditor: FC<IProps> = ({ value, set_value }) => {
  const [selected_tab, set_selected_tab] = React.useState<'write' | 'preview'>(
    'write'
  );

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <Container>
      <ReactMde
        minEditorHeight={600}
        maxEditorHeight={2000}
        value={value}
        onChange={set_value}
        selectedTab={selected_tab}
        onTabChange={set_selected_tab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </Container>
  );
};
