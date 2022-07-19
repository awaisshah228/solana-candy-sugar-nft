const metadata= require('./metadata.json')
var fs= require('fs')

// console.log(metadata)
for(i=0;i<=4;i++){
    console.log(metadata[i])
    let properties={
        properties: {
          files: [
            {
              uri: `${i}.png`,
              type: "image/png"
            }
          ]
        }
      }
    metadata[i]["symbol"]="NBA";
    metadata[i]["properties"]=properties.properties;
    fs.writeFile(`../assets/${i}.json`,JSON.stringify(metadata[i]),err=>{
        if (err) 
        console.log(err)

    })
}