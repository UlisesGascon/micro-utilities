export interface Item {
    title: string;
    description: string;
    pubDate: string;
    link: string;
    guid: string;
  }
  
export interface Image {
    title: string;
    url: string;
    link: string;
  }
  
export interface Channel {
    title: string;
    link: string;
    'atom:link': string;
    description: string;
    pubDate: string;
    language: string;
    docs: string;
    lastBuildDate: string;
    image: Image;
    item: Item[];
  }
  
export interface RssParseReturn {
    metadata: Omit<Channel, 'item'>;
    items: Channel;
}