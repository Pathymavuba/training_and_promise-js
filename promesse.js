//les promesses 
//pending
//success   
//failure


/**
 * 
 * @param {string} file file to download
 * @return 
 */
function loaderscript (file) {
 
    const promise = new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        script.src = file;
        document.head.append(script)
        script.onload  = ()=> resolve('le fichier est ' + file + 'bien chargé')
        script.onerror = () => reject(new Error('le fichier nest pas chargé'))
    })
    return promise
}

const promise1 = loaderscript('demo.js')
const promise2 = loaderscript('bloc.js')

// console.log('pending',promise2)

// promise2
// .then((res)=>console.log("ok",res))
// .catch((err)=>console.log("error",err))

async function test (){
   try {
    console.log(await promise2)
    
   } catch (error) {
    console.log(error,"errorrrrrr")
   }
}

test()