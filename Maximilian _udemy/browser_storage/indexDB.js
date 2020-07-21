// indexedDb is basically a in browser database
// first of all we will create an database
const dbRequest = indexedDB.open("myDatabase", 1); // 1 is set as the version of the database created

dbRequest.onsuccess = function (event) {
// see detail in mdn

};
dbRequest.onerror = function (event) {
  console.log("error");
};
