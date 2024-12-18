AOS.init({
	duration: 800,
});
var typed = new Typed('.txt a', {
	strings: ['6 penyakit akibat gaya hidup tidak sehat'],
	typeSpeed: 80,
	backSpeed: 30,
	loop: true,
  	loopCount: Infinity,
});
//PARALLAX
document.querySelectorAll('.scene-parallax').forEach((elem) => {
    
    const from = elem.getAttribute('data-from');
	const x = elem.getAttribute('data-modx');
	const y = elem.getAttribute('data-mody');
	
	basicScroll.create({
		elem: elem,
		from: from,
		to: '1000',
		direct: true,
		props: {
			'--translateX': {
				from: '0',
                to: `${ 20 * x }px`,

            },'--translateY': {
                from: '0',
                to: `${ 20 * y }px`,
             }
           
		}
	}).start();
		
});
var title = [
	"Lima Dasar Hidup Sehat",
	"1. Gaya Hidup Sehat",
	"2. Aktif Mandiri",
	"3. Pengendalian Stress",
	"4. Terus Belajar",
	"5. Hidup Positif",
];
var text = [
	"Lima Dasar Hidup Sehat (LDHS) adalah program nasional yang digagas oleh Kementerian Pemberdayaan Perempuan dan Perlindangan Anak Republik Indonesia sebagai solusi menghadapai penyakit autoimun, program ini salah satunya didasari oleh 80% sistem imun manusia dari pencernaan.",
	"Gaya hidup sehat contohnya tidur cukup 8 jam sehari, menghindari konsumsi daging merah, makanan yang mengandung pengawet dan pemanis, makanan kaleng, mie kuning, mengganti nasi putih menjadi nasi merah, mengonsumsi makanan organik, mengonsumsi air alkali, pemeriksaan kesehatan berkala, dan menjaga kebersihan lingkungan",
	"Aktif mandiri contohnya olahraga ringan minimal 30 menit setiap hari karena penyintas autoimun biasanya gak bisa terlalu lelah dan menanam bahan pangan sendiri",
	"Pengendalian stres contohnya mendekatkan diri pada Tuhan Yang Maha Esa, manajemen waktu yang baik, dan komunikasi positif",
	"Terus belajar contohnya aktif bergabung dengan komunitas pembelajar, ketahui hak dan kewajiban pasien, ketahui informasi obat-obatan yang berkaitan dengan penyakit Autoimun, dan mengelola keuangan dengan baik",
	"Hidup positif contonya menyeimbangkan otak, bekerja cerdas, dan selalu tersenyum serta bahagia setiap saat"
];
var now = 0;
var max = title.length-1;
setText(now);
$('#next').click(function(){
	if(now == max){
		now=0;
	}else{
	now++;
	}
	setText(now);
});
$('#back').click(function(){
	if(now == 0){
		now=max;
	}else{
	now--;
	}
	setText(now);
});
function setText(x){
	$( "#content" ).slideUp( "slow", function() {
		$('#title').text(title[x]);
		check();
	$('#text').text(text[x]);
	});
	$( "#content" ).slideDown( "slow", function() {
	
});
}
function check(){
	if (now == 0){
		$('#btng').show();
	}else{
		$('#btng').hide();
	}
}
var slided = false;
$(window).scroll(function () {
    $('#search-content').each( function(i){
        
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
		if($(window).width() > 762){
			if( bottom_of_window >= bottom_of_element){
				if(slided == false){
					slided = true;
				$( "#search-content" ).slideDown( 1500 ,function() {
					slided = false;
				});
				}
			}else if( bottom_of_window <= bottom_of_element-300){
				if(slided == false){
				$( "#search-content" ).fadeOut( "fast");
				}
			}    
		  }
                
    }); 
});