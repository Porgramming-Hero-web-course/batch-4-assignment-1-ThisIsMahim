const countWordOccurrences=(sentence:string,word:string):number=>{
    const words:string[]= sentence.toLowerCase().split(' ')
    let wordCount=0
    words.map(wordInSentence=>{
        if(wordInSentence==word)
            wordCount++;
    })
    return wordCount
}
