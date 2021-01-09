import React from 'react';
import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface IProps {
  language?: string;
  value?: string;
}

export const CodeBlock: FC<IProps> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={darcula}>
      {value}
    </SyntaxHighlighter>
  );
};
