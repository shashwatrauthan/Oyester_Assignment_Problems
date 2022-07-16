function frequency(arr, n)
{
    // Insert all elements in hash.
    var hash = new Map();
    for (var i = 0; i < n; i++)
    {
        if(hash.has(arr[i]))
            hash.set(arr[i], hash.get(arr[i])+1)
        else
            hash.set(arr[i], 1);
    }
  
  
    var min_count = n+1, res1 = -1 , max_count=0, res2=-1;
  
    hash.forEach((value, key) => {
          
        if( (min_count== value|| max_count==value) && res1< key){
             res1=res1;      
        }
        else{
            if (min_count >= value) {
                res1 = key;
                min_count = value;
            }
            if(max_count<=value){
                res2=key;
                max_count=value;
            }    
        }
        
    });
  
    return [res2,res1];
}
  
// driver program
var arr =  [2,2,2,2,4,4,4,4,5];
var n = arr.length;
document.write( `[${frequency(arr, n)}]`);
  