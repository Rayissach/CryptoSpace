<div id='errors' style='
background: #c00;
color: #fff;
display: none;
margin: -20px -20px 20px;
padding: 20px;
white-space:pre-wrap;
'></div>
<div id='root'></div>
<script>
window.addEventListener('mousedown', function(e)){
    document.body.classList.add('mouse-navigation');
    document.body.classList.remove('kbd-navigation')
});
window.addEventlistenter('keydown', function(e){
    if (e.keycode == 9) {
        document.body.classList.add('kbd-navigation');
        document.body.classList.remove('mouse-navigation')
    }
})
</script>