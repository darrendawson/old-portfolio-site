/*
  Ustra: Universal Source of Truth for React Apps
  Ustra is a class that makes storing state and cross-component variables easy.
  -> Ustra sits on the App.state spine of the app.
*/


import React from 'react';

class Ustra {

  constructor(object) {
    this.truth = object;
    this.pathLookup = this.createPathLookup(object);
  }


  // Paths ---------------------------------------------------------------------
  /*
    - Paths are a way to get to a specific location in an object
    - A Path Lookup table is of form:
          - {pathTag: [list of pathTags required to get here]}
    - this is used for easy traversal of the object,
          - only one path tag is required -> the full patch is fetched
    Limitations:
    - requires that pathTags are unique across the entire object
  */


  // Function calls assignPaths to create a lookup table for paths
  createPathLookup(object) {
    return this.assignPaths(object, [], {});
  }


  // Recursive (depth first) function that creates a list of paths for traversing nested objects
  assignPaths(object, currentPath, totalPath) {

    for (const [key, value] of Object.entries(object)) {

      let newPath = currentPath.slice();    // create a clone of current path
      newPath.push(key);                     // add current place to path
      totalPath[key] = newPath;             // log we've been here

      // if there's another object, go to it recursively
      if (typeof(value) === 'object') {
        totalPath = this.assignPaths(value, newPath, totalPath);
      }
    }

    return totalPath;
  }


  // Update --------------------------------------------------------------------
  /*
    - Functions for updating truth
  */


  update(value, pathTag) {
    let fullPath = this.pathLookup[pathTag].slice(); // slice makes a copy
    let updatedTruth = this.__update(value, this.truth, fullPath);
    this.truth = updatedTruth;
    return updatedTruth;
  }


  // recursive function for updating a value in truth
  __update(value, obj, path) {

    // if we've reached the end, bubble up
    if (path.length === 0) {
      return value;
    }

    // update the current object by updating the next one
    let nextPath = path.shift();
    obj[nextPath] = this.__update(value, obj[nextPath], path);
    return obj;
  }

  // Get -----------------------------------------------------------------------
  /*
    - Functions for getting info from truth
  */

  getTruth() {
    return this.truth;
  }
}

export default Ustra;
