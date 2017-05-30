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

        //ajax can take an object
        $.ajax({
            url:'/',
            method: 'post',
            data: dataForServer,
            success:function(responseFromServer){
                
                let htmlTag=``
               for(var i=0; i<responseFromServer.name.length; i++){
                  htmlTag+=`<div id=${i} class='div row'><div class='col-md-6'><p class='name_class' id=${i}>${responseFromServer.name[i]}</p></div><div class='col-md-6'><img src='templates/gbag.jpg' id=${i} class='gbage'></div></div>`
               }

               // const htmlTag=`<p>hello</p>`

                $('#names_list').html(htmlTag)
            }
        })
    })//ajax
    )//form on


    //function to delete
    function deleteNam(){
        var ind=$(this).attr('id')
        $.ajax({
            url:'/delete',
            method:'post',
            data: {index:ind},
            success:function(del_response){
                console.log(`delete response: ${del_response}`)
             let htmlTag=``
               for(var i=0; i<del_response.name.length; i++){
                  htmlTag+=`<div id=${i} class='div row'><div class='col-md-6'><p class='name_class' id=${i}>${del_response.name[i]}</p></div><img src='templates/gbag.jpg' id=${i} class='gbage'></div></div>`
               }
                $('#names_list').html(htmlTag)
            }
    })
}
    //calls delete function
    $('#names_list').on('click','img.gbage', deleteNam)//end of delete
    
    //this function replaces the name clicked with a text box and a plus image
    function updateDisplay(){
        var nam = this.innerHTML
        const index = $(this).attr('id')
        //turn off the event listners so user is forced to edit one at a time
       $('#names_list').off('click','.name_class', updateDisplay)

        //display the new name
        $(`#${index}`).html(`<div id=${index} class='nam_edit row'><div class='col-md-6'><input type='text' id=${index} class='block form-control' placeholder='${nam}'></div><div class='col-md-6'><img src='templates/plus.jpg' id=${index} class='plus_img block'></div></div>`)
        
    }

    ///this block of code calls the function that replaces the name clicked with a text box and a plus image
    $('#names_list').on('click','.name_class', updateDisplay)

    //this block of code updates the array with the new text
    $('#names_list').on('click','.plus_img',function(){
        let nam_ind=$(this).attr('id')
        const newNam = $(`input.block`).val()
        const objToSendToServer={
            name:`${newNam}`,
            index:`${nam_ind}`
        }
        
        $.ajax({
            url:'/update',
            method:'post',
            data: objToSendToServer,
            success:function(update_response){
                console.log(`update_response: ${update_response}`)
             let htmlTag=``
               for(var i=0; i<update_response.name.length; i++){
                  htmlTag+=`<div id=${i} class='div row'><div class='col-md-6'><p class='name_class' id=${i}>${update_response.name[i]}</p></div><img src='templates/gbag.jpg' id=${i} class='gbage'></div></div>`
               }
               //turn on the event listners so user can edit other names
               $('#names_list').on('click','.name_class', updateDisplay) 
                $('#names_list').html(htmlTag)
            } 
        })
    })//end of update 
})//end of on ready      
 