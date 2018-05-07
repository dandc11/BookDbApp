
// onload   var isbn = $('#isbn').text();  
$(document).ready(function () {

    var div = document.getElementById('isbn')
    var isbn = div.innerText;


    $.ajax({
        dataType: 'json',
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn, //hitting the isbn directly works; something about getting the div changes it
        success: showBook
    });

    function showBook(response) {
        $.each(response.items, function (i, item) {

            var cover = item.volumeInfo.imageLinks.thumbnail,
                pageCount = item.volumeInfo.pageCount,
                publisher = item.volumeInfo.publisher,
                publishedDate = item.volumeInfo.publishedDate,
                description = item.volumeInfo.description;

            $('.cover').attr('src', cover);
            $('.pageCount').text(pageCount + ' pages');
            $('.publisher').text('Published by: ' + publisher);
            $('.publishedDate').text('Published on ' + publishedDate);
            $('.description').text(description);
        });
    }
});