//memoization is done to avoid performing functions with same results to run again and again, this saves processing time

const memoizeFunction = ((fn)=>{
    const cache = {}
    return (...args)=>{
        const argsToString = JSON.stringify(args)
        if(argsToString in cache){
            console.log('fetching from cache for args '+{argsToString});
            return cache(argsToString)
        }
        else{
            console.log('computing values for args' + argsToString)
            const result = fn.apply(this,args)
            cache[argsToString] = result
            return result
        }

    }
})

addThreenums = (a,b,c)=>{return a+b+c}
add = memoizeFunction(addThreenums)
console.log(add(1,2,3));





