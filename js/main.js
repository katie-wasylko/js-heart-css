
var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $h2 = $('h2');
var $pMain = $('p:first-child');
var $mainList = $('main ul');
var $img = $('img');
var $firstList = $('ul:first-child');
var $lastList = $('main li:last-child');
var $dl = $('dl');
var $dt = $('dt');

$header.addClass('masthead');
$h1.addClass('logo');
$h1.removeClass('big-heading');
$main.addClass('wrapper');
$pMain.addClass('intro');
$h2.addClass('slug-head');
$mainList.addClass('slug-list');
$img.addClass('slug-img');
$firstList.addClass('slug-list-first');
$lastList.addClass('slug-list-last');
$dl.addClass('classification');
$dt.removeClass('big-label');

$lastList.show();
