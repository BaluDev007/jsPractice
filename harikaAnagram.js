strs = ["eat","tea","tan","ate","nat","bat"]
function sortString(str) {
  return str.split("").sort().join("");
}
arr=[]
index=[]
for (let p of strs) {
    if(!index.includes(strs.indexOf(p))){
        myarr = [p];
        index.push(strs.indexOf(p))
  
  for (let q of strs) {
    if (p !== q && !index.includes(strs.indexOf(q))) {
      if (sortString(p) === sortString(q)) {
        index.push(strs.indexOf(q))
        myarr.push(q);
        console.log(index)
      }
    }
  }

  arr.push(myarr)

}
}

  console.log(arr)
function fun(s,t){

                  let hashObj = {};
              for (let i = 0; i < s.length; i++) {
                if (hashObj[s[i]] !== undefined) {
                  hashObj[s[i]] += 1;
                } else {
                  hashObj[s[i]] = 1;
                }
              }
              
              let hashObj2 = {};
              for (let i = 0; i < t.length; i++) {
                if (hashObj2[t[i]] !== undefined) {
                  hashObj2[t[i]] += 1;
                } else {
                  hashObj2[t[i]] = 1;
                }
              }
              
              // Compare the objects
              function objectsAreEqual(obj1, obj2) {
                const keys1 = Object.keys(obj1);
                const keys2 = Object.keys(obj2);
              
                if (keys1.length !== keys2.length) {
                  return false;
                }
              
                for (const key of keys1) {
                  if (obj1[key] !== obj2[key]) {
                    return false;
                  }
                }
              
                return true;
              }
}