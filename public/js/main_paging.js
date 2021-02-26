

function clearAll() {
    $("#industry").val($("#industry option:first").val());
    $("#location").val($("#industry option:first").val());
    $("#size").val($("#industry option:first").val());
    $("#use_case").val($("#industry option:first").val());

    var htmlCom='';
    //start of the ajax, it calls our api in the index.js file
    $.ajax({
        type: "GET",
        url: "/api/getAll",
        success: function(returnData){

            for(var con in returnData)
            {
                //whole html template is sent
                htmlCom+='<div class="col s12 m12 l4 companyDiv" id="mainCompany"> <div class="card medium" style="height: 350px"><div class="card-image center">  <img  src="'+returnData[con].image_url+'" style="margin-top: 8%;" class="responsive-img wp-post-image center-align" /> </div>  <div class="card-content center" id="details">    <p>  '+returnData[con].excerpt+' </p>  </div><div class="card-action center "><a href="#" style="color:#418BC6">Read more &#8594;</a><br>   <span id="readTime">      <i class="small material-icons">access_time</i>  '+Math.round(returnData[con].word_count/200)+' MIN READ    </span>      </div>   </div> </div>';
            }
            $('.mainCompany').empty();
            $('.mainCompany').append(htmlCom);
            pagiNate();

        }

    });
}

// This is the filter function

function filter() {
    var  industry=document.getElementById("industry").value
    var  location=document.getElementById("location").value
    var  size=document.getElementById("size").value
    var  useCase=document.getElementById("use_case").value
    var htmlCom='';
    $.ajax({
        type: "GET",
        url: "/api/getByFilter",
        data:{location:location,industry:industry,size:size,useCase:useCase},
        success: function(returnData){

            for(var con in returnData)
            {
                htmlCom+='<div class="col s12 m12 l4 companyDiv" id="mainCompany"> <div class="card medium" style="height: 350px"><div class="card-image center">  <img  src="'+returnData[con].image_url+'" style="margin-top: 8%;" class="responsive-img wp-post-image center-align" /> </div>  <div class="card-content center" id="details">    <p>  '+returnData[con].excerpt+' </p>  </div><div class="card-action center "><a href="#" style="color:#418BC6">Read more &#8594;</a><br>   <span id="readTime">      <i class="small material-icons">access_time</i>  '+Math.round(returnData[con].word_count/200)+' MIN READ    </span>      </div>   </div> </div>';
            }
            $('.mainCompany').empty();
            $('.mainCompany').append(htmlCom);
            pagiNate();
        }
    });

}

// This is the pagination

function pagiNate() {

    var items = $(".mainCompany .companyDiv"); //parent div and the repeating div
    var numItems = items.length; //number of items in the json
    var perPage = 6; // number of items to show in the page

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });

    //This is a filtration part for the dublicate details in the SELECT
    var usedNames = {};
    $("select[name='industry'] > option").each(function () {
        if(usedNames[this.text]) {
            $(this).remove();
        } else {
            usedNames[this.text] = this.value;
        }
    });
}

$(document).ready(this.pagiNate);