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

import {connect} from 'react-redux';
// @ts-ignore
import KeplerGl from 'kepler.gl';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import {getHackerNewsModule, middlewares} from "./store";
import { useEffect } from 'react';
import { addMiddleware,removeMiddleware } from 'redux-dynamic-middlewares';

const localeMessages = {
  en: {
    mapLayers: {
      terrain: 'Terrain'
    }
  }
};

const App = (props:any) => 
  {
 // <div style={{position: 'absolute', width: '100%', height: '100%'}}>
 useEffect(() => {
  addMiddleware(...middlewares /*[, anotherMiddleware ... ]*/);
 // removeMiddleware(middlewares /*[, anotherMiddleware ... ]*/);
  return () => {
    removeMiddleware(middlewares /*[, anotherMiddleware ... ]*/);
  }
 },[]); 

 return (
 <DynamicModuleLoader modules={[getHackerNewsModule()]}>
        <KeplerGl
          mapboxApiAccessToken="pk.eyJ1IjoicmFodWwxNW1hcCIsImEiOiJjbDI3YWJid3YwYWYzM2txcW81MWRvbDFzIn0.i3M5VictUKvX0Jj6LLcpyQ"
          id="map"
        //  store={store}
        width={window.innerWidth}
        height={window.innerHeight}
       
        />
         </DynamicModuleLoader>
 )
 
 // </div>
}




const mapStateToProps = (state :any)=> state;
const dispatchToProps = (dispatch:any) => ({dispatch});

export default connect(mapStateToProps, dispatchToProps)(App);
function removedMiddleware(arg0: any) {
  throw new Error('Function not implemented.');
}

