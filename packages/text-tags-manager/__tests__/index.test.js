import { updateOrCreateSegment } from '../src'

describe('text-tags-manager', () => {
  let textWithTags = null;
  let settings = null;
  const startTag = '<!-- MY-TAG:START -->'
  const endTag = '<!-- MY-TAG:END -->'
  const replacementSegment = 'This is my new text, you know... the same but more cool!'


  beforeEach(() => {
    textWithTags = `
    This text should remind the same...

<!-- MY-TAG:START -->
The old text
<!-- MY-TAG:END -->

This text will be also unaffected`
    settings = {
      startTag,
      endTag,
      replacementSegment,
      original: textWithTags
    }
  })

  it('First argument must be an object with all the properties', () => {
    const errorMessage = 'settings must be an object with the following properties as string values: original, replacementSegment, startTag, endTag'
    expect(() => updateOrCreateSegment({...settings, startTag: undefined})).toThrow(errorMessage)
    expect(() => updateOrCreateSegment({...settings, endTag: undefined})).toThrow(errorMessage)
    expect(() => updateOrCreateSegment({...settings, replacementSegment: undefined})).toThrow(errorMessage)
    expect(() => updateOrCreateSegment({...settings, original: undefined})).toThrow(errorMessage)
  })

  it('Should throw an error if only one tag is included', () => {
    const errorMessage = `Only one tag found in the content, expected to find both '${startTag}' and '${endTag}'`
    expect(() => updateOrCreateSegment({
      ...settings,
      original: textWithTags.replace(endTag, '')
    })).toThrow(errorMessage)
  })

  it('Should throw an error if the tags are not in the correct order', () => {
    const errorMessage = `The tags are not in the correct order, expected to find '${startTag}' before '${endTag}'`
    expect(() => updateOrCreateSegment({
      ...settings,
      original: textWithTags.replace(endTag, startTag).replace(startTag, endTag)
    })).toThrow(errorMessage)
  })

  it('If no tags found then return the replacement segment wrapped in the tags', () => {
    const textWithoutTags = 'This is a text without tags'
    const result = updateOrCreateSegment({
      ...settings,
      original: textWithoutTags
    })
    expect(result).toMatchSnapshot()
  })

  it('If tags found then replace the content between the tags with the replacement segment', () => {
    const result = updateOrCreateSegment(settings)
    expect(result).toMatchSnapshot()
  })

})
