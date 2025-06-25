/** Retrieving field values.
 * It splits the path into individual keys and then traverses
 * the object step by step to find the correct value
 */
export function getFieldValue(item: any, field: string) {
  // eslint-disable-next-line no-useless-escape
  const keys = field.split(/[\.\[\]]/).filter(Boolean);
  let value: unknown = item;

  for (const key of keys) {
    if (value == null) {
      return null;
    }
    value = (value as Record<string, unknown>)[key];
  }

  return value;
}
