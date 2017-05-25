'use strict'

//write code to interrupt the submit
$(document).ready(function(){
   
    $('form').submit(function(event){
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
            url:'/survey_info',
            method: 'post',
            data: dataForServer,
            success:function(responseFromServer){
                //console.log(responseFromServer)
               

                const htmlTags=`
            <h1>Submitted Information</h1>
            <p class='label'>Name:</p>
            <p class='data'>${responseFromServer.name}</p>
            <p class='label'>Dojo Location:</p>
            <p class='data'>${responseFromServer.location}</p>
            <p class='label'>Favorite Language:</p>
            <p class='data'>${responseFromServer.fav_lang}</p>
            <p class='label'>Comment:</p>
            <p class='data'>${responseFromServer.comment}</p>
            <button id="back">Go Back</button>`
                //$('#form_contain').html(responseFromServer)
                $('#form_contain').html(htmlTags)
            }
        })
    })

})