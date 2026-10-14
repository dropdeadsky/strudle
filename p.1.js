//drum 1
$: note("a#!8 d!4 d#!8 b!4 a#!8").sound('hh')._punchcard()
//drum 2
$: note("d#!2 a2!4").sound("tt").punchcard()

$: note("d2!2 c4#!4 a1!2").sound("bd").distort("2.2:.3").slow(2)

//bass
$: s("sbd!4")._scope()
$: s("sbd!2")._scope()
$: n(irand(7).sub(7).seg(16)).rib(42,1).distort("4.2:.3")
  .s("sawtooth").lpf(200)._punchcard()
