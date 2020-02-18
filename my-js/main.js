/*console.log('it works')

$(document).ready(function () {
    $('.submit').click(function (event){
        event.preventDefault()
        console.log('Clicked button')

        var email = $('.email').val()
        var subject = $('.frist name').val()
        var subjectes = $('.last name').val()
        var message = $('.message').val()
        var statusElm = $('.status')

        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else{
            statusElm.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2) {
            statusElm.append('<div>subject is valid</div>')
        } else {
            statusElm.append('<div>subject is not valid </div>')
        }

        if(subjectes.length >= 2) {
            statusElm.append('<div>subject is valid</div>')
        } else {
            statusElm.append('<div>subject is not valid </div>')
        }

        if(message.length > 10) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            statusElm.append('<div>Message is not valid</div>')
        }

    })
})*/