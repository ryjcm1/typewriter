

const typewriter = (sentence, interval) => {
  let counter = 0;
  
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, counter*interval) 
    
    counter++;
    
    if(counter >= sentence.length ){
      setTimeout(() => {
        console.log("\n");
      }, counter*interval);
    }
        
  }
  
}


const sentence = "hello there from lighthouse labs";

typewriter(sentence, 50)


