import { XMLParser, XMLValidator} from 'fast-xml-parser'
import { type RssParseReturn } from './types';

const parser = new XMLParser();

export function rssParse(rssContent: string): RssParseReturn {
  const result:any = XMLValidator.validate(rssContent);
  if (result.err !== undefined) {
    throw new Error('XML is invalid');
  }
  
  const jObj = parser.parse(rssContent);

  if (jObj?.rss?.channel === undefined) {
    throw new Error('XML has not valid rss format');
  }

  const {item: items, ...metadata} = jObj.rss.channel;

  return {
    metadata,
    items: items ?? []
  }
}
