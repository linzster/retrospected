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

    <!-- static navbar -->
    <div class="navbar navbar-default">
      <a class="navbar-brand" href="/"><i class="icon-pencil"></i> Retrospected </a>
      <p class="navbar-text author-line hidden-xs">Designed and built with <i class="icon-heart-empty"></i> by Linz & Bren</p>
      <a class="navbar-text pull-right second" href="#modal">Learn more →</a>
    </div>

    <div class='container'>
      <h1>Dear Mom and Dad,</h1>
      <div class='memories'>
        <h2 class="memory"></h2>
      </div>
    </div>

  </div> <!-- /wrap -->

  <!-- footer -->
  <div id="footer">
    <div class="container text-center">
      <a class='refresh' href="/">View another memory</a>
    </div>
  </div>

  <!-- modal -->
<div id="modal" style="display:none">
    <h2>We love you, and...</h2>
    <p>we wanted to share these glimpses of the past, our family's past with you.  We wanted you to know that these 
                moments mattered.  That they matter.  When you refresh the page, a new fragment will appear.  We hope to 
                keep adding to this, to keep building on to what we have collected so far.  These memories, often triggered 
                by a smell or the quality of the air, linger for us.  They persevere, and we am thankful for that.  For in 
                them, we are together.</p>
    <a class='btn btn-default btn-primary' href="javascript:$.pageslide.close()">Close</a>
</div>

  <!-- trigger memory randomizer -->
  <script src="assets/js/memoryRandomizer.js"></script>
  <script src="assets/js/jquery.pageslide.min.js"></script>
  <script>
    $(".second").pageslide({ direction: "left", modal: true });
</script>
</body>
</html>
