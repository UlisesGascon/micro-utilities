import { rssParse } from '../src'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const feedData = readFileSync(resolve('./__fixtures__/feed.xml'), 'utf8')

describe('rss-feed-parser', () => {
    it('Should parse a valid RSS feed', () => {
      expect(rssParse(feedData)).toMatchSnapshot()
    })

    it('Should throw an error if the feed has not the minimum required fields', () => {
      const missingChannel = '<rss></rss>';
      const badContent = '<other></other>';
      expect(() => rssParse(missingChannel)).toThrow('XML has not valid rss format');
      expect(() => rssParse(badContent)).toThrow('XML has not valid rss format');
    });

    it('Should return an empty array if the feed has no items', () => {
      const noItems = '<rss><channel><title>Test</title></channel></rss>';
      const parsed = rssParse(noItems);
      expect(parsed.items).toStrictEqual([]);
      expect(parsed.metadata).toStrictEqual({title: 'Test'})
    })

    it('Should throw an error if the feed is not valid XML', () => {
      const invalidXML = 'invalid';
      expect(() => rssParse(invalidXML)).toThrow('XML is invalid');
    })
})
