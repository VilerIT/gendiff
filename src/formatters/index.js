import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const formatAst = (ast, formatType) => {
  let format;

  if (formatType === 'stylish') {
    format = formatStylish;
  } else if (formatType === 'plain') {
    format = formatPlain;
  } else if (formatType === 'json') {
    format = formatJson;
  } else {
    return `Unknown format: ${formatType}`;
  }

  return format(ast);
};

export default formatAst;