function paging(limit, totRec, offset, callback) {
    if (totRec > limit) {
        $('ul#paging').empty();
        var pages = Math.ceil(totRec / limit);
        var first = "<li class='paginate_button first' onClick='" + callback + "(0)'><a><<</a></li>";
        $('ul#paging').append(first);

        var pr = parseInt(offset - limit);
        if (pr < 0) {
            pr = 0;
        }

        var previous = "<li class='paginate_button previous' onClick='" + callback + "(" + pr + ")'><a><</a></li>";
        $('ul#paging').append(previous);

        for (var x = 1; x <= pages; x++) {
            strt = parseInt(x - 1) * limit;
            var noLi = "<li title='" + x + "' id='selected" + strt + "' class='paginate_button paginate_no' onClick='" + callback + "(" + strt + ")'><a>" + x + "</a></li>";
            $('ul#paging').append(noLi);
        }

        var nx = parseInt(offset + limit);
        if (nx >= strt) {
            nx = strt;
        }

        var next = "<li class='paginate_button next' onClick='" + callback + "(" + nx + ")'><a>></a></li>";
        $('ul#paging').append(next);

        var last = "<li class='paginate_button last' onClick='" + callback + "(" + strt + ")'><a>>></a></li>";
        $('ul#paging').append(last);

        $('ul#paging li#selected' + offset).addClass('selected');
        $('ul#paging li#selected' + offset).removeAttr('onclick');
        $('ul#paging li#selected' + offset).siblings().removeClass('selected');

        if ($('ul#paging li#selected' + offset).attr('title') == pages) {
            $('li.next, li.last').remove();
        } else if ($('ul#paging li#selected' + offset).attr('title') == 1) {
            $('li.previous, li.first').remove();
        }

        if (eval($('li.paginate_no.selected').index() < 5)) {
            $('li.paginate_no:gt(5)').each(function(i, o) {
                if (i < 3) {
                    $(o).replaceWith('.');
                } else {
                    $(o).remove();
                }
            });
        } else if (eval($('li.paginate_no').length + 1 - $('li.paginate_no.selected').index() < 4)) {
            $('li.paginate_no:lt(' + eval($('li.paginate_no').length - 5) + ')').each(function(i, o) {
                if (i < 3) {
                    $(o).replaceWith('.');
                } else {
                    $(o).remove();
                }
            });
        } else {
            $('li.selected').nextAll('li.paginate_no:gt(3)').each(function(i, o) {
                if (i < 1) {
                    $(o).replaceWith('...');
                } else {
                    $(o).remove();
                }
            });

            $('li.selected').prevAll('li.paginate_no:gt(3)').each(function(i, o) {
                if (i < 1) {
                    $(o).replaceWith('...');
                } else {
                    $(o).remove();
                }
            });
        }
    } else {
        $('ul#paging').empty();
    }
}
