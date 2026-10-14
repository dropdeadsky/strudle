//d1
$: note("a#!8 d!4 d#!8 b!4 a#!8").sound('hh')._punchcard()
//d2
$: note("d#!2 a2!4").sound("tt").punchcard()

$: note("d2!2 c4#!4 a1!2").sound("bd").distort("2.2:.3").slow(2)

//b1
$: s("sbd!4")._scope()//b2
$: s("sbd!2")._scope()// r1
$: n(irand(7).sub(7).seg(16)).rib(42,1).distort("4.2:.3")
  .s("sawtooth").orbit(4).lpf(200)._punchcard()
// m1 
$: n(isaw.range(0.5,4).seg(4)).rib(42,1).scale('d minor')
   .s("supersaw").lpf(400).slow(2)._punchcard()
//f1
$: s("<pink brown pink>/4")
//blipboop
$: n(itri.segment(8).range(0,7)).scale("D:minor")
   s("wt_digital_crickets").orbit(8).slow(2)
