/**
 * Utility function collections
 *
 * @author Andy Chen
 */

/**
 * Sleep for a specified time, in miliseconds
 *
 * @ms {number} | sleep time
 * @return {Promise} | delayed promise
 */
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
