///////�Զ������/////////
var $carouselBox = $('.carousel'),
    $slidesUl = $('.slides-img'),               
    $slidesLi = $('.slides-img > li'),
    $prev = $('.btn.prev'),
    $next = $('.btn.next'),
    $shullingBtn = $('.shulling-btn > li');
    $slidesNum = $slidesLi.length;
    $index = 0;
    $lock = true;

$carouselBox.on('mouseenter', stopTime);    // ����ƶ���ͼƬ���ֲ�ֹͣ
$carouselBox.on('mouseleave', auto);        // ����ƿ���ʼ�ֲ�    

$next.on('click', function(e) {
    e.preventDefault();
    next();
})
$prev.on('click', function(e) {
    e.preventDefault();
    prev();
})

$shullingBtn.on('click', function() {
    play($(this).index());
});
auto();
play();

function next() {
    play(($index+1) % $slidesNum);
}

function prev() {
    play(($slidesNum+$index-1) % $slidesNum);
}

function play($idx) {
    if (!$idx) {
        $idx = 0;
    }
    if(!$lock) return;
    $lock = false;
    $slidesLi.eq($index).fadeOut(500);
    $slidesLi.eq($idx).fadeIn(500, function() {
        $lock = true;
    })
    $index = $idx;
    setShullingBtn();
}

// �Զ��ֲ�
function auto() {
    check = setInterval(next, 3500);
    
}
// ֹͣ�Զ��ֲ�
function stopTime() {
    clearInterval(check);
}

function setShullingBtn() {
    $shullingBtn.removeClass('active')
                .eq($index)
                .addClass('active');
}