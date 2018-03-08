const input = $(".search-input");
input.keydown(function (event) {
    if (event.keyCode == 13) {
        event.preventDefault()
        const searchedUser = input.val();



        const request = $.ajax({
            url: "https://api.github.com/search/users?q=" + searchedUser,
            method: "GET"
        });

        request.done(function (msg) {
            let sliced = msg.items.slice(0, 6);
            console.log(sliced)
            msg.items.forEach(element => {
                
                $('div').append('<img src="' + element.avatar_url + '">' )

                //  + login;
            });


            // const div = $('div');
            // div.html("<p>" + sliced + "</p>")
        })
    }
})