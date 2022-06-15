$(document).ready(function () {
  $(".btn").click(function () {
    var attr = $(this).attr("data-li");

    $(".btn").removeClass("active");
    $(this).addClass("active");

    $(".item").hide();

    // Företagsfilter

    if (attr == "aquapal") {
      $("." + attr).show();
    }
    else if (attr == "baga-aquarent") {
      $("." + attr).show();
    }
    else if (attr == "clearly") {
      $("." + attr).show();
    }
    else if (attr == "brava") {
      $("." + attr).show();
    }
    else if (attr == "aqua-invent") {
      $("." + attr).show();
    }
    else if (attr == "bra-vatten") {
      $("." + attr).show();
    }
    else if (attr == "MNV") {
      $("." + attr).show();
    }
    else if (attr == "varab") {
      $("." + attr).show();
    }
    else if (attr == "seleko") {
      $("." + attr).show();
    }
    else if (attr == "jms") {
      $("." + attr).show();
    }
    else if (attr == "VRG") {
      $("." + attr).show();
    }
    else if (attr == "NM") {
      $("." + attr).show();
    }
    else if (attr == "BWT") {
      $("." + attr).show();
    }
    else if (attr == "aqua-complete") {
      $("." + attr).show();
    }
    else if (attr == "filtrena") {
      $("." + attr).show();
    }
    else if (attr == "waterman") {
      $("." + attr).show();
    }
    else if (attr == "callidus") {
      $("." + attr).show();
    }
    else if (attr == "roslags-filter") {
      $("." + attr).show();
    }
    else if (attr == "enwa") {
      $("." + attr).show();
    }
    else if (attr == "debe") {
      $("." + attr).show();
    }
    else if (attr == "aqua-gruppen") {
      $("." + attr).show();
    }
    else if (attr == "watersprint") {
      $("." + attr).show();
    }
    else if (attr == "beulco") {
      $("." + attr).show();
    }
    else if (attr == "brita") {
      $("." + attr).show();
    }
    else if (attr == "alfapal") {
      $("." + attr).show();
    }
    else if (attr == "filterteknik") {
      $("." + attr).show();
    }
    else if (attr == "jadra") {
      $("." + attr).show();
    }
    else if (attr == "klimat-comfort") {
      $("." + attr).show();
    }
    else if (attr == "libradon") {
      $("." + attr).show();
    }
    else if (attr == "lfs") {
      $("." + attr).show();
    }
    else if (attr == "radonett") {
      $("." + attr).show();
    }
    else if (attr == "renton") {
      $("." + attr).show();
    }
    else if (attr == "svensk-vatten-analys") {
      $("." + attr).show();
    }
    else if (attr == "vvab") {
      $("." + attr).show();
    }


    // Typ av filter

    else if (attr == "alkalisk") {
      $("." + attr).show();
    }
    else if (attr == "arsenik") {
      $("." + attr).show();
    }
    else if (attr == "avhardning") {
      $("." + attr).show();
    }
    else if (attr == "avjonisering") {
      $("." + attr).show();
    }
    else if (attr == "avsyrning") {
      $("." + attr).show();
    }
    else if (attr == "fluorid") {
      $("." + attr).show();
    }
    else if (attr == "humus") {
      $("." + attr).show();
    }
    else if (attr == "mangan") {
      $("." + attr).show();
    }
    else if (attr == "nitrat") {
      $("." + attr).show();
    }
    else if (attr == "nitrit") {
      $("." + attr).show();
    }
    else if (attr == "jarn") {
      $("." + attr).show();
    }
    else if (attr == "radon") {
      $("." + attr).show();
    }
    else if (attr == "pH") {
      $("." + attr).show();
    }
    else if (attr == "uran") {
      $("." + attr).show();
    }
    else if (attr == "UV") {
      $("." + attr).show();
    }
    else if (attr == "kalk") {
      $("." + attr).show();
    }
    else if (attr == "kol") {
      $("." + attr).show();
    }
    else if (attr == "slam") {
      $("." + attr).show();
    }
    else if (attr == "tungmetall") {
      $("." + attr).show();
    }
    else if (attr == "salt") {
      $("." + attr).show();
    }
    else if (attr == "svavel") {
      $("." + attr).show();
    }
    else if (attr == "bly") {
      $("." + attr).show();
    }
    else if (attr == "sediment") {
      $("." + attr).show();
    }
    else if (attr == "osmos") {
      $("." + attr).show();
    }
    else if (attr == "koppar") {
      $("." + attr).show();
    }
    else if (attr == "sulfat") {
      $("." + attr).show();
    }
    else if (attr == "ammonium") {
      $("." + attr).show();
    }
    else if (attr == "klor") {
      $("." + attr).show();
    }
    else if (attr == "kadium") {
      $("." + attr).show();
    }
    else if (attr == "kvicksilver") {
      $("." + attr).show();
    }
    else if (attr == "microplast") {
      $("." + attr).show();
    }
    else if (attr == "bor") {
      $("." + attr).show();
    }
    else if (attr == "övrigt") {
      $("." + attr).show();
    }
    else {
      $(".item").show();
    }
  });
});