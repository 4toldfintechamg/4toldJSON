$(document).ready(function(){
    $('.sidenav')
        .sidenav()
        .on('click tap', 'li a', () => {
            $('.sidenav').sidenav('close');
        });
    $('#mdlEntity').modal();

});


$(".menuPagadurias").on("click",function(){
    $.ajax({
        type: "GET",
        url: "/api/entities",
        success: function(returnData){

            var html = returnData.data.map(function (r) {
                return '<li class="collection-item"><div>' + r.name + '<a href="#!" onClick = "editEntity(\''+r._id+'\');" class="secondary-content"><i class="material-icons">send</i></a></div></li>';
            });

            /*
            for(var con in returnData.data)
            {
                alert(returnData.data[con].name);

                //whole html template is sent
                //htmlCom+='<div class="col s12 m12 l4 companyDiv" id="mainCompany"> <div class="card medium" style="height: 350px"><div class="card-image center">  <img  src="'+returnData[con].image_url+'" style="margin-top: 8%;" class="responsive-img wp-post-image center-align" /> </div>  <div class="card-content center" id="details">    <p>  '+returnData[con].excerpt+' </p>  </div><div class="card-action center "><a href="#" style="color:#418BC6">Read more &#8594;</a><br>   <span id="readTime">      <i class="small material-icons">access_time</i>  '+Math.round(returnData[con].word_count/200)+' MIN READ    </span>      </div>   </div> </div>';
            }
            */

            var title = '<li class="collection-header"><h4>Pagadurías</h4></li>';

            $('.mdlEntities').empty();
            $('.mdlEntities').append(title);
            $('.mdlEntities').append(html);

        }

    });

});

$('.sendCloud').on ("click", function(e) {
    e.preventDefault();
    alert("OK");
});

function editEntity(e)
{
    $.ajax({
        type: "GET",
        url: "api/entities/" + e,
        success: function(returnData){
            console.log(returnData.data);
            json = returnData.data;
            editor.set(json)
        }

    });


    $('#mdlEntity').modal('open');
    editor.focus();
    editor.expandAll();


    //editor.setSchema(schema [,schemaRefs])



}

$(".btnGuardar").click(function(){
    if (!noError)
        alert("Errores todavía");
    else {

        //editor.update(json);

        var json1 = editor.get();
       // alert(json1._id);

        $.ajax({
            type: 'PUT',
            url: "api/entities/" + json1._id,
            dataType: 'json',
            data: json1,
            success: function (data, textStatus, xhr) {
                console.log(data);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');
            }
        });


        $('#mdlEntity').modal('close');


    }

});