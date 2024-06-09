import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, dracula, a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const CodeBlock = ({ language, code }: {language: string, code: string}) => {
  return (
    <SyntaxHighlighter language={language} style={a11yDark} customStyle={{padding: "14px", borderRadius: "5px"}}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
