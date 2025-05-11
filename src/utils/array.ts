export default function pushOrUpdate<T>(array: T[], item: T, comparer: (a: T, b: T) => boolean) {
  for(let i = 0;i < array.length;i++) {
    if(comparer(array[i], item)) {
      array[i] = item;
      return array;
    }
  }

  array.push(item);
  return array;
}
