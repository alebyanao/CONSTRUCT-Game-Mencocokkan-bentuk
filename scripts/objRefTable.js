const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Text,
		C3.Plugins.Arr,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Arr.Acts.Insert,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Arr.Acts.SetSize
	];
};
self.C3_JsPropNameTable = [
	{BG: 0},
	{IdJawaban: 0},
	{Soal: 0},
	{DragDrop: 0},
	{Jawaban: 0},
	{TWin: 0},
	{ShapeData: 0},
	{PosDataJawaban: 0},
	{PosDataSoal: 0},
	{index: 0},
	{lastPostX: 0},
	{lastPostY: 0},
	{countMatch: 0}
];

self.InstanceType = {
	BG: class extends self.ITiledBackgroundInstance {},
	Soal: class extends self.ISpriteInstance {},
	Jawaban: class extends self.ISpriteInstance {},
	TWin: class extends self.ITextInstance {},
	ShapeData: class extends self.IArrayInstance {},
	PosDataJawaban: class extends self.IArrayInstance {},
	PosDataSoal: class extends self.IArrayInstance {}
}