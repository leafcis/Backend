setTimeout(() => {
    co
    nsole.log('timeout');
}, 10)
setImmediate(()=> {
    console.log('immediate');
})
process.nextTick(()=> {
    console.log('nextTick');
})
Promise.resolve().then(()=>console.log('promise'))