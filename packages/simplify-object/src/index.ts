interface simplifyPayloadType {
  include?: string[]
  exclude?: string[] 
}

type OpenObjectType = Record<string, any>;

const isObject = (obj:object):boolean => {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null
}

export function simplifyObject (baseObj:OpenObjectType, operation:simplifyPayloadType):OpenObjectType {
  if(!isObject(baseObj)) throw new Error('baseObj must be an object')
  if(!isObject(operation)) throw new Error('operation must be an object')

  if(Array.isArray(operation.include) && Array.isArray(operation.exclude)) throw new Error('operation must have either include or exclude')
  if(!Array.isArray(operation.include) && !Array.isArray(operation.exclude)) throw new Error('operation must have either include or exclude')

  if(Array.isArray(operation.include) && (operation.include.length === 0)) throw new Error('operation.include must be an array with properties')
  if(Array.isArray(operation.exclude) && (operation.exclude.length === 0)) throw new Error('operation.exclude must be an array with properties')
  
  const { include=[], exclude=[] } = operation 

  const simplifiedObject:OpenObjectType = {}

  Object.keys(baseObj).forEach(key => {
      if(((include.length > 0) && include.includes(key)) || (exclude.length > 0) && !exclude.includes(key)) {
        simplifiedObject[key] = baseObj[key]
      }
  })
  
  return simplifiedObject
}