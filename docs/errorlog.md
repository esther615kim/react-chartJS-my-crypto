### 4
react-dom.development.js:14938 
        
       Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
    at renderWithHooks (react-dom.development.js:14938:1)
    at updateFunctionComponent (react-dom.development.js:17295:1)
    at beginWork (react-dom.development.js:19007:1)
    at HTMLUnknownElement.callCallback (react-dom.development.js:3889:1)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:3937:1)
    at invokeGuardedCallback (react-dom.development.js:3998:1)
    at beginWork$1 (react-dom.development.js:23906:1)
    at performUnitOfWork (react-dom.development.js:22714:1)
    at workLoopSync (react-dom.development.js:22647:1)
    at renderRootSync (react-dom.development.js:22618:1)
![](https://images.velog.io/images/ek615/post/ec218917-e903-45ad-b3ef-6b2f495711ed/image.png)
side effect of too many re-rendering? 

### 3 2022.02.03 `closed` 

react-dom.development.js:67 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    at SingleCoinPage (http://localhost:3000/static/js/bundle.js:2039:78)


### 2 2022.02.03 `fixed`
type: axios importing typo

### 1 2022.02.02 `fixed`
TypeError: Cannot destructure property 'category' of '_ref' as it is undefined.

