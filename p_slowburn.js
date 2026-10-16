//m1
$: note("e!2 c!2 d!2")
.s("piano").lpf(400).slow(4)

$: note("e!2 c!2 d!2")
.s("gm_fiddle").lpf(400).slow(4)

//bacic bd hh
$: note("e!2 c!2 d!2").sound("bd").distort("2.2:.3").slow(2)

$: note("d!8 c!8 d!8").sound("hh").lpf(500).distort("2.2:.3").slow(2)

$: note("d!16 c!16 d!16").sound("hh").lpf(100).distort("2.2:.3").slow(2)

$: s("spb!4")

//waves
$: n(irand(12).sub(3.5).seg(16)).rib(42,1).distort("4.2:.3")
  .s("sawtooth").orbit(4).lpf(200)._punchcard()

$: n(isaw.range(1,8).seg(4)).rib(42,1).scale('d minor')
   .s("supersaw").lpf(400).slow(2)._punchcard()
