import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Container } from '../pages/form';
import { CodeBlock } from './CodeBlock';

interface IProps {
  value: string;
}

export const Markdown: FC<IProps> = ({ value }) => {
  return (
    <Container>
      <ReactMarkdown
        renderers={{ code: CodeBlock }}
        plugins={[gfm]}
        children={value}
      />
    </Container>
  );
};
