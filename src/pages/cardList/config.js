import database from "../../assets/vocabulary/database";
import dataStructure from "../../assets/vocabulary/data-structure";
import entryLearn from "../../assets/vocabulary/entry-learn";
import website from "../../assets/vocabulary/website";

const dataMap = {
  database,
  dataStructure,
  entryLearn,
  website,
};

function getCardList(type) {
  return dataMap[type];
}

export { getCardList };
