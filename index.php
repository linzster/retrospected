<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <link href="assets/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <title>memory</title>
  <?php include('include/css.php'); ?>
  <?php include('include/js.php'); ?>
</head>
<body>

  <!-- wrapping all page content (to facilitate sticky footer) -->
  <div id="wrap">

    <div class='container'>
      <h1>Dear Mom and Dad,</h1>
      <div class='memories'>
        <h2 class="memory"></h2>
      </div>
    </div>

  </div> <!-- /wrap -->

  <!-- footer -->
  <div id="footer">
    <div class="container">
      <ul class="footer-links text-center">
        <li><a data-toggle="modal" href="#aboutInfo">About this →</a></li>
      </ul>
      <p class="text-muted credit"><i class="icon-heart-empty"></i>, Linz</p>
    </div>
  </div>

  <!-- modal -->
  <div class="modal fade" id="aboutInfo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">We love you, and...</h4>
        </div>
        <div class="modal-body">
          <p>We wanted to share these glimpses of the past, our family's past with you.  We wanted you to know that these 
                moments mattered.  That they matter.  When you refresh the page, a new fragment will appear.  We hope to 
                keep adding to this, to keep building on to what we have collected so far.  These memories, often triggered 
                by a smell or the quality of the air, linger for us.  They persevere, and we am thankful for that.  For in 
                them, we are together.</p>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->

  <!-- trigger memory randomizer -->
  <script src="assets/js/memoryRandomizer.js"></script>
</body>
</html>
