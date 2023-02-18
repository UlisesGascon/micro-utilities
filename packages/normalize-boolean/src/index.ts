export function normalizeBoolean (value:any):boolean {
    // Ignore non-primitive values
    if (!['boolean', 'string', 'number'].includes(typeof value)) {
      return false
    }
  
    const normalizedValue = !isNaN(parseInt(value)) ? parseInt(value) : value
  
    // Add support for string values
    if (typeof normalizedValue === 'string') {
      return ['true', 'on', 'yes', 'y'].includes(normalizedValue.toLowerCase().trim())
    }
  
    // Add support for number values
    if (typeof normalizedValue === 'number') {
      return normalizedValue === 1
    }
  
    return Boolean(value)
}