const arr = [
    {name: "bhaskar", age:26},
    {name:"pranav", age:20}
]

const getData = ()=>{
    setTimeout(()=>{
        let output = ""
        data.forEach((data, index)=>{
            output+= `<li>${data.name}</li>`
         })
         document.body.innerHTML = output
    },1000)
}

const createData = ()=>{
    setTimeout(()=>{}, 2000)
}

getData()