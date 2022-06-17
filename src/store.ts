// Copyright (c) 2022 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import { combineReducers, applyMiddleware, compose} from 'redux';
import { createStore } from "redux-dynamic-modules"
// @ts-ignore
import keplerGlReducer from 'kepler.gl/reducers';
// @ts-ignore
import {enhanceReduxMiddleware} from 'kepler.gl/middleware';
// @ts-ignore
import dynamicMiddlewares,{addMiddleware} from 'redux-dynamic-middlewares'

const customizedKeplerGlReducer = keplerGlReducer.initialState({
 
});

// const reducers = combineReducers({
 const  keplerGl = customizedKeplerGlReducer
// });

export const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(dynamicMiddlewares)];

const store = createStore({
  enhancers: enhancers,
  extensions: [],
});



// addMiddleware(...middlewares /*[, anotherMiddleware ... ]*/)
const m =store;
// export default createStore(reducers, {}, compose(...enhancers));
export default store
export const getHackerNewsModule = () => ({
  id: "keplerGl",
  reducerMap: {
    keplerGl: keplerGl
  }
});
