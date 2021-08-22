const head = (collection) => collection[0]
const last = (collection) => collection[collection.length - 1]

const shortSequence = async (arr) => {
  if (!Array.isArray(arr))
    throw new Error('Argument must be an array.')

  const ranges = (arr) => {
    let prev = null
    return arr.reduce((acc, curr) => {
      if (!acc.length) {
        prev = curr
        acc.push([curr])
        return acc
      }

      const lastRange = last(acc)
      if (prev === curr - 1) {
        lastRange.push(curr)
      } else if (prev !== curr) {
        acc.push([curr])
      }

      prev = curr
      return acc
    }, [])
  }

  const toStr = (arr) =>
    arr.length > 2
      ? `${head(arr)}-${last(arr)}`
      : arr.join(',')

  return ranges(arr).map(toStr).join(',')
}

module.exports = shortSequence
