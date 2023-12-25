const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: [],
  getLength() {
    return this. res.length
  },
  addLink(value) {
    if(value === undefined) {value = ''}
    this. res.push(`( ${value} )`)
    return this
  },
  removeLink(pos) {
    if ((!(typeof pos == 'number')) || (pos > this.getLength()) || (isNaN(pos)) || (pos < 1) ) {
      this. res = []
      throw new Error('You can\'t remove incorrect link!')
    } else {

      this. res.splice(pos - 1, 1)
      return this
    }
  },
  reverseChain() {
    this. res.reverse()
    return this
  },
  finishChain() {
   let chain = this.res.join('~~')
   this.res = []
   return chain
  }
  };

module.exports = {
  chainMaker
};
