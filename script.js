document.getElementById('yesBtn').addEventListener('mouseenter', function() {
    moveButtonRandomly(this);
});

document.getElementById('yesBtn').addEventListener('click', function() {
    moveButtonRandomly(this);
});
document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('main').innerHTML = "<br><br><br>Như vậy là bạn cùng gia đinh đã ấm no đong đầy<br><br>Nhân dịp năm mới, Chúc bạn cùng gia đình nhiều sức khỏe, gặp may mắn trong cuộc sống, và thuận lợi trong công việc. <h2>CHÚC MỪNG NĂM MỚI</h2><h3>Chưa hết bạn hãy lướt xuống dưới!</h3>";
    document.getElementById("btnID").style.display = "inline-block";
});
function moveButtonRandomly(button) {
    // Define specific positions for the button to jump to
    const positions = [
        { x: 20, y: 20 },
        { x: window.innerWidth - button.clientWidth - 20, y: 20 },
        { x: window.innerWidth - button.clientWidth - 20, y: window.innerHeight - button.clientHeight - 20 },
        { x: 20, y: window.innerHeight - button.clientHeight - 20 }
    ];

    // Choose a random position from the defined positions
    const randomIndex = Math.floor(Math.random() * positions.length);
    const newPosition = positions[randomIndex];

    button.style.position = 'fixed';
    button.style.left = newPosition.x + 'px';
    button.style.top = newPosition.y + 'px';
}
function show() {
    let image = document.getElementById("image");
    image.src = "anhdep.jpg";
    document.getElementById("btnID").style.display = "none";
    // Tự động cuộn trang xuống ảnh cuối cùng
    document.getElementById("image").scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    if (audio.paused) {
        audio.play();
    }
});
