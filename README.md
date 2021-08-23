# TrendTech job test

## Installation
```bash
npm i @muhammadbabaev/trendtech_test
```

## Usage
```javascript
const shortSequence = require("@muhammadbabaev/trendtech_test")

(async () => {
  const array = [1,2,3,5,6,9,9,10,11,12,33]
  const result = await shortSequence(array)

  console.log(result) // '1-3,5,6,9-12,33'
})()
```

## Testing
```bash
npm run test
```