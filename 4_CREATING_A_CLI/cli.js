const fs=require("fs");
const command=require("commander");
const program=new command();

program
    .name('File-System')
    .description('Searching a File')
    .version('0.1.0')

program
    .command('file')
    .argument('<filename>', 'filename')
    .option('-f, --first', "Firstword in a file")
    .option('-s, --search', "Searching a word in a file")
    .option('-e, --end', "End word in a file")
    .action((filename,options)=>{
        let x= fs.readFile(filename,"utf-8",async (err,data)=>{
            if(data){
                if(options==-f){
                    

                }
            }
        })
    })
    
    