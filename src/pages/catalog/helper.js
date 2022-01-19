// import { abbreviateNumber } from "@utils/number";
/**
 * @param {Array} rawData
 * @returns
 */
function transRawToStructure(rawData) {
  if (!rawData || !rawData.length) return [];

  const unCatalog = rawData.splice(0, 1);

  rawData.sort((a, b) => a.id - b.id); // id 从小到大排序

  let treeMap = {
    "-1": { title: "", children: [] },
  };

  treeMap = rawData.reduce(
    (pre, curr) => ({ ...pre, [curr.id]: curr }),
    treeMap
  );

  rawData.forEach((node) => {
    !treeMap[node.parentId] && (treeMap[node.parentId] = {});
    !treeMap[node.parentId].children && (treeMap[node.parentId].children = []);

    treeMap[node.parentId].children.push(node.id);
  });

  return [unCatalog, treeMap, rawData];
}

export { transRawToStructure };
