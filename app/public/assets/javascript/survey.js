var name;
var photo;
var answers = [];
var valid = false;

$('#sendAnswers').on('click', function(event) {
    
    event.preventDefault();



    name = $('#name').val().trim();
    photo = $('#photo').val().trim();

    for(var i=0; i<10; i++) {

        var id = '#' + i.toString();

        answers[i] = $(id).val();
        console.log(answers[i]);
        answers[i] = parseInt(answers[i]);
    }

    validateForm();

    if(valid == true) {

        var newUser = new userConstructor(name, photo, answers);

        console.log(newUser);

        $.post("/api/friends", newUser,
            function(data) {

                console.log(data);
                $('#match-photo').attr('src', data.photo);
                $('#match-name').text(data.name);

                $('#myModal').modal('show');

            
            });
    }else{
        alert('Please Complete All Questions.');
    }
});
 
    
function validateForm() {

       valid = true;
    console.log(answers);

    if(name == ''){
        valid = false;
    }

    if(photo == '') {
        valid = false
    }

    
    if(answers.length > 0){
        for(var i=0; i<answers.length;i++){
        
            console.log('hello');

            if(isNaN(answers[i] == true)){
                valid = false;
                
            }
        }
    }else{
        valid = false;
    }

    console.log(valid);
}


function userConstructor(name, photo, answers) {

    this.name = name;
    this.photo = photo;
    this.scores = answers;

};