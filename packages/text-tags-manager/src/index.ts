interface Settings {
  original: string;
  replacementSegment: string;
  startTag: string;
  endTag: string;
}

export function updateOrCreateSegment (settings:Settings):string {
  const { original, replacementSegment, startTag, endTag } = settings

  if([original, replacementSegment, startTag, endTag].some(prop => typeof prop !== 'string')){
    throw new Error('settings must be an object with the following properties as string values: original, replacementSegment, startTag, endTag')
  }

  const startTagIndex = original.indexOf(startTag)
  const endTagIndex = original.indexOf(endTag)


  // Throw an error if only one tag is found
  if((startTagIndex === -1 && endTagIndex > -1) || (endTagIndex === -1 && startTagIndex > -1)) {
    throw new Error(`Only one tag found in the content, expected to find both '${startTag}' and '${endTag}'`)
  }

  // If the start tag is found after the end tag then throw an error
  if(startTagIndex > endTagIndex){
    throw new Error(`The tags are not in the correct order, expected to find '${startTag}' before '${endTag}'`)
  }

  // If no tags found then return the replacement segment wrapped in the tags
  if(startTagIndex === -1 && endTagIndex === -1) {
    return `${startTag}\n${replacementSegment}\n${endTag}`
  }

    
  // If tags found then replace the content between the tags with the replacement segment
  const contentBefore = original.slice(0, startTagIndex)
  const contentAfter = original.slice(endTagIndex + endTag.length)
  return `${contentBefore}${startTag}\n${replacementSegment}\n${endTag}${contentAfter}`
}