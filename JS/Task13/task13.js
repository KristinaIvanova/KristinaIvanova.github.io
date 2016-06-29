//jQuery Overview
//Task 1
function overview(element, count) {

    try {
        if (typeof count === 'number' && count < 1) {
            throw new Error('Error!');
        }
         if (!isNaN(parseFloat(count)) == 'number' || typeof(count) !== 'number') {
            throw new Error('NaN!');

        }
        if (count == undefined) {
            throw new Error('Count is missing!');
        }

    } catch (err) {
        console.log(err);
    } 
    var $li = $('<li/>')
        .addClass("list-item"),
        $ul = $('<ul/>')
        .addClass("items-list"),
        i,
        $selectedEl = $(element);

    for (i = 0; i < count; i++) {
        $newLi = $li.clone(true);
        $newLi.html('List item ' + i);
        $ul.append($newLi);
    }
    $selectedEl.append($ul);
}
overview("#select", 7); 
overview("#select", "345abc");
overview("#select", {});
overview("#select", []);

//Task 2

function overviewJs(selector) {

    var $button = $(".button").text("Hide"),
        $content = $(".content");

    $button.click(function() {
        var $this = $(this);
       $this.nextAll(".content").first().toggleClass("hidden"); 
if ($content.hasClass("hidden")){
            $this.text("Show");
        }
        else{
            $this.text("Hide");
        }
    });
}

overviewJs("#selector"); 
