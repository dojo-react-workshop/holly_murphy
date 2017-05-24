//learnyounode verify program.js
//to run: node program.js

// var sum =0
// for(var x=2; x<process.argv.length; x++){
    
//     sum+=(+process.argv[x])   
// }
// console.log(`${sum}`)

//exercise 3

//   Write a program that uses a single synchronous filesystem operation to
//   read a file and print the number of newlines (\n) it contains to the
//   console (stdout), similar to running cat file | wc -l.

//   The full path to the file to read will be provided as the first
//   command-line argument (i.e., process.argv[2]). You do not need to make
//   your own test file.
// var fs=require('fs')

// var file = process.argv[2]
// var contents = fs.readFileSync(file).toString()
// var arr_of_contents = contents.split('\n')
// var count=0
// for(var x=0; x<arr_of_contents.length; x++){
//     count+=1
// }
// console.log(count-1)

//exercise 4
// var fs=require('fs')
// var file = process.argv[2]

// fs.readFile(file,'utf8',(err,data)=>{
//     var content=data.split('\n')
//     console.log(content.length-1)
// })

//  ## FILTERED LS (Exercise 5 of 13)

//   Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a directory
//   name as the first argument to your program (e.g. '/path/to/dir/') and a
//   file extension to filter by as the second argument.

//   For example, if you get 'txt' as the second argument then you will need to
//   filter the list to only files that end with .txt. Note that the second
//   argument will not come prefixed with a '.'.

//   Keep in mind that the first arguments of your program are not the first
//   values of the process.argv array, as the first two values are reserved for
//   system info by Node.

//   The list of files should be printed to the console, one file per line. You
//   must use asynchronous I/O.
// var fs=require('fs')
// var directory = process.argv[2]
// var fileExt = process.argv[3]

// fs.readdir(directory,'utf8',(err, files)=>{//files=array of the names of the files exculding .
//     for(var x=0; x<files.length; x++){
//         if(files[x].includes(fileExt) && files[x].indexOf(fileExt)!=0){
//             console.log(files[x])
//         }
//     }
// })




// ## MAKE IT MODULAR (Exercise 6 of 13)
// var fs=require('fs')
// var dir=process.argv[2]
// var ext=process.argv[3]
// var work=require('./module')


// work(dir,ext,(err,list)=>{
//     if(err){
//         console.log('informative message')
//     }else{
//         list.forEach((filename)=>{
//             console.log(filename)
//         })
//     }
// })





//  ## HTTP CLIENT (Exercise 7 of 13)

//   Write a program that performs an HTTP GET request to a URL provided to you
//   as the first command-line argument. Write the String contents of each
//   "data" event from the response to a new line on the console (stdout).

// var http = require('http')
// var url = process.argv[2]

// http.get(url,(response)=>{
//     response.setEncoding('utf8')
//     response.on('data',console.log)
//     response.on('error',console.error)
// })






//  ## HTTP COLLECT (Exercise 8 of 13)

//   Write a program that performs an HTTP GET request to a URL provided to you
//   as the first command-line argument. Collect all data from the server (not
//   just the first "data" event) and then write two lines to the console
//   (stdout).

//   The first line you write should just be an integer representing the number
//   of characters received from the server. The second line should contain the
//   complete String of characters sent by the server.
// const fs = require('fs')
// const http = require('http')
// let url = process.argv[2]

// http.get(url,(res)=>{
// total = ""
// res.setEncoding("utf8")
// res.on('data',(data)=>{
// total+=data
// })
// res.on('end',()=>{
// console.log(total.length)
// console.log(total)
// })
// }) 





//  ## JUGGLING ASYNC (Exercise 9 of 13)

//   This problem is the same as the previous problem (HTTP COLLECT) in that
//   you need to use http.get(). However, this time you will be provided with
//   three URLs as the first three command-line arguments.

//   You must collect the complete content provided to you by each of the URLs
//   and print it to the console (stdout). You don't need to print out the
//   length, just the data as a String; one line per URL. The catch is that you
//   must print them out in the same order as the URLs are provided to you as
//   command-line arguments.
// const fs = require('fs')
// const http = require('http')
// let url_1 = process.argv[2]
// let url_2 = process.argv[3]
// let url_3 = process.argv[4]

// //block one
// http.get(url_1,(res)=>{
//     var total = ""
//     res.setEncoding("utf8")
//     res.on('data',(data)=>{
//         total+=data
//     })
//     res.on('end',()=>{
//         console.log(total)
//     })
//     http.get(url_2,(res_2)=>{
//         var total_2=""
//         res_2.setEncoding("utf8")
//         res_2.on('data',(data_2)=>{
//             total_2+=data_2
//         })
//         res_2.on('end',()=>{
//             console.log(total_2)
//         })
//         http.get(url_3,(res_3)=>{
//             var total_3=""
//             res_3.setEncoding("utf8")
//             res_3.on('data',(data_3)=>{
//                 total_3+=data_3
//             })
//             res_3.on('end',()=>{
//                 console.log(total_3)
//             })
//         })
//     })
// }) 



//  ## TIME SERVER (Exercise 10 of 13)

//   Write a TCP time server!

//   Your server should listen to TCP connections on the port provided by the
//   first argument to your program. For each connection you must write the
//   current date & 24 hour time in the format:

//      "YYYY-MM-DD hh:mm"

//   followed by a newline character. Month, day, hour and minute must be
//   zero-filled to 2 integers. For example:

//      "2013-07-06 17:42"

//   After sending the string, close the connection.




