## Motivation

This repo is to help reproduce Node.js bug [#15464](https://github.com/nodejs/node/issues/15464)

## Steps to Reproduce
Node.js v8.5+
```
nvm use 8.5
```

Run the program
```
node --inspect --inspect-brk index.js
```

The program will stop to allow you to connect a debugger. Open Chrome and go to [`chrome://inspect`](chrome://inspect/).  

Select your remote target in the list and press the "Resume Execution" arrow in the debugging controls. 

**Expected Result:** Program continues execution.

**Actual Result:** Program pauses in `async_hooks.js` twice before continuing execution. _Note: Repeating with Node.js v8.4 produces the expected result._



