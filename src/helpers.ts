export type User = {
  username: String;
  id: Number;
}

export const generateUsers = (count: number) =>{
const results: User[] = [];

for(let i =0; i < count; i++){
  results.push({
    username: `User ${i}`,
    id: count,
  }); 
}

return results;
}

export const toUpperCase = (word: String) => {
  return word.toLocaleUpperCase();
}