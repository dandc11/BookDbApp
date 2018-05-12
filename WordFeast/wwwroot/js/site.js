
// onload   
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
     });

    var div = document.getElementById('isbn');
    var isbn = div.innerText; //use innerText rather than innerHTML for getting text w/o escape sequences

    //request book based on isbn
    $.ajax({
        dataType: 'json',
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
        success: showBook
    });
    //put the book info in the appropriate spots
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