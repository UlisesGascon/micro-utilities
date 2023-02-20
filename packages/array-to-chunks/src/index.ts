export function chunkArray (arr:any[], chunkSize:number):any[] { 
  if(!Array.isArray(arr)) throw new Error('arr must be an array')
  if(!Number.isInteger(chunkSize) && chunkSize >= 0) throw new Error('chunkSize must be a positive integer')

  const res: any[] = []
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
  }
  return res
}