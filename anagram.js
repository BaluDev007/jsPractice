let ipStrs = ["eat", "tan", "tea", "ate", "bat", "nat"] 
let capturedIndex = []
let opStr = []

for(let i=0; i < ipStrs.length; i++){
    let subOpstr = []
    if(!capturedIndex.includes(i)){
        capturedIndex.push(i)
        subOpstr.push(ipStrs[i])


    for(let j = i + 1; j < ipStrs.length; j++){
        if( areAnagrams(ipStrs[i],ipStrs[j]) && !capturedIndex.includes(j)){
            // add index to cap and add j item to subOpstr
            subOpstr.push(ipStrs[j])
            capturedIndex.push(j)
        }
    }
    opStr.push(subOpstr)
}
}

console.log(opStr)


function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Check if the lengths are different
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
  
    // Create character frequency maps for both strings
    const charFrequency1 = {};
    const charFrequency2 = {};
  
    for (const char of cleanStr1) {
      charFrequency1[char] = (charFrequency1[char] || 0) + 1;
    }
  
    for (const char of cleanStr2) {
      charFrequency2[char] = (charFrequency2[char] || 0) + 1;
    }
  
    // Compare character frequency maps
    for (const char in charFrequency1) {
      if (charFrequency1[char] !== charFrequency2[char]) {
        return false;
      }
    }
  
    return true;
  }
 















