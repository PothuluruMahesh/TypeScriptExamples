console.log("------simple array---------");
var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

//single statement array
console.log("------array in single statement---------");
var nums:number[] = [1,2,3,3] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);

//array Object create
console.log("------array with object---------");
var arr_names:number[] = new Array(4)  

for(var i = 0;i<arr_names.length;i++) 
{ 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}

//Array with constructor type
console.log("------array with constructor---------");
var names:string[] = new Array("Mahesh","naresh","Swathi","?????") 

for(var i = 0;i<names.length;i++) 
{ 
   console.log(names[i]) 
}

//Array Travesing
console.log("------ array travesing---------");
var nums = [1001, 1002, 1003, 1004];

for (var j in nums) 
{
   console.log(nums[j]);
}