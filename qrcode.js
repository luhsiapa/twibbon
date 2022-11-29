const main = document.getElementById('root');

const externalHTML = `
<section id="header">
<div class="header wrap">
<span class="header left-side">
<a class="site home" href="/">
<span class="site name">LUHSIAPA.TK</span>
</a>
</span>
<span class="header right-side"></span>
</div>
</section>

<section id="content">
<div class="article-container">
<section class="article header">
<h1 class="article title">QR Code Generator</h1>
<p class="article date"></p>
</section>

<article class="article markdown-body">
<section>

<p>Generator Kode QR Online Gratis untuk membuat Kode QR Anda sendiri.</p><br>

<p>Pembuat kode QR yang mudah. buat kode QR dalam dua klik: salin tautan Anda, hasilkan QR, dan unduh!</p><br>

<p>Klik kanan dan save untuk PC atau sentuh dan tahan lalu unduh Qr Code untuk smartphone jika link 'Unduh' tidak muncul.</p><br>

<p><strong>Masukan text atau url:</strong></p><br>

<p>
<form>
<input class="qr" type="text" placeholder="Masukkan Teks Atau URL" />
<div class="buttons-ctr">
<button class="gen-btn wink" type="button">GENERATE</button>
</div>
</form>
</p><br>

<p>
<div class="qr-code hidden">
<img data-tooltip="Sentuh dan tahan untuk unduh" class="qr" src="#" />
</div>
</p><br>

<p style="text-align:center;color:red;" id="danger" class=""></p><br>

</section>
</article>

<section class="article labels">
<a class="category" href="#">Twibbon</a>
<a class="category" href="#">Generator</a>
</section>
</div>

<div class="article bottom">
<section class="article navigation">
<p><a class="link" href="/twibbon"><span class="iconfont icon-article"></span>Twibbon Generator v.2</a></p>
<p><a class="link" href="#"><span class="iconfont icon-article"></span>QR Code Generator</a></p>
</section>
</div>
</section>

<div id="custom-modal" class="custom-modal">
<div class="custom-modal-dialog">
<div class="custom-modal-content">
<!--<span class="close-modal"></span>-->
<div class="custom-modal-body">
<div class="custom-modal-inner">
<h4 style="text-align:center;color:red;" id="warning"></h4>
<p style="text-align:center;color:red;" id="danger"></p>
<p><canvas id="canvas"></canvas></p><br>
<p>
<div class="buttons-ctr">
<button class="wink" onclick="download()" id="download" disabled>Unduh</button>
<button class="wink" id="cancel" onclick="location.reload()">Kembali</button>
</div>
</p>
</div>
</div>
</div>
</div>
</div>

<section id="footer">
<div class="footer-wrap">
<p class="copyright">© 2021 LUHSIAPA.TK</p>
<p class="powerby">
<span>Powered&nbsp;by&nbsp;</span>
<a href="https://www.facebook.com/bungferry.wa" target="_blank" rel="noopener noreferrer">Ferry Ayunda</a>
<span>&nbsp;&amp;&nbsp;</span>
<a href="#" target="_blank" rel="noopener noreferrer">Secangkir Kopi</a></p>
</div>
</section>`;
// shows the alert
main.innerHTML = externalHTML;