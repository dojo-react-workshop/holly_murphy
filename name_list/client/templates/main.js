'use strict'

//write code to interrupt the submit
$(document).ready(function(){
   
    $(document).on('submit','form', (function(event){
       // console.log(event)
        event.preventDefault();
       
        //capture the values from the form
        //jquery allows us to grab all the attributes from the form in a string
            //when jquery event occurs and callback occurs
                //assigns this key word as well as allows us to use event

        const dataForServer = $(this).serialize()

        //use ajax (async javascript request) to send http request to the server
        // $.post('./survey_info',dataForServer,function(){
        //     console.log('posted')
        // })

        //ajax can take an object
        $.ajax({
            url:'/',
            method: 'post',
            data: dataForServer,
            success:function(responseFromServer){
                console.log(responseFromServer)
                console.log(responseFromServer.name.length)
                
                let htmlTag=``
               for(var i=0; i<responseFromServer.name.length; i++){
                  htmlTag+=`<p id=${i}>${responseFromServer.name[i]}</p><img src='templates/gbag.jpg' id=${i}>`
               }

               // const htmlTag=`<p>hello</p>`

                $('#names_list').html(htmlTag)
            }
        })
    })//ajax
    )//form on

    $('#names_list').on('click','img',function(event){
        //post and remove from array (have to send the array)
        var ind=$(this).attr('id')
        console.log(`index: ${ind} typeof: ${typeof ind}`)
        $.ajax({
            url:'/delete',
            method:'post',
            data: ind,
            success:function(del_response){
                console.log(`delete response: ${del_response}`)
            }
        })
    })

})//on ready