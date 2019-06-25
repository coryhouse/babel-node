# babel-node issue

`babel-node` throws an error when I hit ctrl+c instead of exiting clean. Why?

## Quick start

```
git clone https://github.com/coryhouse/babel-node.git
cd babel-node
npm install
npm run start-babel-node
ctrl+c
```

Note that you get an error after hitting ctrl+c to kill Express. Why? Any way to force babel-node to return 0? Note that if you run `npm start`, ctrl+c kills Express just fine.
