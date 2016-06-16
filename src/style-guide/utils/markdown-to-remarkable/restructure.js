import * as tokenTypes from 'style-guide/utils/remarkable-to-react/token-types';
import { _cardCheck, _cardRule } from './restructure-rules/_card';

const restructureRulesCheckMap = {
  [tokenTypes.HEADING]: _cardCheck,
};

const restructureRules = {
  [tokenTypes.HEADING]: _cardRule,
};

function flatten(content, flatStructure = []) {
  return content.reduce((flatStructure, element) => {
    if (Array.isArray(element)) {
      return flatten(element, flatStructure);
    }

    flatStructure.push(element);

    return flatStructure;
  }, flatStructure);
}

function hasRestructureRule(element) {
  return element.props &&
         element.props._markdownType &&
         restructureRulesCheckMap[element.props._markdownType] &&
         restructureRulesCheckMap[element.props._markdownType](element) &&
         restructureRules[element.props._markdownType];
}

export default function restructure(content) {
  let index = -1;
  let restructureRule;
  const restructured = [];
  const flatStructure = flatten(content);

  while (++index < flatStructure.length) {
    if ((restructureRule = hasRestructureRule(flatStructure[index]))) {
      index += restructureRule(flatStructure, index, restructured);
    } else {
      restructured.push(flatStructure[index]);
    }
  }

  return restructured;
}