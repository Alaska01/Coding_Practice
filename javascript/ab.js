let a = [25, 2, 3, 57, 38, 41]

function solution1(a) {
    let cat =a.join('').split('');
     let bat =   cat.reduce((tally, num)=>{
            if(!tally[num]){
                tally[num] = 1
            } else{
                tally[num] = tally[num] + 1;
            }
            return tally;
        }, {})
        
    dat = Object.keys(bat).map((key)=>[Number(key), bat[key]])
      
    let eat = dat.map((element)=>{
        return element[1]
    })
    
      let fat =eat.sort().slice(-1)[0]
    let initialArr= [[], []]
      let kat = dat.reduce(function(prev, cur, index, arr){
        if(cur[1]===fat){
            return initialArr[0].push(cur[0])
        } else{
            return initialArr[1].push(0)
        }
      }, initialArr)
      

      return initialArr[0].sort();
    }

    console.log(solution1(a))