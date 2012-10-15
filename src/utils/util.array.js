/*
 * Copyright (c) 2012  Capgemini Technology Services (hereinafter “Capgemini”)
 *
 * License/Terms of Use
 *
 * Permission is hereby granted, free of charge and for the term of intellectual property rights on the Software, to any
 * person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify
 * and propagate free of charge, anywhere in the world, all or part of the Software subject to the following mandatory conditions:
 *
 *   •    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 *  Any failure to comply with the above shall automatically terminate the license and be construed as a breach of these
 *  Terms of Use causing significant harm to Capgemini.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 *  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 *  OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 *  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  Except as contained in this notice, the name of Capgemini shall not be used in advertising or otherwise to promote
 *  the use or other dealings in this Software without prior written authorization from Capgemini.
 *
 *  These Terms of Use are subject to French law.
 */

/**
 * Some utils methods extending the Array prototype
 *
 * @class __UTIL_ARRAY__
 * @module Util
 * @static
 * @author Gwennael Buchet (gwennael.buchet@capgemini.com)
 */

/**
 * Remove all the occurrences of the item from the array
 * @method Array.prototype.without
 * @param item
 */
Array.prototype.without = function(item) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == item) {
			this.splice(i, 1);
			//break;
		}
	}
};

/**
 * Empties the array
 * @method Array.prototype.clear
 */
Array.prototype.clear = function() {
	this.length = 0;
};

/**
 * Return a clone of this array
 * @method Array.prototype.clone
 * @return {Array}
 */
Array.prototype.clone = function() {
	return this.slice(0);
}

/**
 * Checks whether the specified elements exists in the array or not
 * @method Array.prototype.contains
 * @param item
 * @return {Boolean}
 */
Array.prototype.contains = function(item) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == item) {
			return true;
		}
	}
	return false;
};

/**
 *  Removes doubles elements from the array
 *  @method Array.prototype.unique
 *  @return {Array}
 */
Array.prototype.unique = function() {
	var tmp = [], i;
	this.sort();
	for (i = 0; i < this.length; i++) {
		if (this[i] !== this[i + 1]) {
			tmp[tmp.length] = this[i];
		}
	}

	return tmp;
}
