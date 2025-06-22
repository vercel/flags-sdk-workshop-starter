import { xxHash32 } from "js-xxhash";

/**
 * Takes a string and puts it into a bucket.
 *
 * Typically the key consists of the experiment name and the stableId, such that
 * every experiment has a different outcome. If it would depend on the stableId only,
 * then a user would consistently get assigned the same bucket for all experiments,
 * which we need to avoid.
 *
 * @param key - The key to hash.
 * @param buckets - The number of buckets to use.
 * @returns The determined bucket number.
 */
export function bucket(key: string, buckets = 2) {
  const hashNum = xxHash32(key);
  return hashNum % buckets;
}
