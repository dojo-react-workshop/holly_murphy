'use strict'
const http = axios;
//write code to interrupt the submit
$(document).ready(function(){
   
    $('#container').on('submit','form',(function(event){
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
        // $.ajax({
        //     url:'/',
        //     method: 'post',
        //     data: dataForServer,
        //     success:function(responseFromServer){
        //         //console.log(responseFromServer)
               

        //         const htmlTags=`
        //     <h1>Submitted Information</h1>
        //     <p class='label'>Name:</p>
        //     <p class='data'>${responseFromServer.name}</p>
        //     <p class='label'>Dojo Location:</p>
        //     <p class='data'>${responseFromServer.location}</p>
        //     <p class='label'>Favorite Language:</p>
        //     <p class='data'>${responseFromServer.fav_lang}</p>
        //     <p class='label'>Comment:</p>
        //     <p class='data'>${responseFromServer.comment}</p>
        //     <button id="back">Go Back</button>`
        //         //$('#form_contain').html(responseFromServer)
        //         $('#form_contain').html(htmlTags)
        //     }
        // })

        http({
            url:'/',
            method: 'post',
            data:dataForServer
        })
        .then(function(responseFromServer){
              // console.log(responseFromServer)
               

                const htmlTags=`
            <h1>Submitted Information</h1>
            <p class='label'>Name:</p>
            <p class='data'>${responseFromServer.data.name}</p>
            <p class='label'>Dojo Location:</p>
            <p class='data'>${responseFromServer.data.location}</p>
            <p class='label'>Favorite Language:</p>
            <p class='data'>${responseFromServer.data.fav_lang}</p>
            <p class='label'>Comment:</p>
            <p class='data'>${responseFromServer.data.comment}</p>
            <button id="back">Go Back</button>`
                //$('#form_contain').html(responseFromServer)
                $('#form_contain').html(htmlTags)
            })
            .catch(function(err){
                $('#form_contain').prepend("<p class='error'>Please enter a name</p>")
            })
    }))

    $('#form_contain').on('click','#back',function(){
         http({
            url:'/'
        })
        .then(function(){
            $('#form_contain').html(`<form action='/result' method='post'>
                <p>Your Name:</p>
                <input class='form_in' type='text' name='name'>
                <p>Dojo Location:</p>
                <select class='form_in' name='location'>
                    <option value="Mountain View">Mountain View</option>
                    <option value="Milwaukee">Milwaukee</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Chicago">Chicago</option>
                </select>
                <p>Favorite Language:</p>
                <select class='form_in', name='fav_lang'>
                    <option value="JS">JavaScript</option>
                    <option value="Node">Node</option>
                    <option value="Seattle">Java</option>
                    <option value="Chicago">Ruby on Rails</option>
                </select>
                <p>Comment (optional):</p>
                <textarea id='comment' type='text' name='comment' rows:'6'></textarea>
                <button type='submit'>Submit</button>
            
            </form>`)
        })
    })

})