'use strict';

function factory (type, config, load, typed) {

  var SparseMatrix = type.SparseMatrix;

  /**
   * Create a Sparse Matrix. The function creates a new `math.type.Matrix` object from
   * an `Array`. A Matrix has utility functions to manipulate the data in the
   * matrix, like getting the size and getting or setting values in the matrix.
   *
   * Syntax:
   *
   *    math.sparse()               // creates an empty sparse matrix.
   *    math.sparse(data)           // creates a sparse matrix with initial data.
   *
   * Examples:
   *
   *    var m = math.sparse([[1, 2], [3, 4]]);
   *    m.size();                        // Array [2, 2]
   *    m.resize([3, 2], 5);
   *    m.valueOf();                     // Array [[1, 2], [3, 4], [5, 5]]
   *    m.get([1, 0])                    // number 3
   *
   * See also:
   *
   *    bignumber, boolean, complex, index, number, string, unit, matrix
   *
   * @param {Array | Matrix} [data]    A two dimensional array
   *
   * @return {Matrix} The created matrix
   */
  return typed('sparse', {
    '': function () {
      return new SparseMatrix([]);
    },

    'Array | Matrix': function (data) {
      return new SparseMatrix(data);
    }
  });
}

exports.name = 'sparse';
exports.factory = factory;