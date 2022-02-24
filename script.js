$(document).ready(function(){
    $('#contact-form').validate({
        rules:{
            name:{
                required: true,
                maxlength: 30
            },
            place:{
                required: true,
                maxlength: 30,
            },
            email:{
                required: true,
                email: true,
            },
            mobile:{
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10,
            },
            comment:{
                required: true,
                maxlength: 300,
            }
        },
        messages:{
            name:{
                required: 'Enter full name',
            },
            place:{
                required: 'Enter place',
            },
            email:{
                required: 'Enter email address',
                email: 'Enter valid email address',
            },
            mobile:{
                required: 'Enter mobile number',
                number: 'Enter valid mobile number',
                minlength: 'Mobile number have 10 number!',
                maxlength: 'Mobile number have only 10 numbers!'
            },
            comment:{
                required: 'Type your comment',
                maxlength: 'Maximum 300 letters',
            }
        }
    })
})

$("#contact-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbykiJ4u3YLFNDfGZS-MCTp0q07JdJI1X7bdB6csjpZNFScMFSSjDKq5Nv56Q8kh0-gf/exec",
        data:$("#contact-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            $(':input','#contact-form')
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .removeAttr('checked')
                .removeAttr('selected');
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})