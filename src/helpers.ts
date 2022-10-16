export type User = {
  username: string;
  id: number;
}

export const generateUsers = (count: number) =>{
const results: User[] = [];

for(let i =0; i < count; i++){
  results.push({
    username: `User ${i}`,
    id: i,
  }); 
}

return results;
}

export const toUpperCase = (word: String) => {
  return word.toLocaleUpperCase();
}